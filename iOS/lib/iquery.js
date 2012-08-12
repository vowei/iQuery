#import "common.js";
#import "antlr3-all-min.js";
#import "iQueryLexer.js";
#import "iQueryParser.js";
#import "error.js";

function iQuery(selector) {
    debug("$('" + selector + "'");
    var cstream = new org.antlr.runtime.ANTLRStringStream(selector);
    var errors = [];
    this.lexer = new iQueryLexer(cstream);
    this.lexer._errors = errors;
    var tstream = new org.antlr.runtime.CommonTokenStream(this.lexer);
    this.parser = new iQueryParser(tstream);
    this.parser._errors = errors;
};

function registerPseudoAttrsHandler(parser) {
    parser.registerPseudoAttrs("height", function(uiaobj) {
	if ( uiaobj != undefined && uiaobj.rect != undefined ) {
	    var rect = uiaobj.rect();
	    debug("rect.height: " + rect.size.height);
	    return rect.size.height;
	}
    });
    parser.registerPseudoAttrs("width", function(uiaobj) {
	if ( uiaobj != undefined && uiaobj.rect != undefined ) {
	    var rect = uiaobj.rect();
	    return rect.size.width;
	}
    });
    parser.registerPseudoAttrs("top", function(uiaobj) {
	if ( uiaobj != undefined && uiaobj.rect != undefined ) {
	    var rect = uiaobj.rect();
	    return rect.origin.y;
	}
    });
    parser.registerPseudoAttrs("left", function(uiaobj) {
	if ( uiaobj != undefined && uiaobj.rect != undefined ) {
	    var rect = uiaobj.rect();
	    return rect.origin.x;
	}
    });
    parser.registerPseudoAttrs("bottom", function(uiaobj) {
	if ( uiaobj != undefined && uiaobj.rect != undefined ) {
	    var rect = uiaobj.rect();
	    return rect.origin.y + rect.size.height;
	}
    });
    parser.registerPseudoAttrs("right", function(uiaobj) {
	if ( uiaobj != undefined && uiaobj.rect != undefined ) {
	    var rect = uiaobj.rect();
	    return rect.origin.x + rect.size.width;
	}
    });
}

function _QueryFn(selector, context) {
    var iq = new iQuery(selector);

    registerPseudoAttrsHandler(iq.parser);

    context = context ? [context] : [UIATarget.localTarget().frontMostApp().mainWindow()];
    var result = iq.parser.prog(context);

    debug("ready to call errors");
    var errors = iq.parser.errors();
    if (errors != null && errors.length > 0) {
        throw errors;
    }

    return result;
};

$ = _QueryFn;
UIAElement.prototype.$ = function(selector) {
    return _QueryFn(selector, this);
}