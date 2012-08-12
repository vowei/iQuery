// $ANTLR 3.3 Nov 30, 2010 12:50:56 iQuery.g 2012-07-30 09:19:31

var iQueryParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){

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

    }).call(this);

    iQueryParser.superclass.constructor.call(this, input, state);

    this.dfa8 = new iQueryParser.DFA8(this);
    this.dfa9 = new iQueryParser.DFA9(this);

         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(iQueryParser, {
    EOF: -1,
    T__41: 41,
    T__42: 42,
    T__43: 43,
    T__44: 44,
    T__45: 45,
    T__46: 46,
    T__47: 47,
    T__48: 48,
    T__49: 49,
    T__50: 50,
    T__51: 51,
    T__52: 52,
    T__53: 53,
    T__54: 54,
    T__55: 55,
    T__56: 56,
    T__57: 57,
    NEWLINE: 4,
    DESCENDANT: 5,
    FLOAT: 6,
    ELEMENT: 7,
    QUOTED_STRING: 8,
    PERCENTAGE: 9,
    EQ: 10,
    GT: 11,
    LT: 12,
    NTH_CHILD: 13,
    NOT: 14,
    CONTAINS: 15,
    LAST_CHILD: 16,
    FIRST_CHILD: 17,
    FIRST: 18,
    LAST: 19,
    TEXT: 20,
    RADIO: 21,
    EMPTY: 22,
    VISIBLE: 23,
    HIDDEN: 24,
    FOCUS: 25,
    ENABLED: 26,
    DISABLED: 27,
    CHECKBOX: 28,
    BUTTON: 29,
    IMAGE: 30,
    LABEL: 31,
    PARENT: 32,
    ASTERISK: 33,
    HAS: 34,
    CHECKED: 35,
    PREV: 36,
    NEXT: 37,
    SIBLINGS: 38,
    DIGIT: 39,
    WS: 40
});

(function(){
// public class variables
var EOF= -1,
    T__41= 41,
    T__42= 42,
    T__43= 43,
    T__44= 44,
    T__45= 45,
    T__46= 46,
    T__47= 47,
    T__48= 48,
    T__49= 49,
    T__50= 50,
    T__51= 51,
    T__52= 52,
    T__53= 53,
    T__54= 54,
    T__55= 55,
    T__56= 56,
    T__57= 57,
    NEWLINE= 4,
    DESCENDANT= 5,
    FLOAT= 6,
    ELEMENT= 7,
    QUOTED_STRING= 8,
    PERCENTAGE= 9,
    EQ= 10,
    GT= 11,
    LT= 12,
    NTH_CHILD= 13,
    NOT= 14,
    CONTAINS= 15,
    LAST_CHILD= 16,
    FIRST_CHILD= 17,
    FIRST= 18,
    LAST= 19,
    TEXT= 20,
    RADIO= 21,
    EMPTY= 22,
    VISIBLE= 23,
    HIDDEN= 24,
    FOCUS= 25,
    ENABLED= 26,
    DISABLED= 27,
    CHECKBOX= 28,
    BUTTON= 29,
    IMAGE= 30,
    LABEL= 31,
    PARENT= 32,
    ASTERISK= 33,
    HAS= 34,
    CHECKED= 35,
    PREV= 36,
    NEXT= 37,
    SIBLINGS= 38,
    DIGIT= 39,
    WS= 40;

// public instance methods/vars
org.antlr.lang.extend(iQueryParser, org.antlr.runtime.Parser, {
        

    getTokenNames: function() { return iQueryParser.tokenNames; },
    getGrammarFileName: function() { return "iQuery.g"; }
});
org.antlr.lang.augmentObject(iQueryParser.prototype, {


    // iQuery.g:44:1: prog[candidates] returns [survival] : (p= selectors[$candidates] ( NEWLINE )* EOF | ( NEWLINE )* EOF );
    // $ANTLR start "prog"
    prog: function(candidates) {
        var survival = null;

         var p = null;

        try {
            // iQuery.g:45:5: (p= selectors[$candidates] ( NEWLINE )* EOF | ( NEWLINE )* EOF )
            var alt3=2;
            var LA3_0 = this.input.LA(1);

            if ( (LA3_0==DESCENDANT||LA3_0==ELEMENT||LA3_0==ASTERISK||LA3_0==41||LA3_0==48||LA3_0==50||LA3_0==57) ) {
                alt3=1;
            }
            else if ( (LA3_0==EOF||LA3_0==NEWLINE) ) {
                alt3=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 3, 0, this.input);

                throw nvae;
            }
            switch (alt3) {
                case 1 :
                    // iQuery.g:45:7: p= selectors[$candidates] ( NEWLINE )* EOF
                    this.pushFollow(iQueryParser.FOLLOW_selectors_in_prog54);
                    p=this.selectors(candidates);

                    this.state._fsp--;

                    // iQuery.g:45:32: ( NEWLINE )*
                    loop1:
                    do {
                        var alt1=2;
                        var LA1_0 = this.input.LA(1);

                        if ( (LA1_0==NEWLINE) ) {
                            alt1=1;
                        }


                        switch (alt1) {
                        case 1 :
                            // iQuery.g:45:32: NEWLINE
                            this.match(this.input,NEWLINE,iQueryParser.FOLLOW_NEWLINE_in_prog57); 


                            break;

                        default :
                            break loop1;
                        }
                    } while (true);

                    this.match(this.input,EOF,iQueryParser.FOLLOW_EOF_in_prog60); 

                                survival = p;
                            


                    break;
                case 2 :
                    // iQuery.g:49:7: ( NEWLINE )* EOF
                    // iQuery.g:49:7: ( NEWLINE )*
                    loop2:
                    do {
                        var alt2=2;
                        var LA2_0 = this.input.LA(1);

                        if ( (LA2_0==NEWLINE) ) {
                            alt2=1;
                        }


                        switch (alt2) {
                        case 1 :
                            // iQuery.g:49:7: NEWLINE
                            this.match(this.input,NEWLINE,iQueryParser.FOLLOW_NEWLINE_in_prog78); 


                            break;

                        default :
                            break loop2;
                        }
                    } while (true);

                    this.match(this.input,EOF,iQueryParser.FOLLOW_EOF_in_prog81); 


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return survival;
    },


    // iQuery.g:52:1: selectors[candidates] returns [survival] : p= multi_selectors[$candidates] (c= multi_selectors[($c.survival == undefined || $c.survival == null) ? $p.survival : $c.survival] )* ;
    // $ANTLR start "selectors"
    selectors: function(candidates) {
        var survival = null;

         var p = null;
         var c = null;

        try {
            // iQuery.g:53:5: (p= multi_selectors[$candidates] (c= multi_selectors[($c.survival == undefined || $c.survival == null) ? $p.survival : $c.survival] )* )
            // iQuery.g:53:7: p= multi_selectors[$candidates] (c= multi_selectors[($c.survival == undefined || $c.survival == null) ? $p.survival : $c.survival] )*
            this.pushFollow(iQueryParser.FOLLOW_multi_selectors_in_selectors107);
            p=this.multi_selectors(candidates);

            this.state._fsp--;

            // iQuery.g:53:38: (c= multi_selectors[($c.survival == undefined || $c.survival == null) ? $p.survival : $c.survival] )*
            loop4:
            do {
                var alt4=2;
                var LA4_0 = this.input.LA(1);

                if ( (LA4_0==DESCENDANT||LA4_0==ELEMENT||LA4_0==ASTERISK||LA4_0==41||LA4_0==48||LA4_0==50||LA4_0==57) ) {
                    alt4=1;
                }


                switch (alt4) {
                case 1 :
                    // iQuery.g:53:39: c= multi_selectors[($c.survival == undefined || $c.survival == null) ? $p.survival : $c.survival]
                    this.pushFollow(iQueryParser.FOLLOW_multi_selectors_in_selectors113);
                    c=this.multi_selectors((c == undefined || c == null) ? p : c);

                    this.state._fsp--;



                    break;

                default :
                    break loop4;
                }
            } while (true);


                        if ( c != undefined && c != null ) {
                            survival = c;
                        } else {
                            survival = p;
                        }
                    



        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return survival;
    },


    // iQuery.g:87:1: multi_selectors[candidates] returns [survival] : ( selector[$candidates] | '>' c= selector[child($candidates)] | DESCENDANT c= selector[descendant($candidates)] | '>' level= FLOAT c= selector[descendant($candidates, parseInt($level.text, 10))] );
    // $ANTLR start "multi_selectors"
    multi_selectors: function(candidates) {
        var survival = null;

        var level = null;
         var c = null;
         var selector1 = null;

        try {
            // iQuery.g:88:5: ( selector[$candidates] | '>' c= selector[child($candidates)] | DESCENDANT c= selector[descendant($candidates)] | '>' level= FLOAT c= selector[descendant($candidates, parseInt($level.text, 10))] )
            var alt5=4;
            switch ( this.input.LA(1) ) {
            case ELEMENT:
            case ASTERISK:
            case 48:
            case 50:
            case 57:
                alt5=1;
                break;
            case 41:
                var LA5_2 = this.input.LA(2);

                if ( (LA5_2==FLOAT) ) {
                    alt5=4;
                }
                else if ( (LA5_2==ELEMENT||LA5_2==ASTERISK||LA5_2==48||LA5_2==50||LA5_2==57) ) {
                    alt5=2;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 5, 2, this.input);

                    throw nvae;
                }
                break;
            case DESCENDANT:
                alt5=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 5, 0, this.input);

                throw nvae;
            }

            switch (alt5) {
                case 1 :
                    // iQuery.g:88:7: selector[$candidates]
                    this.pushFollow(iQueryParser.FOLLOW_selector_in_multi_selectors160);
                    selector1=this.selector(candidates);

                    this.state._fsp--;


                                survival = selector1;
                            


                    break;
                case 2 :
                    // iQuery.g:92:7: '>' c= selector[child($candidates)]
                    this.match(this.input,41,iQueryParser.FOLLOW_41_in_multi_selectors179); 
                    this.pushFollow(iQueryParser.FOLLOW_selector_in_multi_selectors183);
                    c=this.selector(child(candidates));

                    this.state._fsp--;


                                debug("Matched \">\"");
                                survival = c;
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 3 :
                    // iQuery.g:99:7: DESCENDANT c= selector[descendant($candidates)]
                    this.match(this.input,DESCENDANT,iQueryParser.FOLLOW_DESCENDANT_in_multi_selectors202); 
                    this.pushFollow(iQueryParser.FOLLOW_selector_in_multi_selectors206);
                    c=this.selector(descendant(candidates));

                    this.state._fsp--;


                                debug("Matched \">>\"");
                                survival = c;
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 4 :
                    // iQuery.g:106:7: '>' level= FLOAT c= selector[descendant($candidates, parseInt($level.text, 10))]
                    this.match(this.input,41,iQueryParser.FOLLOW_41_in_multi_selectors225); 
                    level=this.match(this.input,FLOAT,iQueryParser.FOLLOW_FLOAT_in_multi_selectors229); 
                    this.pushFollow(iQueryParser.FOLLOW_selector_in_multi_selectors233);
                    c=this.selector(descendant(candidates, parseInt((level?level.getText():null), 10)));

                    this.state._fsp--;


                                debug("Matched \">" + (level?level.getText():null) + "\"");
                                survival = c;
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return survival;
    },


    // iQuery.g:115:1: selector[candidates] returns [survival] : (p= selector_expression[$candidates] ( ( '+' n= selector_expression[next($candidates, $p.survival)] ) | ( '~' n= selector_expression[siblings($candidates, $p.survival)] ) )? | multi_attributes[$candidates] );
    // $ANTLR start "selector"
    selector: function(candidates) {
        var survival = null;

         var p = null;
         var n = null;
         var multi_attributes2 = null;

        try {
            // iQuery.g:116:5: (p= selector_expression[$candidates] ( ( '+' n= selector_expression[next($candidates, $p.survival)] ) | ( '~' n= selector_expression[siblings($candidates, $p.survival)] ) )? | multi_attributes[$candidates] )
            var alt7=2;
            var LA7_0 = this.input.LA(1);

            if ( (LA7_0==ELEMENT||LA7_0==ASTERISK||LA7_0==50||LA7_0==57) ) {
                alt7=1;
            }
            else if ( (LA7_0==48) ) {
                alt7=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 7, 0, this.input);

                throw nvae;
            }
            switch (alt7) {
                case 1 :
                    // iQuery.g:116:7: p= selector_expression[$candidates] ( ( '+' n= selector_expression[next($candidates, $p.survival)] ) | ( '~' n= selector_expression[siblings($candidates, $p.survival)] ) )?
                    this.pushFollow(iQueryParser.FOLLOW_selector_expression_in_selector270);
                    p=this.selector_expression(candidates);

                    this.state._fsp--;

                    // iQuery.g:117:9: ( ( '+' n= selector_expression[next($candidates, $p.survival)] ) | ( '~' n= selector_expression[siblings($candidates, $p.survival)] ) )?
                    var alt6=3;
                    var LA6_0 = this.input.LA(1);

                    if ( (LA6_0==42) ) {
                        alt6=1;
                    }
                    else if ( (LA6_0==43) ) {
                        alt6=2;
                    }
                    switch (alt6) {
                        case 1 :
                            // iQuery.g:118:13: ( '+' n= selector_expression[next($candidates, $p.survival)] )
                            // iQuery.g:118:13: ( '+' n= selector_expression[next($candidates, $p.survival)] )
                            // iQuery.g:118:14: '+' n= selector_expression[next($candidates, $p.survival)]
                            this.match(this.input,42,iQueryParser.FOLLOW_42_in_selector297); 
                            this.pushFollow(iQueryParser.FOLLOW_selector_expression_in_selector301);
                            n=this.selector_expression(next(candidates, p));

                            this.state._fsp--;






                            break;
                        case 2 :
                            // iQuery.g:120:13: ( '~' n= selector_expression[siblings($candidates, $p.survival)] )
                            // iQuery.g:120:13: ( '~' n= selector_expression[siblings($candidates, $p.survival)] )
                            // iQuery.g:120:14: '~' n= selector_expression[siblings($candidates, $p.survival)]
                            this.match(this.input,43,iQueryParser.FOLLOW_43_in_selector328); 
                            this.pushFollow(iQueryParser.FOLLOW_selector_expression_in_selector332);
                            n=this.selector_expression(siblings(candidates, p));

                            this.state._fsp--;






                            break;

                    }


                                if ( n != undefined && n != null ) {
                                    survival = n;
                                } else {
                                    survival = p;
                                }
                            


                    break;
                case 2 :
                    // iQuery.g:129:7: multi_attributes[$candidates]
                    this.pushFollow(iQueryParser.FOLLOW_multi_attributes_in_selector363);
                    multi_attributes2=this.multi_attributes(candidates);

                    this.state._fsp--;


                                survival = multi_attributes2;
                            


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return survival;
    },

    // inline static return class
    num_comp_op_return: (function() {
        iQueryParser.num_comp_op_return = function(){};
        org.antlr.lang.extend(iQueryParser.num_comp_op_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
        });
        return;
    })(),

    // iQuery.g:135:1: num_comp_op : ( '>' | '<' | '>=' | '<=' | '=' );
    // $ANTLR start "num_comp_op"
    num_comp_op: function() {
        var retval = new iQueryParser.num_comp_op_return();
        retval.start = this.input.LT(1);

        try {
            // iQuery.g:136:5: ( '>' | '<' | '>=' | '<=' | '=' )
            // iQuery.g:
            if ( this.input.LA(1)==41||(this.input.LA(1)>=44 && this.input.LA(1)<=47) ) {
                this.input.consume();
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },


    // iQuery.g:143:1: multi_attributes[candidates] returns [survival] : ( '[' attr= ELEMENT op v= QUOTED_STRING ']' | '[' ':' attr= ELEMENT op v= QUOTED_STRING ']' | '[' attr= ELEMENT num_comp_op v= ( FLOAT | PERCENTAGE ) ']' | '[' ':' attr= ELEMENT num_comp_op v= ( FLOAT | PERCENTAGE ) ']' | '[' attr= ELEMENT ']' );
    // $ANTLR start "multi_attributes"
    multi_attributes: function(candidates) {
        var survival = null;

        var attr = null;
        var v = null;
         var op3 = null;
         var op4 = null;
         var num_comp_op5 = null;
         var num_comp_op6 = null;

        try {
            // iQuery.g:144:5: ( '[' attr= ELEMENT op v= QUOTED_STRING ']' | '[' ':' attr= ELEMENT op v= QUOTED_STRING ']' | '[' attr= ELEMENT num_comp_op v= ( FLOAT | PERCENTAGE ) ']' | '[' ':' attr= ELEMENT num_comp_op v= ( FLOAT | PERCENTAGE ) ']' | '[' attr= ELEMENT ']' )
            var alt8=5;
            alt8 = this.dfa8.predict(this.input);
            switch (alt8) {
                case 1 :
                    // iQuery.g:144:7: '[' attr= ELEMENT op v= QUOTED_STRING ']'
                    this.match(this.input,48,iQueryParser.FOLLOW_48_in_multi_attributes447); 
                    attr=this.match(this.input,ELEMENT,iQueryParser.FOLLOW_ELEMENT_in_multi_attributes451); 
                    this.pushFollow(iQueryParser.FOLLOW_op_in_multi_attributes453);
                    op3=this.op();

                    this.state._fsp--;

                    v=this.match(this.input,QUOTED_STRING,iQueryParser.FOLLOW_QUOTED_STRING_in_multi_attributes457); 
                    this.match(this.input,49,iQueryParser.FOLLOW_49_in_multi_attributes459); 

                                debug("Matching \"[" + (attr?attr.getText():null) + (op3?this.input.toString(op3.start,op3.stop):null) + (v?v.getText():null) + "]\", with candidates:");
                    			debug(candidates);
                                var len = candidates.length;
                                var result = [];
                    			var key = (attr?attr.getText():null);
                                var expected = remove_quote((v?v.getText():null));
                    			
                                for ( var i = 0; i < len; ++i ) {
                                    var control = candidates[i];
                                    var value = control[key];
                                    if ( value != undefined ) {
                                        if ( isFunction(value) ) {
                                            value = value.apply(control);
                                        }

                                        if ( (op3?this.input.toString(op3.start,op3.stop):null) == '=' && value == expected ) {
                                            result.push(control);
                                        } else if ( (op3?this.input.toString(op3.start,op3.stop):null) == '!=' && value != expected ) {
                                            result.push(control);
                                        } else if ( (op3?this.input.toString(op3.start,op3.stop):null) == '^=' && value != null && value.indexOf(expected) == 0 ) {
                                            result.push(control);
                                        } else if ( (op3?this.input.toString(op3.start,op3.stop):null) == '$=' && 
                                                    value != null && 
                                                    expected.length <= value.length &&
                                                    value.lastIndexOf(expected) == (value.length - expected.length)) {
                                            result.push(control);
                                        } else if ( (op3?this.input.toString(op3.start,op3.stop):null) == '*=' && 
                                                    value != null &&
                                                    value.indexOf(expected) >= 0) {
                                            result.push(control);
                                        }
                                    }
                                }

                                survival = result;
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 2 :
                    // iQuery.g:184:7: '[' ':' attr= ELEMENT op v= QUOTED_STRING ']'
                    this.match(this.input,48,iQueryParser.FOLLOW_48_in_multi_attributes477); 
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_multi_attributes479); 
                    attr=this.match(this.input,ELEMENT,iQueryParser.FOLLOW_ELEMENT_in_multi_attributes483); 
                    this.pushFollow(iQueryParser.FOLLOW_op_in_multi_attributes485);
                    op4=this.op();

                    this.state._fsp--;

                    v=this.match(this.input,QUOTED_STRING,iQueryParser.FOLLOW_QUOTED_STRING_in_multi_attributes489); 
                    this.match(this.input,49,iQueryParser.FOLLOW_49_in_multi_attributes491); 

                                debug("Matching \"[" + (attr?attr.getText():null) + (op4?this.input.toString(op4.start,op4.stop):null) + (v?v.getText():null) + "]\", with candidates:");
                    			debug(candidates);
                                var len = candidates.length;
                                var result = [];
                    			var key = (attr?attr.getText():null);
                                var expected = remove_quote((v?v.getText():null));
                    			
                                for ( var i = 0; i < len; ++i ) {
                                    var control = candidates[i];
                                    var value = this._pseudo_attrs[key](control);
                                    if ( value != undefined ) {
                                        if ( (op4?this.input.toString(op4.start,op4.stop):null) == '=' && value == expected ) {
                                            result.push(control);
                                        } else if ( (op4?this.input.toString(op4.start,op4.stop):null) == '!=' && value != expected ) {
                                            result.push(control);
                                        } else if ( (op4?this.input.toString(op4.start,op4.stop):null) == '^=' && value != null && value.indexOf(expected) == 0 ) {
                                            result.push(control);
                                        } else if ( (op4?this.input.toString(op4.start,op4.stop):null) == '$=' && 
                                                    value != null && 
                                                    expected.length <= value.length &&
                                                    value.lastIndexOf(expected) == (value.length - expected.length)) {
                                            result.push(control);
                                        } else if ( (op4?this.input.toString(op4.start,op4.stop):null) == '*=' && 
                                                    value != null &&
                                                    value.indexOf(expected) >= 0) {
                                            result.push(control);
                                        }
                                    }
                                }

                                survival = result;
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 3 :
                    // iQuery.g:220:7: '[' attr= ELEMENT num_comp_op v= ( FLOAT | PERCENTAGE ) ']'
                    this.match(this.input,48,iQueryParser.FOLLOW_48_in_multi_attributes509); 
                    attr=this.match(this.input,ELEMENT,iQueryParser.FOLLOW_ELEMENT_in_multi_attributes513); 
                    this.pushFollow(iQueryParser.FOLLOW_num_comp_op_in_multi_attributes515);
                    num_comp_op5=this.num_comp_op();

                    this.state._fsp--;

                    v=this.input.LT(1);
                    if ( this.input.LA(1)==FLOAT||this.input.LA(1)==PERCENTAGE ) {
                        this.input.consume();
                        this.state.errorRecovery=false;
                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.match(this.input,49,iQueryParser.FOLLOW_49_in_multi_attributes527); 

                                debug("Matching \"[" + (attr?attr.getText():null) + (num_comp_op5?this.input.toString(num_comp_op5.start,num_comp_op5.stop):null) + (v?v.getText():null) + "]\", with candidates:");
                    			debug(candidates);
                                var len = candidates.length;
                                var result = [];
                    			var key = (attr?attr.getText():null);
                                var expected = parseNum((v?v.getText():null));
                                var op = (num_comp_op5?this.input.toString(num_comp_op5.start,num_comp_op5.stop):null);
                    			
                                for ( var i = 0; i < len; ++i ) {
                                    var control = candidates[i];
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

                                survival = result;
                                debug("Matching result:");
                    			debug(survival);            
                            


                    break;
                case 4 :
                    // iQuery.g:257:7: '[' ':' attr= ELEMENT num_comp_op v= ( FLOAT | PERCENTAGE ) ']'
                    this.match(this.input,48,iQueryParser.FOLLOW_48_in_multi_attributes545); 
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_multi_attributes547); 
                    attr=this.match(this.input,ELEMENT,iQueryParser.FOLLOW_ELEMENT_in_multi_attributes551); 
                    this.pushFollow(iQueryParser.FOLLOW_num_comp_op_in_multi_attributes553);
                    num_comp_op6=this.num_comp_op();

                    this.state._fsp--;

                    v=this.input.LT(1);
                    if ( this.input.LA(1)==FLOAT||this.input.LA(1)==PERCENTAGE ) {
                        this.input.consume();
                        this.state.errorRecovery=false;
                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.match(this.input,49,iQueryParser.FOLLOW_49_in_multi_attributes565); 

                                debug("Matching \"[" + (attr?attr.getText():null) + (num_comp_op6?this.input.toString(num_comp_op6.start,num_comp_op6.stop):null) + (v?v.getText():null) + "]\", with candidates:");
                    			debug(candidates);
                                var len = candidates.length;
                                var result = [];
                    			var key = (attr?attr.getText():null);
                                var expected = parseNum((v?v.getText():null));
                                var op = (num_comp_op6?this.input.toString(num_comp_op6.start,num_comp_op6.stop):null);
                    			
                                for ( var i = 0; i < len; ++i ) {
                                    var control = candidates[i];
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

                                survival = result;
                                debug("Matching result:");
                    			debug(survival);            
                            


                    break;
                case 5 :
                    // iQuery.g:294:7: '[' attr= ELEMENT ']'
                    this.match(this.input,48,iQueryParser.FOLLOW_48_in_multi_attributes583); 
                    attr=this.match(this.input,ELEMENT,iQueryParser.FOLLOW_ELEMENT_in_multi_attributes587); 
                    this.match(this.input,49,iQueryParser.FOLLOW_49_in_multi_attributes589); 

                                debug("Matching \"[" + (attr?attr.getText():null) + "]\", with candidates:");
                    			debug(candidates);
                                var len = candidates.length;          
                    			var key = (attr?attr.getText():null);

                                var result = [];
                                for ( var i = 0; i < len; ++i ) {
                                    var control = candidates[i];
                                    if ( control[key] != undefined ) {
                                        result.push(control);
                                    }
                                }

                                survival = result;
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return survival;
    },

    // inline static return class
    op_return: (function() {
        iQueryParser.op_return = function(){};
        org.antlr.lang.extend(iQueryParser.op_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
        });
        return;
    })(),

    // iQuery.g:315:1: op : ( '=' | '!=' | '$=' | '^=' | '*=' );
    // $ANTLR start "op"
    op: function() {
        var retval = new iQueryParser.op_return();
        retval.start = this.input.LT(1);

        try {
            // iQuery.g:316:5: ( '=' | '!=' | '$=' | '^=' | '*=' )
            // iQuery.g:
            if ( this.input.LA(1)==47||(this.input.LA(1)>=51 && this.input.LA(1)<=54) ) {
                this.input.consume();
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    indexop_return: (function() {
        iQueryParser.indexop_return = function(){};
        org.antlr.lang.extend(iQueryParser.indexop_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
        });
        return;
    })(),

    // iQuery.g:323:1: indexop : ( EQ | GT | LT | NTH_CHILD );
    // $ANTLR start "indexop"
    indexop: function() {
        var retval = new iQueryParser.indexop_return();
        retval.start = this.input.LT(1);

        try {
            // iQuery.g:324:5: ( EQ | GT | LT | NTH_CHILD )
            // iQuery.g:
            if ( (this.input.LA(1)>=EQ && this.input.LA(1)<=NTH_CHILD) ) {
                this.input.consume();
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },


    // iQuery.g:330:1: selector_expression[candidates] returns [survival] : ( atom[$candidates] | ':' vop= indexop '(' vidx= FLOAT ')' | ':' NOT '(' selectors[$candidates] ')' | ':' CONTAINS '(' text= QUOTED_STRING ')' | ':' LAST_CHILD | ':' FIRST_CHILD | ':' FIRST | ':' LAST | ':' TEXT | ':' RADIO | ':' EMPTY | ':' VISIBLE | ':' HIDDEN | ':' FOCUS | ':' ENABLED | ':' DISABLED | ':' CHECKBOX | ':' BUTTON | ':' IMAGE | ':' LABEL | ':' PARENT | '#' ELEMENT );
    // $ANTLR start "selector_expression"
    selector_expression: function(candidates) {
        var survival = null;

        var vidx = null;
        var text = null;
        var ELEMENT9 = null;
         var vop = null;
         var atom7 = null;
         var selectors8 = null;

        try {
            // iQuery.g:331:5: ( atom[$candidates] | ':' vop= indexop '(' vidx= FLOAT ')' | ':' NOT '(' selectors[$candidates] ')' | ':' CONTAINS '(' text= QUOTED_STRING ')' | ':' LAST_CHILD | ':' FIRST_CHILD | ':' FIRST | ':' LAST | ':' TEXT | ':' RADIO | ':' EMPTY | ':' VISIBLE | ':' HIDDEN | ':' FOCUS | ':' ENABLED | ':' DISABLED | ':' CHECKBOX | ':' BUTTON | ':' IMAGE | ':' LABEL | ':' PARENT | '#' ELEMENT )
            var alt9=22;
            alt9 = this.dfa9.predict(this.input);
            switch (alt9) {
                case 1 :
                    // iQuery.g:331:7: atom[$candidates]
                    this.pushFollow(iQueryParser.FOLLOW_atom_in_selector_expression713);
                    atom7=this.atom(candidates);

                    this.state._fsp--;


                                survival = atom7;
                            


                    break;
                case 2 :
                    // iQuery.g:335:7: ':' vop= indexop '(' vidx= FLOAT ')'
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression732); 
                    this.pushFollow(iQueryParser.FOLLOW_indexop_in_selector_expression736);
                    vop=this.indexop();

                    this.state._fsp--;

                    this.match(this.input,55,iQueryParser.FOLLOW_55_in_selector_expression738); 
                    vidx=this.match(this.input,FLOAT,iQueryParser.FOLLOW_FLOAT_in_selector_expression742); 
                    this.match(this.input,56,iQueryParser.FOLLOW_56_in_selector_expression744); 

                                // this is ugly, because indexop is a token.
                                var optext = (vop?this.input.toString(vop.start,vop.stop):null);
                                debug("Matching \":" + optext + "(" + (vidx?vidx.getText():null) + ")\", with candidates:");
                    			debug(candidates);
                                survival = [];

                                var idx = parseInt((vidx?vidx.getText():null));
                                if ( optext == 'eq' ) {
                                    if ( idx < candidates.length ) {
                                        survival.push(candidates[idx]);
                                    }
                                } else if ( optext == 'gt' ) {
                                    for ( var i = idx + 1; i < candidates.length; ++i ) {
                                        survival.push(candidates[i]);
                                    }
                                } else if ( optext == 'lt' ) {
                                    for ( var i = 0; i < idx; ++i ) {
                                        survival.push(candidates[i]);
                                    }
                                } else if ( optext == 'nth-child' ) {
                                    for ( var i = 0; i < candidates.length; ++i ) {
                                        // the index is startd from 1
                                        var children = child(candidates[i]);
                                        if ( children.length == 1 && type(children[0]) == 'UIAApplication' ) {
                                            continue;
                                        }

                                        if ( idx > 0 && idx <= children.length ) {
                                            survival.push(children[idx - 1]);
                                        }
                                    }
                                }
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 3 :
                    // iQuery.g:372:7: ':' NOT '(' selectors[$candidates] ')'
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression762); 
                    this.match(this.input,NOT,iQueryParser.FOLLOW_NOT_in_selector_expression764); 
                    this.match(this.input,55,iQueryParser.FOLLOW_55_in_selector_expression766); 
                    this.pushFollow(iQueryParser.FOLLOW_selectors_in_selector_expression768);
                    selectors8=this.selectors(candidates);

                    this.state._fsp--;

                    this.match(this.input,56,iQueryParser.FOLLOW_56_in_selector_expression771); 

                                debug("Matching \":not\", with candidates:");
                    			debug(candidates);
                                survival = candidates.diff(selectors8);
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 4 :
                    // iQuery.g:397:7: ':' CONTAINS '(' text= QUOTED_STRING ')'
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression792); 
                    this.match(this.input,CONTAINS,iQueryParser.FOLLOW_CONTAINS_in_selector_expression794); 
                    this.match(this.input,55,iQueryParser.FOLLOW_55_in_selector_expression796); 
                    text=this.match(this.input,QUOTED_STRING,iQueryParser.FOLLOW_QUOTED_STRING_in_selector_expression800); 
                    this.match(this.input,56,iQueryParser.FOLLOW_56_in_selector_expression802); 

                                debug("Matching \":contains\", with candidates:");
                    			debug(candidates);
                    			survival = [];
                    			var expected = remove_quote((text?text.getText():null));
                    			for ( var i = 0; i < candidates.length; ++i ) {
                    				var c = candidates[i];
                    				var name = c.name != undefined ? c.name() : null;
                    				var value = c.value != undefined ? c.value() : null;
                    				var label = c.label != undefined ? c.label() : null;

                    				if ( name != null && name.indexOf != undefined && name.indexOf(expected) >= 0 ) {
                    					survival.push(c);
                    					continue;
                    				}
                    				if ( value != null && value.indexOf != undefined && value.indexOf(expected) >= 0 ) {
                    					survival.push(c);
                    					continue;
                    				}
                    				if ( label != null && label.indexOf != undefined && label.indexOf(expected) >= 0 ) {
                    					survival.push(c);
                    					continue;
                    				}
                    			}
                                debug("Matching  result:");
                    			debug(survival);
                    		


                    break;
                case 5 :
                    // iQuery.g:425:7: ':' LAST_CHILD
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression814); 
                    this.match(this.input,LAST_CHILD,iQueryParser.FOLLOW_LAST_CHILD_in_selector_expression816); 

                                debug("Matching \":last_child\", with candidates:");
                    			debug(candidates);
                                var result = [];
                                var len = candidates.length;
                                if ( len > 0 ) {
                                    for ( var i = 0; i < len; ++i ) {
                                        var elements = candidates[i].elements();
                                        if ( (elements != null) && (elements.length > 0) ) {
                                            result.push(elements[elements.length - 1]);
                                        }
                                    }
                                }

                                survival = result;
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 6 :
                    // iQuery.g:444:7: ':' FIRST_CHILD
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression834); 
                    this.match(this.input,FIRST_CHILD,iQueryParser.FOLLOW_FIRST_CHILD_in_selector_expression836); 

                                debug("Matching \":first_child\", with candidates:");
                    			debug(candidates);
                                var result = []; 
                                var len = candidates.length;
                                if ( len > 0 ) {
                                    for ( var i = 0; i < len; ++i ) {
                                        var elements = candidates[i].elements();
                                        if ( (elements != null) && (elements.length > 0) ) {
                                            result.push(elements[0]);
                                        }
                                    }
                                }

                                survival = result;     
                                debug("Matching  result:");
                    			debug(survival);      
                            


                    break;
                case 7 :
                    // iQuery.g:463:7: ':' FIRST
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression854); 
                    this.match(this.input,FIRST,iQueryParser.FOLLOW_FIRST_in_selector_expression856); 

                                debug("Matching \":first\", with candidates:");
                    			debug(candidates);
                                var result = [];
                                if ( candidates.length > 0 ) {
                                    result.push(candidates[0]);
                                }

                                survival = result;   
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 8 :
                    // iQuery.g:476:7: ':' LAST
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression874); 
                    this.match(this.input,LAST,iQueryParser.FOLLOW_LAST_in_selector_expression876); 

                                debug("Matching \":last\", with candidates:");
                    			debug(candidates);
                                var result = [];
                                if ( candidates.length > 0 ) {
                                    result.push(candidates[candidates.length - 1]);
                                }

                                survival = result;
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 9 :
                    // iQuery.g:489:7: ':' TEXT
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression894); 
                    this.match(this.input,TEXT,iQueryParser.FOLLOW_TEXT_in_selector_expression896); 

                                debug("Matching \":text\", with candidates:");
                    			debug(candidates);
                                survival = match(candidates, new Array("UIATextField", "UIATextView", "UIASecureTextField"));
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 10 :
                    // iQuery.g:497:7: ':' RADIO
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression914); 
                    this.match(this.input,RADIO,iQueryParser.FOLLOW_RADIO_in_selector_expression916); 

                                debug("Matching \":radio\", with candidates:");
                    			debug(candidates);
                                survival = match(candidates, new Array("UIASwitch"));
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 11 :
                    // iQuery.g:505:7: ':' EMPTY
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression934); 
                    this.match(this.input,EMPTY,iQueryParser.FOLLOW_EMPTY_in_selector_expression936); 

                                debug("Matching \":empty\", with candidates:");
                    			debug(candidates);
                    			survival = [];
                    			for ( var i = 0; i < candidates.length; ++i ) {
                                    var elements = candidates[i].elements().toArray();
                                    /*
                                    debug("elements[0]: " + elements[0] + ", typeof(elements[0]): " + typeof(elements[0]));               
                                    debug(elements[0] == null);
                                    */
                    				if (elements.length == 0 || type(elements[0]) == "UIAApplication" ) {
                    					survival.push(candidates[i]);
                    				}
                    			}
                                debug("Matching  result:");
                    			debug(survival);
                    		


                    break;
                case 12 :
                    // iQuery.g:523:7: ':' VISIBLE
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression948); 
                    this.match(this.input,VISIBLE,iQueryParser.FOLLOW_VISIBLE_in_selector_expression950); 

                                debug("Matching \":visible\", with candidates:");
                    			debug(candidates);
                    			survival = filterAttrs(candidates, "isVisible", true);
                                debug("Matching  result:");
                    			debug(survival);
                    		


                    break;
                case 13 :
                    // iQuery.g:531:7: ':' HIDDEN
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression962); 
                    this.match(this.input,HIDDEN,iQueryParser.FOLLOW_HIDDEN_in_selector_expression964); 

                                debug("Matching \":hidden\", with candidates:");
                    			debug(candidates);
                    			survival = filterAttrs(candidates, "isVisible", false);
                                debug("Matching  result:");
                    			debug(survival);
                    		


                    break;
                case 14 :
                    // iQuery.g:539:7: ':' FOCUS
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression976); 
                    this.match(this.input,FOCUS,iQueryParser.FOLLOW_FOCUS_in_selector_expression978); 

                                debug("Matching \":focus\", with candidates:");
                    			debug(candidates);
                    			survival = filterAttrs(candidates, "hasKeyboardFocus", true);
                                debug("Matching  result:");
                    			debug(survival);
                    		


                    break;
                case 15 :
                    // iQuery.g:547:4: ':' ENABLED
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression987); 
                    this.match(this.input,ENABLED,iQueryParser.FOLLOW_ENABLED_in_selector_expression989); 

                                debug("Matching \":enabled\", with candidates:");
                    			debug(candidates);
                    			survival = filterAttrs(candidates, "isEnabled", true);
                                debug("Matching  result:");
                    			debug(survival);
                    		


                    break;
                case 16 :
                    // iQuery.g:555:4: ':' DISABLED
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression998); 
                    this.match(this.input,DISABLED,iQueryParser.FOLLOW_DISABLED_in_selector_expression1000); 

                                debug("Matching \":disabled\", with candidates:");
                    			debug(candidates);
                    			survival = filterAttrs(candidates, "isEnabled", false);
                                debug("Matching  result:");
                    			debug(survival);
                    		


                    break;
                case 17 :
                    // iQuery.g:563:7: ':' CHECKBOX
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression1012); 
                    this.match(this.input,CHECKBOX,iQueryParser.FOLLOW_CHECKBOX_in_selector_expression1014); 

                                debug("Matching \":checkbox\", with candidates:");
                    			debug(candidates);
                                survival = match(candidates, "UIASwitch");
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 18 :
                    // iQuery.g:571:7: ':' BUTTON
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression1032); 
                    this.match(this.input,BUTTON,iQueryParser.FOLLOW_BUTTON_in_selector_expression1034); 

                                debug("Matching \":button\", with candidates:");
                    			debug(candidates);
                                survival = match(candidates, "UIAButton");
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 19 :
                    // iQuery.g:579:7: ':' IMAGE
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression1052); 
                    this.match(this.input,IMAGE,iQueryParser.FOLLOW_IMAGE_in_selector_expression1054); 

                                debug("Matching \":image\", with candidates:");
                    			debug(candidates);
                                // ios doesn't have a image control
                                // An image gallery is really nothing but a tableview in which each row displays 
                                // several images side by side. By using a custom cell without borders, you create 
                                // the illusion of a grid of images
                                //
                                // from: http://stackoverflow.com/questions/4374569/ipad-control-for-creating-an-image-gallery
                                // survival = [];
                                survival = match(candidates, "UIAImage");
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 20 :
                    // iQuery.g:594:7: ':' LABEL
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression1072); 
                    this.match(this.input,LABEL,iQueryParser.FOLLOW_LABEL_in_selector_expression1074); 

                                debug("Matching \":label\", with candidates:");
                    			debug(candidates);
                                survival = match(candidates, new Array("UIAStaticText", "UIAStatusBar", "UIALink"));
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 21 :
                    // iQuery.g:602:7: ':' PARENT
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression1092); 
                    this.match(this.input,PARENT,iQueryParser.FOLLOW_PARENT_in_selector_expression1094); 

                                debug("Matching \":parent\", with candidates:");
                    			debug(candidates);
                                survival = [];
                                for ( var i = 0; i < candidates.length; ++i ) {
                                    var p = candidates[i].parent();
                                    if ( p != null && survival.indexOf(p) < 0 ) {
                                        survival.push(p);
                                    }
                                }
                                debug("Matching result:");
                    			debug(survival);
                            


                    break;
                case 22 :
                    // iQuery.g:616:7: '#' ELEMENT
                    this.match(this.input,57,iQueryParser.FOLLOW_57_in_selector_expression1112); 
                    ELEMENT9=this.match(this.input,ELEMENT,iQueryParser.FOLLOW_ELEMENT_in_selector_expression1114); 

                                debug("Matching \"#" + (ELEMENT9?ELEMENT9.getText():null) + "\", with candidates:");
                                debug(candidates);

                                survival = descendant(candidates, 1024, function(c) {
                                        return c.name != undefined && c.name() == (ELEMENT9?ELEMENT9.getText():null);
                                    });
                                /*
                                survival = [];
                                for ( var i = 0;i < candidates.length; ++i ) { 
                                    var candidate = candidates[i];
                                    if ( candidate.name != undefined && candidate.name == (ELEMENT9?ELEMENT9.getText():null) ) {
                                        survival.push(candidate);
                                    }
                                }
                                */

                                debug("Matching result:");
                                debug(survival);
                            


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return survival;
    },


    // iQuery.g:639:1: atom[candidates] returns [survival] : ( ASTERISK | ELEMENT );
    // $ANTLR start "atom"
    atom: function(candidates) {
        var survival = null;

        var ELEMENT10 = null;

        try {
            // iQuery.g:640:5: ( ASTERISK | ELEMENT )
            var alt10=2;
            var LA10_0 = this.input.LA(1);

            if ( (LA10_0==ASTERISK) ) {
                alt10=1;
            }
            else if ( (LA10_0==ELEMENT) ) {
                alt10=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 10, 0, this.input);

                throw nvae;
            }
            switch (alt10) {
                case 1 :
                    // iQuery.g:640:7: ASTERISK
                    this.match(this.input,ASTERISK,iQueryParser.FOLLOW_ASTERISK_in_atom1148); 

                                debug("Matching \"*\"");
                    			debug(candidates);
                                survival = candidates;
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 2 :
                    // iQuery.g:648:7: ELEMENT
                    ELEMENT10=this.match(this.input,ELEMENT,iQueryParser.FOLLOW_ELEMENT_in_atom1166); 

                                debug("Matching \"" + (ELEMENT10?ELEMENT10.getText():null) + "\", with candidates:");
                    			debug(candidates);
                                survival = match(candidates, (ELEMENT10?ELEMENT10.getText():null));
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return survival;
    }

    // Delegated rules




}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(iQueryParser, {
    DFA8_eotS:
        "\u000c\uffff",
    DFA8_eofS:
        "\u000c\uffff",
    DFA8_minS:
        "\u0001\u0030\u0001\u0007\u0001\u0029\u0001\u0007\u0001\uffff\u0001"+
    "\u0006\u0002\uffff\u0001\u0029\u0001\u0006\u0002\uffff",
    DFA8_maxS:
        "\u0001\u0030\u0001\u0032\u0001\u0036\u0001\u0007\u0001\uffff\u0001"+
    "\u0009\u0002\uffff\u0001\u0036\u0001\u0009\u0002\uffff",
    DFA8_acceptS:
        "\u0004\uffff\u0001\u0005\u0001\uffff\u0001\u0001\u0001\u0003\u0002"+
    "\uffff\u0001\u0002\u0001\u0004",
    DFA8_specialS:
        "\u000c\uffff}>",
    DFA8_transitionS: [
            "\u0001\u0001",
            "\u0001\u0002\u002a\uffff\u0001\u0003",
            "\u0001\u0007\u0002\uffff\u0003\u0007\u0001\u0005\u0001\uffff"+
            "\u0001\u0004\u0001\uffff\u0004\u0006",
            "\u0001\u0008",
            "",
            "\u0001\u0007\u0001\uffff\u0001\u0006\u0001\u0007",
            "",
            "",
            "\u0001\u000b\u0002\uffff\u0003\u000b\u0001\u0009\u0003\uffff"+
            "\u0004\u000a",
            "\u0001\u000b\u0001\uffff\u0001\u000a\u0001\u000b",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(iQueryParser, {
    DFA8_eot:
        org.antlr.runtime.DFA.unpackEncodedString(iQueryParser.DFA8_eotS),
    DFA8_eof:
        org.antlr.runtime.DFA.unpackEncodedString(iQueryParser.DFA8_eofS),
    DFA8_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(iQueryParser.DFA8_minS),
    DFA8_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(iQueryParser.DFA8_maxS),
    DFA8_accept:
        org.antlr.runtime.DFA.unpackEncodedString(iQueryParser.DFA8_acceptS),
    DFA8_special:
        org.antlr.runtime.DFA.unpackEncodedString(iQueryParser.DFA8_specialS),
    DFA8_transition: (function() {
        var a = [],
            i,
            numStates = iQueryParser.DFA8_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(iQueryParser.DFA8_transitionS[i]));
        }
        return a;
    })()
});

iQueryParser.DFA8 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 8;
    this.eot = iQueryParser.DFA8_eot;
    this.eof = iQueryParser.DFA8_eof;
    this.min = iQueryParser.DFA8_min;
    this.max = iQueryParser.DFA8_max;
    this.accept = iQueryParser.DFA8_accept;
    this.special = iQueryParser.DFA8_special;
    this.transition = iQueryParser.DFA8_transition;
};

org.antlr.lang.extend(iQueryParser.DFA8, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "143:1: multi_attributes[candidates] returns [survival] : ( '[' attr= ELEMENT op v= QUOTED_STRING ']' | '[' ':' attr= ELEMENT op v= QUOTED_STRING ']' | '[' attr= ELEMENT num_comp_op v= ( FLOAT | PERCENTAGE ) ']' | '[' ':' attr= ELEMENT num_comp_op v= ( FLOAT | PERCENTAGE ) ']' | '[' attr= ELEMENT ']' );";
    },
    dummy: null
});
org.antlr.lang.augmentObject(iQueryParser, {
    DFA9_eotS:
        "\u0018\uffff",
    DFA9_eofS:
        "\u0018\uffff",
    DFA9_minS:
        "\u0001\u0007\u0001\uffff\u0001\u000a\u0015\uffff",
    DFA9_maxS:
        "\u0001\u0039\u0001\uffff\u0001\u0020\u0015\uffff",
    DFA9_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\uffff\u0001\u0016\u0001\u0003\u0001"+
    "\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0001\u0008\u0001\u0009\u0001"+
    "\u000a\u0001\u000b\u0001\u000c\u0001\u000d\u0001\u000e\u0001\u000f\u0001"+
    "\u0010\u0001\u0011\u0001\u0012\u0001\u0013\u0001\u0014\u0001\u0015\u0001"+
    "\u0002",
    DFA9_specialS:
        "\u0018\uffff}>",
    DFA9_transitionS: [
            "\u0001\u0001\u0019\uffff\u0001\u0001\u0010\uffff\u0001\u0002"+
            "\u0006\uffff\u0001\u0003",
            "",
            "\u0004\u0017\u0001\u0004\u0001\u0005\u0001\u0006\u0001\u0007"+
            "\u0001\u0008\u0001\u0009\u0001\u000a\u0001\u000b\u0001\u000c"+
            "\u0001\u000d\u0001\u000e\u0001\u000f\u0001\u0010\u0001\u0011"+
            "\u0001\u0012\u0001\u0013\u0001\u0014\u0001\u0015\u0001\u0016",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(iQueryParser, {
    DFA9_eot:
        org.antlr.runtime.DFA.unpackEncodedString(iQueryParser.DFA9_eotS),
    DFA9_eof:
        org.antlr.runtime.DFA.unpackEncodedString(iQueryParser.DFA9_eofS),
    DFA9_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(iQueryParser.DFA9_minS),
    DFA9_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(iQueryParser.DFA9_maxS),
    DFA9_accept:
        org.antlr.runtime.DFA.unpackEncodedString(iQueryParser.DFA9_acceptS),
    DFA9_special:
        org.antlr.runtime.DFA.unpackEncodedString(iQueryParser.DFA9_specialS),
    DFA9_transition: (function() {
        var a = [],
            i,
            numStates = iQueryParser.DFA9_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(iQueryParser.DFA9_transitionS[i]));
        }
        return a;
    })()
});

iQueryParser.DFA9 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 9;
    this.eot = iQueryParser.DFA9_eot;
    this.eof = iQueryParser.DFA9_eof;
    this.min = iQueryParser.DFA9_min;
    this.max = iQueryParser.DFA9_max;
    this.accept = iQueryParser.DFA9_accept;
    this.special = iQueryParser.DFA9_special;
    this.transition = iQueryParser.DFA9_transition;
};

org.antlr.lang.extend(iQueryParser.DFA9, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "330:1: selector_expression[candidates] returns [survival] : ( atom[$candidates] | ':' vop= indexop '(' vidx= FLOAT ')' | ':' NOT '(' selectors[$candidates] ')' | ':' CONTAINS '(' text= QUOTED_STRING ')' | ':' LAST_CHILD | ':' FIRST_CHILD | ':' FIRST | ':' LAST | ':' TEXT | ':' RADIO | ':' EMPTY | ':' VISIBLE | ':' HIDDEN | ':' FOCUS | ':' ENABLED | ':' DISABLED | ':' CHECKBOX | ':' BUTTON | ':' IMAGE | ':' LABEL | ':' PARENT | '#' ELEMENT );";
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(iQueryParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "NEWLINE", "DESCENDANT", "FLOAT", "ELEMENT", "QUOTED_STRING", "PERCENTAGE", "EQ", "GT", "LT", "NTH_CHILD", "NOT", "CONTAINS", "LAST_CHILD", "FIRST_CHILD", "FIRST", "LAST", "TEXT", "RADIO", "EMPTY", "VISIBLE", "HIDDEN", "FOCUS", "ENABLED", "DISABLED", "CHECKBOX", "BUTTON", "IMAGE", "LABEL", "PARENT", "ASTERISK", "HAS", "CHECKED", "PREV", "NEXT", "SIBLINGS", "DIGIT", "WS", "'>'", "'+'", "'~'", "'<'", "'>='", "'<='", "'='", "'['", "']'", "':'", "'!='", "'$='", "'^='", "'*='", "'('", "')'", "'#'"],
    FOLLOW_selectors_in_prog54: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_NEWLINE_in_prog57: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_EOF_in_prog60: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NEWLINE_in_prog78: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_EOF_in_prog81: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_multi_selectors_in_selectors107: new org.antlr.runtime.BitSet([0x000000A2, 0x02050202]),
    FOLLOW_multi_selectors_in_selectors113: new org.antlr.runtime.BitSet([0x000000A2, 0x02050202]),
    FOLLOW_selector_in_multi_selectors160: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_41_in_multi_selectors179: new org.antlr.runtime.BitSet([0x00000080, 0x02050002]),
    FOLLOW_selector_in_multi_selectors183: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_DESCENDANT_in_multi_selectors202: new org.antlr.runtime.BitSet([0x00000080, 0x02050002]),
    FOLLOW_selector_in_multi_selectors206: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_41_in_multi_selectors225: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_FLOAT_in_multi_selectors229: new org.antlr.runtime.BitSet([0x00000080, 0x02050002]),
    FOLLOW_selector_in_multi_selectors233: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_selector_expression_in_selector270: new org.antlr.runtime.BitSet([0x00000002, 0x00000C00]),
    FOLLOW_42_in_selector297: new org.antlr.runtime.BitSet([0x00000080, 0x02040002]),
    FOLLOW_selector_expression_in_selector301: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_43_in_selector328: new org.antlr.runtime.BitSet([0x00000080, 0x02040002]),
    FOLLOW_selector_expression_in_selector332: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_multi_attributes_in_selector363: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_num_comp_op0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_48_in_multi_attributes447: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ELEMENT_in_multi_attributes451: new org.antlr.runtime.BitSet([0x00000000, 0x00788000]),
    FOLLOW_op_in_multi_attributes453: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_QUOTED_STRING_in_multi_attributes457: new org.antlr.runtime.BitSet([0x00000000, 0x00020000]),
    FOLLOW_49_in_multi_attributes459: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_48_in_multi_attributes477: new org.antlr.runtime.BitSet([0x00000000, 0x00040000]),
    FOLLOW_50_in_multi_attributes479: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ELEMENT_in_multi_attributes483: new org.antlr.runtime.BitSet([0x00000000, 0x00788000]),
    FOLLOW_op_in_multi_attributes485: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_QUOTED_STRING_in_multi_attributes489: new org.antlr.runtime.BitSet([0x00000000, 0x00020000]),
    FOLLOW_49_in_multi_attributes491: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_48_in_multi_attributes509: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ELEMENT_in_multi_attributes513: new org.antlr.runtime.BitSet([0x00000000, 0x0000F200]),
    FOLLOW_num_comp_op_in_multi_attributes515: new org.antlr.runtime.BitSet([0x00000240, 0x00000000]),
    FOLLOW_set_in_multi_attributes519: new org.antlr.runtime.BitSet([0x00000000, 0x00020000]),
    FOLLOW_49_in_multi_attributes527: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_48_in_multi_attributes545: new org.antlr.runtime.BitSet([0x00000000, 0x00040000]),
    FOLLOW_50_in_multi_attributes547: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ELEMENT_in_multi_attributes551: new org.antlr.runtime.BitSet([0x00000000, 0x0000F200]),
    FOLLOW_num_comp_op_in_multi_attributes553: new org.antlr.runtime.BitSet([0x00000240, 0x00000000]),
    FOLLOW_set_in_multi_attributes557: new org.antlr.runtime.BitSet([0x00000000, 0x00020000]),
    FOLLOW_49_in_multi_attributes565: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_48_in_multi_attributes583: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ELEMENT_in_multi_attributes587: new org.antlr.runtime.BitSet([0x00000000, 0x00020000]),
    FOLLOW_49_in_multi_attributes589: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_op0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_indexop0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_atom_in_selector_expression713: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression732: new org.antlr.runtime.BitSet([0x00003C00, 0x00000000]),
    FOLLOW_indexop_in_selector_expression736: new org.antlr.runtime.BitSet([0x00000000, 0x00800000]),
    FOLLOW_55_in_selector_expression738: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_FLOAT_in_selector_expression742: new org.antlr.runtime.BitSet([0x00000000, 0x01000000]),
    FOLLOW_56_in_selector_expression744: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression762: new org.antlr.runtime.BitSet([0x00004000, 0x00000000]),
    FOLLOW_NOT_in_selector_expression764: new org.antlr.runtime.BitSet([0x00000000, 0x00800000]),
    FOLLOW_55_in_selector_expression766: new org.antlr.runtime.BitSet([0x000000A0, 0x02050202]),
    FOLLOW_selectors_in_selector_expression768: new org.antlr.runtime.BitSet([0x00000000, 0x01000000]),
    FOLLOW_56_in_selector_expression771: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression792: new org.antlr.runtime.BitSet([0x00008000, 0x00000000]),
    FOLLOW_CONTAINS_in_selector_expression794: new org.antlr.runtime.BitSet([0x00000000, 0x00800000]),
    FOLLOW_55_in_selector_expression796: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_QUOTED_STRING_in_selector_expression800: new org.antlr.runtime.BitSet([0x00000000, 0x01000000]),
    FOLLOW_56_in_selector_expression802: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression814: new org.antlr.runtime.BitSet([0x00010000, 0x00000000]),
    FOLLOW_LAST_CHILD_in_selector_expression816: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression834: new org.antlr.runtime.BitSet([0x00020000, 0x00000000]),
    FOLLOW_FIRST_CHILD_in_selector_expression836: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression854: new org.antlr.runtime.BitSet([0x00040000, 0x00000000]),
    FOLLOW_FIRST_in_selector_expression856: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression874: new org.antlr.runtime.BitSet([0x00080000, 0x00000000]),
    FOLLOW_LAST_in_selector_expression876: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression894: new org.antlr.runtime.BitSet([0x00100000, 0x00000000]),
    FOLLOW_TEXT_in_selector_expression896: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression914: new org.antlr.runtime.BitSet([0x00200000, 0x00000000]),
    FOLLOW_RADIO_in_selector_expression916: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression934: new org.antlr.runtime.BitSet([0x00400000, 0x00000000]),
    FOLLOW_EMPTY_in_selector_expression936: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression948: new org.antlr.runtime.BitSet([0x00800000, 0x00000000]),
    FOLLOW_VISIBLE_in_selector_expression950: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression962: new org.antlr.runtime.BitSet([0x01000000, 0x00000000]),
    FOLLOW_HIDDEN_in_selector_expression964: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression976: new org.antlr.runtime.BitSet([0x02000000, 0x00000000]),
    FOLLOW_FOCUS_in_selector_expression978: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression987: new org.antlr.runtime.BitSet([0x04000000, 0x00000000]),
    FOLLOW_ENABLED_in_selector_expression989: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression998: new org.antlr.runtime.BitSet([0x08000000, 0x00000000]),
    FOLLOW_DISABLED_in_selector_expression1000: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression1012: new org.antlr.runtime.BitSet([0x10000000, 0x00000000]),
    FOLLOW_CHECKBOX_in_selector_expression1014: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression1032: new org.antlr.runtime.BitSet([0x20000000, 0x00000000]),
    FOLLOW_BUTTON_in_selector_expression1034: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression1052: new org.antlr.runtime.BitSet([0x40000000, 0x00000000]),
    FOLLOW_IMAGE_in_selector_expression1054: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression1072: new org.antlr.runtime.BitSet([0x80000000, 0x00000000]),
    FOLLOW_LABEL_in_selector_expression1074: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_selector_expression1092: new org.antlr.runtime.BitSet([0x00000000, 0x00000001]),
    FOLLOW_PARENT_in_selector_expression1094: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_57_in_selector_expression1112: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ELEMENT_in_selector_expression1114: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ASTERISK_in_atom1148: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ELEMENT_in_atom1166: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();