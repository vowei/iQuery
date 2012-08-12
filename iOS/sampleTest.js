/**
 * Created with JetBrains WebStorm.
 * User: Dawson
 * Date: 12-7-25
 * Time: 下午1:13
 * To change this template use File | Settings | File Templates.
 */

#import "lib/iquery.js";

var target = UIATarget.localTarget();
var root = target.frontMostApp().mainWindow();
var assert = new Assert();

test("测试对UIAElement的扩展", function() {
    var result = root.$("> [value >= 59%]");
    assert.Equals(1, result.length);

    result = root.segmentedControls()[0].$("> :button");
    assert.Equals(3, result.length);
});

test("([attr (>|<|>=|<=) float])比较属性值", function() {
    var query = "> [value >= 59%]";
    var result = $(query);
    assert.Equals(1, result.length);
   
    query = "> [value >= 0.59]";
    result = $(query);
    assert.Equals(1, result.length);

    query = "> [:height > 31]";
    result = $(query);
    assert.Equals(6, result.length);
    for ( var i = 0;i < result.length; ++i ) {
	assert.True(result[i].rect().size.height > 31);
    }

    query = "> [:height >= 31]";
    result = $(query);
    assert.Equals(8, result.length);
    for ( var i = 0;i < result.length; ++i ) {
	assert.True(result[i].rect().size.height >= 31);
    }

    query = "> [:height < 31]";
    result = $(query);
    assert.Equals(2, result.length);
    for ( var i = 0;i < result.length; ++i ) {
	assert.True(result[i].rect().size.height < 31);
    }

    query = "> [:height <= 31]";
    result = $(query);
    assert.Equals(4, result.length);
    for ( var i = 0;i < result.length; ++i ) {
	assert.True(result[i].rect().size.height <= 31);
    }        
});

test("测试parseNum函数", function() {
    assert.Equals(0.59, parseNum("59%"));
    assert.Equals(0.59, parseNum(0.59));
    assert.Equals(0.59, parseNum("0.59"));
    assert.Equals(59, parseNum("59"));
    assert.Equals(0.0059, parseNum("0.59%"));
    assert.Equals(0.59, parseNum("59%  "));
    assert.Equals(0.59, parseNum("   59%"));
    assert.Equals(59.59, parseNum("59.59"));
});

test("([:attr = float])匹配伪属性", function() {
    var query = "> [:height = 31]";
    var result = $(query);
    assert.Equals(2, result.length);
    assert.Equals("UIATextField", type(result[0]));
    assert.Equals("UIASecureTextField", type(result[1]));

    query = "> [:top = 214]";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("UIASwitch", type(result[0]));

    query = "> [:left = 204]";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("UIASwitch", type(result[0]));

    query = "> [:width = 79]";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("UIASwitch", type(result[0]));

    query = "> [:bottom = 241]";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("UIASwitch", type(result[0]));

    query = "> [:right = 283]";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("UIASwitch", type(result[0]));
});

test("(#id)根据给定的ID匹配一个元素", function(){
    var query = "#Pickers";
    var result = $(query);
    assert.Equals("Pickers", result[0].name());

    /*
     * 在ios5上有的时候没有办法获取一些控件的name属性，太奇怪了！
    query = "#tbTest";
    result = $(query, root);
    assert.Equals("UIATextField", type(result[0]));
    */
});

test("(element)根据给定的元素名匹配所有元素", function(){
    var query = "UIAWindow >> UIAButton";
    var result = $(query);
    assert.Equals(6, result.length);
    assert.Equals("Pickers", result[0].name());

    query = "UIAWindow > UIATextField";
    result = $(query, root);
    assert.Equals(1, result.length);
    assert.Equals("UIATextField", type(result[0]));
});

test("(*)匹配所有元素", function(){
    var query = "UIAWindow >> *";
    var result = $(query);
    // 不知道为什么，有的时候会缺少两个控件！
    assert.True(17 == result.length || 15 == result.length);

    query = "> *";
    result = $(query, root.navigationBars()[0]);
    assert.Equals(2, result.length);
    assert.Equals("UIAStaticText", type(result[1]));
});

/*
 * 并集我们并不支持，因为jquery是尽量操作更多的元素，但是iquery却相反，希望精确找到某个控件。
test("(selector1,selector2,selectorN)指定任意多个选择器，并将匹配到的元素合并到一个结果内", function(){
    var query = "UIATextField, UIAButton";
    var result = $(query);
    assert.Equals(7, result.length);

    var query = "UIAWindow > UIANavigationBar > UIAImage, UIATextField";
    var result = $(query);
    assert.Equals(2, result.length);
    assert.Equals("UIAImage", type(result[0]));
});
*/

test("(ancestor >> descendant)在给定的祖先元素下匹配所有的后代元素", function(){
    var query = "UIAWindow >> UIAButton";
    var result = $(query);
    assert.Equals(6, result.length);

    query = "UIAWindow > UIASegmentedControl > UIAButton";
    result = $(query);
    assert.Equals(3, result.length);
});

test("(parent > child)在给定的父元素下匹配所有的子元素", function(){
    var query = "UIAWindow > UIAButton";
    var result = $(query);
    assert.Equals(3, result.length);
    assert.Equals("Pickers", result[0].name());

    query = "UIAWindow > UIASegmentedControl > UIAButton";
    result = $(query);
    assert.Equals(3, result.length);
    assert.Equals("Second", result[1].name());
});

test("(prev + next)匹配所有紧接在 prev 元素后的 next 元素", function(){
    var query = "UIAWindow > UIANavigationBar > UIAImage + UIAStaticText";
    var result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("TestUIDemo", result[0].value());

    query = "UIAWindow > UIASegmentedControl > UIAButton :eq(0) + UIAButton";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Second", result[0].name());
});

test("(prev ~ siblings)匹配 prev 元素之后的所有siblings 元素", function(){
    var query = "UIAWindow > UIANavigationBar > UIAImage ~ UIAStaticText";
    var result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("TestUIDemo", result[0].value());

    query = "UIAWindow > UIASlider ~ UIAButton";
    result = $(query);
    assert.Equals(3, result.length);
    assert.Equals("Table", result[1].name());
});

test("(:first)获取第一个元素", function(){
    var query = "UIAWindow > UIAButton:first";
    var result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Pickers", result[0].name());

    query = "> UIASegmentedControl > UIAButton:first";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("First", result[0].name());
});

test("(:last)获取最后个元素", function(){
    var query = "> UIAButton:last";
    var result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Gestures", result[0].name());

    query = "> UIASegmentedControl > UIAButton:last";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Third", result[0].name());
});

test("(:not(selector))去除所有与给定选择器匹配的元素", function(){
    var query = "> UIAButton:not(:first)";
    var result = $(query);
    assert.Equals(2, result.length);
    assert.Equals("Gestures", result[1].name());

    query = "> UIASegmentedControl > UIAButton:not(:button)";
    result = $(query);
    assert.Equals(0, result.length);

    query = "> UIASegmentedControl > UIAButton:not(:text)";
    result = $(query);
    assert.Equals(3, result.length);
    assert.Equals("Third", result[2].name());

    query = "> UIATextField:not([name='tbTest'])";
    result = $(query);
    assert.Equals(1, result.length);

    query = ">> UIAStaticText:not([name!='TestUIDemo'])";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("TestUIDemo", result[0].name());
});

test("(:eq(index))匹配一个给定索引值的元素", function(){
    var query = "> UIAButton:eq(2)";
    var result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Gestures", result[0].name());

    query = "> UIAButton:eq(8)";
    result = $(query);
    assert.Equals(0, result.length);

    query = "> UIASegmentedControl > UIAButton:eq(2)";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Third", result[0].name());

    query = "> UIATextField:eq(0)";
    result = $(query);
    assert.Equals(1, result.length);
    // 有的时候在模拟器里获取不到name的值
    // assert.Equals("tbTest", result[0].name());
});

test("(:gt(index))匹配所有大于给定索引值的元素", function(){
    var query = "> UIAButton:gt(1)";
    var result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Gestures", result[0].name());
    query = "> UIAButton:gt(5)";
    result = $(query);
    assert.Equals(0, result.length);

    query = "> UIASegmentedControl > UIAButton:gt(1)";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Third", result[0].name());
});

test("(:lt(index))匹配所有小于给定索引值的元素", function(){
    var query = "> UIAButton:lt(3)";
    var result = $(query);
    assert.Equals(3, result.length);
    assert.Equals("Gestures", result[2].name());
    query = "UIAButton:lt(0)";
    result = $(query);
    assert.Equals(0, result.length);

    query = "> UIASegmentedControl > UIAButton:lt(1)";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("First", result[0].name());
});

test("(:contains(text))匹配包含给定文本的元素", function(){
    var query = "> UIASegmentedControl > UIAButton:contains('Seco')";
    var result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Second", result[0].name());

    query = "> UIASegmentedControl > UIAButton:contains('Eco')";
    result = $(query);
    assert.Equals(0, result.length);
});

test("(:empty)匹配所有不包含子元素或者文本的空元素", function(){
    var query = "> UIAButton:empty";
    var result = $(query);
    assert.Equals(3, result.length);

    query = "> UIATable:empty";
    result = $(query);
    assert.Equals(0, result.length);

    query = "> UIASegmentedControl:empty";
    result = $(query);
    assert.Equals(0, result.length);
});

/* 
 * 不打算支持
test("(:has(selector))匹配含有选择器所匹配的元素的元素", function(){
    var query = "UIAButton:has([name='Gestures'])";
    var result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Gestures", result[0].value());

    query = "UIAButton:has([name='Nothing'])";
    result = $(query);
    assert.Equals(0, result.length);

    query = "UIASegmentedControl:has(UIAButton)";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("UIASegmentedControl", type(result[0]));

    query = "UIASegmentedControl:has(UIAButton:has([name='Gestures']))";
    result = $(query);
    assert.Equals(0, result.length);

    query = "UIASegmentedControl:has(UIAButton:has([name='First']))";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("UIASegmentedControl", type(result[0]));
});
*/

// iQuery中:parent的实现于jquery不同，否则就没有办法找到父级节点了
test("(:parent)匹配含有子元素或者文本的元素", function(){
    var query = "> UIAButton:parent";
    var result = $(query);
    // 这个好像是ios上的bug，每次parent函数调用返回的相同对象的引用都是不同的！
    assert.Equals(3, result.length);

    query = "> UIASegmentedControl:parent";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("UIAWindow", type(result[0]));

    query = "> UIAWindows:parent";
    result = $(query);
    assert.Equals(0, result.length);

    query = "> UIANavigationBar:parent";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("UIAWindow", type(result[0]));

    query = "> UIATextField:parent";
    result = $(query);
    assert.Equals(1, result.length);
});

test("(:hidden)匹配所有不可见元素", function(){
    var query = "> UIAButton:hidden";
    var result = $(query);
    assert.Equals(0, result.length);

    /*
    query = "> UIASlider:hidden"; // TODO: 在被测试程序里加入一个hidden的UIASlider
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("UIASlider", type(result[0]));
    */
});

test("(:visible)匹配所有的可见元素", function(){
    var query = "> UIAButton:visible";
    var result = $(query);
    assert.Equals(3, result.length);

    /*
    query = "> UIASlider:visible"; // TODO: 在被测试程序里加入一个hidden的UIASlider
    result = $(query);
    assert.Equals(0, result.length);
    */
});

test("([attribute])匹配包含给定属性的元素", function(){
    var query = "> UIAButton[name]";
    var result = $(query);
    assert.Equals(3, result.length);

    query = "> UIAButton[something]";
    result = $(query);
    assert.Equals(0, result.length);

    /*
    query = "> UIASlider[visible]"; // TODO: 在被测试程序里加入一个hidden的UIASlider
    result = $(query);
    assert.Equals(0, result.length);
    */
});

test("([attribute=value])匹配给定的属性是某个特定值的元素", function(){
    var query = "> UIASegmentedControl > UIAButton[name='Second']";
    var result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Second", result[0].name());

    query = "> UIAButton[something='Second']";
    result = $(query);
    assert.Equals(0, result.length);

    query = "> UIATextField[name='Second']";
    result = $(query);
    assert.Equals(0, result.length);
});

test("([attribute!=value])匹配所有不含有指定的属性，或者属性不等于特定值的元素", function(){
    var query = "> UIAButton[name!='Second']";
    var result = $(query);
    assert.Equals(3, result.length);
    assert.Equals("Pickers", result[0].name());

    query = "> UIATextField[name!='Second']";
    result = $(query);
    assert.Equals(1, result.length);
    // assert.Equals('tbTest', result[0].name());

    // someAttributes并不存在，在逻辑上不应该做任何的对比
    /*
    query = "> UIATextField[someAttribute!='Second']";
    result = $(query);
    assert.Equals(1, result.length);
    */
    // 在ios 5上面没有办法获取name属性
    /*
    assert.Equals('tbTest', result[0].name());

    query = "> UIATextField[name!='tbTest']";
    result = $(query);
    assert.Equals(0, result.length);
    */
});

test("([attribute^=value])匹配给定的属性是以某些值开始的元素", function(){
    var query = "> UIASegmentedControl > UIAButton[name^='Second']";
    var result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Second", result[0].name());

    query = "> UIASegmentedControl > UIAButton[name^='Sec']";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Second", result[0].name());

    query = "> UIAButton[name^='sec']";
    result = $(query);
    assert.Equals(0, result.length);

    query = "> UIAButton[name^='ddd']";
    result = $(query);
    assert.Equals(0, result.length);

    query = "> UIAButton[something^='Second']";
    result = $(query);
    assert.Equals(0, result.length);

    query = "> UIATextField[name^='StbTest']";
    result = $(query);
    assert.Equals(0, result.length);
});

test("([attribute$=value])匹配给定的属性是以某些值结尾的元素", function(){
    var query = "> UIASegmentedControl > UIAButton[name$='Second']";
    var result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Second", result[0].name());

    query = "> UIASegmentedControl > UIAButton[name$='nd']";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Second", result[0].name());

    query = "> UIASegmentedControl > UIAButton[name$='d']";
    result = $(query);
    assert.Equals(2, result.length); // Second & Third

    query = "> UIASegmentedControl > UIAButton[name$='D']";
    result = $(query);
    assert.Equals(0, result.length);

    query = "> UIASegmentedControl > UIAButton[something$='Second']";
    result = $(query);
    assert.Equals(0, result.length);

    query = "> UIASegmentedControl > UIATextField[name$='StbTest']";
    result = $(query);
    assert.Equals(0, result.length);
});

test("([attribute*=value])匹配给定的属性是以包含某些值的元素", function(){
    var query = "> UIASegmentedControl > UIAButton[name*='Second']";
    var result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Second", result[0].name());

    query = "> UIASegmentedControl > UIAButton[name*='nd']";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Second", result[0].name());

    query = "> UIAButton[name*='Pick']";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Pickers", result[0].name());

    query = ">> UIAButton[name*='i']";
    result = $(query);
    assert.Equals(3, result.length); // Pickers & First & Third

    query = "> UIAButton[name*='I']";
    result = $(query);
    assert.Equals(0, result.length);

    query = "> UIAButton[something*='Second']";
    result = $(query);
    assert.Equals(0, result.length);

    query = "> UIATextField[name*='StbTest']";
    result = $(query);
    assert.Equals(0, result.length);
});

test("([selector1][selector2][selectorN])复合属性选择器，需要同时满足多个条件时使用", function(){
    var query = "> UIASegmentedControl > UIAButton[name$='ond'][name^='Sec']";
    var result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Second", result[0].name());

    query = "> UIASegmentedControl > UIAButton[name$='cond'][name^='Sec']";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Second", result[0].name());

    query = "> UIASegmentedControl > UIAButton[name$='Cond'][name^='Sec']";
    result = $(query);
    assert.Equals(0, result.length);

    query = "> UIASegmentedControl > UIAButton[name*='i'][name^='T'][name$='d']";
    result = $(query);
    assert.Equals(1, result.length); // Third
    assert.Equals("Third", result[0].name());

    query = "> UIASegmentedControl > UIAButton[name*='I'][name^='T'][name$='d']";
    result = $(query);
    assert.Equals(0, result.length);

    query = "> UIATextField[name$='tbTest'][name!='tbTest'][name^='tbTest']";
    result = $(query);
    assert.Equals(0, result.length);

    /* 
    query = "> UIATextField[name$='tbTest'][name*='tbTest'][name^='tbTest']";
    result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("tbTest", result[0].name());
    */
});

test("(:nth-child)匹配其父元素下的第N个子或奇偶元素，要匹配元素的序号，从1开始", function(){
    var query = "> UIASegmentedControl :nth-child(2)";
    var result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Second", result[0].name());

    query = "> UIASegmentedControl :nth-child(0)";
    result = $(query);
    assert.Equals(0, result.length);
    query = "> UIASegmentedControl :nth-child(10)";
    result = $(query);
    assert.Equals(0, result.length);
    query = ":nth-child(1)";
    result = $(query);
    assert.Equals(1, result.length);

    query = "> :nth-child(1)"; // TODO: 是这样理解么?
    result = $(query);
    assert.Equals(3, result.length);
    // assert.Equals("tbTest", result[0].name());
});

test("(:first-child)匹配第一个子元素", function(){
    var query = "> UIASegmentedControl :first-child";
    var result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("First", result[0].name());
});

test("(:last-child)匹配最后一个子元素", function(){
    var query = "> UIASegmentedControl :last-child";
    var result = $(query);
    assert.Equals(1, result.length);
    assert.Equals("Third", result[0].name());
});

test("(:text)匹配所有的单行文本框", function(){
    var query = "> :text";
    var result = $(query);
    assert.Equals(2, result.length); // UIASecureTextField，也应该是text
});

test("(:radio)匹配所有单选按钮", function(){
    var query = "> :radio";
    var result = $(query);
    assert.Equals(1, result.length); // UIASwitch
});

test("(:button)匹配所有按钮", function(){
    var query = ">> :button";
    var result = $(query);
    assert.Equals(6, result.length);
});

test("(:label)匹配所有UIAStaticText", function(){
    var query = "> UIANavigationBar > :label";
    var result = $(query);
    assert.Equals(1, result.length);
});

test("(:enabled)匹配所有控件的可用状态", function(){
    var query = "> UIAButton:enabled";
    var result = $(query);
    assert.Equals(3, result.length);

    query = "> UIASwitch:enabled";
    result = $(query);
    assert.Equals(0, result.length);
});

test("(:enabled)匹配所有控件的可用状态", function(){
    var query = "> UIAButton:enabled";
    var result = $(query);
    assert.Equals(3, result.length);

    query = "> UIASwitch:enabled";
    result = $(query);
    assert.Equals(0, result.length);
});

test("(:disabled)匹配所有控件的不可用状态", function(){
    var query = "> UIASwitch:disabled";
    var result = $(query);
    assert.Equals(1, result.length);
});

test("(:image)匹配所有图像域", function(){
    var query = "> UIAButton[name='Gestures']";
    var result = $(query);
    assert.Equals(1, result.length);
    result[0].tap();
    result[0].waitForInvalid();

    query = "> :image";
    result = $(query);
    assert.Equals(1, result.length);
});