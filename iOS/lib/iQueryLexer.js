// $ANTLR 3.3 Nov 30, 2010 12:50:56 iQuery.g 2012-07-30 09:19:32

var iQueryLexer = function(input, state) {
// alternate constructor @todo
// public iQueryLexer(CharStream input)
// public iQueryLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){

        _errors = [];
        this.getErrorMessage = function(e, tokenNames)
        {
            var error = getErrorsHelper(e, null, tokenNames, this);

            if ( _errors != undefined && _errors != null ) {
                _errors.push(error);   
            }
         
            return error;
        }

    }).call(this);

    this.dfa12 = new iQueryLexer.DFA12(this);
    iQueryLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(iQueryLexer, {
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
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(iQueryLexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    T__41 : 41,
    T__42 : 42,
    T__43 : 43,
    T__44 : 44,
    T__45 : 45,
    T__46 : 46,
    T__47 : 47,
    T__48 : 48,
    T__49 : 49,
    T__50 : 50,
    T__51 : 51,
    T__52 : 52,
    T__53 : 53,
    T__54 : 54,
    T__55 : 55,
    T__56 : 56,
    T__57 : 57,
    NEWLINE : 4,
    DESCENDANT : 5,
    FLOAT : 6,
    ELEMENT : 7,
    QUOTED_STRING : 8,
    PERCENTAGE : 9,
    EQ : 10,
    GT : 11,
    LT : 12,
    NTH_CHILD : 13,
    NOT : 14,
    CONTAINS : 15,
    LAST_CHILD : 16,
    FIRST_CHILD : 17,
    FIRST : 18,
    LAST : 19,
    TEXT : 20,
    RADIO : 21,
    EMPTY : 22,
    VISIBLE : 23,
    HIDDEN : 24,
    FOCUS : 25,
    ENABLED : 26,
    DISABLED : 27,
    CHECKBOX : 28,
    BUTTON : 29,
    IMAGE : 30,
    LABEL : 31,
    PARENT : 32,
    ASTERISK : 33,
    HAS : 34,
    CHECKED : 35,
    PREV : 36,
    NEXT : 37,
    SIBLINGS : 38,
    DIGIT : 39,
    WS : 40,
    getGrammarFileName: function() { return "iQuery.g"; }
});
org.antlr.lang.augmentObject(iQueryLexer.prototype, {
    // $ANTLR start T__41
    mT__41: function()  {
        try {
            var _type = this.T__41;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:21:7: ( '>' )
            // iQuery.g:21:9: '>'
            this.match('>'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__41",

    // $ANTLR start T__42
    mT__42: function()  {
        try {
            var _type = this.T__42;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:22:7: ( '+' )
            // iQuery.g:22:9: '+'
            this.match('+'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__42",

    // $ANTLR start T__43
    mT__43: function()  {
        try {
            var _type = this.T__43;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:23:7: ( '~' )
            // iQuery.g:23:9: '~'
            this.match('~'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__43",

    // $ANTLR start T__44
    mT__44: function()  {
        try {
            var _type = this.T__44;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:24:7: ( '<' )
            // iQuery.g:24:9: '<'
            this.match('<'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__44",

    // $ANTLR start T__45
    mT__45: function()  {
        try {
            var _type = this.T__45;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:25:7: ( '>=' )
            // iQuery.g:25:9: '>='
            this.match(">="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__45",

    // $ANTLR start T__46
    mT__46: function()  {
        try {
            var _type = this.T__46;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:26:7: ( '<=' )
            // iQuery.g:26:9: '<='
            this.match("<="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__46",

    // $ANTLR start T__47
    mT__47: function()  {
        try {
            var _type = this.T__47;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:27:7: ( '=' )
            // iQuery.g:27:9: '='
            this.match('='); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__47",

    // $ANTLR start T__48
    mT__48: function()  {
        try {
            var _type = this.T__48;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:28:7: ( '[' )
            // iQuery.g:28:9: '['
            this.match('['); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__48",

    // $ANTLR start T__49
    mT__49: function()  {
        try {
            var _type = this.T__49;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:29:7: ( ']' )
            // iQuery.g:29:9: ']'
            this.match(']'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__49",

    // $ANTLR start T__50
    mT__50: function()  {
        try {
            var _type = this.T__50;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:30:7: ( ':' )
            // iQuery.g:30:9: ':'
            this.match(':'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__50",

    // $ANTLR start T__51
    mT__51: function()  {
        try {
            var _type = this.T__51;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:31:7: ( '!=' )
            // iQuery.g:31:9: '!='
            this.match("!="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__51",

    // $ANTLR start T__52
    mT__52: function()  {
        try {
            var _type = this.T__52;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:32:7: ( '$=' )
            // iQuery.g:32:9: '$='
            this.match("$="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__52",

    // $ANTLR start T__53
    mT__53: function()  {
        try {
            var _type = this.T__53;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:33:7: ( '^=' )
            // iQuery.g:33:9: '^='
            this.match("^="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__53",

    // $ANTLR start T__54
    mT__54: function()  {
        try {
            var _type = this.T__54;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:34:7: ( '*=' )
            // iQuery.g:34:9: '*='
            this.match("*="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__54",

    // $ANTLR start T__55
    mT__55: function()  {
        try {
            var _type = this.T__55;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:35:7: ( '(' )
            // iQuery.g:35:9: '('
            this.match('('); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__55",

    // $ANTLR start T__56
    mT__56: function()  {
        try {
            var _type = this.T__56;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:36:7: ( ')' )
            // iQuery.g:36:9: ')'
            this.match(')'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__56",

    // $ANTLR start T__57
    mT__57: function()  {
        try {
            var _type = this.T__57;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:37:7: ( '#' )
            // iQuery.g:37:9: '#'
            this.match('#'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__57",

    // $ANTLR start DESCENDANT
    mDESCENDANT: function()  {
        try {
            var _type = this.DESCENDANT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:658:11: ( '>>' )
            // iQuery.g:658:13: '>>'
            this.match(">>"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DESCENDANT",

    // $ANTLR start EQ
    mEQ: function()  {
        try {
            var _type = this.EQ;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:659:3: ( 'eq' )
            // iQuery.g:659:5: 'eq'
            this.match("eq"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EQ",

    // $ANTLR start GT
    mGT: function()  {
        try {
            var _type = this.GT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:660:3: ( 'gt' )
            // iQuery.g:660:5: 'gt'
            this.match("gt"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "GT",

    // $ANTLR start LT
    mLT: function()  {
        try {
            var _type = this.LT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:661:3: ( 'lt' )
            // iQuery.g:661:5: 'lt'
            this.match("lt"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LT",

    // $ANTLR start NOT
    mNOT: function()  {
        try {
            var _type = this.NOT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:662:4: ( 'not' )
            // iQuery.g:662:6: 'not'
            this.match("not"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NOT",

    // $ANTLR start CONTAINS
    mCONTAINS: function()  {
        try {
            var _type = this.CONTAINS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:663:9: ( 'contains' )
            // iQuery.g:663:11: 'contains'
            this.match("contains"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CONTAINS",

    // $ANTLR start TEXT
    mTEXT: function()  {
        try {
            var _type = this.TEXT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:664:5: ( 'text' )
            // iQuery.g:664:7: 'text'
            this.match("text"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TEXT",

    // $ANTLR start RADIO
    mRADIO: function()  {
        try {
            var _type = this.RADIO;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:665:6: ( 'radio' )
            // iQuery.g:665:8: 'radio'
            this.match("radio"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RADIO",

    // $ANTLR start EMPTY
    mEMPTY: function()  {
        try {
            var _type = this.EMPTY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:666:6: ( 'empty' )
            // iQuery.g:666:8: 'empty'
            this.match("empty"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EMPTY",

    // $ANTLR start CHECKBOX
    mCHECKBOX: function()  {
        try {
            var _type = this.CHECKBOX;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:667:9: ( 'checkbox' )
            // iQuery.g:667:11: 'checkbox'
            this.match("checkbox"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CHECKBOX",

    // $ANTLR start FOCUS
    mFOCUS: function()  {
        try {
            var _type = this.FOCUS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:668:6: ( 'focus' )
            // iQuery.g:668:8: 'focus'
            this.match("focus"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FOCUS",

    // $ANTLR start HAS
    mHAS: function()  {
        try {
            var _type = this.HAS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:669:4: ( 'has' )
            // iQuery.g:669:6: 'has'
            this.match("has"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "HAS",

    // $ANTLR start CHECKED
    mCHECKED: function()  {
        try {
            var _type = this.CHECKED;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:670:8: ( 'checked' )
            // iQuery.g:670:10: 'checked'
            this.match("checked"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CHECKED",

    // $ANTLR start PREV
    mPREV: function()  {
        try {
            var _type = this.PREV;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:671:5: ( 'prev' )
            // iQuery.g:671:7: 'prev'
            this.match("prev"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PREV",

    // $ANTLR start NEXT
    mNEXT: function()  {
        try {
            var _type = this.NEXT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:672:5: ( 'next' )
            // iQuery.g:672:7: 'next'
            this.match("next"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NEXT",

    // $ANTLR start SIBLINGS
    mSIBLINGS: function()  {
        try {
            var _type = this.SIBLINGS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:673:9: ( 'siblings' )
            // iQuery.g:673:11: 'siblings'
            this.match("siblings"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SIBLINGS",

    // $ANTLR start NTH_CHILD
    mNTH_CHILD: function()  {
        try {
            var _type = this.NTH_CHILD;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:674:10: ( 'nth-child' )
            // iQuery.g:674:12: 'nth-child'
            this.match("nth-child"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NTH_CHILD",

    // $ANTLR start PARENT
    mPARENT: function()  {
        try {
            var _type = this.PARENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:675:7: ( 'parent' )
            // iQuery.g:675:9: 'parent'
            this.match("parent"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PARENT",

    // $ANTLR start DISABLED
    mDISABLED: function()  {
        try {
            var _type = this.DISABLED;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:676:9: ( 'disabled' )
            // iQuery.g:676:11: 'disabled'
            this.match("disabled"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DISABLED",

    // $ANTLR start ENABLED
    mENABLED: function()  {
        try {
            var _type = this.ENABLED;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:677:8: ( 'enabled' )
            // iQuery.g:677:10: 'enabled'
            this.match("enabled"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ENABLED",

    // $ANTLR start VISIBLE
    mVISIBLE: function()  {
        try {
            var _type = this.VISIBLE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:678:8: ( 'visible' )
            // iQuery.g:678:10: 'visible'
            this.match("visible"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "VISIBLE",

    // $ANTLR start HIDDEN
    mHIDDEN: function()  {
        try {
            var _type = this.HIDDEN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:679:7: ( 'hidden' )
            // iQuery.g:679:9: 'hidden'
            this.match("hidden"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "HIDDEN",

    // $ANTLR start BUTTON
    mBUTTON: function()  {
        try {
            var _type = this.BUTTON;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:680:7: ( 'button' )
            // iQuery.g:680:9: 'button'
            this.match("button"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BUTTON",

    // $ANTLR start LABEL
    mLABEL: function()  {
        try {
            var _type = this.LABEL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:681:6: ( 'label' )
            // iQuery.g:681:8: 'label'
            this.match("label"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LABEL",

    // $ANTLR start IMAGE
    mIMAGE: function()  {
        try {
            var _type = this.IMAGE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:682:6: ( 'image' )
            // iQuery.g:682:8: 'image'
            this.match("image"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IMAGE",

    // $ANTLR start LAST_CHILD
    mLAST_CHILD: function()  {
        try {
            var _type = this.LAST_CHILD;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:683:11: ( 'last-child' )
            // iQuery.g:683:13: 'last-child'
            this.match("last-child"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LAST_CHILD",

    // $ANTLR start FIRST_CHILD
    mFIRST_CHILD: function()  {
        try {
            var _type = this.FIRST_CHILD;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:684:12: ( 'first-child' )
            // iQuery.g:684:14: 'first-child'
            this.match("first-child"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FIRST_CHILD",

    // $ANTLR start FIRST
    mFIRST: function()  {
        try {
            var _type = this.FIRST;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:685:6: ( 'first' )
            // iQuery.g:685:8: 'first'
            this.match("first"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FIRST",

    // $ANTLR start LAST
    mLAST: function()  {
        try {
            var _type = this.LAST;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:686:5: ( 'last' )
            // iQuery.g:686:7: 'last'
            this.match("last"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LAST",

    // $ANTLR start PERCENTAGE
    mPERCENTAGE: function()  {
        try {
            var _type = this.PERCENTAGE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:687:11: ( ( '+' | '-' )? ( DIGIT )+ ( '.' ( DIGIT )+ )? '%' )
            // iQuery.g:687:13: ( '+' | '-' )? ( DIGIT )+ ( '.' ( DIGIT )+ )? '%'
            // iQuery.g:687:13: ( '+' | '-' )?
            var alt1=2;
            var LA1_0 = this.input.LA(1);

            if ( (LA1_0=='+'||LA1_0=='-') ) {
                alt1=1;
            }
            switch (alt1) {
                case 1 :
                    // iQuery.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // iQuery.g:687:26: ( DIGIT )+
            var cnt2=0;
            loop2:
            do {
                var alt2=2;
                var LA2_0 = this.input.LA(1);

                if ( ((LA2_0>='0' && LA2_0<='9')) ) {
                    alt2=1;
                }


                switch (alt2) {
                case 1 :
                    // iQuery.g:687:26: DIGIT
                    this.mDIGIT(); 


                    break;

                default :
                    if ( cnt2 >= 1 ) {
                        break loop2;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(2, this.input);
                        throw eee;
                }
                cnt2++;
            } while (true);

            // iQuery.g:687:33: ( '.' ( DIGIT )+ )?
            var alt4=2;
            var LA4_0 = this.input.LA(1);

            if ( (LA4_0=='.') ) {
                alt4=1;
            }
            switch (alt4) {
                case 1 :
                    // iQuery.g:687:34: '.' ( DIGIT )+
                    this.match('.'); 
                    // iQuery.g:687:38: ( DIGIT )+
                    var cnt3=0;
                    loop3:
                    do {
                        var alt3=2;
                        var LA3_0 = this.input.LA(1);

                        if ( ((LA3_0>='0' && LA3_0<='9')) ) {
                            alt3=1;
                        }


                        switch (alt3) {
                        case 1 :
                            // iQuery.g:687:38: DIGIT
                            this.mDIGIT(); 


                            break;

                        default :
                            if ( cnt3 >= 1 ) {
                                break loop3;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(3, this.input);
                                throw eee;
                        }
                        cnt3++;
                    } while (true);



                    break;

            }

            this.match('%'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PERCENTAGE",

    // $ANTLR start FLOAT
    mFLOAT: function()  {
        try {
            var _type = this.FLOAT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:688:6: ( ( '+' | '-' )? ( DIGIT )+ ( '.' ( DIGIT )+ )? )
            // iQuery.g:688:8: ( '+' | '-' )? ( DIGIT )+ ( '.' ( DIGIT )+ )?
            // iQuery.g:688:8: ( '+' | '-' )?
            var alt5=2;
            var LA5_0 = this.input.LA(1);

            if ( (LA5_0=='+'||LA5_0=='-') ) {
                alt5=1;
            }
            switch (alt5) {
                case 1 :
                    // iQuery.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // iQuery.g:688:21: ( DIGIT )+
            var cnt6=0;
            loop6:
            do {
                var alt6=2;
                var LA6_0 = this.input.LA(1);

                if ( ((LA6_0>='0' && LA6_0<='9')) ) {
                    alt6=1;
                }


                switch (alt6) {
                case 1 :
                    // iQuery.g:688:21: DIGIT
                    this.mDIGIT(); 


                    break;

                default :
                    if ( cnt6 >= 1 ) {
                        break loop6;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(6, this.input);
                        throw eee;
                }
                cnt6++;
            } while (true);

            // iQuery.g:688:28: ( '.' ( DIGIT )+ )?
            var alt8=2;
            var LA8_0 = this.input.LA(1);

            if ( (LA8_0=='.') ) {
                alt8=1;
            }
            switch (alt8) {
                case 1 :
                    // iQuery.g:688:29: '.' ( DIGIT )+
                    this.match('.'); 
                    // iQuery.g:688:33: ( DIGIT )+
                    var cnt7=0;
                    loop7:
                    do {
                        var alt7=2;
                        var LA7_0 = this.input.LA(1);

                        if ( ((LA7_0>='0' && LA7_0<='9')) ) {
                            alt7=1;
                        }


                        switch (alt7) {
                        case 1 :
                            // iQuery.g:688:33: DIGIT
                            this.mDIGIT(); 


                            break;

                        default :
                            if ( cnt7 >= 1 ) {
                                break loop7;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(7, this.input);
                                throw eee;
                        }
                        cnt7++;
                    } while (true);



                    break;

            }




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FLOAT",

    // $ANTLR start DIGIT
    mDIGIT: function()  {
        try {
            // iQuery.g:689:15: ( ( '0' .. '9' ) )
            // iQuery.g:689:17: ( '0' .. '9' )
            // iQuery.g:689:17: ( '0' .. '9' )
            // iQuery.g:689:18: '0' .. '9'
            this.matchRange('0','9'); 






        }
        finally {
        }
    },
    // $ANTLR end "DIGIT",

    // $ANTLR start ELEMENT
    mELEMENT: function()  {
        try {
            var _type = this.ELEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:690:8: ( ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )* )
            // iQuery.g:690:10: ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // iQuery.g:690:33: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            loop9:
            do {
                var alt9=2;
                var LA9_0 = this.input.LA(1);

                if ( ((LA9_0>='0' && LA9_0<='9')||(LA9_0>='A' && LA9_0<='Z')||LA9_0=='_'||(LA9_0>='a' && LA9_0<='z')) ) {
                    alt9=1;
                }


                switch (alt9) {
                case 1 :
                    // iQuery.g:
                    if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop9;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ELEMENT",

    // $ANTLR start ASTERISK
    mASTERISK: function()  {
        try {
            var _type = this.ASTERISK;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:691:9: ( '*' )
            // iQuery.g:691:11: '*'
            this.match('*'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ASTERISK",

    // $ANTLR start QUOTED_STRING
    mQUOTED_STRING: function()  {
        try {
            var _type = this.QUOTED_STRING;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:692:14: ( '\\'' ( . )+ '\\'' )
            // iQuery.g:692:16: '\\'' ( . )+ '\\''
            this.match('\''); 
            // iQuery.g:692:21: ( . )+
            var cnt10=0;
            loop10:
            do {
                var alt10=2;
                var LA10_0 = this.input.LA(1);

                if ( (LA10_0=='\'') ) {
                    alt10=2;
                }
                else if ( ((LA10_0>='\u0000' && LA10_0<='&')||(LA10_0>='(' && LA10_0<='\uFFFF')) ) {
                    alt10=1;
                }


                switch (alt10) {
                case 1 :
                    // iQuery.g:692:21: .
                    this.matchAny(); 


                    break;

                default :
                    if ( cnt10 >= 1 ) {
                        break loop10;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(10, this.input);
                        throw eee;
                }
                cnt10++;
            } while (true);

            this.match('\''); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "QUOTED_STRING",

    // $ANTLR start NEWLINE
    mNEWLINE: function()  {
        try {
            var _type = this.NEWLINE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:693:8: ( ( '\\r' )? '\\n' )
            // iQuery.g:693:10: ( '\\r' )? '\\n'
            // iQuery.g:693:10: ( '\\r' )?
            var alt11=2;
            var LA11_0 = this.input.LA(1);

            if ( (LA11_0=='\r') ) {
                alt11=1;
            }
            switch (alt11) {
                case 1 :
                    // iQuery.g:693:10: '\\r'
                    this.match('\r'); 


                    break;

            }

            this.match('\n'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NEWLINE",

    // $ANTLR start WS
    mWS: function()  {
        try {
            var _type = this.WS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // iQuery.g:694:3: ( ( ' ' | '\\t' ) )
            // iQuery.g:694:5: ( ' ' | '\\t' )
            if ( this.input.LA(1)=='\t'||this.input.LA(1)==' ' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

             this.state.token=org.antlr.runtime.Token.SKIP_TOKEN; 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WS",

    mTokens: function() {
        // iQuery.g:1:8: ( T__41 | T__42 | T__43 | T__44 | T__45 | T__46 | T__47 | T__48 | T__49 | T__50 | T__51 | T__52 | T__53 | T__54 | T__55 | T__56 | T__57 | DESCENDANT | EQ | GT | LT | NOT | CONTAINS | TEXT | RADIO | EMPTY | CHECKBOX | FOCUS | HAS | CHECKED | PREV | NEXT | SIBLINGS | NTH_CHILD | PARENT | DISABLED | ENABLED | VISIBLE | HIDDEN | BUTTON | LABEL | IMAGE | LAST_CHILD | FIRST_CHILD | FIRST | LAST | PERCENTAGE | FLOAT | ELEMENT | ASTERISK | QUOTED_STRING | NEWLINE | WS )
        var alt12=53;
        alt12 = this.dfa12.predict(this.input);
        switch (alt12) {
            case 1 :
                // iQuery.g:1:10: T__41
                this.mT__41(); 


                break;
            case 2 :
                // iQuery.g:1:16: T__42
                this.mT__42(); 


                break;
            case 3 :
                // iQuery.g:1:22: T__43
                this.mT__43(); 


                break;
            case 4 :
                // iQuery.g:1:28: T__44
                this.mT__44(); 


                break;
            case 5 :
                // iQuery.g:1:34: T__45
                this.mT__45(); 


                break;
            case 6 :
                // iQuery.g:1:40: T__46
                this.mT__46(); 


                break;
            case 7 :
                // iQuery.g:1:46: T__47
                this.mT__47(); 


                break;
            case 8 :
                // iQuery.g:1:52: T__48
                this.mT__48(); 


                break;
            case 9 :
                // iQuery.g:1:58: T__49
                this.mT__49(); 


                break;
            case 10 :
                // iQuery.g:1:64: T__50
                this.mT__50(); 


                break;
            case 11 :
                // iQuery.g:1:70: T__51
                this.mT__51(); 


                break;
            case 12 :
                // iQuery.g:1:76: T__52
                this.mT__52(); 


                break;
            case 13 :
                // iQuery.g:1:82: T__53
                this.mT__53(); 


                break;
            case 14 :
                // iQuery.g:1:88: T__54
                this.mT__54(); 


                break;
            case 15 :
                // iQuery.g:1:94: T__55
                this.mT__55(); 


                break;
            case 16 :
                // iQuery.g:1:100: T__56
                this.mT__56(); 


                break;
            case 17 :
                // iQuery.g:1:106: T__57
                this.mT__57(); 


                break;
            case 18 :
                // iQuery.g:1:112: DESCENDANT
                this.mDESCENDANT(); 


                break;
            case 19 :
                // iQuery.g:1:123: EQ
                this.mEQ(); 


                break;
            case 20 :
                // iQuery.g:1:126: GT
                this.mGT(); 


                break;
            case 21 :
                // iQuery.g:1:129: LT
                this.mLT(); 


                break;
            case 22 :
                // iQuery.g:1:132: NOT
                this.mNOT(); 


                break;
            case 23 :
                // iQuery.g:1:136: CONTAINS
                this.mCONTAINS(); 


                break;
            case 24 :
                // iQuery.g:1:145: TEXT
                this.mTEXT(); 


                break;
            case 25 :
                // iQuery.g:1:150: RADIO
                this.mRADIO(); 


                break;
            case 26 :
                // iQuery.g:1:156: EMPTY
                this.mEMPTY(); 


                break;
            case 27 :
                // iQuery.g:1:162: CHECKBOX
                this.mCHECKBOX(); 


                break;
            case 28 :
                // iQuery.g:1:171: FOCUS
                this.mFOCUS(); 


                break;
            case 29 :
                // iQuery.g:1:177: HAS
                this.mHAS(); 


                break;
            case 30 :
                // iQuery.g:1:181: CHECKED
                this.mCHECKED(); 


                break;
            case 31 :
                // iQuery.g:1:189: PREV
                this.mPREV(); 


                break;
            case 32 :
                // iQuery.g:1:194: NEXT
                this.mNEXT(); 


                break;
            case 33 :
                // iQuery.g:1:199: SIBLINGS
                this.mSIBLINGS(); 


                break;
            case 34 :
                // iQuery.g:1:208: NTH_CHILD
                this.mNTH_CHILD(); 


                break;
            case 35 :
                // iQuery.g:1:218: PARENT
                this.mPARENT(); 


                break;
            case 36 :
                // iQuery.g:1:225: DISABLED
                this.mDISABLED(); 


                break;
            case 37 :
                // iQuery.g:1:234: ENABLED
                this.mENABLED(); 


                break;
            case 38 :
                // iQuery.g:1:242: VISIBLE
                this.mVISIBLE(); 


                break;
            case 39 :
                // iQuery.g:1:250: HIDDEN
                this.mHIDDEN(); 


                break;
            case 40 :
                // iQuery.g:1:257: BUTTON
                this.mBUTTON(); 


                break;
            case 41 :
                // iQuery.g:1:264: LABEL
                this.mLABEL(); 


                break;
            case 42 :
                // iQuery.g:1:270: IMAGE
                this.mIMAGE(); 


                break;
            case 43 :
                // iQuery.g:1:276: LAST_CHILD
                this.mLAST_CHILD(); 


                break;
            case 44 :
                // iQuery.g:1:287: FIRST_CHILD
                this.mFIRST_CHILD(); 


                break;
            case 45 :
                // iQuery.g:1:299: FIRST
                this.mFIRST(); 


                break;
            case 46 :
                // iQuery.g:1:305: LAST
                this.mLAST(); 


                break;
            case 47 :
                // iQuery.g:1:310: PERCENTAGE
                this.mPERCENTAGE(); 


                break;
            case 48 :
                // iQuery.g:1:321: FLOAT
                this.mFLOAT(); 


                break;
            case 49 :
                // iQuery.g:1:327: ELEMENT
                this.mELEMENT(); 


                break;
            case 50 :
                // iQuery.g:1:335: ASTERISK
                this.mASTERISK(); 


                break;
            case 51 :
                // iQuery.g:1:344: QUOTED_STRING
                this.mQUOTED_STRING(); 


                break;
            case 52 :
                // iQuery.g:1:358: NEWLINE
                this.mNEWLINE(); 


                break;
            case 53 :
                // iQuery.g:1:366: WS
                this.mWS(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(iQueryLexer, {
    DFA12_eotS:
        "\u0001\uffff\u0001\u0027\u0001\u0028\u0001\uffff\u0001\u002a\u0007"+
    "\uffff\u0001\u002c\u0003\uffff\u000f\u0021\u0001\uffff\u0001\u0045\u000c"+
    "\uffff\u0001\u0048\u0002\u0021\u0001\u004b\u0001\u004c\u0013\u0021\u0004"+
    "\uffff\u0002\u0021\u0002\uffff\u0002\u0021\u0001\u0066\u0008\u0021\u0001"+
    "\u006f\u0008\u0021\u0001\u0045\u0003\u0021\u0001\u007c\u0001\uffff\u0001"+
    "\u007d\u0001\uffff\u0002\u0021\u0001\u0080\u0003\u0021\u0001\uffff\u0001"+
    "\u0021\u0001\u0085\u0006\u0021\u0001\u008c\u0001\u0021\u0001\u008e\u0003"+
    "\uffff\u0002\u0021\u0001\uffff\u0001\u0092\u0001\u0093\u0001\u0095\u0001"+
    "\u0021\u0001\uffff\u0005\u0021\u0001\u009c\u0001\uffff\u0001\u0021\u0001"+
    "\uffff\u0003\u0021\u0004\uffff\u0001\u00a1\u0001\u00a2\u0003\u0021\u0001"+
    "\u00a6\u0001\uffff\u0001\u00a7\u0002\u0021\u0001\u00aa\u0002\uffff\u0002"+
    "\u0021\u0001\u00ad\u0002\uffff\u0001\u00ae\u0001\u00af\u0001\uffff\u0001"+
    "\u00b0\u0001\u00b1\u0005\uffff",
    DFA12_eofS:
        "\u00b2\uffff",
    DFA12_minS:
        "\u0001\u0009\u0001\u003d\u0001\u0030\u0001\uffff\u0001\u003d\u0007"+
    "\uffff\u0001\u003d\u0003\uffff\u0001\u006d\u0001\u0074\u0001\u0061\u0001"+
    "\u0065\u0001\u0068\u0001\u0065\u0001\u0061\u0001\u0069\u0002\u0061\u0003"+
    "\u0069\u0001\u0075\u0001\u006d\u0001\u0030\u0001\u0025\u000c\uffff\u0001"+
    "\u0030\u0001\u0070\u0001\u0061\u0002\u0030\u0001\u0062\u0001\u0074\u0001"+
    "\u0078\u0001\u0068\u0001\u006e\u0001\u0065\u0001\u0078\u0001\u0064\u0001"+
    "\u0063\u0001\u0072\u0001\u0073\u0001\u0064\u0001\u0065\u0001\u0072\u0001"+
    "\u0062\u0002\u0073\u0001\u0074\u0001\u0061\u0001\uffff\u0001\u0030\u0002"+
    "\uffff\u0001\u0074\u0001\u0062\u0002\uffff\u0001\u0065\u0001\u0074\u0001"+
    "\u0030\u0001\u0074\u0001\u002d\u0001\u0074\u0001\u0063\u0001\u0074\u0001"+
    "\u0069\u0001\u0075\u0001\u0073\u0001\u0030\u0001\u0064\u0001\u0076\u0001"+
    "\u0065\u0001\u006c\u0001\u0061\u0001\u0069\u0001\u0074\u0001\u0067\u0001"+
    "\u0025\u0001\u0079\u0002\u006c\u0001\u002d\u0001\uffff\u0001\u0030\u0001"+
    "\uffff\u0001\u0061\u0001\u006b\u0001\u0030\u0001\u006f\u0001\u0073\u0001"+
    "\u0074\u0001\uffff\u0001\u0065\u0001\u0030\u0001\u006e\u0001\u0069\u0002"+
    "\u0062\u0001\u006f\u0001\u0065\u0001\u0030\u0001\u0065\u0001\u0030\u0003"+
    "\uffff\u0001\u0069\u0001\u0062\u0001\uffff\u0002\u0030\u0001\u002d\u0001"+
    "\u006e\u0001\uffff\u0001\u0074\u0001\u006e\u0002\u006c\u0001\u006e\u0001"+
    "\u0030\u0001\uffff\u0001\u0064\u0001\uffff\u0001\u006e\u0001\u006f\u0001"+
    "\u0064\u0004\uffff\u0002\u0030\u0001\u0067\u0002\u0065\u0001\u0030\u0001"+
    "\uffff\u0001\u0030\u0001\u0073\u0001\u0078\u0001\u0030\u0002\uffff\u0001"+
    "\u0073\u0001\u0064\u0001\u0030\u0002\uffff\u0002\u0030\u0001\uffff\u0002"+
    "\u0030\u0005\uffff",
    DFA12_maxS:
        "\u0001\u007e\u0001\u003e\u0001\u0039\u0001\uffff\u0001\u003d\u0007"+
    "\uffff\u0001\u003d\u0003\uffff\u0001\u0071\u0003\u0074\u0001\u006f\u0001"+
    "\u0065\u0001\u0061\u0001\u006f\u0001\u0069\u0001\u0072\u0003\u0069\u0001"+
    "\u0075\u0001\u006d\u0002\u0039\u000c\uffff\u0001\u007a\u0001\u0070\u0001"+
    "\u0061\u0002\u007a\u0001\u0073\u0001\u0074\u0001\u0078\u0001\u0068\u0001"+
    "\u006e\u0001\u0065\u0001\u0078\u0001\u0064\u0001\u0063\u0001\u0072\u0001"+
    "\u0073\u0001\u0064\u0001\u0065\u0001\u0072\u0001\u0062\u0002\u0073\u0001"+
    "\u0074\u0001\u0061\u0001\uffff\u0001\u0039\u0002\uffff\u0001\u0074\u0001"+
    "\u0062\u0002\uffff\u0001\u0065\u0001\u0074\u0001\u007a\u0001\u0074\u0001"+
    "\u002d\u0001\u0074\u0001\u0063\u0001\u0074\u0001\u0069\u0001\u0075\u0001"+
    "\u0073\u0001\u007a\u0001\u0064\u0001\u0076\u0001\u0065\u0001\u006c\u0001"+
    "\u0061\u0001\u0069\u0001\u0074\u0001\u0067\u0001\u0039\u0001\u0079\u0002"+
    "\u006c\u0001\u007a\u0001\uffff\u0001\u007a\u0001\uffff\u0001\u0061\u0001"+
    "\u006b\u0001\u007a\u0001\u006f\u0001\u0073\u0001\u0074\u0001\uffff\u0001"+
    "\u0065\u0001\u007a\u0001\u006e\u0001\u0069\u0002\u0062\u0001\u006f\u0001"+
    "\u0065\u0001\u007a\u0001\u0065\u0001\u007a\u0003\uffff\u0001\u0069\u0001"+
    "\u0065\u0001\uffff\u0003\u007a\u0001\u006e\u0001\uffff\u0001\u0074\u0001"+
    "\u006e\u0002\u006c\u0001\u006e\u0001\u007a\u0001\uffff\u0001\u0064\u0001"+
    "\uffff\u0001\u006e\u0001\u006f\u0001\u0064\u0004\uffff\u0002\u007a\u0001"+
    "\u0067\u0002\u0065\u0001\u007a\u0001\uffff\u0001\u007a\u0001\u0073\u0001"+
    "\u0078\u0001\u007a\u0002\uffff\u0001\u0073\u0001\u0064\u0001\u007a\u0002"+
    "\uffff\u0002\u007a\u0001\uffff\u0002\u007a\u0005\uffff",
    DFA12_acceptS:
        "\u0003\uffff\u0001\u0003\u0001\uffff\u0001\u0007\u0001\u0008\u0001"+
    "\u0009\u0001\u000a\u0001\u000b\u0001\u000c\u0001\u000d\u0001\uffff\u0001"+
    "\u000f\u0001\u0010\u0001\u0011\u0011\uffff\u0001\u0031\u0001\u0033\u0001"+
    "\u0034\u0001\u0035\u0001\u0005\u0001\u0012\u0001\u0001\u0001\u0002\u0001"+
    "\u0006\u0001\u0004\u0001\u000e\u0001\u0032\u0018\uffff\u0001\u0030\u0001"+
    "\uffff\u0001\u002f\u0001\u0013\u0002\uffff\u0001\u0014\u0001\u0015\u0019"+
    "\uffff\u0001\u0016\u0001\uffff\u0001\u0022\u0006\uffff\u0001\u001d\u000b"+
    "\uffff\u0001\u002b\u0001\u002e\u0001\u0020\u0002\uffff\u0001\u0018\u0004"+
    "\uffff\u0001\u001f\u0006\uffff\u0001\u001a\u0001\uffff\u0001\u0029\u0003"+
    "\uffff\u0001\u0019\u0001\u001c\u0001\u002c\u0001\u002d\u0006\uffff\u0001"+
    "\u002a\u0004\uffff\u0001\u0027\u0001\u0023\u0003\uffff\u0001\u0028\u0001"+
    "\u0025\u0002\uffff\u0001\u001e\u0002\uffff\u0001\u0026\u0001\u0017\u0001"+
    "\u001b\u0001\u0021\u0001\u0024",
    DFA12_specialS:
        "\u00b2\uffff}>",
    DFA12_transitionS: [
            "\u0001\u0024\u0001\u0023\u0002\uffff\u0001\u0023\u0012\uffff"+
            "\u0001\u0024\u0001\u0009\u0001\uffff\u0001\u000f\u0001\u000a"+
            "\u0002\uffff\u0001\u0022\u0001\u000d\u0001\u000e\u0001\u000c"+
            "\u0001\u0002\u0001\uffff\u0001\u001f\u0002\uffff\u000a\u0020"+
            "\u0001\u0008\u0001\uffff\u0001\u0004\u0001\u0005\u0001\u0001"+
            "\u0002\uffff\u001a\u0021\u0001\u0006\u0001\uffff\u0001\u0007"+
            "\u0001\u000b\u0001\u0021\u0001\uffff\u0001\u0021\u0001\u001d"+
            "\u0001\u0014\u0001\u001b\u0001\u0010\u0001\u0017\u0001\u0011"+
            "\u0001\u0018\u0001\u001e\u0002\u0021\u0001\u0012\u0001\u0021"+
            "\u0001\u0013\u0001\u0021\u0001\u0019\u0001\u0021\u0001\u0016"+
            "\u0001\u001a\u0001\u0015\u0001\u0021\u0001\u001c\u0004\u0021"+
            "\u0003\uffff\u0001\u0003",
            "\u0001\u0025\u0001\u0026",
            "\u000a\u0020",
            "",
            "\u0001\u0029",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u002b",
            "",
            "",
            "",
            "\u0001\u002e\u0001\u002f\u0002\uffff\u0001\u002d",
            "\u0001\u0030",
            "\u0001\u0032\u0012\uffff\u0001\u0031",
            "\u0001\u0034\u0009\uffff\u0001\u0033\u0004\uffff\u0001\u0035",
            "\u0001\u0037\u0006\uffff\u0001\u0036",
            "\u0001\u0038",
            "\u0001\u0039",
            "\u0001\u003b\u0005\uffff\u0001\u003a",
            "\u0001\u003c\u0007\uffff\u0001\u003d",
            "\u0001\u003f\u0010\uffff\u0001\u003e",
            "\u0001\u0040",
            "\u0001\u0041",
            "\u0001\u0042",
            "\u0001\u0043",
            "\u0001\u0044",
            "\u000a\u0020",
            "\u0001\u0047\u0008\uffff\u0001\u0046\u0001\uffff\u000a\u0020",
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
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "\u0001\u0049",
            "\u0001\u004a",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "\u0001\u004d\u0010\uffff\u0001\u004e",
            "\u0001\u004f",
            "\u0001\u0050",
            "\u0001\u0051",
            "\u0001\u0052",
            "\u0001\u0053",
            "\u0001\u0054",
            "\u0001\u0055",
            "\u0001\u0056",
            "\u0001\u0057",
            "\u0001\u0058",
            "\u0001\u0059",
            "\u0001\u005a",
            "\u0001\u005b",
            "\u0001\u005c",
            "\u0001\u005d",
            "\u0001\u005e",
            "\u0001\u005f",
            "\u0001\u0060",
            "",
            "\u000a\u0061",
            "",
            "",
            "\u0001\u0062",
            "\u0001\u0063",
            "",
            "",
            "\u0001\u0064",
            "\u0001\u0065",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "\u0001\u0067",
            "\u0001\u0068",
            "\u0001\u0069",
            "\u0001\u006a",
            "\u0001\u006b",
            "\u0001\u006c",
            "\u0001\u006d",
            "\u0001\u006e",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "\u0001\u0070",
            "\u0001\u0071",
            "\u0001\u0072",
            "\u0001\u0073",
            "\u0001\u0074",
            "\u0001\u0075",
            "\u0001\u0076",
            "\u0001\u0077",
            "\u0001\u0047\u000a\uffff\u000a\u0061",
            "\u0001\u0078",
            "\u0001\u0079",
            "\u0001\u007a",
            "\u0001\u007b\u0002\uffff\u000a\u0021\u0007\uffff\u001a\u0021"+
            "\u0004\uffff\u0001\u0021\u0001\uffff\u001a\u0021",
            "",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "",
            "\u0001\u007e",
            "\u0001\u007f",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "\u0001\u0081",
            "\u0001\u0082",
            "\u0001\u0083",
            "",
            "\u0001\u0084",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "\u0001\u0086",
            "\u0001\u0087",
            "\u0001\u0088",
            "\u0001\u0089",
            "\u0001\u008a",
            "\u0001\u008b",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "\u0001\u008d",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "",
            "",
            "",
            "\u0001\u008f",
            "\u0001\u0090\u0002\uffff\u0001\u0091",
            "",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "\u0001\u0094\u0002\uffff\u000a\u0021\u0007\uffff\u001a\u0021"+
            "\u0004\uffff\u0001\u0021\u0001\uffff\u001a\u0021",
            "\u0001\u0096",
            "",
            "\u0001\u0097",
            "\u0001\u0098",
            "\u0001\u0099",
            "\u0001\u009a",
            "\u0001\u009b",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "",
            "\u0001\u009d",
            "",
            "\u0001\u009e",
            "\u0001\u009f",
            "\u0001\u00a0",
            "",
            "",
            "",
            "",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "\u0001\u00a3",
            "\u0001\u00a4",
            "\u0001\u00a5",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "\u0001\u00a8",
            "\u0001\u00a9",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "",
            "",
            "\u0001\u00ab",
            "\u0001\u00ac",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "",
            "",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "\u000a\u0021\u0007\uffff\u001a\u0021\u0004\uffff\u0001\u0021"+
            "\u0001\uffff\u001a\u0021",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(iQueryLexer, {
    DFA12_eot:
        org.antlr.runtime.DFA.unpackEncodedString(iQueryLexer.DFA12_eotS),
    DFA12_eof:
        org.antlr.runtime.DFA.unpackEncodedString(iQueryLexer.DFA12_eofS),
    DFA12_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(iQueryLexer.DFA12_minS),
    DFA12_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(iQueryLexer.DFA12_maxS),
    DFA12_accept:
        org.antlr.runtime.DFA.unpackEncodedString(iQueryLexer.DFA12_acceptS),
    DFA12_special:
        org.antlr.runtime.DFA.unpackEncodedString(iQueryLexer.DFA12_specialS),
    DFA12_transition: (function() {
        var a = [],
            i,
            numStates = iQueryLexer.DFA12_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(iQueryLexer.DFA12_transitionS[i]));
        }
        return a;
    })()
});

iQueryLexer.DFA12 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 12;
    this.eot = iQueryLexer.DFA12_eot;
    this.eof = iQueryLexer.DFA12_eof;
    this.min = iQueryLexer.DFA12_min;
    this.max = iQueryLexer.DFA12_max;
    this.accept = iQueryLexer.DFA12_accept;
    this.special = iQueryLexer.DFA12_special;
    this.transition = iQueryLexer.DFA12_transition;
};

org.antlr.lang.extend(iQueryLexer.DFA12, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( T__41 | T__42 | T__43 | T__44 | T__45 | T__46 | T__47 | T__48 | T__49 | T__50 | T__51 | T__52 | T__53 | T__54 | T__55 | T__56 | T__57 | DESCENDANT | EQ | GT | LT | NOT | CONTAINS | TEXT | RADIO | EMPTY | CHECKBOX | FOCUS | HAS | CHECKED | PREV | NEXT | SIBLINGS | NTH_CHILD | PARENT | DISABLED | ENABLED | VISIBLE | HIDDEN | BUTTON | LABEL | IMAGE | LAST_CHILD | FIRST_CHILD | FIRST | LAST | PERCENTAGE | FLOAT | ELEMENT | ASTERISK | QUOTED_STRING | NEWLINE | WS );";
    },
    dummy: null
});
 
})();