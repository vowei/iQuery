package cc.iqa.iquery.test;

import java.io.*;
import java.util.*;

import org.antlr.runtime.*;

import org.junit.Assert;
import org.junit.Test;

import cc.iqa.iquery.*;
import cc.iqa.iquery.monkey.*;

public class iQueryParserTest {
    private LayoutTree constructTree(String path) throws IOException {
	BufferedReader in = 
	    new BufferedReader(new FileReader(path));
	List<String> lines = new ArrayList<String>();
	String line = null;
	
	while ( (line = in.readLine()) != null ) {
	    lines.add(line);
	}
	
	String[] strs = new String[lines.size()];
	return LayoutTreeParser.parse(lines.toArray(strs));
    }

    private LayoutTree constructTree() throws IOException {
	String path = "/media/work/workspace/iqa/java/iQA.Runtime.Test/res/testParserMethod.txt";
	return constructTree(path);
    }

    private List<ITreeNode> parseQueryAgainst(LayoutTree tree, String iquery) throws IOException, 
											  RecognitionException {
	return parseQueryAgainst(tree, tree.getAllNodesCopy(), iquery);
    }

    private List<ITreeNode> parseQueryAgainst(LayoutTree tree, 
						   List<ITreeNode> candidates,
						   String iquery) throws IOException, 
									 RecognitionException {
    	/*
	InputStream query = new ByteArrayInputStream(iquery.getBytes("utf8"));
	ANTLRInputStream input = new ANTLRInputStream(query);
	iQueryLexer lexer = new iQueryLexer(input);
	CommonTokenStream tokens = new CommonTokenStream(lexer);
	iQueryParser parser = new iQueryParser(tokens);
	*/
		iQueryParser parser = iQuery.createParser(iquery);
	
	List<ITreeNode> result = parser.query(candidates);
	// return parser.getLastMatchedElements();
	return result;
    }

    @Test public void testParserSingleElementMethod() throws Exception {		
	LayoutTree tree = constructTree();
	List<ITreeNode> nodes = parseQueryAgainst(tree, "TextView");

	for ( int i = 0; i < nodes.size(); ++i ) {
	    ITreeNode node = nodes.get(i);
	    Assert.assertTrue(node.getName().startsWith("android.widget.TextView@"));
	}
    }

    @Test public void testParserSingleParentChildMethod() throws Exception {
	LayoutTree tree = constructTree();
	List<ITreeNode> nodes = parseQueryAgainst(tree, "AllApps2D > GridView");

	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes.get(0).getName().compareTo("android.widget.GridView@44ed4c18") == 0);
    }
    
    @Test public void testParserSingleLastChildMethod() throws Exception {
	LayoutTree tree = constructTree();

	List<ITreeNode> nodes = parseQueryAgainst(tree, ":last");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes
			  .get(0)
			  .getName()
			  .compareTo("com.android.launcher2.AllApps2D$HomeButton@44ed6308") == 0);

	nodes = parseQueryAgainst(tree, "TextView :last");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes
			  .get(0)
			  .getName()
			  .compareTo("android.widget.TextView@44f379f0") == 0);

	nodes = parseQueryAgainst(tree, "AllApps2D > GridView :last");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes.get(0).getName().compareTo("android.widget.GridView@44ed4c18") == 0);

	nodes = parseQueryAgainst(tree, "DragLayer > ImageView :last");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes.get(0).getName().compareTo("android.widget.ImageView@44ee3328") == 0);
    }
    
    @Test public void testParserSingleFirstChildMethod() throws Exception {
	LayoutTree tree = constructTree();

	List<ITreeNode> nodes = parseQueryAgainst(tree, ":first");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes
			  .get(0)
			  .getName()
			  .compareTo("com.android.internal.policy.impl.PhoneWindow$DecorView@44ed2f38") == 0);

	nodes = parseQueryAgainst(tree, "TextView :first");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes
			  .get(0)
			  .getName()
			  .compareTo("android.widget.TextView@44ea61a0") == 0);

	nodes = parseQueryAgainst(tree, "AllApps2D > GridView :first");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes.get(0).getName().compareTo("android.widget.GridView@44ed4c18") == 0);

	nodes = parseQueryAgainst(tree, "DragLayer > ImageView :first");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes.get(0).getName().compareTo("android.widget.ImageView@44edfca8") == 0);
    }

    @Test public void testParserSingleAttributeMethod() throws Exception {
	LayoutTree tree = constructTree();

	List<ITreeNode> nodes = parseQueryAgainst(tree, "TextView [mText='鑫财通手机炒股']");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes
			  .get(0)
			  .getName()
			  .compareTo("android.widget.TextView@44f379f0") == 0);

	nodes = parseQueryAgainst(tree, "TextView [mText!='鑫财通手机炒股']");
	Assert.assertEquals(27, nodes.size());
	for ( int i = 0; i < nodes.size(); ++i ) {
	    Assert.assertTrue(nodes
			      .get(i)
			      .getName()
			      .startsWith("android.widget.TextView"));
	}
	
	nodes = parseQueryAgainst(tree, "TextView [mText^='鑫财通']");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes
			  .get(0)
			  .getName()
			  .compareTo("android.widget.TextView@44f379f0") == 0);
	nodes = parseQueryAgainst(tree, "TextView [mText$='手机炒股']");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes
			  .get(0)
			  .getName()
			  .compareTo("android.widget.TextView@44f379f0") == 0);

	nodes = parseQueryAgainst(tree, "[mText]");
	Assert.assertEquals(29, nodes.size());
    }
    
    @Test public void testParserMultipleAttributeMethod() throws Exception {
	LayoutTree tree = constructTree();

	// TODO: 添加&&表示交集，添加||表示并集
	//  优先级较低，因为如果引入并集的概念，需要考虑交集和并集混合的情况
	List<ITreeNode> nodes = parseQueryAgainst(tree, "TextView [getEllipsize='MARQUEE'] [getVisibility='VISIBLE'] [mTop='528'] [mBottom = '660'] [mLeft = '236']");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes
			  .get(0)
			  .getName()
			  .compareTo("android.widget.TextView@44ee8c40") == 0);
    }

    @Test public void testParserNotMethod() throws Exception {
	LayoutTree tree = constructTree();

	List<ITreeNode> nodes = parseQueryAgainst(tree, ":not(TextView)");
	Assert.assertEquals(36, nodes.size());
	
	for ( int i = 0; i < nodes.size(); ++i ) {
	    Assert.assertFalse(nodes
			      .get(i)
			      .getName()
			      .startsWith("android.widget.TextView@44ee8c40"));
	}
    }

    @Test public void testParserIndexMethod() throws Exception {
	LayoutTree tree = constructTree();
	List<ITreeNode> nodes = parseQueryAgainst(tree, "TextView :eq(0)");

	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes.get(0).getName().compareTo("android.widget.TextView@44ea61a0") == 0);

	nodes = parseQueryAgainst(tree, "TextView :gt(3)");

	Assert.assertEquals(24, nodes.size());
	for ( int i = 0; i < nodes.size(); ++i ) {
	    Assert.assertTrue(nodes
			      .get(i)
			      .getName()
			      .startsWith("android.widget.TextView"));
	}

	nodes = parseQueryAgainst(tree, "TextView :lt(4)");

	Assert.assertEquals(4, nodes.size());
	for ( int i = 0; i < nodes.size(); ++i ) {
	    Assert.assertTrue(nodes
			      .get(i)
			      .getName()
			      .startsWith("android.widget.TextView"));
	}
    }

    @Test public void testParserLastChildMethod() throws Exception {
	LayoutTree tree = constructTree();

	List<ITreeNode> nodes = parseQueryAgainst(tree, "CellLayout :last-child");
	Assert.assertEquals(2, nodes.size());

	Assert.assertTrue(nodes.get(0).getName().compareTo("com.android.launcher2.LauncherAppWidgetHostView@44f17818") == 0);
	Assert.assertTrue(nodes.get(1).getName().compareTo("com.android.launcher2.LauncherAppWidgetHostView@44eafb70") == 0);	

	nodes = parseQueryAgainst(tree, ":last-child :last");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes.get(0).getName().compareTo("android.widget.TextView@44f379f0") == 0);

	// :first-child会返回当前节点集合里每一个节点的第一个子节点
	// :last返回当前节点集合里的最后一个节点，因此结果只有一个节点匹配。
	nodes = parseQueryAgainst(tree, ":first-child :last");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes.get(0).getName().compareTo("android.widget.TextView@44ea7bd8") == 0);

	List<ITreeNode> candidates = new ArrayList<ITreeNode>();
	candidates.add(tree.getRoot());
	nodes = parseQueryAgainst(tree, candidates, ":last-child :last");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes.get(0).getName().compareTo("android.widget.FrameLayout@44ed3310") == 0);

	nodes = parseQueryAgainst(tree, candidates, ":first-child :last");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes.get(0).getName().compareTo("android.widget.FrameLayout@44ed3310") == 0);
    }

    @Test public void testParserFirstChildMethod() throws Exception {
	LayoutTree tree = constructTree();

	List<ITreeNode> nodes = parseQueryAgainst(tree, "CellLayout :first-child");
	Assert.assertEquals(2, nodes.size());

	Assert.assertTrue(nodes.get(0).getName().compareTo("com.android.launcher2.BubbleTextView@44ec38d8") == 0);
	Assert.assertTrue(nodes.get(1).getName().compareTo("com.android.launcher2.LauncherAppWidgetHostView@44eafb70") == 0);	
    }

    @Test public void testParserTextMethod() throws Exception {
	LayoutTree tree = constructTree();

	List<ITreeNode> nodes = parseQueryAgainst(tree, ":text");
	Assert.assertEquals(0, nodes.size());

	for ( int i = 0; i < nodes.size(); ++i ) {
	    Assert.assertTrue(nodes
			      .get(i)
			      .getName()
			      .startsWith("android.widget.EditText"));
	}

	nodes = parseQueryAgainst(tree, "RelativeLayout > :text");
	Assert.assertEquals(0, nodes.size());

	nodes = parseQueryAgainst(tree, "RelativeLayout > RelativeLayout > :text");
	Assert.assertEquals(0, nodes.size());

	for ( int i = 0; i < nodes.size(); ++i ) {
	    Assert.assertTrue(nodes
			      .get(i)
			      .getName()
			      .startsWith("android.widget.TextView"));
	}
    }

    @Test public void testParserDescendantsMethod() throws Exception {
	LayoutTree tree = constructTree();

	List<ITreeNode> nodes = parseQueryAgainst(tree, "RelativeLayout :first >> :label");
	Assert.assertEquals(5, nodes.size());

	for ( int i = 0; i < nodes.size(); ++i ) {
	    Assert.assertTrue(nodes
			      .get(i)
			      .getName()
			      .startsWith("android.widget.TextView"));
	}
    }

    @Test public void testParserConstrainedDescendantMethod() throws Exception {
	LayoutTree tree = constructTree();
	
	List<ITreeNode> nodes = parseQueryAgainst(tree, "PhoneWindow.DecorView >2 DragLayer");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes
			  .get(0)
			  .getName()
			  .compareTo("com.android.launcher2.DragLayer@44ed3d10") == 0);

	// 找不到的情况，workspace在第三层
	nodes = parseQueryAgainst(tree, "PhoneWindow.DecorView >2 Workspace");
	Assert.assertEquals(0, nodes.size());

	nodes = parseQueryAgainst(tree, "PhoneWindow.DecorView >4 CellLayout");
	Assert.assertEquals(5, nodes.size());
	
    }

    @Test public void testParserRadioMethod() throws Exception {
	String path = "/media/work/workspace/iqa/java/iQA.Runtime.Test/res/radio.txt";
	LayoutTree tree = constructTree(path);

	List<ITreeNode> nodes = parseQueryAgainst(tree, ":radio");
	Assert.assertEquals(5, nodes.size());

	for ( int i = 0; i < nodes.size(); ++i ) {
	    Assert.assertTrue(nodes
			      .get(i)
			      .getName()
			      .startsWith("android.widget.RadioButton"));
	}

	nodes = parseQueryAgainst(tree, "LinearLayout :first >> :radio");
	Assert.assertEquals(5, nodes.size());

	for ( int i = 0; i < nodes.size(); ++i ) {
	    Assert.assertTrue(nodes
			      .get(i)
			      .getName()
			      .startsWith("android.widget.RadioButton"));
	}

	nodes = parseQueryAgainst(tree, "LinearLayout :eq(0) >> :radio :last");
	Assert.assertEquals(1, nodes.size());

	for ( int i = 0; i < nodes.size(); ++i ) {
	    Assert.assertTrue(nodes
			      .get(i)
			      .getName()
			      .compareTo("android.widget.RadioButton@44ed6818") == 0);
	}
    }

    @Test public void testParserButtonMethod() throws Exception {
	String path = "/media/work/workspace/iqa/java/iQA.Runtime.Test/res/button.txt";
	LayoutTree tree = constructTree(path);

	List<ITreeNode> nodes = parseQueryAgainst(tree, ":button");
	Assert.assertEquals(6, nodes.size());

	for ( int i = 0; i < 2; ++i ) {
	    Assert.assertTrue(nodes
			      .get(i)
			      .getName()
			      .startsWith("android.widget.Button"));
	}

	Assert.assertTrue(nodes
			  .get(2)
			  .getName()
			  .compareTo("android.widget.ToggleButton@44f73d48") == 0);

	for ( int i = 3; i < nodes.size(); ++i ) {
	    Assert.assertTrue(nodes
			      .get(i)
			      .getName()
			      .startsWith("android.widget.ImageButton"));
	}
    }

    @Test public void testParserImageMethod() throws Exception {
	LayoutTree tree = constructTree();

	List<ITreeNode> nodes = parseQueryAgainst(tree, ":image");
	Assert.assertEquals(12, nodes.size());

	for ( int i = 0; i < nodes.size(); ++i ) {
	    String name = nodes.get(i).getName();
	    Assert.assertTrue(name.startsWith("android.widget.ImageView") ||
			      name.startsWith("android.widget.ImageButton"));
	}
    }

    @Test public void testParserLabelMethod() throws Exception {
	LayoutTree tree = constructTree();

	List<ITreeNode> nodes = parseQueryAgainst(tree, ":label");
	Assert.assertEquals(29, nodes.size());

	Assert.assertTrue(nodes.get(0).getName().startsWith("com.android.launcher2.BubbleTextView"));
	for ( int i = 1; i < nodes.size(); ++i ) {
	    String name = nodes.get(i).getName();
	    Assert.assertTrue(name.startsWith("android.widget.TextView"));
	}
    }
    
    @Test public void testParserVisibleMethod() throws Exception {
	LayoutTree tree = constructTree();

	List<ITreeNode> nodes = parseQueryAgainst(tree, ":visible");
	Assert.assertEquals(60, nodes.size());

	for ( int i = 0; i < nodes.size(); ++i ) {
	    Assert.assertTrue(nodes
			      .get(i)
			      .getProperty("getVisibility()")
			      .getValue()
			      .compareTo("VISIBLE") == 0);
	}
    }

    @Test public void testParserHiddenMethod() throws Exception {
	LayoutTree tree = constructTree();
	
	List<ITreeNode> nodes = parseQueryAgainst(tree, "*");
	Assert.assertEquals(64, nodes.size());	
	
	nodes = parseQueryAgainst(tree, ":hidden");
	Assert.assertEquals(4, nodes.size());

	for ( int i = 0; i < nodes.size(); ++i ) {
	    String value = nodes.get(i).getProperty("getVisibility()").getValue();
	    Assert.assertTrue(value == null ||
			      value.compareTo("GONE") == 0);
	}
    }

    @Test public void testParserFocusMethod() throws Exception {
	LayoutTree tree = constructTree();
	
	List<ITreeNode> nodes = parseQueryAgainst(tree, ":focus");
	Assert.assertEquals(1, nodes.size());

	Assert.assertTrue(nodes
			  .get(0)
			  .getName()
			  .compareTo("android.widget.GridView@44ed4c18") == 0);			  
    }

    @Test public void testParserEmptyMethod() throws Exception {
	LayoutTree tree = constructTree();
	
	List<ITreeNode> nodes = parseQueryAgainst(tree, ":empty");
	Assert.assertEquals(47, nodes.size());

	for ( int i = 0; i < nodes.size(); ++i ) {
	    Assert.assertEquals(0,
				nodes
				.get(i)
				.getChildren()
				.size());	
	}		  
    }

    @Test public void testParserNthChildMethod() throws Exception {
	LayoutTree tree = constructTree();
	
	List<ITreeNode> nodes = parseQueryAgainst(tree, ":empty :nth-child(0)");
	Assert.assertEquals(0, nodes.size());
    }

    @Test public void testParserParentMethod() throws Exception {
	LayoutTree tree = constructTree();
	
	List<ITreeNode> nodes = parseQueryAgainst(tree, "Workspace :nth-child(1) :parent");
	Assert.assertEquals(1, nodes.size());

	ITreeNode node = nodes.get(0);
	Assert.assertTrue(node.getName().compareTo("com.android.launcher2.Workspace@44edad48") == 0);
    }

    @Test public void testParserContainsMethod() throws Exception {
	LayoutTree tree = constructTree();

	List<ITreeNode> nodes = parseQueryAgainst(tree, "TextView :contains('鑫财通手机炒股')");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes
			  .get(0)
			  .getName()
			  .compareTo("android.widget.TextView@44f379f0") == 0);

	nodes = parseQueryAgainst(tree, "TextView :contains('鑫财通')");
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes
			  .get(0)
			  .getName()
			  .compareTo("android.widget.TextView@44f379f0") == 0);
    }

    @Test public void testParserCoordinatesMethod() throws Exception {
	LayoutTree tree = constructTree();
	// 本来是想为根据坐标单独设计语法的，但是后面想想没有必要，都是可以通过属性取得的
	// 而且我怀疑，即使是相同的应用，在android上界面和ios的界面，同一个控件的绝对坐标值很有可能不同
	// 与其设计一个看起来通用的坐标查找语法，混淆使用者，不如直接将差异公开出来。
	List<ITreeNode> nodes = parseQueryAgainst(tree, "PhoneWindow.DecorView >> [mLeft = '480'] [mRight = '960'] [mTop = '0'] [mBottom = '762']");	
	
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes.get(0).getName().compareTo("com.android.launcher2.CellLayout@44edc0a8") == 0);
    }

    @Test public void testParserHasMethod() throws Exception {
	LayoutTree tree = constructTree();
	List<ITreeNode> nodes = parseQueryAgainst(tree, "PhoneWindow.DecorView >> :has([mLeft = '480'] " +
						                                           "[mRight = '960'] " +
						                                           "[mTop = '0'] " +
                                                                                           "[mBottom = '762'])");	
	
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes.get(0).getName().compareTo("com.android.launcher2.Workspace@44edad48") == 0);
    }
}