package cc.iqa.iquery.android;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import android.view.View;
import android.view.ViewGroup;

import cc.iqa.iquery.*;

public class SoloTreeNode implements ITreeNode {
	private View _view = null;

	public SoloTreeNode(View view) {
		_view = view;
	}

	public SoloTreeNode(View view, SoloTreeNode parent) {
		this(view);
		_parent = parent;
	}

	public View getView() { return _view; }
	
	@Override
	public String getName() {
		return _view.getClass().toString();
	}

	public boolean containsProperty(String key) {
		return getMethod(key) != null || getField(key) != null;
	}

	public IProperty getProperty(String key) {
		Method method = getMethod(key);
		Object value = null;
		
		if (method != null) {
			try {
				value = method.invoke(_view);
			} catch (IllegalArgumentException e) {
				return null;
			} catch (IllegalAccessException e) {
				return null;
			} catch (InvocationTargetException e) {
				return null;
			}
		} else {
			Field field = getField(key);
			if ( field != null ) {
				field.setAccessible(true);
				try {
					value = field.get(_view);
				} catch (IllegalArgumentException e) {
					return null;
				} catch (IllegalAccessException e) {
					return null;
				}
			}
		}
		
		return new SoloProperty(key, value.toString());
	}

	private ITreeNode _parent;

	@Override
	public ITreeNode getParent() {
		return _parent;
	}

	private List<ITreeNode> _children;

	@Override
	public List<ITreeNode> getChildren() {
		if (_children == null) {
			_children = new ArrayList<ITreeNode>();

			if (_view instanceof ViewGroup) {
				addChildren(_children, (ViewGroup) _view);
			}
		}

		return _children;
	}

	private Method getMethod(String key) {
		Class<?> cls = _view.getClass();
		String getter = String.format("%1$s", key);

		try {
			return cls.getMethod(getter);
		} catch (SecurityException e) {
			return null;
		} catch (NoSuchMethodException e) {
			return null;
		}
	}
	
	private Field getField(String key) {
		Class<?> cls = _view.getClass();
		Field ret = null;
		
		while ( ret == null && cls != null ) {		
			try {
				ret = cls.getDeclaredField(key);
			} catch (SecurityException e) {
			} catch (NoSuchFieldException e) {
			}
			
			if ( ret != null )
				break;
			
			try {
				ret = cls.getField(key);
			} catch (SecurityException e) {
			} catch (NoSuchFieldException e) {
			}
			
			cls = cls.getSuperclass();
		}
		
		return ret;
	}

	private void addChildren(List<ITreeNode> children, ViewGroup viewGroup) {
		for (int i = 0; i < viewGroup.getChildCount(); i++) {
			final View child = viewGroup.getChildAt(i);
			children.add(new SoloTreeNode(child, this));
		}
	}

	@Override
	public String getType() {
		return _view.getClass().toString();
	}

	@Override
	public String getText() {
		return getProperty("mText").getValue();
	}
}
