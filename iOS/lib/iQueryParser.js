// $ANTLR 3.3 Nov 30, 2010 12:50:56 iQuery.g 2012-09-18 14:49:54

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
        this.registerPseudoAttr = function(attr, functor) {
            this._pseudo_attrs[attr] = functor;
        }

        this._pseudo_classes = new Object();
        this.registerPseudoClass = function(cls, functor) {
            this._pseudo_classes[cls] = functor;
        }

        this.filterPseudo = function(candidates, cls) {
            return _filterPseudoImpl(candidates, cls, this._pseudo_classes, _errors);
        }

        this.setTemplate = function(template) {
            if ( template != null ) {
                this._pseudo_attrs = template._pseudo_attrs;
                this._pseudo_classes = template._pseudo_classes;
            }
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
    T__35: 35,
    T__36: 36,
    T__37: 37,
    T__38: 38,
    T__39: 39,
    T__40: 40,
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
    EMPTY: 20,
    VISIBLE: 21,
    HIDDEN: 22,
    FOCUS: 23,
    ENABLED: 24,
    DISABLED: 25,
    PARENT: 26,
    ASTERISK: 27,
    HAS: 28,
    CHECKED: 29,
    PREV: 30,
    NEXT: 31,
    SIBLINGS: 32,
    DIGIT: 33,
    WS: 34
});

(function(){
// public class variables
var EOF= -1,
    T__35= 35,
    T__36= 36,
    T__37= 37,
    T__38= 38,
    T__39= 39,
    T__40= 40,
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
    EMPTY= 20,
    VISIBLE= 21,
    HIDDEN= 22,
    FOCUS= 23,
    ENABLED= 24,
    DISABLED= 25,
    PARENT= 26,
    ASTERISK= 27,
    HAS= 28,
    CHECKED= 29,
    PREV= 30,
    NEXT= 31,
    SIBLINGS= 32,
    DIGIT= 33,
    WS= 34;

// public instance methods/vars
org.antlr.lang.extend(iQueryParser, org.antlr.runtime.Parser, {
        

    getTokenNames: function() { return iQueryParser.tokenNames; },
    getGrammarFileName: function() { return "iQuery.g"; }
});
org.antlr.lang.augmentObject(iQueryParser.prototype, {


    // iQuery.g:60:1: prog[candidates] returns [survival] : (p= selectors[$candidates] ( NEWLINE )* EOF | ( NEWLINE )* EOF );
    // $ANTLR start "prog"
    prog: function(candidates) {
        var survival = null;

         var p = null;

        try {
            // iQuery.g:61:5: (p= selectors[$candidates] ( NEWLINE )* EOF | ( NEWLINE )* EOF )
            var alt3=2;
            var LA3_0 = this.input.LA(1);

            if ( (LA3_0==DESCENDANT||LA3_0==ELEMENT||LA3_0==ASTERISK||LA3_0==35||LA3_0==42||LA3_0==44||LA3_0==51) ) {
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
                    // iQuery.g:61:7: p= selectors[$candidates] ( NEWLINE )* EOF
                    this.pushFollow(iQueryParser.FOLLOW_selectors_in_prog54);
                    p=this.selectors(candidates);

                    this.state._fsp--;

                    // iQuery.g:61:32: ( NEWLINE )*
                    loop1:
                    do {
                        var alt1=2;
                        var LA1_0 = this.input.LA(1);

                        if ( (LA1_0==NEWLINE) ) {
                            alt1=1;
                        }


                        switch (alt1) {
                        case 1 :
                            // iQuery.g:61:32: NEWLINE
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
                    // iQuery.g:65:7: ( NEWLINE )* EOF
                    // iQuery.g:65:7: ( NEWLINE )*
                    loop2:
                    do {
                        var alt2=2;
                        var LA2_0 = this.input.LA(1);

                        if ( (LA2_0==NEWLINE) ) {
                            alt2=1;
                        }


                        switch (alt2) {
                        case 1 :
                            // iQuery.g:65:7: NEWLINE
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


    // iQuery.g:68:1: selectors[candidates] returns [survival] : p= multi_selectors[$candidates] (c= multi_selectors[($c.survival == undefined || $c.survival == null) ? $p.survival : $c.survival] )* ;
    // $ANTLR start "selectors"
    selectors: function(candidates) {
        var survival = null;

         var p = null;
         var c = null;

        try {
            // iQuery.g:69:5: (p= multi_selectors[$candidates] (c= multi_selectors[($c.survival == undefined || $c.survival == null) ? $p.survival : $c.survival] )* )
            // iQuery.g:69:7: p= multi_selectors[$candidates] (c= multi_selectors[($c.survival == undefined || $c.survival == null) ? $p.survival : $c.survival] )*
            this.pushFollow(iQueryParser.FOLLOW_multi_selectors_in_selectors107);
            p=this.multi_selectors(candidates);

            this.state._fsp--;

            // iQuery.g:69:38: (c= multi_selectors[($c.survival == undefined || $c.survival == null) ? $p.survival : $c.survival] )*
            loop4:
            do {
                var alt4=2;
                var LA4_0 = this.input.LA(1);

                if ( (LA4_0==DESCENDANT||LA4_0==ELEMENT||LA4_0==ASTERISK||LA4_0==35||LA4_0==42||LA4_0==44||LA4_0==51) ) {
                    alt4=1;
                }


                switch (alt4) {
                case 1 :
                    // iQuery.g:69:39: c= multi_selectors[($c.survival == undefined || $c.survival == null) ? $p.survival : $c.survival]
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


    // iQuery.g:79:1: multi_selectors[candidates] returns [survival] : ( selector[$candidates] | '>' c= selector[child($candidates)] | DESCENDANT c= selector[descendant($candidates)] | '>' level= FLOAT c= selector[descendant($candidates, parseInt($level.text, 10))] );
    // $ANTLR start "multi_selectors"
    multi_selectors: function(candidates) {
        var survival = null;

        var level = null;
         var c = null;
         var selector1 = null;

        try {
            // iQuery.g:80:5: ( selector[$candidates] | '>' c= selector[child($candidates)] | DESCENDANT c= selector[descendant($candidates)] | '>' level= FLOAT c= selector[descendant($candidates, parseInt($level.text, 10))] )
            var alt5=4;
            switch ( this.input.LA(1) ) {
            case ELEMENT:
            case ASTERISK:
            case 42:
            case 44:
            case 51:
                alt5=1;
                break;
            case 35:
                var LA5_2 = this.input.LA(2);

                if ( (LA5_2==FLOAT) ) {
                    alt5=4;
                }
                else if ( (LA5_2==ELEMENT||LA5_2==ASTERISK||LA5_2==42||LA5_2==44||LA5_2==51) ) {
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
                    // iQuery.g:80:7: selector[$candidates]
                    this.pushFollow(iQueryParser.FOLLOW_selector_in_multi_selectors157);
                    selector1=this.selector(candidates);

                    this.state._fsp--;


                                survival = selector1;
                            


                    break;
                case 2 :
                    // iQuery.g:84:7: '>' c= selector[child($candidates)]
                    this.match(this.input,35,iQueryParser.FOLLOW_35_in_multi_selectors176); 
                    this.pushFollow(iQueryParser.FOLLOW_selector_in_multi_selectors180);
                    c=this.selector(child(candidates));

                    this.state._fsp--;


                                debug("Matched \">\"");
                                survival = c;
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 3 :
                    // iQuery.g:91:7: DESCENDANT c= selector[descendant($candidates)]
                    this.match(this.input,DESCENDANT,iQueryParser.FOLLOW_DESCENDANT_in_multi_selectors199); 
                    this.pushFollow(iQueryParser.FOLLOW_selector_in_multi_selectors203);
                    c=this.selector(descendant(candidates));

                    this.state._fsp--;


                                debug("Matched \">>\"");
                                survival = c;
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 4 :
                    // iQuery.g:98:7: '>' level= FLOAT c= selector[descendant($candidates, parseInt($level.text, 10))]
                    this.match(this.input,35,iQueryParser.FOLLOW_35_in_multi_selectors222); 
                    level=this.match(this.input,FLOAT,iQueryParser.FOLLOW_FLOAT_in_multi_selectors226); 
                    this.pushFollow(iQueryParser.FOLLOW_selector_in_multi_selectors230);
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


    // iQuery.g:107:1: selector[candidates] returns [survival] : (p= selector_expression[$candidates] ( ( '+' n= selector_expression[next($candidates, $p.survival)] ) | ( '~' n= selector_expression[siblings($candidates, $p.survival)] ) )? | multi_attributes[$candidates] );
    // $ANTLR start "selector"
    selector: function(candidates) {
        var survival = null;

         var p = null;
         var n = null;
         var multi_attributes2 = null;

        try {
            // iQuery.g:108:5: (p= selector_expression[$candidates] ( ( '+' n= selector_expression[next($candidates, $p.survival)] ) | ( '~' n= selector_expression[siblings($candidates, $p.survival)] ) )? | multi_attributes[$candidates] )
            var alt7=2;
            var LA7_0 = this.input.LA(1);

            if ( (LA7_0==ELEMENT||LA7_0==ASTERISK||LA7_0==44||LA7_0==51) ) {
                alt7=1;
            }
            else if ( (LA7_0==42) ) {
                alt7=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 7, 0, this.input);

                throw nvae;
            }
            switch (alt7) {
                case 1 :
                    // iQuery.g:108:7: p= selector_expression[$candidates] ( ( '+' n= selector_expression[next($candidates, $p.survival)] ) | ( '~' n= selector_expression[siblings($candidates, $p.survival)] ) )?
                    this.pushFollow(iQueryParser.FOLLOW_selector_expression_in_selector267);
                    p=this.selector_expression(candidates);

                    this.state._fsp--;

                    // iQuery.g:109:9: ( ( '+' n= selector_expression[next($candidates, $p.survival)] ) | ( '~' n= selector_expression[siblings($candidates, $p.survival)] ) )?
                    var alt6=3;
                    var LA6_0 = this.input.LA(1);

                    if ( (LA6_0==36) ) {
                        alt6=1;
                    }
                    else if ( (LA6_0==37) ) {
                        alt6=2;
                    }
                    switch (alt6) {
                        case 1 :
                            // iQuery.g:110:13: ( '+' n= selector_expression[next($candidates, $p.survival)] )
                            // iQuery.g:110:13: ( '+' n= selector_expression[next($candidates, $p.survival)] )
                            // iQuery.g:110:14: '+' n= selector_expression[next($candidates, $p.survival)]
                            this.match(this.input,36,iQueryParser.FOLLOW_36_in_selector294); 
                            this.pushFollow(iQueryParser.FOLLOW_selector_expression_in_selector298);
                            n=this.selector_expression(next(candidates, p));

                            this.state._fsp--;






                            break;
                        case 2 :
                            // iQuery.g:112:13: ( '~' n= selector_expression[siblings($candidates, $p.survival)] )
                            // iQuery.g:112:13: ( '~' n= selector_expression[siblings($candidates, $p.survival)] )
                            // iQuery.g:112:14: '~' n= selector_expression[siblings($candidates, $p.survival)]
                            this.match(this.input,37,iQueryParser.FOLLOW_37_in_selector325); 
                            this.pushFollow(iQueryParser.FOLLOW_selector_expression_in_selector329);
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
                    // iQuery.g:121:7: multi_attributes[$candidates]
                    this.pushFollow(iQueryParser.FOLLOW_multi_attributes_in_selector360);
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

    // iQuery.g:127:1: num_comp_op : ( '>' | '<' | '>=' | '<=' | '=' );
    // $ANTLR start "num_comp_op"
    num_comp_op: function() {
        var retval = new iQueryParser.num_comp_op_return();
        retval.start = this.input.LT(1);

        try {
            // iQuery.g:128:5: ( '>' | '<' | '>=' | '<=' | '=' )
            // iQuery.g:
            if ( this.input.LA(1)==35||(this.input.LA(1)>=38 && this.input.LA(1)<=41) ) {
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


    // iQuery.g:135:1: multi_attributes[candidates] returns [survival] : ( '[' attr= ELEMENT op v= QUOTED_STRING ']' | '[' ':' attr= ELEMENT op v= QUOTED_STRING ']' | '[' attr= ELEMENT num_comp_op v= ( FLOAT | PERCENTAGE ) ']' | '[' ':' attr= ELEMENT num_comp_op v= ( FLOAT | PERCENTAGE ) ']' | '[' attr= ELEMENT ']' );
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
            // iQuery.g:136:5: ( '[' attr= ELEMENT op v= QUOTED_STRING ']' | '[' ':' attr= ELEMENT op v= QUOTED_STRING ']' | '[' attr= ELEMENT num_comp_op v= ( FLOAT | PERCENTAGE ) ']' | '[' ':' attr= ELEMENT num_comp_op v= ( FLOAT | PERCENTAGE ) ']' | '[' attr= ELEMENT ']' )
            var alt8=5;
            alt8 = this.dfa8.predict(this.input);
            switch (alt8) {
                case 1 :
                    // iQuery.g:136:7: '[' attr= ELEMENT op v= QUOTED_STRING ']'
                    this.match(this.input,42,iQueryParser.FOLLOW_42_in_multi_attributes444); 
                    attr=this.match(this.input,ELEMENT,iQueryParser.FOLLOW_ELEMENT_in_multi_attributes448); 
                    this.pushFollow(iQueryParser.FOLLOW_op_in_multi_attributes450);
                    op3=this.op();

                    this.state._fsp--;

                    v=this.match(this.input,QUOTED_STRING,iQueryParser.FOLLOW_QUOTED_STRING_in_multi_attributes454); 
                    this.match(this.input,43,iQueryParser.FOLLOW_43_in_multi_attributes456); 

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
                    // iQuery.g:176:7: '[' ':' attr= ELEMENT op v= QUOTED_STRING ']'
                    this.match(this.input,42,iQueryParser.FOLLOW_42_in_multi_attributes474); 
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_multi_attributes476); 
                    attr=this.match(this.input,ELEMENT,iQueryParser.FOLLOW_ELEMENT_in_multi_attributes480); 
                    this.pushFollow(iQueryParser.FOLLOW_op_in_multi_attributes482);
                    op4=this.op();

                    this.state._fsp--;

                    v=this.match(this.input,QUOTED_STRING,iQueryParser.FOLLOW_QUOTED_STRING_in_multi_attributes486); 
                    this.match(this.input,43,iQueryParser.FOLLOW_43_in_multi_attributes488); 

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
                    // iQuery.g:212:7: '[' attr= ELEMENT num_comp_op v= ( FLOAT | PERCENTAGE ) ']'
                    this.match(this.input,42,iQueryParser.FOLLOW_42_in_multi_attributes506); 
                    attr=this.match(this.input,ELEMENT,iQueryParser.FOLLOW_ELEMENT_in_multi_attributes510); 
                    this.pushFollow(iQueryParser.FOLLOW_num_comp_op_in_multi_attributes512);
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

                    this.match(this.input,43,iQueryParser.FOLLOW_43_in_multi_attributes524); 

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
                    // iQuery.g:249:7: '[' ':' attr= ELEMENT num_comp_op v= ( FLOAT | PERCENTAGE ) ']'
                    this.match(this.input,42,iQueryParser.FOLLOW_42_in_multi_attributes542); 
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_multi_attributes544); 
                    attr=this.match(this.input,ELEMENT,iQueryParser.FOLLOW_ELEMENT_in_multi_attributes548); 
                    this.pushFollow(iQueryParser.FOLLOW_num_comp_op_in_multi_attributes550);
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

                    this.match(this.input,43,iQueryParser.FOLLOW_43_in_multi_attributes562); 

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
                    // iQuery.g:286:7: '[' attr= ELEMENT ']'
                    this.match(this.input,42,iQueryParser.FOLLOW_42_in_multi_attributes580); 
                    attr=this.match(this.input,ELEMENT,iQueryParser.FOLLOW_ELEMENT_in_multi_attributes584); 
                    this.match(this.input,43,iQueryParser.FOLLOW_43_in_multi_attributes586); 

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

    // iQuery.g:307:1: op : ( '=' | '!=' | '$=' | '^=' | '*=' );
    // $ANTLR start "op"
    op: function() {
        var retval = new iQueryParser.op_return();
        retval.start = this.input.LT(1);

        try {
            // iQuery.g:308:5: ( '=' | '!=' | '$=' | '^=' | '*=' )
            // iQuery.g:
            if ( this.input.LA(1)==41||(this.input.LA(1)>=45 && this.input.LA(1)<=48) ) {
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

    // iQuery.g:315:1: indexop : ( EQ | GT | LT | NTH_CHILD );
    // $ANTLR start "indexop"
    indexop: function() {
        var retval = new iQueryParser.indexop_return();
        retval.start = this.input.LT(1);

        try {
            // iQuery.g:316:5: ( EQ | GT | LT | NTH_CHILD )
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


    // iQuery.g:322:1: selector_expression[candidates] returns [survival] : ( atom[$candidates] | ':' vop= indexop '(' vidx= FLOAT ')' | ':' NOT '(' selectors[$candidates] ')' | ':' CONTAINS '(' text= QUOTED_STRING ')' | ':' LAST_CHILD | ':' FIRST_CHILD | ':' FIRST | ':' LAST | ':' EMPTY | ':' VISIBLE | ':' HIDDEN | ':' FOCUS | ':' ENABLED | ':' DISABLED | ':' PARENT | ':' ELEMENT | '#' ELEMENT );
    // $ANTLR start "selector_expression"
    selector_expression: function(candidates) {
        var survival = null;

        var vidx = null;
        var text = null;
        var ELEMENT9 = null;
        var ELEMENT10 = null;
         var vop = null;
         var atom7 = null;
         var selectors8 = null;

        try {
            // iQuery.g:323:5: ( atom[$candidates] | ':' vop= indexop '(' vidx= FLOAT ')' | ':' NOT '(' selectors[$candidates] ')' | ':' CONTAINS '(' text= QUOTED_STRING ')' | ':' LAST_CHILD | ':' FIRST_CHILD | ':' FIRST | ':' LAST | ':' EMPTY | ':' VISIBLE | ':' HIDDEN | ':' FOCUS | ':' ENABLED | ':' DISABLED | ':' PARENT | ':' ELEMENT | '#' ELEMENT )
            var alt9=17;
            alt9 = this.dfa9.predict(this.input);
            switch (alt9) {
                case 1 :
                    // iQuery.g:323:7: atom[$candidates]
                    this.pushFollow(iQueryParser.FOLLOW_atom_in_selector_expression710);
                    atom7=this.atom(candidates);

                    this.state._fsp--;


                                survival = atom7;
                            


                    break;
                case 2 :
                    // iQuery.g:327:7: ':' vop= indexop '(' vidx= FLOAT ')'
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_selector_expression729); 
                    this.pushFollow(iQueryParser.FOLLOW_indexop_in_selector_expression733);
                    vop=this.indexop();

                    this.state._fsp--;

                    this.match(this.input,49,iQueryParser.FOLLOW_49_in_selector_expression735); 
                    vidx=this.match(this.input,FLOAT,iQueryParser.FOLLOW_FLOAT_in_selector_expression739); 
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression741); 

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
                    // iQuery.g:364:7: ':' NOT '(' selectors[$candidates] ')'
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_selector_expression759); 
                    this.match(this.input,NOT,iQueryParser.FOLLOW_NOT_in_selector_expression761); 
                    this.match(this.input,49,iQueryParser.FOLLOW_49_in_selector_expression763); 
                    this.pushFollow(iQueryParser.FOLLOW_selectors_in_selector_expression765);
                    selectors8=this.selectors(candidates);

                    this.state._fsp--;

                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression768); 

                                debug("Matching \":not\", with candidates:");
                    			debug(candidates);
                                survival = candidates.diff(selectors8);
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 4 :
                    // iQuery.g:372:7: ':' CONTAINS '(' text= QUOTED_STRING ')'
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_selector_expression786); 
                    this.match(this.input,CONTAINS,iQueryParser.FOLLOW_CONTAINS_in_selector_expression788); 
                    this.match(this.input,49,iQueryParser.FOLLOW_49_in_selector_expression790); 
                    text=this.match(this.input,QUOTED_STRING,iQueryParser.FOLLOW_QUOTED_STRING_in_selector_expression794); 
                    this.match(this.input,50,iQueryParser.FOLLOW_50_in_selector_expression796); 

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
                    // iQuery.g:400:7: ':' LAST_CHILD
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_selector_expression808); 
                    this.match(this.input,LAST_CHILD,iQueryParser.FOLLOW_LAST_CHILD_in_selector_expression810); 

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
                    // iQuery.g:419:7: ':' FIRST_CHILD
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_selector_expression828); 
                    this.match(this.input,FIRST_CHILD,iQueryParser.FOLLOW_FIRST_CHILD_in_selector_expression830); 

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
                    // iQuery.g:438:7: ':' FIRST
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_selector_expression848); 
                    this.match(this.input,FIRST,iQueryParser.FOLLOW_FIRST_in_selector_expression850); 

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
                    // iQuery.g:451:7: ':' LAST
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_selector_expression868); 
                    this.match(this.input,LAST,iQueryParser.FOLLOW_LAST_in_selector_expression870); 

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
                    // iQuery.g:464:7: ':' EMPTY
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_selector_expression888); 
                    this.match(this.input,EMPTY,iQueryParser.FOLLOW_EMPTY_in_selector_expression890); 

                                debug("Matching \":empty\", with candidates:");
                    			debug(candidates);
                    			survival = [];
                    			for ( var i = 0; i < candidates.length; ++i ) {
                                    var elements = candidates[i].elements().toArray();

                    				if (elements.length == 0 || type(elements[0]) == "UIAApplication" ) {
                    					survival.push(candidates[i]);
                    				}
                    			}
                                debug("Matching  result:");
                    			debug(survival);
                    		


                    break;
                case 10 :
                    // iQuery.g:479:7: ':' VISIBLE
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_selector_expression902); 
                    this.match(this.input,VISIBLE,iQueryParser.FOLLOW_VISIBLE_in_selector_expression904); 

                                debug("Matching \":visible\", with candidates:");
                    			debug(candidates);
                    			survival = filterAttrs(candidates, "isVisible", true);
                                debug("Matching  result:");
                    			debug(survival);
                    		


                    break;
                case 11 :
                    // iQuery.g:487:7: ':' HIDDEN
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_selector_expression916); 
                    this.match(this.input,HIDDEN,iQueryParser.FOLLOW_HIDDEN_in_selector_expression918); 

                                debug("Matching \":hidden\", with candidates:");
                    			debug(candidates);
                    			survival = filterAttrs(candidates, "isVisible", false);
                                debug("Matching  result:");
                    			debug(survival);
                    		


                    break;
                case 12 :
                    // iQuery.g:495:7: ':' FOCUS
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_selector_expression930); 
                    this.match(this.input,FOCUS,iQueryParser.FOLLOW_FOCUS_in_selector_expression932); 

                                debug("Matching \":focus\", with candidates:");
                    			debug(candidates);
                    			survival = filterAttrs(candidates, "hasKeyboardFocus", true);
                                debug("Matching  result:");
                    			debug(survival);
                    		


                    break;
                case 13 :
                    // iQuery.g:503:4: ':' ENABLED
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_selector_expression941); 
                    this.match(this.input,ENABLED,iQueryParser.FOLLOW_ENABLED_in_selector_expression943); 

                                debug("Matching \":enabled\", with candidates:");
                    			debug(candidates);
                    			survival = filterAttrs(candidates, "isEnabled", true);
                                debug("Matching  result:");
                    			debug(survival);
                    		


                    break;
                case 14 :
                    // iQuery.g:511:4: ':' DISABLED
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_selector_expression952); 
                    this.match(this.input,DISABLED,iQueryParser.FOLLOW_DISABLED_in_selector_expression954); 

                                debug("Matching \":disabled\", with candidates:");
                    			debug(candidates);
                    			survival = filterAttrs(candidates, "isEnabled", false);
                                debug("Matching  result:");
                    			debug(survival);
                    		


                    break;
                case 15 :
                    // iQuery.g:519:7: ':' PARENT
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_selector_expression966); 
                    this.match(this.input,PARENT,iQueryParser.FOLLOW_PARENT_in_selector_expression968); 

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
                case 16 :
                    // iQuery.g:590:7: ':' ELEMENT
                    this.match(this.input,44,iQueryParser.FOLLOW_44_in_selector_expression988); 
                    ELEMENT9=this.match(this.input,ELEMENT,iQueryParser.FOLLOW_ELEMENT_in_selector_expression990); 

                                debug("Match \"" + (ELEMENT9?ELEMENT9.getText():null) + "\"");
                                survival = this.filterPseudo(candidates, (ELEMENT9?ELEMENT9.getText():null)); 
                            


                    break;
                case 17 :
                    // iQuery.g:595:7: '#' ELEMENT
                    this.match(this.input,51,iQueryParser.FOLLOW_51_in_selector_expression1008); 
                    ELEMENT10=this.match(this.input,ELEMENT,iQueryParser.FOLLOW_ELEMENT_in_selector_expression1010); 

                                debug("Matching \"#" + (ELEMENT10?ELEMENT10.getText():null) + "\", with candidates:");
                                debug(candidates);

                                survival = descendant(candidates, 1024, function(c) {
                                        return c.name != undefined && c.name() == (ELEMENT10?ELEMENT10.getText():null);
                                    });

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


    // iQuery.g:609:1: atom[candidates] returns [survival] : ( ASTERISK | ELEMENT );
    // $ANTLR start "atom"
    atom: function(candidates) {
        var survival = null;

        var ELEMENT11 = null;

        try {
            // iQuery.g:610:5: ( ASTERISK | ELEMENT )
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
                    // iQuery.g:610:7: ASTERISK
                    this.match(this.input,ASTERISK,iQueryParser.FOLLOW_ASTERISK_in_atom1044); 

                                debug("Matching \"*\"");
                    			debug(candidates);
                                survival = candidates;
                                debug("Matching  result:");
                    			debug(survival);
                            


                    break;
                case 2 :
                    // iQuery.g:618:7: ELEMENT
                    ELEMENT11=this.match(this.input,ELEMENT,iQueryParser.FOLLOW_ELEMENT_in_atom1062); 

                                debug("Matching \"" + (ELEMENT11?ELEMENT11.getText():null) + "\", with candidates:");
                    			debug(candidates);
                                survival = match(candidates, (ELEMENT11?ELEMENT11.getText():null));
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
        "\u0001\u002a\u0001\u0007\u0001\u0023\u0001\u0007\u0001\uffff\u0001"+
    "\u0006\u0002\uffff\u0001\u0023\u0001\u0006\u0002\uffff",
    DFA8_maxS:
        "\u0001\u002a\u0001\u002c\u0001\u0030\u0001\u0007\u0001\uffff\u0001"+
    "\u0009\u0002\uffff\u0001\u0030\u0001\u0009\u0002\uffff",
    DFA8_acceptS:
        "\u0004\uffff\u0001\u0005\u0001\uffff\u0001\u0001\u0001\u0003\u0002"+
    "\uffff\u0001\u0002\u0001\u0004",
    DFA8_specialS:
        "\u000c\uffff}>",
    DFA8_transitionS: [
            "\u0001\u0001",
            "\u0001\u0002\u0024\uffff\u0001\u0003",
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
        return "135:1: multi_attributes[candidates] returns [survival] : ( '[' attr= ELEMENT op v= QUOTED_STRING ']' | '[' ':' attr= ELEMENT op v= QUOTED_STRING ']' | '[' attr= ELEMENT num_comp_op v= ( FLOAT | PERCENTAGE ) ']' | '[' ':' attr= ELEMENT num_comp_op v= ( FLOAT | PERCENTAGE ) ']' | '[' attr= ELEMENT ']' );";
    },
    dummy: null
});
org.antlr.lang.augmentObject(iQueryParser, {
    DFA9_eotS:
        "\u0013\uffff",
    DFA9_eofS:
        "\u0013\uffff",
    DFA9_minS:
        "\u0001\u0007\u0001\uffff\u0001\u0007\u0010\uffff",
    DFA9_maxS:
        "\u0001\u0033\u0001\uffff\u0001\u001a\u0010\uffff",
    DFA9_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\uffff\u0001\u0011\u0001\u0003\u0001"+
    "\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0001\u0008\u0001\u0009\u0001"+
    "\u000a\u0001\u000b\u0001\u000c\u0001\u000d\u0001\u000e\u0001\u000f\u0001"+
    "\u0010\u0001\u0002",
    DFA9_specialS:
        "\u0013\uffff}>",
    DFA9_transitionS: [
            "\u0001\u0001\u0013\uffff\u0001\u0001\u0010\uffff\u0001\u0002"+
            "\u0006\uffff\u0001\u0003",
            "",
            "\u0001\u0011\u0002\uffff\u0004\u0012\u0001\u0004\u0001\u0005"+
            "\u0001\u0006\u0001\u0007\u0001\u0008\u0001\u0009\u0001\u000a"+
            "\u0001\u000b\u0001\u000c\u0001\u000d\u0001\u000e\u0001\u000f"+
            "\u0001\u0010",
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
        return "322:1: selector_expression[candidates] returns [survival] : ( atom[$candidates] | ':' vop= indexop '(' vidx= FLOAT ')' | ':' NOT '(' selectors[$candidates] ')' | ':' CONTAINS '(' text= QUOTED_STRING ')' | ':' LAST_CHILD | ':' FIRST_CHILD | ':' FIRST | ':' LAST | ':' EMPTY | ':' VISIBLE | ':' HIDDEN | ':' FOCUS | ':' ENABLED | ':' DISABLED | ':' PARENT | ':' ELEMENT | '#' ELEMENT );";
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(iQueryParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "NEWLINE", "DESCENDANT", "FLOAT", "ELEMENT", "QUOTED_STRING", "PERCENTAGE", "EQ", "GT", "LT", "NTH_CHILD", "NOT", "CONTAINS", "LAST_CHILD", "FIRST_CHILD", "FIRST", "LAST", "EMPTY", "VISIBLE", "HIDDEN", "FOCUS", "ENABLED", "DISABLED", "PARENT", "ASTERISK", "HAS", "CHECKED", "PREV", "NEXT", "SIBLINGS", "DIGIT", "WS", "'>'", "'+'", "'~'", "'<'", "'>='", "'<='", "'='", "'['", "']'", "':'", "'!='", "'$='", "'^='", "'*='", "'('", "')'", "'#'"],
    FOLLOW_selectors_in_prog54: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_NEWLINE_in_prog57: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_EOF_in_prog60: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NEWLINE_in_prog78: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_EOF_in_prog81: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_multi_selectors_in_selectors107: new org.antlr.runtime.BitSet([0x080000A2, 0x00081408]),
    FOLLOW_multi_selectors_in_selectors113: new org.antlr.runtime.BitSet([0x080000A2, 0x00081408]),
    FOLLOW_selector_in_multi_selectors157: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_35_in_multi_selectors176: new org.antlr.runtime.BitSet([0x08000080, 0x00081400]),
    FOLLOW_selector_in_multi_selectors180: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_DESCENDANT_in_multi_selectors199: new org.antlr.runtime.BitSet([0x08000080, 0x00081400]),
    FOLLOW_selector_in_multi_selectors203: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_35_in_multi_selectors222: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_FLOAT_in_multi_selectors226: new org.antlr.runtime.BitSet([0x08000080, 0x00081400]),
    FOLLOW_selector_in_multi_selectors230: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_selector_expression_in_selector267: new org.antlr.runtime.BitSet([0x00000002, 0x00000030]),
    FOLLOW_36_in_selector294: new org.antlr.runtime.BitSet([0x08000080, 0x00081000]),
    FOLLOW_selector_expression_in_selector298: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_37_in_selector325: new org.antlr.runtime.BitSet([0x08000080, 0x00081000]),
    FOLLOW_selector_expression_in_selector329: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_multi_attributes_in_selector360: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_num_comp_op0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_42_in_multi_attributes444: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ELEMENT_in_multi_attributes448: new org.antlr.runtime.BitSet([0x00000000, 0x0001E200]),
    FOLLOW_op_in_multi_attributes450: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_QUOTED_STRING_in_multi_attributes454: new org.antlr.runtime.BitSet([0x00000000, 0x00000800]),
    FOLLOW_43_in_multi_attributes456: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_42_in_multi_attributes474: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_multi_attributes476: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ELEMENT_in_multi_attributes480: new org.antlr.runtime.BitSet([0x00000000, 0x0001E200]),
    FOLLOW_op_in_multi_attributes482: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_QUOTED_STRING_in_multi_attributes486: new org.antlr.runtime.BitSet([0x00000000, 0x00000800]),
    FOLLOW_43_in_multi_attributes488: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_42_in_multi_attributes506: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ELEMENT_in_multi_attributes510: new org.antlr.runtime.BitSet([0x00000000, 0x000003C8]),
    FOLLOW_num_comp_op_in_multi_attributes512: new org.antlr.runtime.BitSet([0x00000240, 0x00000000]),
    FOLLOW_set_in_multi_attributes516: new org.antlr.runtime.BitSet([0x00000000, 0x00000800]),
    FOLLOW_43_in_multi_attributes524: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_42_in_multi_attributes542: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_multi_attributes544: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ELEMENT_in_multi_attributes548: new org.antlr.runtime.BitSet([0x00000000, 0x000003C8]),
    FOLLOW_num_comp_op_in_multi_attributes550: new org.antlr.runtime.BitSet([0x00000240, 0x00000000]),
    FOLLOW_set_in_multi_attributes554: new org.antlr.runtime.BitSet([0x00000000, 0x00000800]),
    FOLLOW_43_in_multi_attributes562: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_42_in_multi_attributes580: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ELEMENT_in_multi_attributes584: new org.antlr.runtime.BitSet([0x00000000, 0x00000800]),
    FOLLOW_43_in_multi_attributes586: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_op0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_indexop0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_atom_in_selector_expression710: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_selector_expression729: new org.antlr.runtime.BitSet([0x00003C00, 0x00000000]),
    FOLLOW_indexop_in_selector_expression733: new org.antlr.runtime.BitSet([0x00000000, 0x00020000]),
    FOLLOW_49_in_selector_expression735: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_FLOAT_in_selector_expression739: new org.antlr.runtime.BitSet([0x00000000, 0x00040000]),
    FOLLOW_50_in_selector_expression741: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_selector_expression759: new org.antlr.runtime.BitSet([0x00004000, 0x00000000]),
    FOLLOW_NOT_in_selector_expression761: new org.antlr.runtime.BitSet([0x00000000, 0x00020000]),
    FOLLOW_49_in_selector_expression763: new org.antlr.runtime.BitSet([0x080000A0, 0x00081408]),
    FOLLOW_selectors_in_selector_expression765: new org.antlr.runtime.BitSet([0x00000000, 0x00040000]),
    FOLLOW_50_in_selector_expression768: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_selector_expression786: new org.antlr.runtime.BitSet([0x00008000, 0x00000000]),
    FOLLOW_CONTAINS_in_selector_expression788: new org.antlr.runtime.BitSet([0x00000000, 0x00020000]),
    FOLLOW_49_in_selector_expression790: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_QUOTED_STRING_in_selector_expression794: new org.antlr.runtime.BitSet([0x00000000, 0x00040000]),
    FOLLOW_50_in_selector_expression796: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_selector_expression808: new org.antlr.runtime.BitSet([0x00010000, 0x00000000]),
    FOLLOW_LAST_CHILD_in_selector_expression810: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_selector_expression828: new org.antlr.runtime.BitSet([0x00020000, 0x00000000]),
    FOLLOW_FIRST_CHILD_in_selector_expression830: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_selector_expression848: new org.antlr.runtime.BitSet([0x00040000, 0x00000000]),
    FOLLOW_FIRST_in_selector_expression850: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_selector_expression868: new org.antlr.runtime.BitSet([0x00080000, 0x00000000]),
    FOLLOW_LAST_in_selector_expression870: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_selector_expression888: new org.antlr.runtime.BitSet([0x00100000, 0x00000000]),
    FOLLOW_EMPTY_in_selector_expression890: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_selector_expression902: new org.antlr.runtime.BitSet([0x00200000, 0x00000000]),
    FOLLOW_VISIBLE_in_selector_expression904: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_selector_expression916: new org.antlr.runtime.BitSet([0x00400000, 0x00000000]),
    FOLLOW_HIDDEN_in_selector_expression918: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_selector_expression930: new org.antlr.runtime.BitSet([0x00800000, 0x00000000]),
    FOLLOW_FOCUS_in_selector_expression932: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_selector_expression941: new org.antlr.runtime.BitSet([0x01000000, 0x00000000]),
    FOLLOW_ENABLED_in_selector_expression943: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_selector_expression952: new org.antlr.runtime.BitSet([0x02000000, 0x00000000]),
    FOLLOW_DISABLED_in_selector_expression954: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_selector_expression966: new org.antlr.runtime.BitSet([0x04000000, 0x00000000]),
    FOLLOW_PARENT_in_selector_expression968: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_selector_expression988: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ELEMENT_in_selector_expression990: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_51_in_selector_expression1008: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_ELEMENT_in_selector_expression1010: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ASTERISK_in_atom1044: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ELEMENT_in_atom1062: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();