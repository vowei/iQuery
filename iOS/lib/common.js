/**
 * Created with JetBrains WebStorm.
 * User: Dawson
 * Date: 12-7-24
 * Time: 下午4:30
 * To change this template use File | Settings | File Templates.
 */

#import "Json2.js";
#import "Queue.js";

/***************************************************************************************************
 * 全局设置（作用在全局的变量）。
 */
var GlobalSettings = {
    debuggable: true
}
/***************************************************************************************************/

/***************************************************************************************************
 * 全局Log处理。
 */
function type(element) {
    var elemType = Object.prototype.toString.call(element);
    var spaceIdx = elemType.indexOf(' ');
    elemType = elemType.substring(spaceIdx + 1, elemType.length - 1);
    return elemType;
}

var debug = function (obj) {
    if (!GlobalSettings.debuggable) return;

    var message = "";
    var t = type(obj);
    if (t == "Array") {
        message = obj.join(",");
    } else if (t == "String") {
        message = obj;
    } else if (t == "object") {
        message = JSON.stringify(obj);
    }

    UIALogger.logMessage(message);
}

var verbose = function(message){
    UIALogger.logMessage(message);
}

var print = function (message) {
    UIALogger.logMessage(message);
}

function logCollection(cols, msg) {
    verbose(msg);
    if (cols == null) {
        verbose("collection cols is null reference");
    } else {
        verbose(cols.join(','));

        for (var i = 0; i < cols.length; ++i) {
            var col = cols[i];

            if (col != null && col.name != undefined) {
                verbose(col.name());
            }
        }
    }
}

function next(candidates, prevs) {
    var result = [];

    if ( prevs.length > candidates.length ) 
	throw localize("在next函数里，prevs元素集合的个数应该小于candidates元素的个数！");

    for ( var i = 0; i < prevs.length; ++i ) {
	var idx = candidates.indexOf(prevs[i]);
	if ( idx >= 0 && (idx < candidates.length - 1) ) {
	    if ( result.indexOf(candidates[idx + 1]) < 0 ) {
		result.push(candidates[idx + 1]);
	    }
	}
    }

    return result;
}

function siblings(candidates, prevs) {
    var result = [];

    if ( prevs.length > candidates.length ) 
	throw localize("在siblings函数里，prevs元素集合的个数应该小于candidates元素的个数！");

    for ( var i = 0; i < prevs.length; ++i ) {
	var idx = candidates.indexOf(prevs[i]);
	while ( idx >= 0 && (idx < candidates.length - 1) ) {
	    idx++;
	    if ( result.indexOf(candidates[idx]) < 0 ) {
		result.push(candidates[idx]);
	    }
	}
    }

    return result;
}

/**
 * from http://stackoverflow.com/questions/1303646/check-variable-whether-is-number-or-string-in-javascript
 */
function __isNumber(obj) {
    return isNaN(obj - 0);
}
function isFunction(element) {
    var t = type(element);
    return t == 'function' || t == 'CallbackFunction';
}
function remove_quote(quoted_str) {
    if (quoted_str[0] == '\'' || quoted_str[0] == '\"') {
        return quoted_str.substring(1, quoted_str.length - 1);
    } else {
        return quoted_str;
    }
}

/***************************************************************************************************/

/**
 * 加载指定element下面的所有子控件
 * @param elem - 开始查询的根节点
 * @param maxLevel － 可选］最大查询的子控件层数
 * @param filter - 可选］指定过滤子控件的判断函数，当指定这个参数时，maxLevel不能省略
 * @return {Array} 找到的子控件。
 */
function descendant(elem, maxLevel, filter) {
    var t = type(elem);
    var element = null;

    if (t == 'Array') {
        if (elem.length != 1) {
            throw localize("函数descendant仅接受包含一个元素的数组作为参数！参数element包含的元素个数：" + elem.length);
        }

        element = elem[0];
    } else if (t.indexOf("UIA") == 0) { // Apple UIA derive objects
        element = elem;
    } else {
        throw localize("函数descendant仅接受包含UIA类型的元素数组或者单个元素！");
    }

    var queue = new Queue();
    var result = [];
    var item = {
        e: element,
        l: 0
    };

    queue.enqueue(item);
    while (!queue.isEmpty()) {
        item = queue.dequeue();
        if (maxLevel != undefined && item.l > maxLevel)
            continue;

        var children = item.e.elements();
        for (var i = 0; i < children.length; ++i) {
            var child = children[i];
            if (result.indexOf(child) < 0) {
                queue.enqueue({
                    e: child, l: item.l + 1
                });
            }
        }

        result.push(item.e);
    }

    var filtered = null;
    if ( filter != undefined ) {
	filtered = [];
	for ( var i = 0; i < result.length; ++i ) {
	    if ( filter(result[i]) ) {
		filtered.push(result[i]);
	    }
	}
    }

    return filtered == null ? result : filtered;
};

// TODO: 考虑加上国际化错误消息支持
function localize(msg) {
    return msg;
}

/**
 * 获取指定元素的所有子控件。注意，只接受单一元素，或者包含一个元素的数组作为参数。
 * @param element - 指定的控件元素
 * @return {*} - 返回找到的子控件。
 */
function child(element) {
    var t = type(element);
    if (t == 'Array') {
        if (element.length != 1) {
            throw localize("函数child(e)仅接受包含一个元素的数组作为参数！参数element包含的元素个数：" + element.length);
        }

        return element[0].elements().toArray();
    } else if (t.indexOf("UIA") == 0) { // Apple UIA derive objects
        return element.elements().toArray();
    } else {
        throw localize("函数child仅接受包含UIA类型的元素数组或者单个元素！");
    }
}

function isMatch(element, expects) {
    var control = element;
    var names = expects;

    if (type(names) != 'Array') {
        names = [];
        names.push(expects);
    }

    var ctrlName = type(control);
    debug("ctrlName: " + ctrlName);
    for (var j = 0; j < names.length; ++j) {
	if (ctrlName == names[j]) {
	    return true;
	}
    }

    return false;
}

function _filterPseudoImpl(candidates, cls, pseudo_defines, errors) {
    debug("_filterPseudoImpl: " + cls);
    debug(pseudo_defines);
    var functor = pseudo_defines[cls];
    var result = [];
    if ( functor != undefined ) {
	for ( var i = 0; i < candidates.length; ++i ) {
	    var candidate = candidates[i];
	    if ( functor.apply(candidate) ) {
		result.push(candidate);
	    }
	}
    } else { 
        errors.push("未注册的伪类：" + cls);
    }

    return result;
}

function match(elements, expects) {
    var controls = elements;
    var names = expects;

    // 当作一个简单的对象处理
    if (type(elements) != 'Array') {
        controls = [];
        controls.push(elements);
    }

    if (type(names) != 'Array') {
        names = [];
        names.push(expects);
    }

    var result = [];
    for (var i = 0; i < controls.length; ++i) {
        var ctrlName = type(controls[i]);

        for (var j = 0; j < names.length; ++j) {
            if (ctrlName == names[j]) {
                result.push(controls[i]);
                break;
            }
        }
    }

    return result;
}

function checkAttr(elem, attr, value) {
    var actual = elem[attr];
    if (actual != undefined) {
        if (isFunction(actual)) {
            return value == actual.apply(elem);
        }
    }

    return false;
}

function filterAttrs(candidates, attrs, values) {
    var arr = null;
    if (type(candidates) != 'Array') {
        arr = [candidates];
    } else {
        arr = candidates;
    }

    var attributes = null;
    var varr = null;
    if ( type(attrs) != 'Array' ) {
        attributes = [attrs];
        varr = [values];
    } else {
        attributes = attrs;
        varr = values;
    }

    var result = [];
    for (var i = 0; i < arr.length; ++i) {
        for (var j = 0; j < attributes.length; ++j) {
            if (checkAttr(arr[i], attributes[j], varr[j])) {
                result.push(arr[i]);
            }
        }
    }

    return result;
}

/***************************************************************************************************
 * 断言。
 */
function Assert() {
    this.Fail = function (message) {
        throw message;
    };

    this.Retry = function () {
        var f = arguments[0];
        var maxTries = 3;
        var delay = 0.5;
        if (arguments.length > 1) { maxTries = arguments[1]; }
        if (arguments.length > 2) { delay = arguments[2]; }

        var tries = 0;
        var exception = null;
        while (tries < maxTries) {
            try {
                f();
                return;  // if we get here, our function must have passed (no exceptions)
            }
            catch (e) {
                exception = e;
                tries++;
                UIATarget.localTarget().delay(delay);
            }
        }
        throw exception;
    };

    this.True = function (expression, message) {
        if (!expression) {
            if (!message) { message = "Assertion failed"; }
            throw message;
        }
    };

    this.Match = function (regExp, expression, message) {
        var defMessage = "'" + expression + "' does not match '" + regExp + "'";
        this.True(regExp.test(expression), message ? message + ": " + defMessage : defMessage);
    };

    this.Equals = function (expected, received, message) {
        var defMessage = "Expected <" + expected + "> but received <" + received + ">";
        this.True(expected == received, message ? message + ": " + defMessage : defMessage);
    };

    this.False = function (expression, message) {
        this.True(!expression, message);
    };

    this.Null = function (thingie, message) {
        var defMessage = "Expected a null object, but received <" + thingie + ">";
        // TODO: string-matching on UIAElementNil makes my tummy feel bad. Fix it.
        this.True(thingie === null || thingie.toString() == "[object UIAElementNil]",
            message ? message + ": " + defMessage : defMessage);
    };

    this.NotNull = function (thingie, message) {
        var defMessage = "Expected not null object";
        this.True(thingie !== null && thingie.toString() != "[object UIAElementNil]",
            message ? message + ": " + defMessage : defMessage);
    };

    this.Exception = function (fn, containedMsg, message) {
        var hasException = false;
        var containsMsg = (containedMsg == "");

        try {
            fn();
        }
        catch (e) {
            hasException = true;
            if (containedMsg) {
                containsMsg = e.toString().contains(containedMsg);
            }
        }

        this.True(hasException, "Expected an exception. " + message);
        this.True(containsMsg, "The exception message should contain '" + containedMsg + "'. " + message);
    };

    this.ElementTree = function (element, definition) {
        var onPass = null;
        if (definition.onPass) {
            onPass = definition.onPass;
            delete definition.onPass;
        }

        try {
            PropertiesMatch(definition, element, 0);
        }
        catch (badProp) {
            Fail("Failed to match " + badProp[0] + ": " + badProp[1]);
        }

        if (onPass) {
            try {
                onPass(element);
            }
            catch (e) {
                throw "Failed to execute 'onPass' callback: " + e;
            }
        }
    };

    this.Window = function (window) {
        var target = UIATarget.localTarget();
        var application = target.frontMostApp();
        var mainWindow = application.mainWindow();

        this.ElementTree(mainWindow, window)
    };

    this.PropertiesMatch = function (expected, given, level) {
        for (var propName in expected) {
            if (expected.hasOwnProperty(propName)) {
                var expectedProp = expected[propName];

                if (propName.match(/~iphone$/)) {
                    if (UIATarget.localTarget().model().match(/^iPhone/) === null) {
                        continue;  // we're on the wrong platform, ignore
                    }
                    else {
                        propName = propName.match(/^(.*)~iphone/)[1];
                    }
                }
                else if (propName.match(/~ipad$/)) {
                    if (UIATarget.localTarget().model().match(/^iPad/) === null) {
                        continue;  // we're on the wrong platform, ignore
                    }
                    else {
                        propName = propName.match(/^(.*)~ipad/)[1];
                    }
                }

                var givenProp = given[propName];

                if (typeof (givenProp) == "function") {
                    try {
                        // We have to use eval (shudder) because calling functions on
                        // UIAutomation objects with () operator crashes
                        // See Radar bug 8496138
                        givenProp = eval("given." + propName + "()");
                    }
                    catch (e) {
                        UIALogger.logError("[" + propName + "]: Unable to evaluate against " + given);
                        continue;
                    }
                }

                if (givenProp === null) {
                    throw "Could not find given " + given + " property named: " + propName;
                }

                try {
                    // null indicates we don't care to match
                    if (expectedProp === null) {
                        continue;
                    }

                    var expectedPropType = typeof (expectedProp);
                    if (expectedPropType == "string") {
                        Equals(expectedProp, givenProp);
                    }
                    else if (expectedPropType == "number") {
                        Equals(expectedProp, givenProp);
                    }
                    else if (expectedPropType == "function") {
                        if (expectedProp.constructor == RegExp) {
                            Match(expectedProp, givenProp);
                        }
                        else {
                            expectedProp(givenProp);
                        }
                    }
                    else if (expectedPropType == "object") {
                        if (expectedProp.constructor === Array) {
                            var expectedPropLength = expectedProp.length;
                            for (var i = 0; i < expectedPropLength; i++) {
                                var exp = expectedProp[i];
                                var giv = givenProp[i];
                                PropertiesMatch(exp, giv, level + 1);
                            }
                        }
                        else if (expectedProp.constructor === RegExp) {
                            Match(expectedProp, givenProp);
                        }
                        else if (typeof (givenProp) == "object") {
                            PropertiesMatch(expectedProp, givenProp, level + 1);
                        }
                        else {
                            UIALogger.logError("[" + propName + "]: Unknown type of object constructor: " + expectedProp.constructor);
                            throw propName;
                        }
                    }
                    else {
                        UIALogger.logError("[" + propName + "]: unknown type for expectedProp: " + typeof (expectedProp));
                    }
                }
                catch (e1) {
                    UIALogger.logError("Got an exception: " + e1);
                    if (e1.constructor == Array) {
                        e1[0] = propName + "." + e1[0];
                        throw e1;
                    }
                    else {
                        var err = [propName, e1];
                        throw err;
                    }
                }
            }
        }
    }
};

var test = function (desc, fn) {
    UIALogger.logStart(desc);

    try {
        fn();
        UIALogger.logPass(desc);
    }
    catch (e) {
        UIALogger.logError(e.toString());
        UIATarget.localTarget().logElementTree();
        UIALogger.logFail(desc);
    }
};


/***************************************************************************************************
 * 全局类的扩展。
 */
function extend(destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
    return destination;
};

extend(Array.prototype, {
    each: function (f) {
        for (i = 0; i < this.length; i++) {
            f(i, this[i]);
        }
    },
    map: function (f) {
        result = [];
        this.each(function (i, e) {
            result.push(f(i, e));
        });
        return result;
    },
    contains: function (item) {
        for (i = 0; i < this.length; i++) {
            if (item === this[i]) return this[i];
        }
        return null;
    },
    addRange: function(array){
        for(i = 0; i < array.length; i++){
            this.push(array[i]);
        }
	},
    diff: function(array) {
        return this.filter(function(i) { return !(array.indexOf(i) > -1); });
    }
});

String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};
String.prototype.ltrim = function () {
    return this.replace(/^\s+/, "");
};
String.prototype.rtrim = function () {
    return this.replace(/\s+$/, "");
};
String.prototype.contains = function (it) {
    return this.indexOf(it) != -1;
};
String.prototype.isBlank = function () {
    return this.trim() == '';
};
String.prototype.toCamel = function(){
    return this.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
};
String.prototype.format = function(){
    var args = arguments;
    return this.replace(/\{(\d+)\}/g,
        function(m,i){
            return args[i];
        });
}

extend(UIAKeyboard.prototype,{
    KEYBOARD_TYPE_UNKNOWN :-1,
    KEYBOARD_TYPE_ALPHA : 0,
    KEYBOARD_TYPE_ALPHA_CAPS : 1,
    KEYBOARD_TYPE_NUMBER_AND_PUNCTUATION:2,
    KEYBOARD_TYPE_NUMBER:3,
    keyboardType : function() {
        if (this.keys().length < 12){
            return this.KEYBOARD_TYPE_NUMBER;
        }
        else if (this.keys().firstWithName("a").toString() != "[object UIAElementNil]")
            return this.KEYBOARD_TYPE_ALPHA;
        else if (this.keys().firstWithName("A").toString() != "[object UIAElementNil]")
            return this.KEYBOARD_TYPE_ALPHA_CAPS;
        else if (this.keys().firstWithName("1").toString() != "[object UIAElementNil]")
            return this.KEYBOARD_TYPE_NUMBER_AND_PUNCTUATION;
        else
            return this.KEYBOARD_TYPE_UNKNOWN;
    }
});

function parseNum(value) {
    if ( type(value) == 'String') {
	value = value.trim();
	var isPercentage = false;
	if ( value[value.length - 1] == '%' ) {
	    isPercentage = true;
	    value = value.substring(0, value.length - 1);
	    debug(value);
	}

	var num = parseFloat(value);
	if ( isPercentage ) {
	    num /= 100;
	}

	return num;
    } else {
	return value;
    }
}