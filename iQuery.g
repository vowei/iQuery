grammar iQuery;

query
    : selectors NEWLINE* EOF
    | NEWLINE* EOF
    ;

selectors
    : multi_selectors multi_selectors*
    ;

multi_selectors
    : selector
    | '>' selector
    | DESCENDANT INTEGER selector
    | DESCENDANT selector
    ;

selector
    : selector_expression
        (
            ('+' selector_expression)
        |
            ('~' selector_expression)
        )?
    | multi_attributes
    ;

num_comp_op
    : '>'
    | '<'
    | '>='
    | '<='
    | '='
    ;

multi_attributes
    : '[' ELEMENT op QUOTED_STRING ']'
    | '[' ':' ELEMENT op QUOTED_STRING ']'
    | '[' ELEMENT num_comp_op (INTEGER | FLOAT | PERCENTAGE) ']'
    | '[' ':' ELEMENT num_comp_op (INTEGER | FLOAT | PERCENTAGE) ']'
    | '[' ELEMENT ']'
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

selector_expression
    : atom
    | ':' indexop '(' INTEGER ')'
    | ':' NOT '(' selectors ')'
    | ':' HAS '(' selectors ')'
    | ':' CONTAINS '(' QUOTED_STRING ')'
    | ':' LAST_CHILD
    | ':' FIRST_CHILD
    | ':' FIRST
    | ':' LAST
    | ':' EMPTY
    | ':' PARENT
    | ':' ELEMENT
        {
            $survival = filterPseudo($candidates, $ELEMENT.text); 
        }
    | '#' ELEMENT
    ;

atom
    : ASTERISK
    | ELEMENT
    ;

DESCENDANT: '>>';
EQ: 'eq';
GT: 'gt';
LT: 'lt';
NOT: 'not';
CONTAINS: 'contains';
EMPTY: 'empty';
HAS: 'has';
PREV: 'prev';
NEXT: 'next';
SIBLINGS: 'siblings';
NTH_CHILD: 'nth-child';
PARENT: 'parent';
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
