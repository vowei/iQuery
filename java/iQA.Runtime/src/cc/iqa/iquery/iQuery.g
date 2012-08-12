grammar iQuery;

@lexer::header {
package cc.iqa.iquery;
}

@lexer::members {
private List<String> _errors = null;

public iQueryLexer(CharStream input, List<String> errors) {
    this(input);
    _errors = errors;
}

public String getErrorMessage(RecognitionException e,
                              String[] tokenNames)
{
    String error = ErrorMessageHelper.getErrorMessage(e, null, tokenNames, this);

    if ( _errors != null && error != null ) {
        _errors.add(error);   
    }
 
    return error;
}
}

@parser::header {
package cc.iqa.iquery;

import java.util.List;
import java.util.LinkedList;
import java.util.ArrayList;
import java.util.Queue;
import java.util.Map;
import java.util.HashMap;
import java.util.logging.*;
import cc.iqa.iquery.*;
}

@parser::members {
private static final Logger _logger = 
    Logger.getLogger(iQueryParser.class.getPackage().getName());
private boolean _debug = false;
private List<String> _errors = null;
private Map<String, IPseudoAttribute> _pseudoAttrs = new HashMap<String, IPseudoAttribute>();
private Map<String, IPseudoClass> _pseudoClasses = new HashMap<String, IPseudoClass>();

public iQueryParser(TokenStream input, List<String> errors, boolean debug) {
    this(input);
    
    _errors = errors;
    _debug = debug;
}

public String getErrorMessage(RecognitionException e,
                              String[] tokenNames)
{
    String error = ErrorMessageHelper.getErrorMessage(e, (CommonTokenStream)this.input, tokenNames, this);

    if ( _errors != null && error != null ) {
        _errors.add(error);   
    }
 
    return error;
}

public void registerPseudoClass(String name, IPseudoClass func) {
    if ( !_pseudoClasses.containsKey(name) ) {
        _pseudoClasses.put(name, func);
    } else { 
        throw new IllegalArgumentException("伪类：[" + name + "]已经存在了！");
    }
}

public void registerPseudoAttribute(String name, IPseudoAttribute func) {
    if ( !_pseudoAttrs.containsKey(name) ) {
        _pseudoAttrs.put(name, func);
    } else {
        throw new IllegalArgumentException("伪属性：[" + name + "]已经存在了！");
    }
}

public List<String> getErrors() { 
    return _errors; 
}

private List<ITreeNode> descendants(List<ITreeNode> nodes, int maxLevel) {
    if ( nodes == null ) {
        return new ArrayList<ITreeNode>();
    } else if ( nodes.size() != 1 ) {
        warning("descendants函数仅接受包含一个控件的数组，当前的nodes数组的元素个数为：" + 
                nodes.size());
        return new ArrayList<ITreeNode>();
    } else {
        return descendants(nodes.get(0), maxLevel);
    }
}

private List<ITreeNode> descendants(ITreeNode anscent) {
    return descendants(anscent, -1);
}

private List<ITreeNode> descendants(ITreeNode anscent, int maxLevel) {
    if ( anscent == null ) 
        return new ArrayList<ITreeNode>();

    Queue<Pair<ITreeNode, Integer>> queue = new LinkedList<Pair<ITreeNode, Integer>>();
    // Queue<ITreeNode> queue = new LinkedList<ITreeNode>();
    List<ITreeNode> result = new ArrayList<ITreeNode>();
    for ( ITreeNode c : anscent.getChildren() ) {
        queue.offer(new Pair<ITreeNode, Integer>(c, new Integer(0)));
    }

    while ( !queue.isEmpty() ) {
        Pair<ITreeNode, Integer> entry = queue.peek();
        queue.poll();

        ITreeNode node = entry.first;
        if ( entry.second.intValue() == maxLevel )
            continue;
        
        for ( int i = 0; i < node.getChildren().size(); ++i ) {
            ITreeNode child = node.getChildren().get(i);
            if ( !result.contains(child) )
                queue.offer(new Pair<ITreeNode, Integer>(child, 
                                                         new Integer(entry.second.intValue() + 1)));
        }
        
        if ( !result.contains(node) )
            result.add(node);
    }

    return result;
}

private List<ITreeNode> next(List<ITreeNode> candidates, List<ITreeNode> prevs) {
    List<ITreeNode> results = new ArrayList<ITreeNode>();

    for ( int i = 0; i < prevs.size(); ++i ) {
        int idx = candidates.indexOf(prevs.get(i));
        if ( idx >= 0 && (idx < candidates.size() - 1) ) {
            if ( results.indexOf(candidates.get(idx + 1)) < 0 ) {
                results.add(candidates.get(idx + 1));
            }
        }
    }

    return results;
}

private List<ITreeNode> siblings(List<ITreeNode> candidates, List<ITreeNode> prevs) {
    List<ITreeNode> results = new ArrayList<ITreeNode>();

    if ( prevs.size() > candidates.size() ) 
        throw new IllegalStateException("在siblings函数里，prevs元素集合的个数应该小于candidates元素的个数！");

    for ( int i = 0; i < prevs.size(); ++i ) {
        int idx = candidates.indexOf(prevs.get(i));
        while ( idx >= 0 && (idx < candidates.size() - 1) ) {
            idx++;
            if ( results.indexOf(candidates.get(idx)) < 0 ) {
                results.add(candidates.get(idx));
            }
        }
    }

    return results;
}

private String type(ITreeNode node) {
    // String name = node.getName();
    String name = node.getType();
    int endIdx = name.indexOf('@');
    if ( endIdx == -1 )
            endIdx = name.length();
    
    int startIdx = name.lastIndexOf('.', endIdx);
    if ( startIdx < 0 ) 
        startIdx = -1;
    
    return name.substring(startIdx + 1, endIdx).replace('$', '.');
}

private List<ITreeNode> filterPseudo(List<ITreeNode> candidates, String pseudoClass) {
    if ( candidates == null ) 
        return new ArrayList<ITreeNode>();
    if ( !_pseudoClasses.containsKey(pseudoClass) ) {
        throw new IllegalStateException("无法处理的伪类：[" + pseudoClass + "]");
    }

    IPseudoClass func = _pseudoClasses.get(pseudoClass);
    List<ITreeNode> result = new ArrayList<ITreeNode>();
    for ( int i = 0; i < candidates.size(); ++i ) {
        ITreeNode node = candidates.get(i);
        if ( func.resolve(node) ) {
            result.add(node);
        }
    }
     
    return result;
}

private void debug(String message) {    
    if ( _debug ) {
        _logger.info(message);
    }
}

private void verbose(String message) { 
    if ( _debug ) {
        _logger.info(message);
    }
}

private void warning(String message) {
    if ( _debug ) {
        _logger.warning(message);
    }
}

private double parseNum(String value) {
    if ( value == null || value.length() == 0 ) 
        throw new IllegalArgumentException("value");

    boolean isPercentage = value.charAt(value.length() - 1) == '\u0025';
    if ( isPercentage ) {
        return Double.parseDouble(value.substring(0, value.length() - 1)) / 100;
    } else { 
        return Double.parseDouble(value);
    }
}
}

query [List<ITreeNode> candidates] returns [List<ITreeNode> survival]  
    : selectors[$candidates] NEWLINE* EOF
        { 
            if ( $selectors.survival != null && (_errors == null || _errors.size() == 0) ) {
                $survival = $selectors.survival;
            } else {
                $survival = new ArrayList<ITreeNode>();
            }            
        }
    | NEWLINE* EOF
        {
            $survival = new ArrayList<ITreeNode>();
        }
    ;

selectors [List<ITreeNode> candidates] returns [List<ITreeNode> survival] 
    : p=multi_selectors[$candidates] (c=multi_selectors[$c.survival == null ? $p.survival : $c.survival])*
        {
            if ( $c.survival != null ) {
                $survival = $c.survival; 
            } else {
                $survival = $p.survival;
            }
        }
    ;

multi_selectors [List<ITreeNode> candidates] returns [List<ITreeNode> survival] 
    : selector[$candidates]
        {
            $survival = $selector.survival; 
        }
    | '>' c=selector[$candidates.size() > 0 ? $candidates.get(0).getChildren() : new ArrayList<ITreeNode>()]
        {
            debug("成功匹配\"> " + $selector.text + "\"");
            $survival = $c.survival;
        }
    | '>' level=INTEGER c=selector[descendants($candidates, Integer.parseInt($level.text))]
        {
            debug("成功匹配\">" + $level.text + " " + $selector.text + "\"");
            $survival = $c.survival;
        }
        // 支持对多个节点的子孙进行查询匹配
    | DESCENDANT c=selector[descendants($candidates, -1)]
        {
            debug("成功匹配\">> " + $selector.text + "\"");
            $survival = $c.survival;
        }
    ;

selector [List<ITreeNode> candidates] returns [List<ITreeNode> survival] 
    : p=selector_expression[$candidates] 
        (
            ('+' n=selector_expression[next($candidates, $p.survival)])
        |
            ('~' n=selector_expression[siblings($candidates, $p.survival)])
        )?

        {    
            if ( $n.survival != null ) {
                $survival = $n.survival;
            } else {
                $survival = $p.survival;
            }
        }
    | multi_attributes[$candidates]
        {
            $survival = $multi_attributes.survival;
        }
    ;

num_comp_op
    : '>'
    | '<'
    | '>='
    | '<='
    | '='
    ;

multi_attributes [List<ITreeNode> candidates] returns [List<ITreeNode> survival] 
    : '[' attr=ELEMENT op v=QUOTED_STRING ']'
        {
            debug("成功匹配\"[" + $attr.text + " " + $v.text + "]\"");
         
            List<ITreeNode> result = new ArrayList<ITreeNode>();
            String optext = $op.text;
            String vtext = $v.text;
            String key = $attr.text;
            String method = key + "()";
            String criteria = vtext.substring(1, vtext.length() - 1);

            for ( int i = 0; i < $candidates.size(); ++i ){
                ITreeNode node = $candidates.get(i);
                String qkey = key;
                boolean found = false;
                
                if ( node.containsProperty(key) ) {
                    found = true;
                } else if ( node.containsProperty(method) ) {
                    qkey = method;
                    found = true;
                }

                if ( found ) {
                    IProperty property = node.getProperty(qkey);
                    String value = property.getValue();

                    if ( optext.compareTo("=") == 0 ) {
                        if ( value != null && value.compareTo(criteria) == 0 ) {
                            result.add(node);   
                        }
                    } else if ( optext.compareTo("!=") == 0 ) {
                        if ( value == null || value.compareTo(criteria) != 0 ) {
                            result.add(node);   
                        }
                    } else if ( optext.compareTo("$=") == 0 )  {
                        if ( value != null && value.endsWith(criteria) ) {
                            result.add(node);
                        }
                    } else if ( optext.compareTo("^=") == 0 ) {
                        if ( value != null && value.startsWith(criteria) ) {
                            result.add(node);
                        }
                    } else if ( optext.compareTo("*=") == 0 ) {
                        if ( value != null && value.indexOf(criteria) >= 0 ) {
                            result.add(node);
                        }
                    }
                } else if ( optext.compareTo("!=") == 0 ) {
                    result.add(node);
                }
            }

            $survival = result;
        }
    | '[' ':' attr=ELEMENT op v=QUOTED_STRING ']'
        {
            List<ITreeNode> result = new ArrayList<ITreeNode>();

            if ( _pseudoAttrs.containsKey($attr.text) ) {
                String optext = $op.text;
                String vtext = $v.text;
                String criteria = vtext.substring(1, vtext.length() - 1);
                
                for ( int i = 0; i < $candidates.size(); ++i ) {     
                    ITreeNode node = $candidates.get(i);
                    String value = _pseudoAttrs.get($attr.text).resolve(node);

                    if ( optext.compareTo("=") == 0 ) {
                        if ( value != null && value.compareTo(criteria) == 0 ) {
                            result.add(node);   
                        }
                    } else if ( optext.compareTo("!=") == 0 ) {
                        if ( value == null || value.compareTo(criteria) != 0 ) {
                            result.add(node);   
                        }
                    } else if ( optext.compareTo("$=") == 0 )  {
                        if ( value != null && value.endsWith(criteria) ) {
                            result.add(node);
                        }
                    } else if ( optext.compareTo("^=") == 0 ) {
                        if ( value != null && value.startsWith(criteria) ) {
                            result.add(node);
                        }
                    } else if ( optext.compareTo("*=") == 0 ) {
                        if ( value != null && value.indexOf(criteria) >= 0 ) {
                            result.add(node);
                        }
                    }   
                }                
            }

            $survival = result;
        }
    | '[' attr=ELEMENT num_comp_op v=(INTEGER | FLOAT | PERCENTAGE) ']'
        {
            List<ITreeNode> result = new ArrayList<ITreeNode>();
            String optext = $num_comp_op.text;
            String vtext = $v.text;
            String key = $attr.text;
            String method = key + "()";
            double criteria = parseNum(vtext);

            for ( int i = 0; i < $candidates.size(); ++i ){
                ITreeNode node = $candidates.get(i);
                String qkey = key;
                boolean found = false;
                
                if ( node.containsProperty(key) ) {
                    found = true;
                } else if ( node.containsProperty(method) ) {
                    qkey = method;
                    found = true;
                }

                if ( found ) {
                    IProperty property = node.getProperty(qkey);

                    String pv = property.getValue();
                    if ( pv != null && pv.length() > 0 ) {
                        double value = parseNum(property.getValue());
                        
                        if ( optext.compareTo("=") == 0 ) {
                            if ( value == criteria ) {
                                result.add(node);
                            }
                        } else if ( optext.compareTo(">") == 0 ) {
                            if ( value > criteria ) { 
                                result.add(node);
                            }
                        } else if ( optext.compareTo("<") == 0 ) {
                            if ( value < criteria ) { 
                                result.add(node);
                            }
                        } else if ( optext.compareTo(">=") == 0 ) {
                            if ( value >= criteria ) {
                                result.add(node);
                            }
                        } else if ( optext.compareTo("<=") == 0 ) {
                            if ( value <= criteria ) {
                                result.add(node);
                            }
                        }
                    }
                }
            }

            $survival = result;
        }
    | '[' ':' attr=ELEMENT num_comp_op v=(INTEGER | FLOAT | PERCENTAGE) ']'
        {
            List<ITreeNode> result = new ArrayList<ITreeNode>();

            if ( _pseudoAttrs.containsKey($attr.text) ) {
                String optext = $num_comp_op.text;
                String vtext = $v.text;
                double criteria = parseNum(vtext);
                
                for ( int i = 0; i < $candidates.size(); ++i ){
                    ITreeNode node = $candidates.get(i);
                    String pv = _pseudoAttrs.get($attr.text).resolve(node);

                    if ( pv != null && pv.length() > 0 ) {
                        double value = parseNum(pv);
                        
                        if ( optext.compareTo("=") == 0 ) {
                            if ( value == criteria ) {
                                result.add(node);
                            }
                        } else if ( optext.compareTo(">") == 0 ) {
                            if ( value > criteria ) { 
                                result.add(node);
                            }
                        } else if ( optext.compareTo("<") == 0 ) {
                            if ( value < criteria ) { 
                                result.add(node);
                            }
                        } else if ( optext.compareTo(">=") == 0 ) {
                            if ( value >= criteria ) {
                                result.add(node);
                            }
                        } else if ( optext.compareTo("<=") == 0 ) {
                            if ( value <= criteria ) {
                                result.add(node);
                            }
                        }
                    }
                }
            }

            $survival = result;
        }
    | '[' attr=ELEMENT ']'
        {
            debug("成功匹配\"[" + $attr.text + "]\"");
            List<ITreeNode> result = new ArrayList<ITreeNode>();
            String key = $attr.text;
            String method = key + "()";

            for ( int i = 0; i < $candidates.size(); ++i ){
                ITreeNode node = $candidates.get(i);
                if ( node.containsProperty(key) || 
                     node.containsProperty(method) ) {
                    result.add(node);
                }
            }

            $survival = result;
        }
    ;

op
    : '='
    | '!='
    | '$='
    | '^='
    | '*='
    ;

indexop
    : EQ
    | GT
    | LT
    | NTH_CHILD
    ;

selector_expression [List<ITreeNode> candidates] returns [List<ITreeNode> survival] 
    : atom[$candidates]
        {
            $survival = $atom.survival;
        }
    | ':' indexop '(' vidx=INTEGER ')'
        {
            debug("成功匹配\":" + $indexop.text + "(" + $vidx.text + ")\""); 
            int idx = Integer.parseInt($vidx.text);
            String op = $indexop.text;            
            $survival = new ArrayList<ITreeNode>();

            if ( $candidates != null ) {
                if ( op.compareTo("eq") == 0 ) {
                    if ( idx < $candidates.size() ) {
                        ITreeNode node = $candidates.get(idx);
                        $survival.add(node);
                    }
                } else if ( op.compareTo("gt") == 0 ) {                
                    for ( int i = idx + 1; i < $candidates.size(); ++i ) {
                        $survival.add($candidates.get(i));
                    }
                } else if ( op.compareTo("lt") == 0 ) {
                    for ( int i = 0; i < idx && i < $candidates.size(); ++i ) {
                        $survival.add($candidates.get(i));
                    }
                } else if ( op.compareTo("nth-child") == 0 ) {         
                    for ( int i = 0; i < $candidates.size(); ++i ) {
                        ITreeNode node = $candidates.get(i);
                        List<ITreeNode> children = node.getChildren();
                        
                        if ( idx > 0 && idx <= children.size() ) {
                            $survival.add(node.getChildren().get(idx - 1));
                        }
                    }
                }
            }
        }
    | ':' NOT '(' selectors[$candidates] ')'
        {
            debug("成功匹配\":not(" + $selectors.text + ")\"");
            List<ITreeNode> allNodes = $candidates;
            allNodes.removeAll($selectors.survival);
            $survival = allNodes;
        }
    | ':' HAS '(' selectors[$candidates] ')'
        {
            debug("成功匹配\":has(" + $selectors.text + ")\"");
            List<ITreeNode> children = $selectors.survival;
            List<ITreeNode> result = new ArrayList<ITreeNode>();
            for ( int i = 0; i < children.size(); ++i ) {
			    ITreeNode p = children.get(i).getParent();
                if ( p != null && result.indexOf(p) == -1 ) {
                    result.add(p);
                }
            }

            $survival = result;
        }
    | ':' CONTAINS '(' text=QUOTED_STRING ')'
        {
            debug("成功匹配\":contains('" + $text.text + "')\"");
            String attribute = $text.text;
            String value = attribute.substring(1, attribute.length() - 1);

            List<ITreeNode> result = new ArrayList<ITreeNode>();

            for ( int i = 0; i < candidates.size(); ++i ) {
                ITreeNode node = candidates.get(i);
                
                String nodeText = node.getText();
                if ( nodeText != null && nodeText.indexOf(value) >= 0 ) {
                    result.add(node);
                }
            }

            /*
            Map<String, String> attributes = new HashMap<String, String>();
            attributes.put("mText", value);

            List<ITreeNode> result = new ArrayList<ITreeNode>();
            for ( int i = 0; i < candidates.size(); ++i ) {
                ITreeNode node = candidates.get(i);
                boolean isMatched = true;
                for ( Map.Entry<String, String> entry : attributes.entrySet() ) {
                    if ( !node.containsProperty(entry.getKey()) ) {
                        isMatched = false;
                        break;
                    }
                    
                    IProperty property = node.getProperty(entry.getKey());
                    if ( property == null ||
                         property.getValue().indexOf(entry.getValue()) < 0 ) {
                        isMatched = false;
                        break;
                    }
                }
                
                if ( isMatched ) 
                    result.add(node);
            } 
            */

            $survival = result;    
        }
    | ':' LAST_CHILD
        {
            debug("成功匹配\":last-child\"");
            // 添加当前匹配的所有的节点的最后一个子节点
            List<ITreeNode> nodes = new ArrayList<ITreeNode>();
            for ( int i = 0; i < $candidates.size(); ++i ) {
                ITreeNode node = $candidates.get(i);
                if ( node.getChildren().size() > 0 ) {
                    nodes.add(node.getChildren().get(node.getChildren().size() - 1));
                }
            }

            $survival = nodes;
        }
    | ':' FIRST_CHILD
        {
            debug("成功匹配\":first-child\"");
            List<ITreeNode> nodes = new ArrayList<ITreeNode>();
            for ( int i = 0; i < $candidates.size(); ++i ) {
                ITreeNode node = $candidates.get(i);
                if ( node.getChildren().size() > 0 ) {
                    nodes.add(node.getChildren().get(0));
                }
            }

            $survival = nodes;
        }
    | ':' FIRST
        {
            debug("成功匹配\":first\"");
            $survival = new ArrayList<ITreeNode>();
            List<ITreeNode> nodes = $candidates;
            if ( nodes.size() == 0 ) {
                warning("前次匹配已经没有留下任何控件，匹配级是空的！");
            } else {
                ITreeNode first = nodes.get(0);
                $survival.add(first);
            }
        }
    | ':' LAST
        {
            debug("成功匹配\":last\"");
            $survival = new ArrayList<ITreeNode>();
            List<ITreeNode> nodes = $candidates;
            if ( nodes.size() == 0 ) {
                warning("前次匹配已经没有留下任何控件，匹配级是空的！");
            } else {
                ITreeNode last = nodes.get(nodes.size() - 1);
                $survival.add(last);
            }
        }

    | ':' EMPTY
        {
            debug("成功匹配\":empty\"");
            List<ITreeNode> nodes = $candidates;
            List<ITreeNode> result = new ArrayList<ITreeNode>();
            for ( int i = 0; i < nodes.size(); ++i ) {
                if ( nodes.get(i).getChildren().size() == 0 )
                    result.add(nodes.get(i));
            }
            
            $survival = result;
        }
    | ':' PARENT
        {
            debug("成功匹配\":parent\"");            
            ITreeNode candidate = 
                $candidates == null ? null 
                                    : $candidates.size() == 0 ? null : $candidates.get(0);
            $survival = new ArrayList<ITreeNode>();
            if ( candidate != null )
                $survival.add(candidate.getParent());
        }
        /*
    | ':' TEXT
        {
            debug("成功匹配\":text\"");
            // $survival = filterByNameEndsWith($candidates, "EditText");
        }
    | ':' RADIO
        {
            debug("成功匹配\":radio\"");
            // TODO: 对于android里的RadioGroup来说是否应该当成radio?
            $survival = filterByNameStartsWith($candidates, "RadioButton");
        }
    | ':' VISIBLE
        {
            debug("成功匹配\":visible\"");
            Map<String, String> attributes = new HashMap<String, String>();
            attributes.put("getVisibility()", "VISIBLE");
            $survival = filterByAttributes($candidates, attributes);
        }
    | ':' HIDDEN
        {
            debug("成功匹配\":hidden\"");
            Map<String, String> attributes = new HashMap<String, String>();
            attributes.put("getVisibility()", "VISIBLE");
            $survival = filterByExcludingAttributes($candidates, attributes);
        }
    | ':' FOCUS
        {
            debug("成功匹配\":focus\"");
            Map<String, String> attributes = new HashMap<String, String>();
            attributes.put("isFocused()", "true");
            $survival = filterByAttributes($candidates, attributes);
        }
    | ':' CHECKBOX
        {
            debug("成功匹配\":checkbox\"");
            // TODO: Android上好像没有复选框这个概念？
            $survival = new ArrayList<ITreeNode>();
        }
    | ':' BUTTON
        {
            debug("成功匹配\":button\"");
            $survival = filterByNameEndsWith($candidates, "Button");
        }
    | ':' IMAGE
        {
            debug("成功匹配\":image\"");
            $survival = filterByNameStartsWith($candidates, "Image");
        }
    | ':' LABEL
        {
            debug("成功匹配\":label\"");
            $survival = filterByNameStartsWith($candidates, "TextView");
        }
        */
    | ':' ELEMENT
        {
            $survival = filterPseudo($candidates, $ELEMENT.text); 
        }
    | '#' ELEMENT
        {
            List<ITreeNode> d = descendants($candidates, -1);
            $survival = new ArrayList<ITreeNode>();
            String name = $ELEMENT.text;
            for ( int i = 0; i < d.size(); ++i ) {
                String pname = d.get(i).getName();
               
                if ( pname != null && name.compareTo(pname) == 0 ) {
                    $survival.add(d.get(i));
                }
            }
        }
    ;

atom [List<ITreeNode> candidates] returns [List<ITreeNode> survival] 
    : ASTERISK
        { 
            debug("成功匹配:\"*\"");
            $survival = candidates;
        }
    | ELEMENT
        {
            if ( candidates == null || candidates.size() == 0 ) {
                warning("在ELEMENT规则里，没有candidates对象输入");
                $survival = new ArrayList<ITreeNode>();
            } else {            
                List<ITreeNode> nodes = new ArrayList<ITreeNode>();
                String filter = $ELEMENT.text;
                debug("成功匹配\"" + filter + "\"");
                for ( int i = 0; i < candidates.size(); ++i ) {
                    ITreeNode node = candidates.get(i);        
                    String ctrl = type(node);
                    
                    if ( filter.compareTo(ctrl) == 0 ) {
                        nodes.add(node);
                    }
                }

                $survival = nodes;
            }
        }
    ;

DESCENDANT: '>>';
EQ: 'eq';
GT: 'gt';
LT: 'lt';
NOT: 'not';
CONTAINS: 'contains';
//TEXT: 'text';
//RADIO: 'radio';
EMPTY: 'empty';
//CHECKBOX: 'checkbox';
//FOCUS: 'focus';
HAS: 'has';
//CHECKED: 'checked';
PREV: 'prev';
NEXT: 'next';
SIBLINGS: 'siblings';
NTH_CHILD: 'nth-child';
PARENT: 'parent';
//DISABLED: 'disabled';
//ENABLED: 'enabled';
//VISIBLE: 'visible';
//HIDDEN: 'hidden';
//BUTTON: 'button';
//LABEL: 'label';
//IMAGE: 'image';
LAST_CHILD: 'last-child';
FIRST_CHILD: 'first-child';
FIRST: 'first';
LAST: 'last';
INTEGER: DIGIT+;
PERCENTAGE: ('+' | '-')? DIGIT+ ('.' DIGIT+)? '%';
FLOAT: ('+' | '-')? DIGIT+ ('.' DIGIT+)?;
fragment DIGIT: ('0' .. '9');
ELEMENT: ('a'..'z'|'A'..'Z'|'_')('a'..'z'|'A'..'Z'|'0'..'9'|'_'|'.')*;
ASTERISK: '*';
QUOTED_STRING: '\'' .+ '\''; 
NEWLINE: '\r'? '\n';
WS: (' ' | '\t') { skip(); };
