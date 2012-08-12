package cc.iqa.iquery.test;

import java.io.*;
import java.util.*;

import org.junit.Assert;
import org.junit.Test;

import cc.iqa.iquery.monkey.*;

public class LayoutTreeParserTest {
    @Test public void testParserMethod() throws Exception {
	BufferedReader in = new BufferedReader(new FileReader("/media/work/workspace/iqa/java/iQA.Runtime.Test/res/testParserMethod.txt"));
	List<String> lines = new ArrayList<String>();
	String line = null;
	
		while ( (line = in.readLine()) != null ) {
		    lines.add(line);
		}
	
	String[] strs = new String[lines.size()];
	
	// 因为解析代码是从google android里拷贝出来的，因为在测试方面就偷懒了
	// 加回归测试用例吧。
	LayoutTree tree = LayoutTreeParser.parse(lines.toArray(strs));
	Assert.assertNotNull(tree);
    }
}
