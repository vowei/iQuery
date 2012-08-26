iQuery is a ui control query library, currently supports for iOS and Android UI automation are implemented.

### iOS usage
iQuery for iOS is based on instrument, object-c version is not available yet, however, since it is based on antlr, it can be extended to object-c version quite easily.

To use iquery in your instrument test cases, follow below steps:
1. import [iquery.js](https://github.com/vowei/iQuery/blob/master/iOS/lib/iquery.js) in your test case.
> #import "iquery.js";
2. And then you can use iQuery in your code: 
> var target = UIATarget.localTarget();
> var root = target.frontMostApp().mainWindow();
> var assert = new Assert();
> var result = root.$("UIAWindow > UIASegmentedControl > UIAButton :eq(0) + UIAButton");
> assert.Equals(1, result.length);
3. iquery.js contains a simplified unit test framework with it. If you want to use iQuery with your own test framework. you can remove the test framework's code in [common.js](https://github.com/vowei/iQuery/blob/master/iOS/lib/common.js).

for detailed usage, please read the test sources: https://github.com/vowei/iQuery/blob/master/iOS/sampleTest.js

### Android usage
iQuery for android supports instrument test cases, and query text from hierarchyviewer output.

Below are steps required for use iQuery in instrument test cases:
1. Create an android unit test project, you may include [robotium] (https://code.google.com/p/robotium/) in the project.
2. Include [antlr-runtime-3.4.jar](https://github.com/vowei/iQuery/blob/master/java/lib/antlr-runtime-3.4.jar), [iQA.Runtime.jar](https://github.com/downloads/vowei/iQuery/iQA.Runtime.jar) and [iQA.Runtime.Instrument.jar](https://github.com/downloads/vowei/iQuery/iQA.Runtime.Instrument.jar) in your project's build path.
3. Import antlr and iQuery packages in your code:
> import org.antlr.runtime.*;
> import cc.iqa.iquery.*;
> import cc.iqa.iquery.android.*;
4. And use it:
> List<SoloTreeNode> result = iQuery.query(new SoloTreeNode(
>     _solo.getCurrentViews().get(0)), 
>     "LinearLayout >> TextView [mText = 'Down Under']");
5. If an invalid query is given, iQuery.query will throw a iQueryParserException object, you can get details errors by calling e.getErrors() - the errors message are Chinese. :(

for detailed usage, please read the test sources: https://github.com/vowei/iQuery/blob/master/java/Test/iQA.Runtime.Test/src/cc/iqa/iquery/test/iQueryParserTest.java
 


 