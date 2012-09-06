package cc.iqa.iquery;

import java.util.List;

public class iQueryParseException extends Exception {
	private static final long serialVersionUID = 1L;
	
	private List<String> _errors = null;
	
	public List<String> getErrors() { return _errors; }
	
	public iQueryParseException(List<String> errors) {
		_errors = errors;
	}
}
