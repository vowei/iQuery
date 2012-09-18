#import "common.js";
#import "antlr3-all-min.js";
#import "iQueryLexer.js";
#import "iQueryParser.js";
#import "error.js";

function iQuery(selector, registerPseudoes) {
    debug("$('" + selector + "')");
    var cstream = new org.antlr.runtime.ANTLRStringStream(selector);
    var errors = [];
    this.lexer = new iQueryLexer(cstream);
    this.lexer._errors = errors;
    var tstream = new org.antlr.runtime.CommonTokenStream(this.lexer);
    this.parser = new iQueryParser(tstream);
    this.parser._errors = errors;

    if ( registerPseudoes != undefined && registerPseudoes ) {
	registerPseudoAttrHandler(this.parser);
	registerPseudoClassHandler(this.parser);
    }
};

function registerPseudoAttrHandler(parser) {
    parser.registerPseudoAttr("height", function(uiaobj) {
	if ( uiaobj != undefined && uiaobj.rect != undefined ) {
	    var rect = uiaobj.rect();
	    debug("rect.height: " + rect.size.height);
	    return rect.size.height;
	}
    });
    parser.registerPseudoAttr("width", function(uiaobj) {
	if ( uiaobj != undefined && uiaobj.rect != undefined ) {
	    var rect = uiaobj.rect();
	    return rect.size.width;
	}
    });
    parser.registerPseudoAttr("top", function(uiaobj) {
	if ( uiaobj != undefined && uiaobj.rect != undefined ) {
	    var rect = uiaobj.rect();
	    return rect.origin.y;
	}
    });
    parser.registerPseudoAttr("left", function(uiaobj) {
	if ( uiaobj != undefined && uiaobj.rect != undefined ) {
	    var rect = uiaobj.rect();
	    return rect.origin.x;
	}
    });
    parser.registerPseudoAttr("bottom", function(uiaobj) {
	if ( uiaobj != undefined && uiaobj.rect != undefined ) {
	    var rect = uiaobj.rect();
	    return rect.origin.y + rect.size.height;
	}
    });
    parser.registerPseudoAttr("right", function(uiaobj) {
	if ( uiaobj != undefined && uiaobj.rect != undefined ) {
	    var rect = uiaobj.rect();
	    return rect.origin.x + rect.size.width;
	}
    });
}

function registerPseudoClassHandler(parser) {
    parser.registerPseudoClass("text", function(uiaobj) {
	if ( uiaobj != undefined ) {
	    return isMatch(uiaobj, new Array("UIATextField", "UIATextView", "UIASecureTextField"));
	}
    });
    parser.registerPseudoClass("radio", function(uiaobj) {
	if ( uiaobj != undefined ) {
	    return isMatch(uiaobj, new Array("UIASwitch"));
	}
    });
    parser.registerPseudoClass("checkbox", function(uiaobj) {
	if ( uiaobj != undefined ) {
	    return isMatch(uiaobj, new Array("UIASwitch"));
	}
    });
    parser.registerPseudoClass("button", function(uiaobj) {
	if ( uiaobj != undefined ) {
	    return isMatch(uiaobj, new Array("UIAButton"));
	}
    });
    parser.registerPseudoClass("image", function(uiaobj) {
	if ( uiaobj != undefined ) {
	    return isMatch(uiaobj, new Array("UIAImage"));
	}
    });
    parser.registerPseudoClass("label", function(uiaobj) {
	if ( uiaobj != undefined ) {
	    return isMatch(uiaobj, new Array("UIAStaticText", "UIAStatusBar", "UIALink"));
	}
    });
}

function _QueryFn(selector, context, template) {
    var iq = new iQuery(selector, template == undefined);

    if ( template != undefined && template != null ) {
	iq.parser.setTemplate(template.parser);
    }

    context = context ? [context] : [UIATarget.localTarget().frontMostApp().mainWindow()];
    var result = iq.parser.prog(context);

    var errors = iq.parser.errors();
    if (errors != null && errors.length > 0) {
        throw errors;
    }

    return result;
};

$ = _QueryFn;
UIAElement.prototype.$ = function(selector, template) {
    return _QueryFn(selector, this, template);
}