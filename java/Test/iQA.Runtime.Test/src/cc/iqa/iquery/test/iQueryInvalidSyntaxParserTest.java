package cc.iqa.iquery.test;

import java.io.*;
import java.util.*;

import org.antlr.runtime.*;
import org.junit.*;

import cc.iqa.iquery.*;
import cc.iqa.iquery.monkey.*;

public class iQueryInvalidSyntaxParserTest {

	private LayoutTree constructTree(String path) throws IOException {
		BufferedReader in = new BufferedReader(new FileReader(path));
		List<String> lines = new ArrayList<String>();
		String line = null;

		while ((line = in.readLine()) != null) {
			lines.add(line);
		}

		String[] strs = new String[lines.size()];
		return LayoutTreeParser.parse(lines.toArray(strs));
	}

	private LayoutTree constructTree() throws IOException {
		String path = "/media/work/workspace/iqa/java/iQA.Runtime.Test/res/testParserMethod.txt";
		return constructTree(path);
	}

	private Pair<List<ITreeNode>, List<String>> parseQueryAgainst(
			List<ITreeNode> candidates, String iquery, List<String> errors)
			throws IOException, RecognitionException {
		/*
		InputStream query = new ByteArrayInputStream(iquery.getBytes("utf8"));
		ANTLRInputStream input = new ANTLRInputStream(query);
		iQueryLexer lexer = new iQueryLexer(input, errors);
		CommonTokenStream tokens = new CommonTokenStream(lexer);
		iQueryParser parser = new iQueryParser(tokens, errors, true);
		*/
		iQueryParser parser = iQuery.createParser(iquery);
		List<ITreeNode> result = parser.query(candidates);
		return new Pair<List<ITreeNode>, List<String>>(result,
				parser.getErrors());
	}

	@Test
	public void testParseInvalidSeudoClassMethod() throws Exception {
		List<String> errors = new ArrayList<String>();
		// errors.add("第1行，第1列: 未知的伪类\":tex\"！");
		errors.add("无法处理的伪类：[tex]");

		helper(":tex", errors);

		errors.clear();
		errors.add("第1行，第1列: 对于伪类指示符\":\"，冒号后需要跟具体的伪类名称！");
		helper(":", errors);

		errors.clear();
		// errors.add("第1行，第16列: 未知的伪类\":te\"！");
		errors.add("无法处理的伪类：[te]");
		helper("LinearLayout > :te", errors);
	}

	@Test
	public void testParseInvalidSingleElementMethod() throws Exception {
		List<String> errors = new ArrayList<String>();
		errors.add("第1行，第1列: 查询语句中有无法识别的关键字\"中\"！");
		errors.add("第1行，第2列: 查询语句中有无法识别的关键字\"文\"！");

		helper("中文", errors);

		errors.clear();
		errors.add("第1行，第16列: 查询语句中有无法识别的关键字\"中\"！");
		errors.add("第1行，第17列: 查询语句中有无法识别的关键字\"文\"！");
		errors.add("第1行，第14列: 取子控件集合\">\"操作符后面应该跟随有合法的过滤条件！");
		helper("LinearLayout > 中文", errors);

		errors.clear();
		errors.add("第1行，第17列: 查询语句中有无法识别的关键字\"中\"！");
		errors.add("第1行，第18列: 查询语句中有无法识别的关键字\"文\"！");
		errors.add("第1行，第16列: 对于伪类指示符\":\"，冒号后需要跟具体的伪类名称！");
		helper("LinearLayout > :中文", errors);
	}

	@Test
	public void testParseStopOnErrorMethod() throws Exception {
		List<String> errors = new ArrayList<String>();
		// errors.add("第1行，第16列: 未知的伪类\":te\"！");
		errors.add("无法处理的伪类：[te]");
		helper("LinearLayout > :te :first", errors);

		errors.clear();
		errors.add("第1行，第16列: 查询语句中有无法识别的关键字\"中\"！");
		errors.add("第1行，第17列: 查询语句中有无法识别的关键字\"文\"！");
		helper("LinearLayout > 中文 :first", errors);

		errors.clear();
		errors.add("第1行，第17列: 查询语句中有无法识别的关键字\"中\"！");
		errors.add("第1行，第18列: 查询语句中有无法识别的关键字\"文\"！");
		errors.add("第1行，第16列: 未知的伪类\"::\"！");
		helper("LinearLayout > :中文 :first-child", errors);

		errors.clear();
		errors.add("第1行，第17列: 查询语句中有无法识别的关键字\"中\"！");
		errors.add("第1行，第18列: 查询语句中有无法识别的关键字\"文\"！");
		// 晕死，在词法解析时，中文因为无法识别，在生成错误消息时就把: first连在一起当作是伪类了
		// 这是因为在ErrorMessageHelper里是根据token来组合错误消息的。
		// 但好像也无伤大雅。
		helper("LinearLayout > :中文 first", errors);
	}

	@Test
	public void testParseParentheseNotMatchMethod() throws Exception {
		List<String> errors = new ArrayList<String>();

		errors.add("第1行，第10列: 属性查询条件里，'['后面跟随有英文字母和数字组成的控件属性名，但是找到的是\"字符串\"-\"'mText'\"！");
		helper("TextView ['mText' = '测试文本'", errors);

		errors.clear();
		errors.add("第1行，第25列: 没有关闭的语句，期望']'，当前碰到的是''<EOF>''！");
		helper("TextView [mText = '测试文本'", errors);

		errors.clear();
		errors.add("第1行，第10列: 属性查询条件里，属性后面应该跟随有'='或者']'，但是找到的是\"(\"！");
		errors.add("第1行，第16列: 在'('处缺少期望的EOF！");
		helper("TextView [mText( = '测试文本']", errors);

		errors.clear();
		errors.add("第1行，第10列: 属性查询条件里，属性后面应该跟随有'='或者']'，但是找到的是\"(\"！");
		errors.add("第1行，第16列: 在'('处缺少期望的EOF！");
		helper("TextView [mText() = '测试文本']", errors);
	}

	@Test
	public void testParseStringNotEndMethod() throws Exception {
		List<String> errors = new ArrayList<String>();
		errors.add("第1行，第25列: 没有关闭的语句，期望'！");
		// 下面的QUOTED_STRING已经被antlr直接变成字符串了，再重新研究翻译的手段比较麻烦，就只好这样了！
		errors.add("第1行，第25列: 没有关闭的语句，期望QUOTED_STRING，当前碰到的是''<EOF>''！");
		helper("TextView [mText = '测试文本]", errors);

		errors.clear();
		errors.add("第1行，第19列: 查询语句中有无法识别的关键字\"测\"！");
		errors.add("第1行，第20列: 查询语句中有无法识别的关键字\"试\"！");
		errors.add("第1行，第21列: 查询语句中有无法识别的关键字\"文\"！");
		errors.add("第1行，第22列: 查询语句中有无法识别的关键字\"本\"！");
		errors.add("第1行，第23列: 在']'处缺少期望的QUOTED_STRING！");
		helper("TextView [mText = 测试文本]", errors);
	}

	@Test
	public void test子孙操作符后面没有跟条件() throws Exception {
		List<String> errors = new ArrayList<String>();
		errors.add("第1行，第10列: 取子控件集合\">\"操作符后面应该跟随有合法的过滤条件！");
		helper("TextView >", errors);

		errors.clear();
		errors.add("第1行，第19列: 取子控件集合\">>\"操作符后面应该跟随有合法的过滤条件！");
		helper("TextView :first >>", errors);
	}

	/* 已经无效了。现在可以支持>>等操作符放在开头的情形里。
	@Test
	public void test回归测试1() throws Exception {
		List<String> errors = new ArrayList<String>();
		errors.add("第1行，第1列: \">>\"操作符不能放在查询的开始，如果是要从根节点开始查询，请确保查询的集合里只有根节点一个元素，并且使用类似\"* >>\"或\":first >>\"的方式指定查询语句！");
		helper(">> :label [mText='Title']", errors);
	}
	*/

	List<ITreeNode> _candidates = null;

	private void helper(String iquery, List<String> expectedErrors)
			throws Exception {
		if (_candidates == null) {
			LayoutTree tree = constructTree();
			_candidates = tree.getAllNodesCopy();
		}

		List<String> errors = new ArrayList<String>();
		Pair<List<ITreeNode>, List<String>> result = null;
		try {
			result = parseQueryAgainst(_candidates, iquery, errors);
		} catch ( Exception e ) {
			errors.add(e.getMessage());
		}
		
		if ( result == null ) {
			result = new Pair<List<ITreeNode>, List<String>>();
			result.second = errors;
		}

		if (result != null && result.first != null) {
			Assert.assertTrue(
					String.format("针对\"%1$s\"的查询语法错误，不应该返回任何结果！", iquery),
					result.first.size() == 0);
		}
		Assert.assertEquals(String.format("错误的查询语法是\"%1$s\"", iquery),
				expectedErrors.size(), result.second.size());

		for (int i = 0; i < expectedErrors.size(); ++i) {
			Assert.assertEquals(String.format("错误的查询语法是\"%1$s\"", iquery),
					expectedErrors.get(i), result.second.get(i));
		}
	}
}
