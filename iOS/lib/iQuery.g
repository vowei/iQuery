grammar iQuery;

options {
    language=JavaScript;
}

@lexer::members {
_errors = [];
this.getErrorMessage = function(e, tokenNames)
{
    var error = getErrorsHelper(e, null, tokenNames, this);

    if ( _errors != undefined && _errors != null ) {
        _errors.push(error);   
    }
 
    return error;
}
}

@parser::members {
_errors = [];
this.getErrorMessage = function(e, tokenNames)
{
    var error = getErrorsHelper(e, this.input, tokenNames, this);

    if ( _errors != undefined && _errors != null ) {
        _errors.push(error);   
    }
 
    return error;
}

this.errors = function() {
    return _errors;
}

this._pseudo_attrs = new Object();
this.registerPseudoAttrs = function(attr, functor) {
    this._pseudo_attrs[attr] = functor;
}
}

prog [candidates] returns [survival]
    : p=selectors[$candidates] NEWLINE* EOF
        {
            $survival = $p.survival;
        }
    | NEWLINE* EOF
    ;

selectors [candidates] returns [survival] 
    : p=multi_selectors[$candidates] (c=multi_selectors[($c.survival == undefined || $c.survival == null) ? $p.survival : $c.survival])*       
        {
            if ( $c.survival != undefined && $c.survival != null ) {
                $survival = $c.survival;
            } else {
                $survival = $p.survival;
            }
        }
    ;

/*
selectors [candidates] returns [survival] 
    : p=multi_selectors[$candidates] r=right_selectors[$candidates, $p.survival]
        {
            $survival = $r.survival;
        }
    ;

right_selectors[candidates, previousMatches] returns [survival]
    :  (c=multi_selectors[($c.survival == undefined || $c.survival == null) ? $previousMatches : $c.survival])*
        {
            if ( $c.survival != undefined && $c.survival != null ) {
                $survival = $c.survival;
            } else {
                $survival = $previousMatches;
            }
        }
    |  '+' next=selector[next($candidates, $previousMatches)]
        {
            $survival = $next.survival;
        }
    ;
*/

multi_selectors [candidates] returns [survival] 
    : selector[$candidates]
        {
            $survival = $selector.survival;
        }
    | '>' c=selector[child($candidates)]
        {
            debug("Matched \">\"");
            $survival = $c.survival;
            debug("Matching  result:");
			debug($survival);
        }
    | DESCENDANT c=selector[descendant($candidates)]
        {
            debug("Matched \">>\"");
            $survival = $c.survival;
            debug("Matching  result:");
			debug($survival);
        }
    | '>' level=FLOAT c=selector[descendant($candidates, parseInt($level.text, 10))]
        {
            debug("Matched \">" + $level.text + "\"");
            $survival = $c.survival;
            debug("Matching  result:");
			debug($survival);
        }
    ;

selector [candidates] returns [survival] 
    : p=selector_expression[$candidates] 
        (
            ('+' n=selector_expression[next($candidates, $p.survival)])
        |
            ('~' n=selector_expression[siblings($candidates, $p.survival)])
        )?
        {
            if ( $n.survival != undefined && $n.survival != null ) {
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

multi_attributes [candidates] returns [survival] 
    : '[' attr=ELEMENT op v=QUOTED_STRING ']'
        {
            debug("Matching \"[" + $attr.text + $op.text + $v.text + "]\", with candidates:");
			debug($candidates);
            var len = $candidates.length;
            var result = [];
			var key = $attr.text;
            var expected = remove_quote($v.text);
			
            for ( var i = 0; i < len; ++i ) {
                var control = $candidates[i];
                var value = control[key];
                if ( value != undefined ) {
                    if ( isFunction(value) ) {
                        value = value.apply(control);
                    }

                    if ( $op.text == '=' && value == expected ) {
                        result.push(control);
                    } else if ( $op.text == '!=' && value != expected ) {
                        result.push(control);
                    } else if ( $op.text == '^=' && value != null && value.indexOf(expected) == 0 ) {
                        result.push(control);
                    } else if ( $op.text == '$=' && 
                                value != null && 
                                expected.length <= value.length &&
                                value.lastIndexOf(expected) == (value.length - expected.length)) {
                        result.push(control);
                    } else if ( $op.text == '*=' && 
                                value != null &&
                                value.indexOf(expected) >= 0) {
                        result.push(control);
                    }
                }
            }

            $survival = result;
            debug("Matching  result:");
			debug($survival);
        }
    | '[' ':' attr=ELEMENT op v=QUOTED_STRING ']'
        {
            debug("Matching \"[" + $attr.text + $op.text + $v.text + "]\", with candidates:");
			debug($candidates);
            var len = $candidates.length;
            var result = [];
			var key = $attr.text;
            var expected = remove_quote($v.text);
			
            for ( var i = 0; i < len; ++i ) {
                var control = $candidates[i];
                var value = this._pseudo_attrs[key](control);
                if ( value != undefined ) {
                    if ( $op.text == '=' && value == expected ) {
                        result.push(control);
                    } else if ( $op.text == '!=' && value != expected ) {
                        result.push(control);
                    } else if ( $op.text == '^=' && value != null && value.indexOf(expected) == 0 ) {
                        result.push(control);
                    } else if ( $op.text == '$=' && 
                                value != null && 
                                expected.length <= value.length &&
                                value.lastIndexOf(expected) == (value.length - expected.length)) {
                        result.push(control);
                    } else if ( $op.text == '*=' && 
                                value != null &&
                                value.indexOf(expected) >= 0) {
                        result.push(control);
                    }
                }
            }

            $survival = result;
            debug("Matching  result:");
			debug($survival);
        }
    | '[' attr=ELEMENT num_comp_op v=(FLOAT | PERCENTAGE) ']'
        {
            debug("Matching \"[" + $attr.text + $num_comp_op.text + $v.text + "]\", with candidates:");
			debug($candidates);
            var len = $candidates.length;
            var result = [];
			var key = $attr.text;
            var expected = parseNum($v.text);
            var op = $num_comp_op.text;
			
            for ( var i = 0; i < len; ++i ) {
                var control = $candidates[i];
                var value = control[key];
                if ( value != undefined ) {
                    if ( isFunction(value) ) {
                        value = value.apply(control);
                    }

                    var num = parseNum(value);
                    if ( op == '>' && num > expected ) {
                        result.push(control);
                    } else if ( op == '<' && num < expected ) {
                        result.push(control);
                    } else if ( op == '<=' && num <= expected ) {
                        result.push(control);
                    } else if ( op == '>=' && num >= expected ) {
                        result.push(control);
                    } else if ( op == '=' && num == expected ) {
                        result.push(control);
                    }
                }
            }

            $survival = result;
            debug("Matching result:");
			debug($survival);            
        }
    | '[' ':' attr=ELEMENT num_comp_op v=(FLOAT | PERCENTAGE) ']'
        {
            debug("Matching \"[" + $attr.text + $num_comp_op.text + $v.text + "]\", with candidates:");
			debug($candidates);
            var len = $candidates.length;
            var result = [];
			var key = $attr.text;
            var expected = parseNum($v.text);
            var op = $num_comp_op.text;
			
            for ( var i = 0; i < len; ++i ) {
                var control = $candidates[i];
                var value = this._pseudo_attrs[key](control);
                if ( value != undefined ) {
                    if ( isFunction(value) ) {
                        value = value.apply(control);
                    }

                    var num = parseNum(value);
                    if ( op == '>' && num > expected ) {
                        result.push(control);
                    } else if ( op == '<' && num < expected ) {
                        result.push(control);
                    } else if ( op == '<=' && num <= expected ) {
                        result.push(control);
                    } else if ( op == '>=' && num >= expected ) {
                        result.push(control);
                    } else if ( op == '=' && num == expected ) {
                        result.push(control);
                    }
                }
            }

            $survival = result;
            debug("Matching result:");
			debug($survival);            
        }
    | '[' attr=ELEMENT ']'
        {
            debug("Matching \"[" + $attr.text + "]\", with candidates:");
			debug($candidates);
            var len = $candidates.length;          
			var key = $attr.text;

            var result = [];
            for ( var i = 0; i < len; ++i ) {
                var control = $candidates[i];
                if ( control[key] != undefined ) {
                    result.push(control);
                }
            }

            $survival = result;
            debug("Matching  result:");
			debug($survival);
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

selector_expression [candidates] returns [survival] 
    : atom[$candidates]
        {
            $survival = $atom.survival;
        }
    | ':' vop=indexop '(' vidx=FLOAT ')'
        {
            // this is ugly, because indexop is a token.
            var optext = $indexop.text;
            debug("Matching \":" + optext + "(" + $vidx.text + ")\", with candidates:");
			debug($candidates);
            $survival = [];

            var idx = parseInt($vidx.text);
            if ( optext == 'eq' ) {
                if ( idx < $candidates.length ) {
                    $survival.push($candidates[idx]);
                }
            } else if ( optext == 'gt' ) {
                for ( var i = idx + 1; i < $candidates.length; ++i ) {
                    $survival.push($candidates[i]);
                }
            } else if ( optext == 'lt' ) {
                for ( var i = 0; i < idx; ++i ) {
                    $survival.push($candidates[i]);
                }
            } else if ( optext == 'nth-child' ) {
                for ( var i = 0; i < $candidates.length; ++i ) {
                    // the index is startd from 1
                    var children = child($candidates[i]);
                    if ( children.length == 1 && type(children[0]) == 'UIAApplication' ) {
                        continue;
                    }

                    if ( idx > 0 && idx <= children.length ) {
                        $survival.push(children[idx - 1]);
                    }
                }
            }
            debug("Matching  result:");
			debug($survival);
        }
    | ':' NOT '(' selectors[$candidates] ')'
        {
            debug("Matching \":not\", with candidates:");
			debug($candidates);
            $survival = $candidates.diff($selectors.survival);
            debug("Matching  result:");
			debug($survival);
        }
	/* 
	 * TODO: :has's behavior is not determined yet
	 *
	| ':' HAS '(' selectors[$candidates] ')'
		{
			var children = $selectors.survival;
			$survival = [];
			for ( var i = 0; i < children.length; ++i ) {
				// for two children have same parent, parent() returns different reference
				// which cause the same parent pushed to $survival twice!
			    var p = children[i].parent();
				if ( $survival.indexOf(p) == -1 ) {
				     $survival.push(p);
				}
			}
		}
	*/
    | ':' CONTAINS '(' text=QUOTED_STRING ')'
		{
            debug("Matching \":contains\", with candidates:");
			debug($candidates);
			$survival = [];
			var expected = remove_quote($text.text);
			for ( var i = 0; i < $candidates.length; ++i ) {
				var c = $candidates[i];
				var name = c.name != undefined ? c.name() : null;
				var value = c.value != undefined ? c.value() : null;
				var label = c.label != undefined ? c.label() : null;

				if ( name != null && name.indexOf != undefined && name.indexOf(expected) >= 0 ) {
					$survival.push(c);
					continue;
				}
				if ( value != null && value.indexOf != undefined && value.indexOf(expected) >= 0 ) {
					$survival.push(c);
					continue;
				}
				if ( label != null && label.indexOf != undefined && label.indexOf(expected) >= 0 ) {
					$survival.push(c);
					continue;
				}
			}
            debug("Matching  result:");
			debug($survival);
		}
    | ':' LAST_CHILD
        {
            debug("Matching \":last_child\", with candidates:");
			debug($candidates);
            var result = [];
            var len = $candidates.length;
            if ( len > 0 ) {
                for ( var i = 0; i < len; ++i ) {
                    var elements = $candidates[i].elements();
                    if ( (elements != null) && (elements.length > 0) ) {
                        result.push(elements[elements.length - 1]);
                    }
                }
            }

            $survival = result;
            debug("Matching  result:");
			debug($survival);
        }
    | ':' FIRST_CHILD
        {
            debug("Matching \":first_child\", with candidates:");
			debug($candidates);
            var result = []; 
            var len = $candidates.length;
            if ( len > 0 ) {
                for ( var i = 0; i < len; ++i ) {
                    var elements = $candidates[i].elements();
                    if ( (elements != null) && (elements.length > 0) ) {
                        result.push(elements[0]);
                    }
                }
            }

            $survival = result;     
            debug("Matching  result:");
			debug($survival);      
        }
    | ':' FIRST
        {
            debug("Matching \":first\", with candidates:");
			debug($candidates);
            var result = [];
            if ( $candidates.length > 0 ) {
                result.push($candidates[0]);
            }

            $survival = result;   
            debug("Matching  result:");
			debug($survival);
        }
    | ':' LAST
        {
            debug("Matching \":last\", with candidates:");
			debug($candidates);
            var result = [];
            if ( $candidates.length > 0 ) {
                result.push($candidates[$candidates.length - 1]);
            }

            $survival = result;
            debug("Matching  result:");
			debug($survival);
        }
    | ':' TEXT
        {
            debug("Matching \":text\", with candidates:");
			debug($candidates);
            $survival = match($candidates, new Array("UIATextField", "UIATextView", "UIASecureTextField"));
            debug("Matching  result:");
			debug($survival);
        }
    | ':' RADIO
        {
            debug("Matching \":radio\", with candidates:");
			debug($candidates);
            $survival = match($candidates, new Array("UIASwitch"));
            debug("Matching  result:");
			debug($survival);
        }
    | ':' EMPTY
		{
            debug("Matching \":empty\", with candidates:");
			debug($candidates);
			$survival = [];
			for ( var i = 0; i < $candidates.length; ++i ) {
                var elements = $candidates[i].elements().toArray();
                /*
                debug("elements[0]: " + elements[0] + ", typeof(elements[0]): " + typeof(elements[0]));               
                debug(elements[0] == null);
                */
				if (elements.length == 0 || type(elements[0]) == "UIAApplication" ) {
					$survival.push($candidates[i]);
				}
			}
            debug("Matching  result:");
			debug($survival);
		}
    | ':' VISIBLE
		{
            debug("Matching \":visible\", with candidates:");
			debug($candidates);
			$survival = filterAttrs($candidates, "isVisible", true);
            debug("Matching  result:");
			debug($survival);
		}
    | ':' HIDDEN
		{
            debug("Matching \":hidden\", with candidates:");
			debug($candidates);
			$survival = filterAttrs($candidates, "isVisible", false);
            debug("Matching  result:");
			debug($survival);
		}
    | ':' FOCUS
		{
            debug("Matching \":focus\", with candidates:");
			debug($candidates);
			$survival = filterAttrs($candidates, "hasKeyboardFocus", true);
            debug("Matching  result:");
			debug($survival);
		}
	| ':' ENABLED
		{
            debug("Matching \":enabled\", with candidates:");
			debug($candidates);
			$survival = filterAttrs($candidates, "isEnabled", true);
            debug("Matching  result:");
			debug($survival);
		}
	| ':' DISABLED
		{
            debug("Matching \":disabled\", with candidates:");
			debug($candidates);
			$survival = filterAttrs($candidates, "isEnabled", false);
            debug("Matching  result:");
			debug($survival);
		}
    | ':' CHECKBOX
        {
            debug("Matching \":checkbox\", with candidates:");
			debug($candidates);
            $survival = match($candidates, "UIASwitch");
            debug("Matching  result:");
			debug($survival);
        }
    | ':' BUTTON
        {
            debug("Matching \":button\", with candidates:");
			debug($candidates);
            $survival = match($candidates, "UIAButton");
            debug("Matching  result:");
			debug($survival);
        }
    | ':' IMAGE
        {
            debug("Matching \":image\", with candidates:");
			debug($candidates);
            // ios doesn't have a image control
            // An image gallery is really nothing but a tableview in which each row displays 
            // several images side by side. By using a custom cell without borders, you create 
            // the illusion of a grid of images
            //
            // from: http://stackoverflow.com/questions/4374569/ipad-control-for-creating-an-image-gallery
            // $survival = [];
            $survival = match($candidates, "UIAImage");
            debug("Matching  result:");
			debug($survival);
        }
    | ':' LABEL
        {
            debug("Matching \":label\", with candidates:");
			debug($candidates);
            $survival = match($candidates, new Array("UIAStaticText", "UIAStatusBar", "UIALink"));
            debug("Matching  result:");
			debug($survival);
        }
    | ':' PARENT
        {
            debug("Matching \":parent\", with candidates:");
			debug($candidates);
            $survival = [];
            for ( var i = 0; i < $candidates.length; ++i ) {
                var p = $candidates[i].parent();
                if ( p != null && $survival.indexOf(p) < 0 ) {
                    $survival.push(p);
                }
            }
            debug("Matching result:");
			debug($survival);
        }
    | '#' ELEMENT
        {
            debug("Matching \"#" + $ELEMENT.text + "\", with candidates:");
            debug($candidates);

            $survival = descendant($candidates, 1024, function(c) {
                    return c.name != undefined && c.name() == $ELEMENT.text;
                });
            /*
            $survival = [];
            for ( var i = 0;i < $candidates.length; ++i ) { 
                var candidate = $candidates[i];
                if ( candidate.name != undefined && candidate.name == $ELEMENT.text ) {
                    $survival.push(candidate);
                }
            }
            */

            debug("Matching result:");
            debug($survival);
        }
    ;

atom [candidates] returns [survival] 
    : ASTERISK
        {
            debug("Matching \"*\"");
			debug($candidates);
            $survival = $candidates;
            debug("Matching  result:");
			debug($survival);
        }
    | ELEMENT
        {
            debug("Matching \"" + $ELEMENT.text + "\", with candidates:");
			debug($candidates);
            $survival = match($candidates, $ELEMENT.text);
            debug("Matching  result:");
			debug($survival);
        }
    ;

DESCENDANT: '>>';
EQ: 'eq';
GT: 'gt';
LT: 'lt';
NOT: 'not';
CONTAINS: 'contains';
TEXT: 'text';
RADIO: 'radio';
EMPTY: 'empty';
CHECKBOX: 'checkbox';
FOCUS: 'focus';
HAS: 'has';
CHECKED: 'checked';
PREV: 'prev';
NEXT: 'next';
SIBLINGS: 'siblings';
NTH_CHILD: 'nth-child';
PARENT: 'parent';
DISABLED: 'disabled';
ENABLED: 'enabled';
VISIBLE: 'visible';
HIDDEN: 'hidden';
BUTTON: 'button';
LABEL: 'label';
IMAGE: 'image';
LAST_CHILD: 'last-child';
FIRST_CHILD: 'first-child';
FIRST: 'first';
LAST: 'last';
PERCENTAGE: ('+' | '-')? DIGIT+ ('.' DIGIT+)? '%';
FLOAT: ('+' | '-')? DIGIT+ ('.' DIGIT+)?;
fragment DIGIT: ('0' .. '9');
ELEMENT: ('a'..'z'|'A'..'Z'|'_')('a'..'z'|'A'..'Z'|'0'..'9'|'_')*;
ASTERISK: '*';
QUOTED_STRING: '\'' .+ '\''; 
NEWLINE: '\r'? '\n';
WS: (' ' | '\t') { this.state.token=org.antlr.runtime.Token.SKIP_TOKEN; };
