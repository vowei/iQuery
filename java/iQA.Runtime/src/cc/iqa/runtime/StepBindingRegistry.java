package cc.iqa.runtime;
 
import java.util.Enumeration;
import java.util.Hashtable;
import java.util.List;
import cc.iqa.regexp.*;

public class StepBindingRegistry extends Hashtable<NamedPattern, MethodInvoker> {
	private static final long serialVersionUID = 1L;

	public class StepMatchResult {
		private MethodInvoker _invoker;
		public MethodInvoker get_Invoker() { return _invoker; }
		
		private Hashtable<String, String> _stepArgs;
		public Hashtable<String, String> get_StepArgs() { return _stepArgs; }

		public StepMatchResult(MethodInvoker invoker, Hashtable<String, String> stepArgs) {
			_invoker = invoker;
			_stepArgs = stepArgs;
		}
	}
	
	public StepMatchResult Match(String text) throws IllegalArgumentException {
		if ( text == null )
			throw new IllegalArgumentException();
		
		Enumeration<NamedPattern> iter = keys();
		while ( iter.hasMoreElements() ) {
			NamedPattern p = iter.nextElement();
			NamedMatcher m = p.matcher(text);

			// 有步骤匹配
			if ( m.matches() ) {
				Hashtable<String, String> args = new Hashtable<String, String>();
				List<String> groupNames = p.groupNames();
				
				// 步骤函数的Step描述里，要么有named group，并且参数有StepBindingDescription参数
				// 要么就是没有named group，参数按照group的索引号来匹配
				if ( groupNames != null && groupNames.size() > 0 ) {
					for ( int i = 0; i < groupNames.size(); ++i ) {
						String groupName = groupNames.get(i);
						String matchedValue = m.group(groupName);
						
						if ( matchedValue != null ) {
							args.put(groupName, matchedValue);
						} else {
							// 对于正则表达式中表明可选的参数，传入空字符串
							args.put(groupName, "");							
						}
					}
				} else {
					for ( int i = 1; i < m.groupCount(); ++i ) {
						String v = m.group(i);
						if ( v != null && 
								!(v.length() == 1 && (v.charAt(0) == '\"' || v.charAt(0) == '“' || v.charAt(0) == '”'))) {
							args.put(new Integer(i).toString(), v);
						}
					}
				}
				
				return new StepMatchResult(this.get(p), args);
			}
		}
		
		return null;
	}
}
