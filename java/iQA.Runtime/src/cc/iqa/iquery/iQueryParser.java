// $ANTLR 3.4 cc/iqa/iquery/iQuery.g 2012-08-09 21:02:28

package cc.iqa.iquery;

import java.util.List;
import java.util.LinkedList;
import java.util.ArrayList;
import java.util.Queue;
import java.util.Map;
import java.util.HashMap;
import java.util.logging.*;
import cc.iqa.iquery.*;


import org.antlr.runtime.*;
import java.util.Stack;
import java.util.List;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked"})
public class iQueryParser extends Parser {
    public static final String[] tokenNames = new String[] {
        "<invalid>", "<EOR>", "<DOWN>", "<UP>", "ASTERISK", "CONTAINS", "DESCENDANT", "DIGIT", "ELEMENT", "EMPTY", "EQ", "FIRST", "FIRST_CHILD", "FLOAT", "GT", "HAS", "INTEGER", "LAST", "LAST_CHILD", "LT", "NEWLINE", "NEXT", "NOT", "NTH_CHILD", "PARENT", "PERCENTAGE", "PREV", "QUOTED_STRING", "SIBLINGS", "WS", "'!='", "'#'", "'$='", "'('", "')'", "'*='", "'+'", "':'", "'<'", "'<='", "'='", "'>'", "'>='", "'['", "']'", "'^='", "'~'"
    };

    public static final int EOF=-1;
    public static final int T__30=30;
    public static final int T__31=31;
    public static final int T__32=32;
    public static final int T__33=33;
    public static final int T__34=34;
    public static final int T__35=35;
    public static final int T__36=36;
    public static final int T__37=37;
    public static final int T__38=38;
    public static final int T__39=39;
    public static final int T__40=40;
    public static final int T__41=41;
    public static final int T__42=42;
    public static final int T__43=43;
    public static final int T__44=44;
    public static final int T__45=45;
    public static final int T__46=46;
    public static final int ASTERISK=4;
    public static final int CONTAINS=5;
    public static final int DESCENDANT=6;
    public static final int DIGIT=7;
    public static final int ELEMENT=8;
    public static final int EMPTY=9;
    public static final int EQ=10;
    public static final int FIRST=11;
    public static final int FIRST_CHILD=12;
    public static final int FLOAT=13;
    public static final int GT=14;
    public static final int HAS=15;
    public static final int INTEGER=16;
    public static final int LAST=17;
    public static final int LAST_CHILD=18;
    public static final int LT=19;
    public static final int NEWLINE=20;
    public static final int NEXT=21;
    public static final int NOT=22;
    public static final int NTH_CHILD=23;
    public static final int PARENT=24;
    public static final int PERCENTAGE=25;
    public static final int PREV=26;
    public static final int QUOTED_STRING=27;
    public static final int SIBLINGS=28;
    public static final int WS=29;

    // delegates
    public Parser[] getDelegates() {
        return new Parser[] {};
    }

    // delegators


    public iQueryParser(TokenStream input) {
        this(input, new RecognizerSharedState());
    }
    public iQueryParser(TokenStream input, RecognizerSharedState state) {
        super(input, state);
    }

    public String[] getTokenNames() { return iQueryParser.tokenNames; }
    public String getGrammarFileName() { return "cc/iqa/iquery/iQuery.g"; }


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



    // $ANTLR start "query"
    // cc/iqa/iquery/iQuery.g:235:1: query[List<ITreeNode> candidates] returns [List<ITreeNode> survival] : ( selectors[$candidates] ( NEWLINE )* EOF | ( NEWLINE )* EOF );
    public final List<ITreeNode> query(List<ITreeNode> candidates) throws RecognitionException {
        List<ITreeNode> survival = null;


        iQueryParser.selectors_return selectors1 =null;


        try {
            // cc/iqa/iquery/iQuery.g:236:5: ( selectors[$candidates] ( NEWLINE )* EOF | ( NEWLINE )* EOF )
            int alt3=2;
            int LA3_0 = input.LA(1);

            if ( (LA3_0==ASTERISK||LA3_0==DESCENDANT||LA3_0==ELEMENT||LA3_0==31||LA3_0==37||LA3_0==41||LA3_0==43) ) {
                alt3=1;
            }
            else if ( (LA3_0==EOF||LA3_0==NEWLINE) ) {
                alt3=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 3, 0, input);

                throw nvae;

            }
            switch (alt3) {
                case 1 :
                    // cc/iqa/iquery/iQuery.g:236:7: selectors[$candidates] ( NEWLINE )* EOF
                    {
                    pushFollow(FOLLOW_selectors_in_query58);
                    selectors1=selectors(candidates);

                    state._fsp--;


                    // cc/iqa/iquery/iQuery.g:236:30: ( NEWLINE )*
                    loop1:
                    do {
                        int alt1=2;
                        int LA1_0 = input.LA(1);

                        if ( (LA1_0==NEWLINE) ) {
                            alt1=1;
                        }


                        switch (alt1) {
                    	case 1 :
                    	    // cc/iqa/iquery/iQuery.g:236:30: NEWLINE
                    	    {
                    	    match(input,NEWLINE,FOLLOW_NEWLINE_in_query61); 

                    	    }
                    	    break;

                    	default :
                    	    break loop1;
                        }
                    } while (true);


                    match(input,EOF,FOLLOW_EOF_in_query64); 

                     
                                if ( (selectors1!=null?selectors1.survival:null) != null && (_errors == null || _errors.size() == 0) ) {
                                    survival = (selectors1!=null?selectors1.survival:null);
                                } else {
                                    survival = new ArrayList<ITreeNode>();
                                }            
                            

                    }
                    break;
                case 2 :
                    // cc/iqa/iquery/iQuery.g:244:7: ( NEWLINE )* EOF
                    {
                    // cc/iqa/iquery/iQuery.g:244:7: ( NEWLINE )*
                    loop2:
                    do {
                        int alt2=2;
                        int LA2_0 = input.LA(1);

                        if ( (LA2_0==NEWLINE) ) {
                            alt2=1;
                        }


                        switch (alt2) {
                    	case 1 :
                    	    // cc/iqa/iquery/iQuery.g:244:7: NEWLINE
                    	    {
                    	    match(input,NEWLINE,FOLLOW_NEWLINE_in_query82); 

                    	    }
                    	    break;

                    	default :
                    	    break loop2;
                        }
                    } while (true);


                    match(input,EOF,FOLLOW_EOF_in_query85); 


                                survival = new ArrayList<ITreeNode>();
                            

                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }

        finally {
        	// do for sure before leaving
        }
        return survival;
    }
    // $ANTLR end "query"


    public static class selectors_return extends ParserRuleReturnScope {
        public List<ITreeNode> survival;
    };


    // $ANTLR start "selectors"
    // cc/iqa/iquery/iQuery.g:250:1: selectors[List<ITreeNode> candidates] returns [List<ITreeNode> survival] : p= multi_selectors[$candidates] (c= multi_selectors[$c.survival == null ? $p.survival : $c.survival] )* ;
    public final iQueryParser.selectors_return selectors(List<ITreeNode> candidates) throws RecognitionException {
        iQueryParser.selectors_return retval = new iQueryParser.selectors_return();
        retval.start = input.LT(1);


        List<ITreeNode> p =null;

        List<ITreeNode> c =null;


        try {
            // cc/iqa/iquery/iQuery.g:251:5: (p= multi_selectors[$candidates] (c= multi_selectors[$c.survival == null ? $p.survival : $c.survival] )* )
            // cc/iqa/iquery/iQuery.g:251:7: p= multi_selectors[$candidates] (c= multi_selectors[$c.survival == null ? $p.survival : $c.survival] )*
            {
            pushFollow(FOLLOW_multi_selectors_in_selectors121);
            p=multi_selectors(candidates);

            state._fsp--;


            // cc/iqa/iquery/iQuery.g:251:38: (c= multi_selectors[$c.survival == null ? $p.survival : $c.survival] )*
            loop4:
            do {
                int alt4=2;
                int LA4_0 = input.LA(1);

                if ( (LA4_0==ASTERISK||LA4_0==DESCENDANT||LA4_0==ELEMENT||LA4_0==31||LA4_0==37||LA4_0==41||LA4_0==43) ) {
                    alt4=1;
                }


                switch (alt4) {
            	case 1 :
            	    // cc/iqa/iquery/iQuery.g:251:39: c= multi_selectors[$c.survival == null ? $p.survival : $c.survival]
            	    {
            	    pushFollow(FOLLOW_multi_selectors_in_selectors127);
            	    c=multi_selectors(c == null ? p : c);

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop4;
                }
            } while (true);



                        if ( c != null ) {
                            retval.survival = c; 
                        } else {
                            retval.survival = p;
                        }
                    

            }

            retval.stop = input.LT(-1);


        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }

        finally {
        	// do for sure before leaving
        }
        return retval;
    }
    // $ANTLR end "selectors"



    // $ANTLR start "multi_selectors"
    // cc/iqa/iquery/iQuery.g:261:1: multi_selectors[List<ITreeNode> candidates] returns [List<ITreeNode> survival] : ( selector[$candidates] | '>' c= selector[$candidates.size() > 0 ? $candidates.get(0).getChildren() : new ArrayList<ITreeNode>()] | '>' level= INTEGER c= selector[descendants($candidates, Integer.parseInt($level.text))] | DESCENDANT c= selector[descendants($candidates, -1)] );
    public final List<ITreeNode> multi_selectors(List<ITreeNode> candidates) throws RecognitionException {
        List<ITreeNode> survival = null;


        Token level=null;
        iQueryParser.selector_return c =null;

        iQueryParser.selector_return selector2 =null;


        try {
            // cc/iqa/iquery/iQuery.g:262:5: ( selector[$candidates] | '>' c= selector[$candidates.size() > 0 ? $candidates.get(0).getChildren() : new ArrayList<ITreeNode>()] | '>' level= INTEGER c= selector[descendants($candidates, Integer.parseInt($level.text))] | DESCENDANT c= selector[descendants($candidates, -1)] )
            int alt5=4;
            switch ( input.LA(1) ) {
            case ASTERISK:
            case ELEMENT:
            case 31:
            case 37:
            case 43:
                {
                alt5=1;
                }
                break;
            case 41:
                {
                int LA5_2 = input.LA(2);

                if ( (LA5_2==INTEGER) ) {
                    alt5=3;
                }
                else if ( (LA5_2==ASTERISK||LA5_2==ELEMENT||LA5_2==31||LA5_2==37||LA5_2==43) ) {
                    alt5=2;
                }
                else {
                    NoViableAltException nvae =
                        new NoViableAltException("", 5, 2, input);

                    throw nvae;

                }
                }
                break;
            case DESCENDANT:
                {
                alt5=4;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 5, 0, input);

                throw nvae;

            }

            switch (alt5) {
                case 1 :
                    // cc/iqa/iquery/iQuery.g:262:7: selector[$candidates]
                    {
                    pushFollow(FOLLOW_selector_in_multi_selectors164);
                    selector2=selector(candidates);

                    state._fsp--;



                                survival = (selector2!=null?selector2.survival:null); 
                            

                    }
                    break;
                case 2 :
                    // cc/iqa/iquery/iQuery.g:266:7: '>' c= selector[$candidates.size() > 0 ? $candidates.get(0).getChildren() : new ArrayList<ITreeNode>()]
                    {
                    match(input,41,FOLLOW_41_in_multi_selectors183); 

                    pushFollow(FOLLOW_selector_in_multi_selectors187);
                    c=selector(candidates.size() > 0 ? candidates.get(0).getChildren() : new ArrayList<ITreeNode>());

                    state._fsp--;



                                debug("成功匹配\"> " + (c!=null?input.toString(c.start,c.stop):null) + "\"");
                                survival = (c!=null?c.survival:null);
                            

                    }
                    break;
                case 3 :
                    // cc/iqa/iquery/iQuery.g:271:7: '>' level= INTEGER c= selector[descendants($candidates, Integer.parseInt($level.text))]
                    {
                    match(input,41,FOLLOW_41_in_multi_selectors206); 

                    level=(Token)match(input,INTEGER,FOLLOW_INTEGER_in_multi_selectors210); 

                    pushFollow(FOLLOW_selector_in_multi_selectors214);
                    c=selector(descendants(candidates, Integer.parseInt((level!=null?level.getText():null))));

                    state._fsp--;



                                debug("成功匹配\">" + (level!=null?level.getText():null) + " " + (c!=null?input.toString(c.start,c.stop):null) + "\"");
                                survival = (c!=null?c.survival:null);
                            

                    }
                    break;
                case 4 :
                    // cc/iqa/iquery/iQuery.g:277:7: DESCENDANT c= selector[descendants($candidates, -1)]
                    {
                    match(input,DESCENDANT,FOLLOW_DESCENDANT_in_multi_selectors242); 

                    pushFollow(FOLLOW_selector_in_multi_selectors246);
                    c=selector(descendants(candidates, -1));

                    state._fsp--;



                                debug("成功匹配\">> " + (c!=null?input.toString(c.start,c.stop):null) + "\"");
                                survival = (c!=null?c.survival:null);
                            

                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }

        finally {
        	// do for sure before leaving
        }
        return survival;
    }
    // $ANTLR end "multi_selectors"


    public static class selector_return extends ParserRuleReturnScope {
        public List<ITreeNode> survival;
    };


    // $ANTLR start "selector"
    // cc/iqa/iquery/iQuery.g:284:1: selector[List<ITreeNode> candidates] returns [List<ITreeNode> survival] : (p= selector_expression[$candidates] ( ( '+' n= selector_expression[next($candidates, $p.survival)] ) | ( '~' n= selector_expression[siblings($candidates, $p.survival)] ) )? | multi_attributes[$candidates] );
    public final iQueryParser.selector_return selector(List<ITreeNode> candidates) throws RecognitionException {
        iQueryParser.selector_return retval = new iQueryParser.selector_return();
        retval.start = input.LT(1);


        List<ITreeNode> p =null;

        List<ITreeNode> n =null;

        List<ITreeNode> multi_attributes3 =null;


        try {
            // cc/iqa/iquery/iQuery.g:285:5: (p= selector_expression[$candidates] ( ( '+' n= selector_expression[next($candidates, $p.survival)] ) | ( '~' n= selector_expression[siblings($candidates, $p.survival)] ) )? | multi_attributes[$candidates] )
            int alt7=2;
            int LA7_0 = input.LA(1);

            if ( (LA7_0==ASTERISK||LA7_0==ELEMENT||LA7_0==31||LA7_0==37) ) {
                alt7=1;
            }
            else if ( (LA7_0==43) ) {
                alt7=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 7, 0, input);

                throw nvae;

            }
            switch (alt7) {
                case 1 :
                    // cc/iqa/iquery/iQuery.g:285:7: p= selector_expression[$candidates] ( ( '+' n= selector_expression[next($candidates, $p.survival)] ) | ( '~' n= selector_expression[siblings($candidates, $p.survival)] ) )?
                    {
                    pushFollow(FOLLOW_selector_expression_in_selector283);
                    p=selector_expression(candidates);

                    state._fsp--;


                    // cc/iqa/iquery/iQuery.g:286:9: ( ( '+' n= selector_expression[next($candidates, $p.survival)] ) | ( '~' n= selector_expression[siblings($candidates, $p.survival)] ) )?
                    int alt6=3;
                    int LA6_0 = input.LA(1);

                    if ( (LA6_0==36) ) {
                        alt6=1;
                    }
                    else if ( (LA6_0==46) ) {
                        alt6=2;
                    }
                    switch (alt6) {
                        case 1 :
                            // cc/iqa/iquery/iQuery.g:287:13: ( '+' n= selector_expression[next($candidates, $p.survival)] )
                            {
                            // cc/iqa/iquery/iQuery.g:287:13: ( '+' n= selector_expression[next($candidates, $p.survival)] )
                            // cc/iqa/iquery/iQuery.g:287:14: '+' n= selector_expression[next($candidates, $p.survival)]
                            {
                            match(input,36,FOLLOW_36_in_selector310); 

                            pushFollow(FOLLOW_selector_expression_in_selector314);
                            n=selector_expression(next(candidates, p));

                            state._fsp--;


                            }


                            }
                            break;
                        case 2 :
                            // cc/iqa/iquery/iQuery.g:289:13: ( '~' n= selector_expression[siblings($candidates, $p.survival)] )
                            {
                            // cc/iqa/iquery/iQuery.g:289:13: ( '~' n= selector_expression[siblings($candidates, $p.survival)] )
                            // cc/iqa/iquery/iQuery.g:289:14: '~' n= selector_expression[siblings($candidates, $p.survival)]
                            {
                            match(input,46,FOLLOW_46_in_selector341); 

                            pushFollow(FOLLOW_selector_expression_in_selector345);
                            n=selector_expression(siblings(candidates, p));

                            state._fsp--;


                            }


                            }
                            break;

                    }


                        
                                if ( n != null ) {
                                    retval.survival = n;
                                } else {
                                    retval.survival = p;
                                }
                            

                    }
                    break;
                case 2 :
                    // cc/iqa/iquery/iQuery.g:299:7: multi_attributes[$candidates]
                    {
                    pushFollow(FOLLOW_multi_attributes_in_selector377);
                    multi_attributes3=multi_attributes(candidates);

                    state._fsp--;



                                retval.survival = multi_attributes3;
                            

                    }
                    break;

            }
            retval.stop = input.LT(-1);


        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }

        finally {
        	// do for sure before leaving
        }
        return retval;
    }
    // $ANTLR end "selector"


    public static class num_comp_op_return extends ParserRuleReturnScope {
    };


    // $ANTLR start "num_comp_op"
    // cc/iqa/iquery/iQuery.g:305:1: num_comp_op : ( '>' | '<' | '>=' | '<=' | '=' );
    public final iQueryParser.num_comp_op_return num_comp_op() throws RecognitionException {
        iQueryParser.num_comp_op_return retval = new iQueryParser.num_comp_op_return();
        retval.start = input.LT(1);


        try {
            // cc/iqa/iquery/iQuery.g:306:5: ( '>' | '<' | '>=' | '<=' | '=' )
            // cc/iqa/iquery/iQuery.g:
            {
            if ( (input.LA(1) >= 38 && input.LA(1) <= 42) ) {
                input.consume();
                state.errorRecovery=false;
            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                throw mse;
            }


            }

            retval.stop = input.LT(-1);


        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }

        finally {
        	// do for sure before leaving
        }
        return retval;
    }
    // $ANTLR end "num_comp_op"



    // $ANTLR start "multi_attributes"
    // cc/iqa/iquery/iQuery.g:313:1: multi_attributes[List<ITreeNode> candidates] returns [List<ITreeNode> survival] : ( '[' attr= ELEMENT op v= QUOTED_STRING ']' | '[' ':' attr= ELEMENT op v= QUOTED_STRING ']' | '[' attr= ELEMENT num_comp_op v= ( INTEGER | FLOAT | PERCENTAGE ) ']' | '[' ':' attr= ELEMENT num_comp_op v= ( INTEGER | FLOAT | PERCENTAGE ) ']' | '[' attr= ELEMENT ']' );
    public final List<ITreeNode> multi_attributes(List<ITreeNode> candidates) throws RecognitionException {
        List<ITreeNode> survival = null;


        Token attr=null;
        Token v=null;
        iQueryParser.op_return op4 =null;

        iQueryParser.op_return op5 =null;

        iQueryParser.num_comp_op_return num_comp_op6 =null;

        iQueryParser.num_comp_op_return num_comp_op7 =null;


        try {
            // cc/iqa/iquery/iQuery.g:314:5: ( '[' attr= ELEMENT op v= QUOTED_STRING ']' | '[' ':' attr= ELEMENT op v= QUOTED_STRING ']' | '[' attr= ELEMENT num_comp_op v= ( INTEGER | FLOAT | PERCENTAGE ) ']' | '[' ':' attr= ELEMENT num_comp_op v= ( INTEGER | FLOAT | PERCENTAGE ) ']' | '[' attr= ELEMENT ']' )
            int alt8=5;
            int LA8_0 = input.LA(1);

            if ( (LA8_0==43) ) {
                int LA8_1 = input.LA(2);

                if ( (LA8_1==ELEMENT) ) {
                    switch ( input.LA(3) ) {
                    case 44:
                        {
                        alt8=5;
                        }
                        break;
                    case 40:
                        {
                        int LA8_5 = input.LA(4);

                        if ( (LA8_5==QUOTED_STRING) ) {
                            alt8=1;
                        }
                        else if ( (LA8_5==FLOAT||LA8_5==INTEGER||LA8_5==PERCENTAGE) ) {
                            alt8=3;
                        }
                        else {
                            NoViableAltException nvae =
                                new NoViableAltException("", 8, 5, input);

                            throw nvae;

                        }
                        }
                        break;
                    case 30:
                    case 32:
                    case 35:
                    case 45:
                        {
                        alt8=1;
                        }
                        break;
                    case 38:
                    case 39:
                    case 41:
                    case 42:
                        {
                        alt8=3;
                        }
                        break;
                    default:
                        NoViableAltException nvae =
                            new NoViableAltException("", 8, 2, input);

                        throw nvae;

                    }

                }
                else if ( (LA8_1==37) ) {
                    int LA8_3 = input.LA(3);

                    if ( (LA8_3==ELEMENT) ) {
                        switch ( input.LA(4) ) {
                        case 40:
                            {
                            int LA8_9 = input.LA(5);

                            if ( (LA8_9==QUOTED_STRING) ) {
                                alt8=2;
                            }
                            else if ( (LA8_9==FLOAT||LA8_9==INTEGER||LA8_9==PERCENTAGE) ) {
                                alt8=4;
                            }
                            else {
                                NoViableAltException nvae =
                                    new NoViableAltException("", 8, 9, input);

                                throw nvae;

                            }
                            }
                            break;
                        case 30:
                        case 32:
                        case 35:
                        case 45:
                            {
                            alt8=2;
                            }
                            break;
                        case 38:
                        case 39:
                        case 41:
                        case 42:
                            {
                            alt8=4;
                            }
                            break;
                        default:
                            NoViableAltException nvae =
                                new NoViableAltException("", 8, 8, input);

                            throw nvae;

                        }

                    }
                    else {
                        NoViableAltException nvae =
                            new NoViableAltException("", 8, 3, input);

                        throw nvae;

                    }
                }
                else {
                    NoViableAltException nvae =
                        new NoViableAltException("", 8, 1, input);

                    throw nvae;

                }
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 8, 0, input);

                throw nvae;

            }
            switch (alt8) {
                case 1 :
                    // cc/iqa/iquery/iQuery.g:314:7: '[' attr= ELEMENT op v= QUOTED_STRING ']'
                    {
                    match(input,43,FOLLOW_43_in_multi_attributes461); 

                    attr=(Token)match(input,ELEMENT,FOLLOW_ELEMENT_in_multi_attributes465); 

                    pushFollow(FOLLOW_op_in_multi_attributes467);
                    op4=op();

                    state._fsp--;


                    v=(Token)match(input,QUOTED_STRING,FOLLOW_QUOTED_STRING_in_multi_attributes471); 

                    match(input,44,FOLLOW_44_in_multi_attributes473); 


                                debug("成功匹配\"[" + (attr!=null?attr.getText():null) + " " + (v!=null?v.getText():null) + "]\"");
                             
                                List<ITreeNode> result = new ArrayList<ITreeNode>();
                                String optext = (op4!=null?input.toString(op4.start,op4.stop):null);
                                String vtext = (v!=null?v.getText():null);
                                String key = (attr!=null?attr.getText():null);
                                String method = key + "()";
                                String criteria = vtext.substring(1, vtext.length() - 1);

                                for ( int i = 0; i < candidates.size(); ++i ){
                                    ITreeNode node = candidates.get(i);
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

                                survival = result;
                            

                    }
                    break;
                case 2 :
                    // cc/iqa/iquery/iQuery.g:369:7: '[' ':' attr= ELEMENT op v= QUOTED_STRING ']'
                    {
                    match(input,43,FOLLOW_43_in_multi_attributes491); 

                    match(input,37,FOLLOW_37_in_multi_attributes493); 

                    attr=(Token)match(input,ELEMENT,FOLLOW_ELEMENT_in_multi_attributes497); 

                    pushFollow(FOLLOW_op_in_multi_attributes499);
                    op5=op();

                    state._fsp--;


                    v=(Token)match(input,QUOTED_STRING,FOLLOW_QUOTED_STRING_in_multi_attributes503); 

                    match(input,44,FOLLOW_44_in_multi_attributes505); 


                                List<ITreeNode> result = new ArrayList<ITreeNode>();

                                if ( _pseudoAttrs.containsKey((attr!=null?attr.getText():null)) ) {
                                    String optext = (op5!=null?input.toString(op5.start,op5.stop):null);
                                    String vtext = (v!=null?v.getText():null);
                                    String criteria = vtext.substring(1, vtext.length() - 1);
                                    
                                    for ( int i = 0; i < candidates.size(); ++i ) {     
                                        ITreeNode node = candidates.get(i);
                                        String value = _pseudoAttrs.get((attr!=null?attr.getText():null)).resolve(node);

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

                                survival = result;
                            

                    }
                    break;
                case 3 :
                    // cc/iqa/iquery/iQuery.g:408:7: '[' attr= ELEMENT num_comp_op v= ( INTEGER | FLOAT | PERCENTAGE ) ']'
                    {
                    match(input,43,FOLLOW_43_in_multi_attributes523); 

                    attr=(Token)match(input,ELEMENT,FOLLOW_ELEMENT_in_multi_attributes527); 

                    pushFollow(FOLLOW_num_comp_op_in_multi_attributes529);
                    num_comp_op6=num_comp_op();

                    state._fsp--;


                    v=(Token)input.LT(1);

                    if ( input.LA(1)==FLOAT||input.LA(1)==INTEGER||input.LA(1)==PERCENTAGE ) {
                        input.consume();
                        state.errorRecovery=false;
                    }
                    else {
                        MismatchedSetException mse = new MismatchedSetException(null,input);
                        throw mse;
                    }


                    match(input,44,FOLLOW_44_in_multi_attributes545); 


                                List<ITreeNode> result = new ArrayList<ITreeNode>();
                                String optext = (num_comp_op6!=null?input.toString(num_comp_op6.start,num_comp_op6.stop):null);
                                String vtext = (v!=null?v.getText():null);
                                String key = (attr!=null?attr.getText():null);
                                String method = key + "()";
                                double criteria = parseNum(vtext);

                                for ( int i = 0; i < candidates.size(); ++i ){
                                    ITreeNode node = candidates.get(i);
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

                                survival = result;
                            

                    }
                    break;
                case 4 :
                    // cc/iqa/iquery/iQuery.g:463:7: '[' ':' attr= ELEMENT num_comp_op v= ( INTEGER | FLOAT | PERCENTAGE ) ']'
                    {
                    match(input,43,FOLLOW_43_in_multi_attributes563); 

                    match(input,37,FOLLOW_37_in_multi_attributes565); 

                    attr=(Token)match(input,ELEMENT,FOLLOW_ELEMENT_in_multi_attributes569); 

                    pushFollow(FOLLOW_num_comp_op_in_multi_attributes571);
                    num_comp_op7=num_comp_op();

                    state._fsp--;


                    v=(Token)input.LT(1);

                    if ( input.LA(1)==FLOAT||input.LA(1)==INTEGER||input.LA(1)==PERCENTAGE ) {
                        input.consume();
                        state.errorRecovery=false;
                    }
                    else {
                        MismatchedSetException mse = new MismatchedSetException(null,input);
                        throw mse;
                    }


                    match(input,44,FOLLOW_44_in_multi_attributes587); 


                                List<ITreeNode> result = new ArrayList<ITreeNode>();

                                if ( _pseudoAttrs.containsKey((attr!=null?attr.getText():null)) ) {
                                    String optext = (num_comp_op7!=null?input.toString(num_comp_op7.start,num_comp_op7.stop):null);
                                    String vtext = (v!=null?v.getText():null);
                                    double criteria = parseNum(vtext);
                                    
                                    for ( int i = 0; i < candidates.size(); ++i ){
                                        ITreeNode node = candidates.get(i);
                                        String pv = _pseudoAttrs.get((attr!=null?attr.getText():null)).resolve(node);

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

                                survival = result;
                            

                    }
                    break;
                case 5 :
                    // cc/iqa/iquery/iQuery.g:506:7: '[' attr= ELEMENT ']'
                    {
                    match(input,43,FOLLOW_43_in_multi_attributes605); 

                    attr=(Token)match(input,ELEMENT,FOLLOW_ELEMENT_in_multi_attributes609); 

                    match(input,44,FOLLOW_44_in_multi_attributes611); 


                                debug("成功匹配\"[" + (attr!=null?attr.getText():null) + "]\"");
                                List<ITreeNode> result = new ArrayList<ITreeNode>();
                                String key = (attr!=null?attr.getText():null);
                                String method = key + "()";

                                for ( int i = 0; i < candidates.size(); ++i ){
                                    ITreeNode node = candidates.get(i);
                                    if ( node.containsProperty(key) || 
                                         node.containsProperty(method) ) {
                                        result.add(node);
                                    }
                                }

                                survival = result;
                            

                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }

        finally {
        	// do for sure before leaving
        }
        return survival;
    }
    // $ANTLR end "multi_attributes"


    public static class op_return extends ParserRuleReturnScope {
    };


    // $ANTLR start "op"
    // cc/iqa/iquery/iQuery.g:525:1: op : ( '=' | '!=' | '$=' | '^=' | '*=' );
    public final iQueryParser.op_return op() throws RecognitionException {
        iQueryParser.op_return retval = new iQueryParser.op_return();
        retval.start = input.LT(1);


        try {
            // cc/iqa/iquery/iQuery.g:526:5: ( '=' | '!=' | '$=' | '^=' | '*=' )
            // cc/iqa/iquery/iQuery.g:
            {
            if ( input.LA(1)==30||input.LA(1)==32||input.LA(1)==35||input.LA(1)==40||input.LA(1)==45 ) {
                input.consume();
                state.errorRecovery=false;
            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                throw mse;
            }


            }

            retval.stop = input.LT(-1);


        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }

        finally {
        	// do for sure before leaving
        }
        return retval;
    }
    // $ANTLR end "op"


    public static class indexop_return extends ParserRuleReturnScope {
    };


    // $ANTLR start "indexop"
    // cc/iqa/iquery/iQuery.g:533:1: indexop : ( EQ | GT | LT | NTH_CHILD );
    public final iQueryParser.indexop_return indexop() throws RecognitionException {
        iQueryParser.indexop_return retval = new iQueryParser.indexop_return();
        retval.start = input.LT(1);


        try {
            // cc/iqa/iquery/iQuery.g:534:5: ( EQ | GT | LT | NTH_CHILD )
            // cc/iqa/iquery/iQuery.g:
            {
            if ( input.LA(1)==EQ||input.LA(1)==GT||input.LA(1)==LT||input.LA(1)==NTH_CHILD ) {
                input.consume();
                state.errorRecovery=false;
            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                throw mse;
            }


            }

            retval.stop = input.LT(-1);


        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }

        finally {
        	// do for sure before leaving
        }
        return retval;
    }
    // $ANTLR end "indexop"



    // $ANTLR start "selector_expression"
    // cc/iqa/iquery/iQuery.g:540:1: selector_expression[List<ITreeNode> candidates] returns [List<ITreeNode> survival] : ( atom[$candidates] | ':' indexop '(' vidx= INTEGER ')' | ':' NOT '(' selectors[$candidates] ')' | ':' HAS '(' selectors[$candidates] ')' | ':' CONTAINS '(' text= QUOTED_STRING ')' | ':' LAST_CHILD | ':' FIRST_CHILD | ':' FIRST | ':' LAST | ':' EMPTY | ':' PARENT | ':' ELEMENT | '#' ELEMENT );
    public final List<ITreeNode> selector_expression(List<ITreeNode> candidates) throws RecognitionException {
        List<ITreeNode> survival = null;


        Token vidx=null;
        Token text=null;
        Token ELEMENT12=null;
        Token ELEMENT13=null;
        List<ITreeNode> atom8 =null;

        iQueryParser.indexop_return indexop9 =null;

        iQueryParser.selectors_return selectors10 =null;

        iQueryParser.selectors_return selectors11 =null;


        try {
            // cc/iqa/iquery/iQuery.g:541:5: ( atom[$candidates] | ':' indexop '(' vidx= INTEGER ')' | ':' NOT '(' selectors[$candidates] ')' | ':' HAS '(' selectors[$candidates] ')' | ':' CONTAINS '(' text= QUOTED_STRING ')' | ':' LAST_CHILD | ':' FIRST_CHILD | ':' FIRST | ':' LAST | ':' EMPTY | ':' PARENT | ':' ELEMENT | '#' ELEMENT )
            int alt9=13;
            switch ( input.LA(1) ) {
            case ASTERISK:
            case ELEMENT:
                {
                alt9=1;
                }
                break;
            case 37:
                {
                switch ( input.LA(2) ) {
                case NOT:
                    {
                    alt9=3;
                    }
                    break;
                case HAS:
                    {
                    alt9=4;
                    }
                    break;
                case CONTAINS:
                    {
                    alt9=5;
                    }
                    break;
                case LAST_CHILD:
                    {
                    alt9=6;
                    }
                    break;
                case FIRST_CHILD:
                    {
                    alt9=7;
                    }
                    break;
                case FIRST:
                    {
                    alt9=8;
                    }
                    break;
                case LAST:
                    {
                    alt9=9;
                    }
                    break;
                case EMPTY:
                    {
                    alt9=10;
                    }
                    break;
                case PARENT:
                    {
                    alt9=11;
                    }
                    break;
                case ELEMENT:
                    {
                    alt9=12;
                    }
                    break;
                case EQ:
                case GT:
                case LT:
                case NTH_CHILD:
                    {
                    alt9=2;
                    }
                    break;
                default:
                    NoViableAltException nvae =
                        new NoViableAltException("", 9, 2, input);

                    throw nvae;

                }

                }
                break;
            case 31:
                {
                alt9=13;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 9, 0, input);

                throw nvae;

            }

            switch (alt9) {
                case 1 :
                    // cc/iqa/iquery/iQuery.g:541:7: atom[$candidates]
                    {
                    pushFollow(FOLLOW_atom_in_selector_expression735);
                    atom8=atom(candidates);

                    state._fsp--;



                                survival = atom8;
                            

                    }
                    break;
                case 2 :
                    // cc/iqa/iquery/iQuery.g:545:7: ':' indexop '(' vidx= INTEGER ')'
                    {
                    match(input,37,FOLLOW_37_in_selector_expression754); 

                    pushFollow(FOLLOW_indexop_in_selector_expression756);
                    indexop9=indexop();

                    state._fsp--;


                    match(input,33,FOLLOW_33_in_selector_expression758); 

                    vidx=(Token)match(input,INTEGER,FOLLOW_INTEGER_in_selector_expression762); 

                    match(input,34,FOLLOW_34_in_selector_expression764); 


                                debug("成功匹配\":" + (indexop9!=null?input.toString(indexop9.start,indexop9.stop):null) + "(" + (vidx!=null?vidx.getText():null) + ")\""); 
                                int idx = Integer.parseInt((vidx!=null?vidx.getText():null));
                                String op = (indexop9!=null?input.toString(indexop9.start,indexop9.stop):null);            
                                survival = new ArrayList<ITreeNode>();

                                if ( candidates != null ) {
                                    if ( op.compareTo("eq") == 0 ) {
                                        if ( idx < candidates.size() ) {
                                            ITreeNode node = candidates.get(idx);
                                            survival.add(node);
                                        }
                                    } else if ( op.compareTo("gt") == 0 ) {                
                                        for ( int i = idx + 1; i < candidates.size(); ++i ) {
                                            survival.add(candidates.get(i));
                                        }
                                    } else if ( op.compareTo("lt") == 0 ) {
                                        for ( int i = 0; i < idx && i < candidates.size(); ++i ) {
                                            survival.add(candidates.get(i));
                                        }
                                    } else if ( op.compareTo("nth-child") == 0 ) {         
                                        for ( int i = 0; i < candidates.size(); ++i ) {
                                            ITreeNode node = candidates.get(i);
                                            List<ITreeNode> children = node.getChildren();
                                            
                                            if ( idx > 0 && idx <= children.size() ) {
                                                survival.add(node.getChildren().get(idx - 1));
                                            }
                                        }
                                    }
                                }
                            

                    }
                    break;
                case 3 :
                    // cc/iqa/iquery/iQuery.g:578:7: ':' NOT '(' selectors[$candidates] ')'
                    {
                    match(input,37,FOLLOW_37_in_selector_expression782); 

                    match(input,NOT,FOLLOW_NOT_in_selector_expression784); 

                    match(input,33,FOLLOW_33_in_selector_expression786); 

                    pushFollow(FOLLOW_selectors_in_selector_expression788);
                    selectors10=selectors(candidates);

                    state._fsp--;


                    match(input,34,FOLLOW_34_in_selector_expression791); 


                                debug("成功匹配\":not(" + (selectors10!=null?input.toString(selectors10.start,selectors10.stop):null) + ")\"");
                                List<ITreeNode> allNodes = candidates;
                                allNodes.removeAll((selectors10!=null?selectors10.survival:null));
                                survival = allNodes;
                            

                    }
                    break;
                case 4 :
                    // cc/iqa/iquery/iQuery.g:585:7: ':' HAS '(' selectors[$candidates] ')'
                    {
                    match(input,37,FOLLOW_37_in_selector_expression809); 

                    match(input,HAS,FOLLOW_HAS_in_selector_expression811); 

                    match(input,33,FOLLOW_33_in_selector_expression813); 

                    pushFollow(FOLLOW_selectors_in_selector_expression815);
                    selectors11=selectors(candidates);

                    state._fsp--;


                    match(input,34,FOLLOW_34_in_selector_expression818); 


                                debug("成功匹配\":has(" + (selectors11!=null?input.toString(selectors11.start,selectors11.stop):null) + ")\"");
                                List<ITreeNode> children = (selectors11!=null?selectors11.survival:null);
                                List<ITreeNode> result = new ArrayList<ITreeNode>();
                                for ( int i = 0; i < children.size(); ++i ) {
                    			    ITreeNode p = children.get(i).getParent();
                                    if ( p != null && result.indexOf(p) == -1 ) {
                                        result.add(p);
                                    }
                                }

                                survival = result;
                            

                    }
                    break;
                case 5 :
                    // cc/iqa/iquery/iQuery.g:599:7: ':' CONTAINS '(' text= QUOTED_STRING ')'
                    {
                    match(input,37,FOLLOW_37_in_selector_expression836); 

                    match(input,CONTAINS,FOLLOW_CONTAINS_in_selector_expression838); 

                    match(input,33,FOLLOW_33_in_selector_expression840); 

                    text=(Token)match(input,QUOTED_STRING,FOLLOW_QUOTED_STRING_in_selector_expression844); 

                    match(input,34,FOLLOW_34_in_selector_expression846); 


                                debug("成功匹配\":contains('" + (text!=null?text.getText():null) + "')\"");
                                String attribute = (text!=null?text.getText():null);
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

                                survival = result;    
                            

                    }
                    break;
                case 6 :
                    // cc/iqa/iquery/iQuery.g:645:7: ':' LAST_CHILD
                    {
                    match(input,37,FOLLOW_37_in_selector_expression864); 

                    match(input,LAST_CHILD,FOLLOW_LAST_CHILD_in_selector_expression866); 


                                debug("成功匹配\":last-child\"");
                                // 添加当前匹配的所有的节点的最后一个子节点
                                List<ITreeNode> nodes = new ArrayList<ITreeNode>();
                                for ( int i = 0; i < candidates.size(); ++i ) {
                                    ITreeNode node = candidates.get(i);
                                    if ( node.getChildren().size() > 0 ) {
                                        nodes.add(node.getChildren().get(node.getChildren().size() - 1));
                                    }
                                }

                                survival = nodes;
                            

                    }
                    break;
                case 7 :
                    // cc/iqa/iquery/iQuery.g:659:7: ':' FIRST_CHILD
                    {
                    match(input,37,FOLLOW_37_in_selector_expression884); 

                    match(input,FIRST_CHILD,FOLLOW_FIRST_CHILD_in_selector_expression886); 


                                debug("成功匹配\":first-child\"");
                                List<ITreeNode> nodes = new ArrayList<ITreeNode>();
                                for ( int i = 0; i < candidates.size(); ++i ) {
                                    ITreeNode node = candidates.get(i);
                                    if ( node.getChildren().size() > 0 ) {
                                        nodes.add(node.getChildren().get(0));
                                    }
                                }

                                survival = nodes;
                            

                    }
                    break;
                case 8 :
                    // cc/iqa/iquery/iQuery.g:672:7: ':' FIRST
                    {
                    match(input,37,FOLLOW_37_in_selector_expression904); 

                    match(input,FIRST,FOLLOW_FIRST_in_selector_expression906); 


                                debug("成功匹配\":first\"");
                                survival = new ArrayList<ITreeNode>();
                                List<ITreeNode> nodes = candidates;
                                if ( nodes.size() == 0 ) {
                                    warning("前次匹配已经没有留下任何控件，匹配级是空的！");
                                } else {
                                    ITreeNode first = nodes.get(0);
                                    survival.add(first);
                                }
                            

                    }
                    break;
                case 9 :
                    // cc/iqa/iquery/iQuery.g:684:7: ':' LAST
                    {
                    match(input,37,FOLLOW_37_in_selector_expression924); 

                    match(input,LAST,FOLLOW_LAST_in_selector_expression926); 


                                debug("成功匹配\":last\"");
                                survival = new ArrayList<ITreeNode>();
                                List<ITreeNode> nodes = candidates;
                                if ( nodes.size() == 0 ) {
                                    warning("前次匹配已经没有留下任何控件，匹配级是空的！");
                                } else {
                                    ITreeNode last = nodes.get(nodes.size() - 1);
                                    survival.add(last);
                                }
                            

                    }
                    break;
                case 10 :
                    // cc/iqa/iquery/iQuery.g:697:7: ':' EMPTY
                    {
                    match(input,37,FOLLOW_37_in_selector_expression945); 

                    match(input,EMPTY,FOLLOW_EMPTY_in_selector_expression947); 


                                debug("成功匹配\":empty\"");
                                List<ITreeNode> nodes = candidates;
                                List<ITreeNode> result = new ArrayList<ITreeNode>();
                                for ( int i = 0; i < nodes.size(); ++i ) {
                                    if ( nodes.get(i).getChildren().size() == 0 )
                                        result.add(nodes.get(i));
                                }
                                
                                survival = result;
                            

                    }
                    break;
                case 11 :
                    // cc/iqa/iquery/iQuery.g:709:7: ':' PARENT
                    {
                    match(input,37,FOLLOW_37_in_selector_expression965); 

                    match(input,PARENT,FOLLOW_PARENT_in_selector_expression967); 


                                debug("成功匹配\":parent\"");            
                                ITreeNode candidate = 
                                    candidates == null ? null 
                                                        : candidates.size() == 0 ? null : candidates.get(0);
                                survival = new ArrayList<ITreeNode>();
                                if ( candidate != null )
                                    survival.add(candidate.getParent());
                            

                    }
                    break;
                case 12 :
                    // cc/iqa/iquery/iQuery.g:774:7: ':' ELEMENT
                    {
                    match(input,37,FOLLOW_37_in_selector_expression995); 

                    ELEMENT12=(Token)match(input,ELEMENT,FOLLOW_ELEMENT_in_selector_expression997); 


                                survival = filterPseudo(candidates, (ELEMENT12!=null?ELEMENT12.getText():null)); 
                            

                    }
                    break;
                case 13 :
                    // cc/iqa/iquery/iQuery.g:778:7: '#' ELEMENT
                    {
                    match(input,31,FOLLOW_31_in_selector_expression1015); 

                    ELEMENT13=(Token)match(input,ELEMENT,FOLLOW_ELEMENT_in_selector_expression1017); 


                                List<ITreeNode> d = descendants(candidates, -1);
                                survival = new ArrayList<ITreeNode>();
                                String name = (ELEMENT13!=null?ELEMENT13.getText():null);
                                for ( int i = 0; i < d.size(); ++i ) {
                                    String pname = d.get(i).getName();
                                   
                                    if ( pname != null && name.compareTo(pname) == 0 ) {
                                        survival.add(d.get(i));
                                    }
                                }
                            

                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }

        finally {
        	// do for sure before leaving
        }
        return survival;
    }
    // $ANTLR end "selector_expression"



    // $ANTLR start "atom"
    // cc/iqa/iquery/iQuery.g:793:1: atom[List<ITreeNode> candidates] returns [List<ITreeNode> survival] : ( ASTERISK | ELEMENT );
    public final List<ITreeNode> atom(List<ITreeNode> candidates) throws RecognitionException {
        List<ITreeNode> survival = null;


        Token ELEMENT14=null;

        try {
            // cc/iqa/iquery/iQuery.g:794:5: ( ASTERISK | ELEMENT )
            int alt10=2;
            int LA10_0 = input.LA(1);

            if ( (LA10_0==ASTERISK) ) {
                alt10=1;
            }
            else if ( (LA10_0==ELEMENT) ) {
                alt10=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 10, 0, input);

                throw nvae;

            }
            switch (alt10) {
                case 1 :
                    // cc/iqa/iquery/iQuery.g:794:7: ASTERISK
                    {
                    match(input,ASTERISK,FOLLOW_ASTERISK_in_atom1051); 

                     
                                debug("成功匹配:\"*\"");
                                survival = candidates;
                            

                    }
                    break;
                case 2 :
                    // cc/iqa/iquery/iQuery.g:799:7: ELEMENT
                    {
                    ELEMENT14=(Token)match(input,ELEMENT,FOLLOW_ELEMENT_in_atom1069); 


                                if ( candidates == null || candidates.size() == 0 ) {
                                    warning("在ELEMENT规则里，没有candidates对象输入");
                                    survival = new ArrayList<ITreeNode>();
                                } else {            
                                    List<ITreeNode> nodes = new ArrayList<ITreeNode>();
                                    String filter = (ELEMENT14!=null?ELEMENT14.getText():null);
                                    debug("成功匹配\"" + filter + "\"");
                                    for ( int i = 0; i < candidates.size(); ++i ) {
                                        ITreeNode node = candidates.get(i);        
                                        String ctrl = type(node);
                                        
                                        if ( filter.compareTo(ctrl) == 0 ) {
                                            nodes.add(node);
                                        }
                                    }

                                    survival = nodes;
                                }
                            

                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }

        finally {
        	// do for sure before leaving
        }
        return survival;
    }
    // $ANTLR end "atom"

    // Delegated rules


 

    public static final BitSet FOLLOW_selectors_in_query58 = new BitSet(new long[]{0x0000000000100000L});
    public static final BitSet FOLLOW_NEWLINE_in_query61 = new BitSet(new long[]{0x0000000000100000L});
    public static final BitSet FOLLOW_EOF_in_query64 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_NEWLINE_in_query82 = new BitSet(new long[]{0x0000000000100000L});
    public static final BitSet FOLLOW_EOF_in_query85 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_multi_selectors_in_selectors121 = new BitSet(new long[]{0x00000A2080000152L});
    public static final BitSet FOLLOW_multi_selectors_in_selectors127 = new BitSet(new long[]{0x00000A2080000152L});
    public static final BitSet FOLLOW_selector_in_multi_selectors164 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_41_in_multi_selectors183 = new BitSet(new long[]{0x0000082080000110L});
    public static final BitSet FOLLOW_selector_in_multi_selectors187 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_41_in_multi_selectors206 = new BitSet(new long[]{0x0000000000010000L});
    public static final BitSet FOLLOW_INTEGER_in_multi_selectors210 = new BitSet(new long[]{0x0000082080000110L});
    public static final BitSet FOLLOW_selector_in_multi_selectors214 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_DESCENDANT_in_multi_selectors242 = new BitSet(new long[]{0x0000082080000110L});
    public static final BitSet FOLLOW_selector_in_multi_selectors246 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_selector_expression_in_selector283 = new BitSet(new long[]{0x0000401000000002L});
    public static final BitSet FOLLOW_36_in_selector310 = new BitSet(new long[]{0x0000002080000110L});
    public static final BitSet FOLLOW_selector_expression_in_selector314 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_46_in_selector341 = new BitSet(new long[]{0x0000002080000110L});
    public static final BitSet FOLLOW_selector_expression_in_selector345 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_multi_attributes_in_selector377 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_43_in_multi_attributes461 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_ELEMENT_in_multi_attributes465 = new BitSet(new long[]{0x0000210940000000L});
    public static final BitSet FOLLOW_op_in_multi_attributes467 = new BitSet(new long[]{0x0000000008000000L});
    public static final BitSet FOLLOW_QUOTED_STRING_in_multi_attributes471 = new BitSet(new long[]{0x0000100000000000L});
    public static final BitSet FOLLOW_44_in_multi_attributes473 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_43_in_multi_attributes491 = new BitSet(new long[]{0x0000002000000000L});
    public static final BitSet FOLLOW_37_in_multi_attributes493 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_ELEMENT_in_multi_attributes497 = new BitSet(new long[]{0x0000210940000000L});
    public static final BitSet FOLLOW_op_in_multi_attributes499 = new BitSet(new long[]{0x0000000008000000L});
    public static final BitSet FOLLOW_QUOTED_STRING_in_multi_attributes503 = new BitSet(new long[]{0x0000100000000000L});
    public static final BitSet FOLLOW_44_in_multi_attributes505 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_43_in_multi_attributes523 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_ELEMENT_in_multi_attributes527 = new BitSet(new long[]{0x000007C000000000L});
    public static final BitSet FOLLOW_num_comp_op_in_multi_attributes529 = new BitSet(new long[]{0x0000000002012000L});
    public static final BitSet FOLLOW_set_in_multi_attributes533 = new BitSet(new long[]{0x0000100000000000L});
    public static final BitSet FOLLOW_44_in_multi_attributes545 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_43_in_multi_attributes563 = new BitSet(new long[]{0x0000002000000000L});
    public static final BitSet FOLLOW_37_in_multi_attributes565 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_ELEMENT_in_multi_attributes569 = new BitSet(new long[]{0x000007C000000000L});
    public static final BitSet FOLLOW_num_comp_op_in_multi_attributes571 = new BitSet(new long[]{0x0000000002012000L});
    public static final BitSet FOLLOW_set_in_multi_attributes575 = new BitSet(new long[]{0x0000100000000000L});
    public static final BitSet FOLLOW_44_in_multi_attributes587 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_43_in_multi_attributes605 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_ELEMENT_in_multi_attributes609 = new BitSet(new long[]{0x0000100000000000L});
    public static final BitSet FOLLOW_44_in_multi_attributes611 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_atom_in_selector_expression735 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_37_in_selector_expression754 = new BitSet(new long[]{0x0000000000884400L});
    public static final BitSet FOLLOW_indexop_in_selector_expression756 = new BitSet(new long[]{0x0000000200000000L});
    public static final BitSet FOLLOW_33_in_selector_expression758 = new BitSet(new long[]{0x0000000000010000L});
    public static final BitSet FOLLOW_INTEGER_in_selector_expression762 = new BitSet(new long[]{0x0000000400000000L});
    public static final BitSet FOLLOW_34_in_selector_expression764 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_37_in_selector_expression782 = new BitSet(new long[]{0x0000000000400000L});
    public static final BitSet FOLLOW_NOT_in_selector_expression784 = new BitSet(new long[]{0x0000000200000000L});
    public static final BitSet FOLLOW_33_in_selector_expression786 = new BitSet(new long[]{0x00000A2080000150L});
    public static final BitSet FOLLOW_selectors_in_selector_expression788 = new BitSet(new long[]{0x0000000400000000L});
    public static final BitSet FOLLOW_34_in_selector_expression791 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_37_in_selector_expression809 = new BitSet(new long[]{0x0000000000008000L});
    public static final BitSet FOLLOW_HAS_in_selector_expression811 = new BitSet(new long[]{0x0000000200000000L});
    public static final BitSet FOLLOW_33_in_selector_expression813 = new BitSet(new long[]{0x00000A2080000150L});
    public static final BitSet FOLLOW_selectors_in_selector_expression815 = new BitSet(new long[]{0x0000000400000000L});
    public static final BitSet FOLLOW_34_in_selector_expression818 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_37_in_selector_expression836 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_CONTAINS_in_selector_expression838 = new BitSet(new long[]{0x0000000200000000L});
    public static final BitSet FOLLOW_33_in_selector_expression840 = new BitSet(new long[]{0x0000000008000000L});
    public static final BitSet FOLLOW_QUOTED_STRING_in_selector_expression844 = new BitSet(new long[]{0x0000000400000000L});
    public static final BitSet FOLLOW_34_in_selector_expression846 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_37_in_selector_expression864 = new BitSet(new long[]{0x0000000000040000L});
    public static final BitSet FOLLOW_LAST_CHILD_in_selector_expression866 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_37_in_selector_expression884 = new BitSet(new long[]{0x0000000000001000L});
    public static final BitSet FOLLOW_FIRST_CHILD_in_selector_expression886 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_37_in_selector_expression904 = new BitSet(new long[]{0x0000000000000800L});
    public static final BitSet FOLLOW_FIRST_in_selector_expression906 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_37_in_selector_expression924 = new BitSet(new long[]{0x0000000000020000L});
    public static final BitSet FOLLOW_LAST_in_selector_expression926 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_37_in_selector_expression945 = new BitSet(new long[]{0x0000000000000200L});
    public static final BitSet FOLLOW_EMPTY_in_selector_expression947 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_37_in_selector_expression965 = new BitSet(new long[]{0x0000000001000000L});
    public static final BitSet FOLLOW_PARENT_in_selector_expression967 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_37_in_selector_expression995 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_ELEMENT_in_selector_expression997 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_31_in_selector_expression1015 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_ELEMENT_in_selector_expression1017 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ASTERISK_in_atom1051 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ELEMENT_in_atom1069 = new BitSet(new long[]{0x0000000000000002L});

}