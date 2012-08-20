package cc.iqa.runtime;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class MethodInvoker {
	private Method _method;
	private Object _object;
	
	public Method get_Method() { return _method; }
	
	public Object get_Instance() { return _object; }
	
	public MethodInvoker(Object obj, Method method) {
		_method = method;
		_object = obj;
	}
	
	public Object Invoke() throws IllegalArgumentException, IllegalAccessException, InvocationTargetException {
		return _method.invoke(_object, (Object[])null);
	}
	
	public Object Invoke(Object... args) throws IllegalArgumentException, IllegalAccessException, InvocationTargetException{
		return _method.invoke(_object, args);
	}
}
