package cc.iqa.iquery.test;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import junit.framework.Assert;

import org.antlr.runtime.RecognitionException;
import org.junit.Test;

import cc.iqa.iquery.ITreeNode;
import cc.iqa.iquery.iQuery;
import cc.iqa.iquery.iQueryParser;
import cc.iqa.iquery.monkey.LayoutTree;
import cc.iqa.iquery.monkey.LayoutTreeParser;

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
	    new BufferedReader(new FileReader(path));
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
		
		// nhelper(":tex");
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
		/*
		nhelper(">> :label [mText='Title']");
		nhelper("中文");
		nhelper("LinearLayout > 中文");
		nhelper("LinearLayout > :中文");
		nhelper("LinearLayout > 中文 :first");
		nhelper("LinearLayout > :中文 :first-child");
		nhelper("LinearLayout > :中文 first");
		*/
	}
	
	@Test
	public void test测试给HierarchyViewer4iOS的API调用() throws IOException, RecognitionException {
		iQueryParser parser = iQuery.createParser("AllApps2D > GridView");
		List<ITreeNode> nodes = parser.query(constructTree(
				"/media/work/workspace/iqa/java/iQA.Runtime.Test/res/testParserMethod.txt").getAllNodesCopy());

		Assert.assertEquals(0, parser.getErrors().size());
		Assert.assertEquals(1, nodes.size());
		Assert.assertTrue(nodes.get(0).getName().compareTo("android.widget.GridView@44ed4c18") == 0);
	}
}
