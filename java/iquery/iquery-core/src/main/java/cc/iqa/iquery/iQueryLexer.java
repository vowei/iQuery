// $ANTLR 3.4 cc/iqa/iquery/iQuery.g 2012-09-06 19:14:26

package cc.iqa.iquery;


import org.antlr.runtime.*;
import java.util.Stack;
import java.util.List;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked"})
public class iQueryLexer extends Lexer {
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


    // delegates
    // delegators
    public Lexer[] getDelegates() {
        return new Lexer[] {};
    }

    public iQueryLexer() {} 
    public iQueryLexer(CharStream input) {
        this(input, new RecognizerSharedState());
    }
    public iQueryLexer(CharStream input, RecognizerSharedState state) {
        super(input,state);
    }
    public String getGrammarFileName() { return "cc/iqa/iquery/iQuery.g"; }

    // $ANTLR start "T__30"
    public final void mT__30() throws RecognitionException {
        try {
            int _type = T__30;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:26:7: ( '!=' )
            // cc/iqa/iquery/iQuery.g:26:9: '!='
            {
            match("!="); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__30"

    // $ANTLR start "T__31"
    public final void mT__31() throws RecognitionException {
        try {
            int _type = T__31;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:27:7: ( '#' )
            // cc/iqa/iquery/iQuery.g:27:9: '#'
            {
            match('#'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__31"

    // $ANTLR start "T__32"
    public final void mT__32() throws RecognitionException {
        try {
            int _type = T__32;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:28:7: ( '$=' )
            // cc/iqa/iquery/iQuery.g:28:9: '$='
            {
            match("$="); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__32"

    // $ANTLR start "T__33"
    public final void mT__33() throws RecognitionException {
        try {
            int _type = T__33;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:29:7: ( '(' )
            // cc/iqa/iquery/iQuery.g:29:9: '('
            {
            match('('); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__33"

    // $ANTLR start "T__34"
    public final void mT__34() throws RecognitionException {
        try {
            int _type = T__34;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:30:7: ( ')' )
            // cc/iqa/iquery/iQuery.g:30:9: ')'
            {
            match(')'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__34"

    // $ANTLR start "T__35"
    public final void mT__35() throws RecognitionException {
        try {
            int _type = T__35;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:31:7: ( '*=' )
            // cc/iqa/iquery/iQuery.g:31:9: '*='
            {
            match("*="); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__35"

    // $ANTLR start "T__36"
    public final void mT__36() throws RecognitionException {
        try {
            int _type = T__36;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:32:7: ( '+' )
            // cc/iqa/iquery/iQuery.g:32:9: '+'
            {
            match('+'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__36"

    // $ANTLR start "T__37"
    public final void mT__37() throws RecognitionException {
        try {
            int _type = T__37;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:33:7: ( ':' )
            // cc/iqa/iquery/iQuery.g:33:9: ':'
            {
            match(':'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__37"

    // $ANTLR start "T__38"
    public final void mT__38() throws RecognitionException {
        try {
            int _type = T__38;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:34:7: ( '<' )
            // cc/iqa/iquery/iQuery.g:34:9: '<'
            {
            match('<'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__38"

    // $ANTLR start "T__39"
    public final void mT__39() throws RecognitionException {
        try {
            int _type = T__39;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:35:7: ( '<=' )
            // cc/iqa/iquery/iQuery.g:35:9: '<='
            {
            match("<="); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__39"

    // $ANTLR start "T__40"
    public final void mT__40() throws RecognitionException {
        try {
            int _type = T__40;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:36:7: ( '=' )
            // cc/iqa/iquery/iQuery.g:36:9: '='
            {
            match('='); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__40"

    // $ANTLR start "T__41"
    public final void mT__41() throws RecognitionException {
        try {
            int _type = T__41;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:37:7: ( '>' )
            // cc/iqa/iquery/iQuery.g:37:9: '>'
            {
            match('>'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__41"

    // $ANTLR start "T__42"
    public final void mT__42() throws RecognitionException {
        try {
            int _type = T__42;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:38:7: ( '>=' )
            // cc/iqa/iquery/iQuery.g:38:9: '>='
            {
            match(">="); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__42"

    // $ANTLR start "T__43"
    public final void mT__43() throws RecognitionException {
        try {
            int _type = T__43;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:39:7: ( '[' )
            // cc/iqa/iquery/iQuery.g:39:9: '['
            {
            match('['); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__43"

    // $ANTLR start "T__44"
    public final void mT__44() throws RecognitionException {
        try {
            int _type = T__44;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:40:7: ( ']' )
            // cc/iqa/iquery/iQuery.g:40:9: ']'
            {
            match(']'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__44"

    // $ANTLR start "T__45"
    public final void mT__45() throws RecognitionException {
        try {
            int _type = T__45;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:41:7: ( '^=' )
            // cc/iqa/iquery/iQuery.g:41:9: '^='
            {
            match("^="); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__45"

    // $ANTLR start "T__46"
    public final void mT__46() throws RecognitionException {
        try {
            int _type = T__46;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:42:7: ( '~' )
            // cc/iqa/iquery/iQuery.g:42:9: '~'
            {
            match('~'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "T__46"

    // $ANTLR start "DESCENDANT"
    public final void mDESCENDANT() throws RecognitionException {
        try {
            int _type = DESCENDANT;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:837:11: ( '>>' )
            // cc/iqa/iquery/iQuery.g:837:13: '>>'
            {
            match(">>"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "DESCENDANT"

    // $ANTLR start "EQ"
    public final void mEQ() throws RecognitionException {
        try {
            int _type = EQ;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:838:3: ( 'eq' )
            // cc/iqa/iquery/iQuery.g:838:5: 'eq'
            {
            match("eq"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "EQ"

    // $ANTLR start "GT"
    public final void mGT() throws RecognitionException {
        try {
            int _type = GT;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:839:3: ( 'gt' )
            // cc/iqa/iquery/iQuery.g:839:5: 'gt'
            {
            match("gt"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "GT"

    // $ANTLR start "LT"
    public final void mLT() throws RecognitionException {
        try {
            int _type = LT;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:840:3: ( 'lt' )
            // cc/iqa/iquery/iQuery.g:840:5: 'lt'
            {
            match("lt"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "LT"

    // $ANTLR start "NOT"
    public final void mNOT() throws RecognitionException {
        try {
            int _type = NOT;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:841:4: ( 'not' )
            // cc/iqa/iquery/iQuery.g:841:6: 'not'
            {
            match("not"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "NOT"

    // $ANTLR start "CONTAINS"
    public final void mCONTAINS() throws RecognitionException {
        try {
            int _type = CONTAINS;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:842:9: ( 'contains' )
            // cc/iqa/iquery/iQuery.g:842:11: 'contains'
            {
            match("contains"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "CONTAINS"

    // $ANTLR start "EMPTY"
    public final void mEMPTY() throws RecognitionException {
        try {
            int _type = EMPTY;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:845:6: ( 'empty' )
            // cc/iqa/iquery/iQuery.g:845:8: 'empty'
            {
            match("empty"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "EMPTY"

    // $ANTLR start "HAS"
    public final void mHAS() throws RecognitionException {
        try {
            int _type = HAS;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:848:4: ( 'has' )
            // cc/iqa/iquery/iQuery.g:848:6: 'has'
            {
            match("has"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "HAS"

    // $ANTLR start "PREV"
    public final void mPREV() throws RecognitionException {
        try {
            int _type = PREV;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:850:5: ( 'prev' )
            // cc/iqa/iquery/iQuery.g:850:7: 'prev'
            {
            match("prev"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "PREV"

    // $ANTLR start "NEXT"
    public final void mNEXT() throws RecognitionException {
        try {
            int _type = NEXT;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:851:5: ( 'next' )
            // cc/iqa/iquery/iQuery.g:851:7: 'next'
            {
            match("next"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "NEXT"

    // $ANTLR start "SIBLINGS"
    public final void mSIBLINGS() throws RecognitionException {
        try {
            int _type = SIBLINGS;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:852:9: ( 'siblings' )
            // cc/iqa/iquery/iQuery.g:852:11: 'siblings'
            {
            match("siblings"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "SIBLINGS"

    // $ANTLR start "NTH_CHILD"
    public final void mNTH_CHILD() throws RecognitionException {
        try {
            int _type = NTH_CHILD;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:853:10: ( 'nth-child' )
            // cc/iqa/iquery/iQuery.g:853:12: 'nth-child'
            {
            match("nth-child"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "NTH_CHILD"

    // $ANTLR start "PARENT"
    public final void mPARENT() throws RecognitionException {
        try {
            int _type = PARENT;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:854:7: ( 'parent' )
            // cc/iqa/iquery/iQuery.g:854:9: 'parent'
            {
            match("parent"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "PARENT"

    // $ANTLR start "LAST_CHILD"
    public final void mLAST_CHILD() throws RecognitionException {
        try {
            int _type = LAST_CHILD;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:862:11: ( 'last-child' )
            // cc/iqa/iquery/iQuery.g:862:13: 'last-child'
            {
            match("last-child"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "LAST_CHILD"

    // $ANTLR start "FIRST_CHILD"
    public final void mFIRST_CHILD() throws RecognitionException {
        try {
            int _type = FIRST_CHILD;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:863:12: ( 'first-child' )
            // cc/iqa/iquery/iQuery.g:863:14: 'first-child'
            {
            match("first-child"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "FIRST_CHILD"

    // $ANTLR start "FIRST"
    public final void mFIRST() throws RecognitionException {
        try {
            int _type = FIRST;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:864:6: ( 'first' )
            // cc/iqa/iquery/iQuery.g:864:8: 'first'
            {
            match("first"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "FIRST"

    // $ANTLR start "LAST"
    public final void mLAST() throws RecognitionException {
        try {
            int _type = LAST;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:865:5: ( 'last' )
            // cc/iqa/iquery/iQuery.g:865:7: 'last'
            {
            match("last"); 



            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "LAST"

    // $ANTLR start "INTEGER"
    public final void mINTEGER() throws RecognitionException {
        try {
            int _type = INTEGER;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:866:8: ( ( DIGIT )+ )
            // cc/iqa/iquery/iQuery.g:866:10: ( DIGIT )+
            {
            // cc/iqa/iquery/iQuery.g:866:10: ( DIGIT )+
            int cnt1=0;
            loop1:
            do {
                int alt1=2;
                int LA1_0 = input.LA(1);

                if ( ((LA1_0 >= '0' && LA1_0 <= '9')) ) {
                    alt1=1;
                }


                switch (alt1) {
            	case 1 :
            	    // cc/iqa/iquery/iQuery.g:
            	    {
            	    if ( (input.LA(1) >= '0' && input.LA(1) <= '9') ) {
            	        input.consume();
            	    }
            	    else {
            	        MismatchedSetException mse = new MismatchedSetException(null,input);
            	        recover(mse);
            	        throw mse;
            	    }


            	    }
            	    break;

            	default :
            	    if ( cnt1 >= 1 ) break loop1;
                        EarlyExitException eee =
                            new EarlyExitException(1, input);
                        throw eee;
                }
                cnt1++;
            } while (true);


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "INTEGER"

    // $ANTLR start "PERCENTAGE"
    public final void mPERCENTAGE() throws RecognitionException {
        try {
            int _type = PERCENTAGE;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:867:11: ( ( '+' | '-' )? ( DIGIT )+ ( '.' ( DIGIT )+ )? '%' )
            // cc/iqa/iquery/iQuery.g:867:13: ( '+' | '-' )? ( DIGIT )+ ( '.' ( DIGIT )+ )? '%'
            {
            // cc/iqa/iquery/iQuery.g:867:13: ( '+' | '-' )?
            int alt2=2;
            int LA2_0 = input.LA(1);

            if ( (LA2_0=='+'||LA2_0=='-') ) {
                alt2=1;
            }
            switch (alt2) {
                case 1 :
                    // cc/iqa/iquery/iQuery.g:
                    {
                    if ( input.LA(1)=='+'||input.LA(1)=='-' ) {
                        input.consume();
                    }
                    else {
                        MismatchedSetException mse = new MismatchedSetException(null,input);
                        recover(mse);
                        throw mse;
                    }


                    }
                    break;

            }


            // cc/iqa/iquery/iQuery.g:867:26: ( DIGIT )+
            int cnt3=0;
            loop3:
            do {
                int alt3=2;
                int LA3_0 = input.LA(1);

                if ( ((LA3_0 >= '0' && LA3_0 <= '9')) ) {
                    alt3=1;
                }


                switch (alt3) {
            	case 1 :
            	    // cc/iqa/iquery/iQuery.g:
            	    {
            	    if ( (input.LA(1) >= '0' && input.LA(1) <= '9') ) {
            	        input.consume();
            	    }
            	    else {
            	        MismatchedSetException mse = new MismatchedSetException(null,input);
            	        recover(mse);
            	        throw mse;
            	    }


            	    }
            	    break;

            	default :
            	    if ( cnt3 >= 1 ) break loop3;
                        EarlyExitException eee =
                            new EarlyExitException(3, input);
                        throw eee;
                }
                cnt3++;
            } while (true);


            // cc/iqa/iquery/iQuery.g:867:33: ( '.' ( DIGIT )+ )?
            int alt5=2;
            int LA5_0 = input.LA(1);

            if ( (LA5_0=='.') ) {
                alt5=1;
            }
            switch (alt5) {
                case 1 :
                    // cc/iqa/iquery/iQuery.g:867:34: '.' ( DIGIT )+
                    {
                    match('.'); 

                    // cc/iqa/iquery/iQuery.g:867:38: ( DIGIT )+
                    int cnt4=0;
                    loop4:
                    do {
                        int alt4=2;
                        int LA4_0 = input.LA(1);

                        if ( ((LA4_0 >= '0' && LA4_0 <= '9')) ) {
                            alt4=1;
                        }


                        switch (alt4) {
                    	case 1 :
                    	    // cc/iqa/iquery/iQuery.g:
                    	    {
                    	    if ( (input.LA(1) >= '0' && input.LA(1) <= '9') ) {
                    	        input.consume();
                    	    }
                    	    else {
                    	        MismatchedSetException mse = new MismatchedSetException(null,input);
                    	        recover(mse);
                    	        throw mse;
                    	    }


                    	    }
                    	    break;

                    	default :
                    	    if ( cnt4 >= 1 ) break loop4;
                                EarlyExitException eee =
                                    new EarlyExitException(4, input);
                                throw eee;
                        }
                        cnt4++;
                    } while (true);


                    }
                    break;

            }


            match('%'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "PERCENTAGE"

    // $ANTLR start "FLOAT"
    public final void mFLOAT() throws RecognitionException {
        try {
            int _type = FLOAT;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:868:6: ( ( '+' | '-' )? ( DIGIT )+ ( '.' ( DIGIT )+ )? )
            // cc/iqa/iquery/iQuery.g:868:8: ( '+' | '-' )? ( DIGIT )+ ( '.' ( DIGIT )+ )?
            {
            // cc/iqa/iquery/iQuery.g:868:8: ( '+' | '-' )?
            int alt6=2;
            int LA6_0 = input.LA(1);

            if ( (LA6_0=='+'||LA6_0=='-') ) {
                alt6=1;
            }
            switch (alt6) {
                case 1 :
                    // cc/iqa/iquery/iQuery.g:
                    {
                    if ( input.LA(1)=='+'||input.LA(1)=='-' ) {
                        input.consume();
                    }
                    else {
                        MismatchedSetException mse = new MismatchedSetException(null,input);
                        recover(mse);
                        throw mse;
                    }


                    }
                    break;

            }


            // cc/iqa/iquery/iQuery.g:868:21: ( DIGIT )+
            int cnt7=0;
            loop7:
            do {
                int alt7=2;
                int LA7_0 = input.LA(1);

                if ( ((LA7_0 >= '0' && LA7_0 <= '9')) ) {
                    alt7=1;
                }


                switch (alt7) {
            	case 1 :
            	    // cc/iqa/iquery/iQuery.g:
            	    {
            	    if ( (input.LA(1) >= '0' && input.LA(1) <= '9') ) {
            	        input.consume();
            	    }
            	    else {
            	        MismatchedSetException mse = new MismatchedSetException(null,input);
            	        recover(mse);
            	        throw mse;
            	    }


            	    }
            	    break;

            	default :
            	    if ( cnt7 >= 1 ) break loop7;
                        EarlyExitException eee =
                            new EarlyExitException(7, input);
                        throw eee;
                }
                cnt7++;
            } while (true);


            // cc/iqa/iquery/iQuery.g:868:28: ( '.' ( DIGIT )+ )?
            int alt9=2;
            int LA9_0 = input.LA(1);

            if ( (LA9_0=='.') ) {
                alt9=1;
            }
            switch (alt9) {
                case 1 :
                    // cc/iqa/iquery/iQuery.g:868:29: '.' ( DIGIT )+
                    {
                    match('.'); 

                    // cc/iqa/iquery/iQuery.g:868:33: ( DIGIT )+
                    int cnt8=0;
                    loop8:
                    do {
                        int alt8=2;
                        int LA8_0 = input.LA(1);

                        if ( ((LA8_0 >= '0' && LA8_0 <= '9')) ) {
                            alt8=1;
                        }


                        switch (alt8) {
                    	case 1 :
                    	    // cc/iqa/iquery/iQuery.g:
                    	    {
                    	    if ( (input.LA(1) >= '0' && input.LA(1) <= '9') ) {
                    	        input.consume();
                    	    }
                    	    else {
                    	        MismatchedSetException mse = new MismatchedSetException(null,input);
                    	        recover(mse);
                    	        throw mse;
                    	    }


                    	    }
                    	    break;

                    	default :
                    	    if ( cnt8 >= 1 ) break loop8;
                                EarlyExitException eee =
                                    new EarlyExitException(8, input);
                                throw eee;
                        }
                        cnt8++;
                    } while (true);


                    }
                    break;

            }


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "FLOAT"

    // $ANTLR start "DIGIT"
    public final void mDIGIT() throws RecognitionException {
        try {
            // cc/iqa/iquery/iQuery.g:869:15: ( ( '0' .. '9' ) )
            // cc/iqa/iquery/iQuery.g:
            {
            if ( (input.LA(1) >= '0' && input.LA(1) <= '9') ) {
                input.consume();
            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                recover(mse);
                throw mse;
            }


            }


        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "DIGIT"

    // $ANTLR start "ELEMENT"
    public final void mELEMENT() throws RecognitionException {
        try {
            int _type = ELEMENT;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:870:8: ( ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '.' )* )
            // cc/iqa/iquery/iQuery.g:870:10: ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '.' )*
            {
            if ( (input.LA(1) >= 'A' && input.LA(1) <= 'Z')||input.LA(1)=='_'||(input.LA(1) >= 'a' && input.LA(1) <= 'z') ) {
                input.consume();
            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                recover(mse);
                throw mse;
            }


            // cc/iqa/iquery/iQuery.g:870:33: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '.' )*
            loop10:
            do {
                int alt10=2;
                int LA10_0 = input.LA(1);

                if ( (LA10_0=='.'||(LA10_0 >= '0' && LA10_0 <= '9')||(LA10_0 >= 'A' && LA10_0 <= 'Z')||LA10_0=='_'||(LA10_0 >= 'a' && LA10_0 <= 'z')) ) {
                    alt10=1;
                }


                switch (alt10) {
            	case 1 :
            	    // cc/iqa/iquery/iQuery.g:
            	    {
            	    if ( input.LA(1)=='.'||(input.LA(1) >= '0' && input.LA(1) <= '9')||(input.LA(1) >= 'A' && input.LA(1) <= 'Z')||input.LA(1)=='_'||(input.LA(1) >= 'a' && input.LA(1) <= 'z') ) {
            	        input.consume();
            	    }
            	    else {
            	        MismatchedSetException mse = new MismatchedSetException(null,input);
            	        recover(mse);
            	        throw mse;
            	    }


            	    }
            	    break;

            	default :
            	    break loop10;
                }
            } while (true);


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "ELEMENT"

    // $ANTLR start "ASTERISK"
    public final void mASTERISK() throws RecognitionException {
        try {
            int _type = ASTERISK;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:871:9: ( '*' )
            // cc/iqa/iquery/iQuery.g:871:11: '*'
            {
            match('*'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "ASTERISK"

    // $ANTLR start "QUOTED_STRING"
    public final void mQUOTED_STRING() throws RecognitionException {
        try {
            int _type = QUOTED_STRING;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:872:14: ( '\\'' ( . )+ '\\'' )
            // cc/iqa/iquery/iQuery.g:872:16: '\\'' ( . )+ '\\''
            {
            match('\''); 

            // cc/iqa/iquery/iQuery.g:872:21: ( . )+
            int cnt11=0;
            loop11:
            do {
                int alt11=2;
                int LA11_0 = input.LA(1);

                if ( (LA11_0=='\'') ) {
                    alt11=2;
                }
                else if ( ((LA11_0 >= '\u0000' && LA11_0 <= '&')||(LA11_0 >= '(' && LA11_0 <= '\uFFFF')) ) {
                    alt11=1;
                }


                switch (alt11) {
            	case 1 :
            	    // cc/iqa/iquery/iQuery.g:872:21: .
            	    {
            	    matchAny(); 

            	    }
            	    break;

            	default :
            	    if ( cnt11 >= 1 ) break loop11;
                        EarlyExitException eee =
                            new EarlyExitException(11, input);
                        throw eee;
                }
                cnt11++;
            } while (true);


            match('\''); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "QUOTED_STRING"

    // $ANTLR start "NEWLINE"
    public final void mNEWLINE() throws RecognitionException {
        try {
            int _type = NEWLINE;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:873:8: ( ( '\\r' )? '\\n' )
            // cc/iqa/iquery/iQuery.g:873:10: ( '\\r' )? '\\n'
            {
            // cc/iqa/iquery/iQuery.g:873:10: ( '\\r' )?
            int alt12=2;
            int LA12_0 = input.LA(1);

            if ( (LA12_0=='\r') ) {
                alt12=1;
            }
            switch (alt12) {
                case 1 :
                    // cc/iqa/iquery/iQuery.g:873:10: '\\r'
                    {
                    match('\r'); 

                    }
                    break;

            }


            match('\n'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "NEWLINE"

    // $ANTLR start "WS"
    public final void mWS() throws RecognitionException {
        try {
            int _type = WS;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // cc/iqa/iquery/iQuery.g:874:3: ( ( ' ' | '\\t' ) )
            // cc/iqa/iquery/iQuery.g:874:5: ( ' ' | '\\t' )
            {
            if ( input.LA(1)=='\t'||input.LA(1)==' ' ) {
                input.consume();
            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                recover(mse);
                throw mse;
            }


             skip(); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        	// do for sure before leaving
        }
    }
    // $ANTLR end "WS"

    public void mTokens() throws RecognitionException {
        // cc/iqa/iquery/iQuery.g:1:8: ( T__30 | T__31 | T__32 | T__33 | T__34 | T__35 | T__36 | T__37 | T__38 | T__39 | T__40 | T__41 | T__42 | T__43 | T__44 | T__45 | T__46 | DESCENDANT | EQ | GT | LT | NOT | CONTAINS | EMPTY | HAS | PREV | NEXT | SIBLINGS | NTH_CHILD | PARENT | LAST_CHILD | FIRST_CHILD | FIRST | LAST | INTEGER | PERCENTAGE | FLOAT | ELEMENT | ASTERISK | QUOTED_STRING | NEWLINE | WS )
        int alt13=42;
        alt13 = dfa13.predict(input);
        switch (alt13) {
            case 1 :
                // cc/iqa/iquery/iQuery.g:1:10: T__30
                {
                mT__30(); 


                }
                break;
            case 2 :
                // cc/iqa/iquery/iQuery.g:1:16: T__31
                {
                mT__31(); 


                }
                break;
            case 3 :
                // cc/iqa/iquery/iQuery.g:1:22: T__32
                {
                mT__32(); 


                }
                break;
            case 4 :
                // cc/iqa/iquery/iQuery.g:1:28: T__33
                {
                mT__33(); 


                }
                break;
            case 5 :
                // cc/iqa/iquery/iQuery.g:1:34: T__34
                {
                mT__34(); 


                }
                break;
            case 6 :
                // cc/iqa/iquery/iQuery.g:1:40: T__35
                {
                mT__35(); 


                }
                break;
            case 7 :
                // cc/iqa/iquery/iQuery.g:1:46: T__36
                {
                mT__36(); 


                }
                break;
            case 8 :
                // cc/iqa/iquery/iQuery.g:1:52: T__37
                {
                mT__37(); 


                }
                break;
            case 9 :
                // cc/iqa/iquery/iQuery.g:1:58: T__38
                {
                mT__38(); 


                }
                break;
            case 10 :
                // cc/iqa/iquery/iQuery.g:1:64: T__39
                {
                mT__39(); 


                }
                break;
            case 11 :
                // cc/iqa/iquery/iQuery.g:1:70: T__40
                {
                mT__40(); 


                }
                break;
            case 12 :
                // cc/iqa/iquery/iQuery.g:1:76: T__41
                {
                mT__41(); 


                }
                break;
            case 13 :
                // cc/iqa/iquery/iQuery.g:1:82: T__42
                {
                mT__42(); 


                }
                break;
            case 14 :
                // cc/iqa/iquery/iQuery.g:1:88: T__43
                {
                mT__43(); 


                }
                break;
            case 15 :
                // cc/iqa/iquery/iQuery.g:1:94: T__44
                {
                mT__44(); 


                }
                break;
            case 16 :
                // cc/iqa/iquery/iQuery.g:1:100: T__45
                {
                mT__45(); 


                }
                break;
            case 17 :
                // cc/iqa/iquery/iQuery.g:1:106: T__46
                {
                mT__46(); 


                }
                break;
            case 18 :
                // cc/iqa/iquery/iQuery.g:1:112: DESCENDANT
                {
                mDESCENDANT(); 


                }
                break;
            case 19 :
                // cc/iqa/iquery/iQuery.g:1:123: EQ
                {
                mEQ(); 


                }
                break;
            case 20 :
                // cc/iqa/iquery/iQuery.g:1:126: GT
                {
                mGT(); 


                }
                break;
            case 21 :
                // cc/iqa/iquery/iQuery.g:1:129: LT
                {
                mLT(); 


                }
                break;
            case 22 :
                // cc/iqa/iquery/iQuery.g:1:132: NOT
                {
                mNOT(); 


                }
                break;
            case 23 :
                // cc/iqa/iquery/iQuery.g:1:136: CONTAINS
                {
                mCONTAINS(); 


                }
                break;
            case 24 :
                // cc/iqa/iquery/iQuery.g:1:145: EMPTY
                {
                mEMPTY(); 


                }
                break;
            case 25 :
                // cc/iqa/iquery/iQuery.g:1:151: HAS
                {
                mHAS(); 


                }
                break;
            case 26 :
                // cc/iqa/iquery/iQuery.g:1:155: PREV
                {
                mPREV(); 


                }
                break;
            case 27 :
                // cc/iqa/iquery/iQuery.g:1:160: NEXT
                {
                mNEXT(); 


                }
                break;
            case 28 :
                // cc/iqa/iquery/iQuery.g:1:165: SIBLINGS
                {
                mSIBLINGS(); 


                }
                break;
            case 29 :
                // cc/iqa/iquery/iQuery.g:1:174: NTH_CHILD
                {
                mNTH_CHILD(); 


                }
                break;
            case 30 :
                // cc/iqa/iquery/iQuery.g:1:184: PARENT
                {
                mPARENT(); 


                }
                break;
            case 31 :
                // cc/iqa/iquery/iQuery.g:1:191: LAST_CHILD
                {
                mLAST_CHILD(); 


                }
                break;
            case 32 :
                // cc/iqa/iquery/iQuery.g:1:202: FIRST_CHILD
                {
                mFIRST_CHILD(); 


                }
                break;
            case 33 :
                // cc/iqa/iquery/iQuery.g:1:214: FIRST
                {
                mFIRST(); 


                }
                break;
            case 34 :
                // cc/iqa/iquery/iQuery.g:1:220: LAST
                {
                mLAST(); 


                }
                break;
            case 35 :
                // cc/iqa/iquery/iQuery.g:1:225: INTEGER
                {
                mINTEGER(); 


                }
                break;
            case 36 :
                // cc/iqa/iquery/iQuery.g:1:233: PERCENTAGE
                {
                mPERCENTAGE(); 


                }
                break;
            case 37 :
                // cc/iqa/iquery/iQuery.g:1:244: FLOAT
                {
                mFLOAT(); 


                }
                break;
            case 38 :
                // cc/iqa/iquery/iQuery.g:1:250: ELEMENT
                {
                mELEMENT(); 


                }
                break;
            case 39 :
                // cc/iqa/iquery/iQuery.g:1:258: ASTERISK
                {
                mASTERISK(); 


                }
                break;
            case 40 :
                // cc/iqa/iquery/iQuery.g:1:267: QUOTED_STRING
                {
                mQUOTED_STRING(); 


                }
                break;
            case 41 :
                // cc/iqa/iquery/iQuery.g:1:281: NEWLINE
                {
                mNEWLINE(); 


                }
                break;
            case 42 :
                // cc/iqa/iquery/iQuery.g:1:289: WS
                {
                mWS(); 


                }
                break;

        }

    }


    protected DFA13 dfa13 = new DFA13(this);
    static final String DFA13_eotS =
        "\6\uffff\1\40\1\41\1\uffff\1\44\1\uffff\1\47\4\uffff\11\33\1\66"+
        "\10\uffff\1\71\5\uffff\1\72\1\33\1\74\1\75\12\33\5\uffff\1\33\2"+
        "\uffff\1\33\1\113\3\33\1\117\4\33\1\71\1\33\1\126\1\uffff\1\127"+
        "\1\uffff\1\33\1\uffff\1\131\3\33\1\135\3\uffff\1\33\1\uffff\2\33"+
        "\1\142\1\uffff\1\33\1\144\1\33\2\uffff\1\33\1\uffff\1\33\1\150\1"+
        "\151\2\uffff";
    static final String DFA13_eofS =
        "\152\uffff";
    static final String DFA13_minS =
        "\1\11\5\uffff\1\75\1\60\1\uffff\1\75\1\uffff\1\75\4\uffff\1\155"+
        "\1\164\1\141\1\145\1\157\2\141\2\151\1\45\1\60\7\uffff\1\45\5\uffff"+
        "\1\56\1\160\2\56\1\163\1\164\1\170\1\150\1\156\1\163\1\145\1\162"+
        "\1\142\1\162\1\uffff\1\60\3\uffff\1\164\2\uffff\1\164\1\56\1\164"+
        "\1\55\1\164\1\56\1\166\1\145\1\154\1\163\1\45\1\171\1\55\1\uffff"+
        "\1\56\1\uffff\1\141\1\uffff\1\56\1\156\1\151\1\164\1\56\3\uffff"+
        "\1\151\1\uffff\1\164\1\156\1\55\1\uffff\1\156\1\56\1\147\2\uffff"+
        "\1\163\1\uffff\1\163\2\56\2\uffff";
    static final String DFA13_maxS =
        "\1\176\5\uffff\1\75\1\71\1\uffff\1\75\1\uffff\1\76\4\uffff\1\161"+
        "\3\164\1\157\1\141\1\162\2\151\2\71\7\uffff\1\71\5\uffff\1\172\1"+
        "\160\2\172\1\163\1\164\1\170\1\150\1\156\1\163\1\145\1\162\1\142"+
        "\1\162\1\uffff\1\71\3\uffff\1\164\2\uffff\1\164\1\172\1\164\1\55"+
        "\1\164\1\172\1\166\1\145\1\154\1\163\1\71\1\171\1\172\1\uffff\1"+
        "\172\1\uffff\1\141\1\uffff\1\172\1\156\1\151\1\164\1\172\3\uffff"+
        "\1\151\1\uffff\1\164\1\156\1\172\1\uffff\1\156\1\172\1\147\2\uffff"+
        "\1\163\1\uffff\1\163\2\172\2\uffff";
    static final String DFA13_acceptS =
        "\1\uffff\1\1\1\2\1\3\1\4\1\5\2\uffff\1\10\1\uffff\1\13\1\uffff\1"+
        "\16\1\17\1\20\1\21\13\uffff\1\46\1\50\1\51\1\52\1\6\1\47\1\7\1\uffff"+
        "\1\12\1\11\1\15\1\22\1\14\16\uffff\1\43\1\uffff\1\44\1\45\1\23\1"+
        "\uffff\1\24\1\25\15\uffff\1\26\1\uffff\1\35\1\uffff\1\31\5\uffff"+
        "\1\37\1\42\1\33\1\uffff\1\32\3\uffff\1\30\3\uffff\1\40\1\41\1\uffff"+
        "\1\36\3\uffff\1\27\1\34";
    static final String DFA13_specialS =
        "\152\uffff}>";
    static final String[] DFA13_transitionS = {
            "\1\36\1\35\2\uffff\1\35\22\uffff\1\36\1\1\1\uffff\1\2\1\3\2"+
            "\uffff\1\34\1\4\1\5\1\6\1\7\1\uffff\1\32\2\uffff\12\31\1\10"+
            "\1\uffff\1\11\1\12\1\13\2\uffff\32\33\1\14\1\uffff\1\15\1\16"+
            "\1\33\1\uffff\2\33\1\24\1\33\1\20\1\30\1\21\1\25\3\33\1\22\1"+
            "\33\1\23\1\33\1\26\2\33\1\27\7\33\3\uffff\1\17",
            "",
            "",
            "",
            "",
            "",
            "\1\37",
            "\12\42",
            "",
            "\1\43",
            "",
            "\1\45\1\46",
            "",
            "",
            "",
            "",
            "\1\51\3\uffff\1\50",
            "\1\52",
            "\1\54\22\uffff\1\53",
            "\1\56\11\uffff\1\55\4\uffff\1\57",
            "\1\60",
            "\1\61",
            "\1\63\20\uffff\1\62",
            "\1\64",
            "\1\65",
            "\1\70\10\uffff\1\67\1\uffff\12\31",
            "\12\42",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\1\70\10\uffff\1\67\1\uffff\12\42",
            "",
            "",
            "",
            "",
            "",
            "\1\33\1\uffff\12\33\7\uffff\32\33\4\uffff\1\33\1\uffff\32\33",
            "\1\73",
            "\1\33\1\uffff\12\33\7\uffff\32\33\4\uffff\1\33\1\uffff\32\33",
            "\1\33\1\uffff\12\33\7\uffff\32\33\4\uffff\1\33\1\uffff\32\33",
            "\1\76",
            "\1\77",
            "\1\100",
            "\1\101",
            "\1\102",
            "\1\103",
            "\1\104",
            "\1\105",
            "\1\106",
            "\1\107",
            "",
            "\12\110",
            "",
            "",
            "",
            "\1\111",
            "",
            "",
            "\1\112",
            "\1\33\1\uffff\12\33\7\uffff\32\33\4\uffff\1\33\1\uffff\32\33",
            "\1\114",
            "\1\115",
            "\1\116",
            "\1\33\1\uffff\12\33\7\uffff\32\33\4\uffff\1\33\1\uffff\32\33",
            "\1\120",
            "\1\121",
            "\1\122",
            "\1\123",
            "\1\70\12\uffff\12\110",
            "\1\124",
            "\1\125\1\33\1\uffff\12\33\7\uffff\32\33\4\uffff\1\33\1\uffff"+
            "\32\33",
            "",
            "\1\33\1\uffff\12\33\7\uffff\32\33\4\uffff\1\33\1\uffff\32\33",
            "",
            "\1\130",
            "",
            "\1\33\1\uffff\12\33\7\uffff\32\33\4\uffff\1\33\1\uffff\32\33",
            "\1\132",
            "\1\133",
            "\1\134",
            "\1\33\1\uffff\12\33\7\uffff\32\33\4\uffff\1\33\1\uffff\32\33",
            "",
            "",
            "",
            "\1\136",
            "",
            "\1\137",
            "\1\140",
            "\1\141\1\33\1\uffff\12\33\7\uffff\32\33\4\uffff\1\33\1\uffff"+
            "\32\33",
            "",
            "\1\143",
            "\1\33\1\uffff\12\33\7\uffff\32\33\4\uffff\1\33\1\uffff\32\33",
            "\1\145",
            "",
            "",
            "\1\146",
            "",
            "\1\147",
            "\1\33\1\uffff\12\33\7\uffff\32\33\4\uffff\1\33\1\uffff\32\33",
            "\1\33\1\uffff\12\33\7\uffff\32\33\4\uffff\1\33\1\uffff\32\33",
            "",
            ""
    };

    static final short[] DFA13_eot = DFA.unpackEncodedString(DFA13_eotS);
    static final short[] DFA13_eof = DFA.unpackEncodedString(DFA13_eofS);
    static final char[] DFA13_min = DFA.unpackEncodedStringToUnsignedChars(DFA13_minS);
    static final char[] DFA13_max = DFA.unpackEncodedStringToUnsignedChars(DFA13_maxS);
    static final short[] DFA13_accept = DFA.unpackEncodedString(DFA13_acceptS);
    static final short[] DFA13_special = DFA.unpackEncodedString(DFA13_specialS);
    static final short[][] DFA13_transition;

    static {
        int numStates = DFA13_transitionS.length;
        DFA13_transition = new short[numStates][];
        for (int i=0; i<numStates; i++) {
            DFA13_transition[i] = DFA.unpackEncodedString(DFA13_transitionS[i]);
        }
    }

    class DFA13 extends DFA {

        public DFA13(BaseRecognizer recognizer) {
            this.recognizer = recognizer;
            this.decisionNumber = 13;
            this.eot = DFA13_eot;
            this.eof = DFA13_eof;
            this.min = DFA13_min;
            this.max = DFA13_max;
            this.accept = DFA13_accept;
            this.special = DFA13_special;
            this.transition = DFA13_transition;
        }
        public String getDescription() {
            return "1:1: Tokens : ( T__30 | T__31 | T__32 | T__33 | T__34 | T__35 | T__36 | T__37 | T__38 | T__39 | T__40 | T__41 | T__42 | T__43 | T__44 | T__45 | T__46 | DESCENDANT | EQ | GT | LT | NOT | CONTAINS | EMPTY | HAS | PREV | NEXT | SIBLINGS | NTH_CHILD | PARENT | LAST_CHILD | FIRST_CHILD | FIRST | LAST | INTEGER | PERCENTAGE | FLOAT | ELEMENT | ASTERISK | QUOTED_STRING | NEWLINE | WS );";
        }
    }
 

}