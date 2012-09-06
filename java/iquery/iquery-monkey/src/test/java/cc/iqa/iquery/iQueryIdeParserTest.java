package cc.iqa.iquery.test;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

import junit.framework.Assert;

import org.antlr.runtime.RecognitionException;
import org.junit.Test;

import cc.iqa.iquery.*;
import cc.iqa.iquery.monkey.*;

public class iQueryIdeParserTest {
	private void helper(String iquery) throws Exception {
		iQueryParser parser = iQuery.createParser(iquery);
		Assert.assertNotNull(parser);
		Assert.assertEquals(0, parser.getErrors().size());		
	}

	private void nhelper(String iquery) throws Exception {
		iQueryParser parser = iQuery.createParser(iquery);
		Assert.assertNotNull(parser);
		Assert.assertFalse(0 == parser.getErrors().size());		
	}
	
    private LayoutTree constructTree(String path) throws IOException {
	BufferedReader in = 
	    new BufferedReader(new InputStreamReader(getClass().getClassLoader().getResourceAsStream(path)));
	List<String> lines = new ArrayList<String>();
	String line = null;
	
	while ( (line = in.readLine()) != null ) {
	    lines.add(line);
	}
	
	String[] strs = new String[lines.size()];
	return LayoutTreeParser.parse(lines.toArray(strs));
    }
	
	@Test
	public void test测试iQueryIdeParser类的用法() throws Exception {
		helper("TextView");
		helper("AllApps2D > GridView");
		helper(":last");
		helper("TextView :last");
		helper("AllApps2D > GridView :last");
		helper("DragLayer > ImageView :last");
		helper(":first");
		helper("TextView [mText!='鑫财通手机炒股']");
		helper("TextView [mText='鑫财通手机炒股']");
		helper("TextView [getEllipsize='MARQUEE'] [getVisibility='VISIBLE'] [mTop='528'] [mBottom = '660'] [mLeft = '236']");
		helper(":not(TextView)");
		helper("TextView :gt(3)");
		helper("CellLayout :last-child");
		helper("RelativeLayout > RelativeLayout > :text");
		helper("RelativeLayout :first >> :text");
		helper("PhoneWindow.DecorView >2 DragLayer");
		helper("LinearLayout :first >> :radio");
		helper("Workspace :nth-child(0) :parent");
			
		/*
		nhelper(">> :label [mText='Title']");
		nhelper("中文");
		nhelper("LinearLayout > 中文");
		nhelper("LinearLayout > :中文");
		nhelper("LinearLayout > 中文 :first");
		nhelper("LinearLayout > :中文 :first-child");
		nhelper("LinearLayout > :中文 first");
		*/

		/* TODO:等学会了跟eclipse整合maven之后将这个测试用例修复，需要放在后面加错误检测功能！
		nhelper("LinearLayout > :te");
		nhelper(":");
		nhelper("LinearLayout > :te :first");

		nhelper("TextView ['mText' = '测试文本'");
		nhelper("TextView [mText = '测试文本'");
		nhelper("TextView [mText( = '测试文本']");
		nhelper("TextView [mText() = '测试文本']");
		nhelper("TextView [mText = '测试文本]");
		nhelper("TextView [mText = 测试文本]");
		nhelper("TextView >");
		nhelper("TextView :first >>");
		*/
	}
	
	@Test
	public void test测试给HierarchyViewer4iOS的API调用() throws IOException, RecognitionException {
		iQueryParser parser = iQuery.createParser("AllApps2D > GridView");
		List<ITreeNode> nodes = parser.query(constructTree("testParserMethod.txt").getAllNodesCopy());

		Assert.assertEquals(0, parser.getErrors().size());
		Assert.assertEquals(1, nodes.size());
		Assert.assertTrue(nodes.get(0).getName().compareTo("android.widget.GridView@44ed4c18") == 0);
	}

    @Test
	public void test测试不需要重复注册伪类伪属性() throws Exception {
	// 这是一个设计上的BUG，因为对每个新的iQueryParser对象重新注册伪类、伪属性是一个很繁琐的事情
	iQueryParser parserTemplate = iQuery.createParser("");
	parserTemplate.registerPseudoAttribute("text", new IPseudoAttribute() {
		public String resolve(ITreeNode node) {
		    return node.getText();
		}
	    });
	parserTemplate.registerPseudoClass("tv", new IPseudoClass() {
		public boolean resolve(ITreeNode node) {
		    return iQuery.filterByNameEndsWith(node, "TextView");
		}
	    });
	
	iQueryParser parser = iQuery.createParser(":tv [:text = '鑫财通手机炒股']", parserTemplate);
	LayoutTree tree = constructTree("testParserMethod.txt");
	List<ITreeNode> nodes = parser.query(tree.getAllNodesCopy());
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes
			  .get(0)
			  .getName()
			  .compareTo("android.widget.TextView@44f379f0") == 0);

	// template也可以不使用任何默认的伪类或者伪属性
	parserTemplate = iQuery.createParser("", false);
	parserTemplate.registerPseudoAttribute("text", new IPseudoAttribute() {
		public String resolve(ITreeNode node) {
		    return node.getText();
		}
	    });
	parserTemplate.registerPseudoClass("text", new IPseudoClass() {
		public boolean resolve(ITreeNode node) {
		    return iQuery.filterByNameEndsWith(node, "TextView");
		}
	    });
	
	parser = iQuery.createParser(":text [:text = '鑫财通手机炒股']", parserTemplate);
	tree = constructTree("testParserMethod.txt");
	nodes = parser.query(tree.getAllNodesCopy());
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes
			  .get(0)
			  .getName()
			  .compareTo("android.widget.TextView@44f379f0") == 0);
    }

    @Test
	public void test创建了解析器模板不会使不使用模板创建的解析器发生问题() throws Exception {
	iQueryParser parserTemplate = iQuery.createParser("", false);
	parserTemplate.registerPseudoAttribute("text", new IPseudoAttribute() {
		public String resolve(ITreeNode node) {
		    return node.getText();
		}
	    });
	parserTemplate.registerPseudoClass("text", new IPseudoClass() {
		public boolean resolve(ITreeNode node) {
		    return iQuery.filterByNameEndsWith(node, "TextView");
		}
	    });
	
	iQueryParser parser = iQuery.createParser(":text [:text = '鑫财通手机炒股']", parserTemplate);
	LayoutTree tree = constructTree("testParserMethod.txt");
	// 而且不会影响到其他不使用模板的解析器
	parser = iQuery.createParser(":last");
	List<ITreeNode> nodes = parser.query(tree.getAllNodesCopy());
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes
			  .get(0)
			  .getName()
			  .compareTo("com.android.launcher2.AllApps2D$HomeButton@44ed6308") == 0);

	// 不应该支持:text伪类和伪属性
	parser = iQuery.createParser(":tv [:text = '鑫财通手机炒股']");
	nodes = parser.query(tree.getAllNodesCopy());
	Assert.assertEquals(1, parser.getErrors().size());
	Assert.assertEquals("无法处理的伪类：[tv]", parser.getErrors().get(0));

	parser = iQuery.createParser(":label [:text = '鑫财通手机炒股']");
	nodes = parser.query(tree.getAllNodesCopy());
	Assert.assertEquals(29, parser.getErrors().size());
	Assert.assertEquals("无法处理的伪属性：[text]", parser.getErrors().get(0));
    }

    @Test
	public void test使用解析器模板创建的解析器支持默认的伪类和伪属性() throws Exception {
	iQueryParser parserTemplate = iQuery.createParser("");
	parserTemplate.registerPseudoAttribute("text", new IPseudoAttribute() {
		public String resolve(ITreeNode node) {
		    return node.getText();
		}
	    });
	parserTemplate.registerPseudoClass("tv", new IPseudoClass() {
		public boolean resolve(ITreeNode node) {
		    return iQuery.filterByNameEndsWith(node, "TextView");
		}
	    });
	
	LayoutTree tree = constructTree("testParserMethod.txt");	
	// 新注册的伪类、伪属性也不会影响默认的伪类和伪属性
	iQueryParser parser = iQuery.createParser(":last", parserTemplate);
	List<ITreeNode> nodes = parser.query(tree.getAllNodesCopy());
	Assert.assertEquals(1, nodes.size());
	Assert.assertTrue(nodes
			  .get(0)
			  .getName()
			  .compareTo("com.android.launcher2.AllApps2D$HomeButton@44ed6308") == 0);

	parser = iQuery.createParser(":label", parserTemplate);
	nodes = parser.query(tree.getAllNodesCopy());
	Assert.assertEquals(29, nodes.size());

	Assert.assertTrue(nodes.get(0).getName().startsWith("com.android.launcher2.BubbleTextView"));
	for ( int i = 1; i < nodes.size(); ++i ) {
	    String name = nodes.get(i).getName();
	    Assert.assertTrue(name.startsWith("android.widget.TextView"));
	}
    }
}
