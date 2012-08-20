package cc.iqa.demo.multiplatformdemoproject.test;

import java.io.*;
import java.util.*;
import org.antlr.runtime.*;

import junit.framework.Assert;
import cc.iqa.iquery.*;
import cc.iqa.iquery.android.*;

import com.jayway.android.robotium.solo.*;

import android.test.ActivityInstrumentationTestCase2;
import android.view.*;

@SuppressWarnings("rawtypes")
public class iQueryAndroidTest extends ActivityInstrumentationTestCase2 {
	private static String LAUNCHER_ACTIVITY_FULL_CLASSNAME = "cc.iqa.studio.demo.MainActivity";
	private static String TARGET_PACKAGE_ID = "cc.iqa.studio.demo";

	private Solo _solo;

	@SuppressWarnings("unchecked")
	public iQueryAndroidTest() throws Exception {
		super(TARGET_PACKAGE_ID, Class
				.forName(LAUNCHER_ACTIVITY_FULL_CLASSNAME));
	}

	public void setUp() throws Exception {
		this._solo = new Solo(this.getInstrumentation(), this.getActivity());
	}

	public void testParseElement() throws Exception {
		List<ITreeNode> actual = parseQueryAgainst(
				_solo.getCurrentViews().get(0), "LinearLayout >> TextView");
		Assert.assertEquals(12, actual.size());

		for (int i = 0; i < actual.size(); ++i) {
			Assert.assertTrue(actual.get(i).getName().endsWith("TextView"));
		}
	}

	public void testParseAttribute() throws Exception {
			List<ITreeNode> actual = parseQueryAgainst(
					_solo.getCurrentViews().get(0),
					"LinearLayout >> TextView [mText = 'Down Under']");
			Assert.assertEquals(2, actual.size());
	
			for (int i = 0; i < actual.size(); ++i) {
				Assert.assertTrue(actual.get(i).getName().endsWith("TextView"));
				Assert.assertEquals("Down Under", actual.get(i)
						.getProperty("mText").getValue());
			}
	}

	public void testParseAttributeNegative() throws Exception {
		// 已经不支持属性名为中文的情况了！
		List<ITreeNode> actual = parseQueryAgainst(
				_solo.getCurrentViews().get(0),
				"LinearLayout >> TextView [mText = 'Down Under']");
		Assert.assertEquals(2, actual.size());
	}
	
	public void testSimpleCreatingParserMethod() throws Exception {
		iQueryParser parser = iQuery.createParser("LinearLayout >> TextView [mText = 'Down Under']");
		List<ITreeNode> candidates = new ArrayList<ITreeNode>();
		candidates.add(new SoloTreeNode(_solo.getCurrentViews().get(0)));
		List<ITreeNode> result = parser.query(candidates);
		
		Assert.assertEquals(0, parser.getErrors().size());
		Assert.assertEquals(2, result.size());
	}
	
	public void test简化后的API() throws Exception {
		List<SoloTreeNode> r1 = iQuery.query(
				new SoloTreeNode(_solo.getCurrentViews().get(0)), 
				"LinearLayout >> TextView [mText = 'Down Under']");
		Assert.assertEquals(2, r1.size());				
	}

	private List<ITreeNode> parseQueryAgainst(View root, String iquery)
			throws IOException, RecognitionException {
		InputStream query = new ByteArrayInputStream(iquery.getBytes("utf8"));
		ANTLRInputStream input = new ANTLRInputStream(query);
		iQueryLexer lexer = new iQueryLexer(input);
		CommonTokenStream tokens = new CommonTokenStream(lexer);
		iQueryParser parser = new iQueryParser(tokens);

		List<ITreeNode> candidates = new ArrayList<ITreeNode>();
		candidates.add(new SoloTreeNode(root));
		List<ITreeNode> result = parser.query(candidates);
		return result;
	}
}
