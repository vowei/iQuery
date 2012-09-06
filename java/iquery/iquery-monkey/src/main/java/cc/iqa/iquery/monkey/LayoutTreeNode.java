package cc.iqa.iquery.monkey;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;
import cc.iqa.iquery.*;

public class LayoutTreeNode implements ITreeNode {
    private String _id;
    public String getId() { return _id; }
    public void setId(String id) { _id = id; }

    private String _name;
    public String getName() { return _name; }
    public void setName(String name) { _name = name; }

    private List<IProperty> _properties = new ArrayList<IProperty>();
    public List<IProperty> getProperties() { return _properties; }

    private Map<String, IProperty> _namedProperties = new HashMap<String, IProperty>();
    public Map<String, IProperty> getNamedProperties() { return _namedProperties; }


    public boolean containsProperty(String key) {
	return _namedProperties.containsKey(key);
    }

    public IProperty getProperty(String key) {
	return _namedProperties.get(key);
    }

    private LayoutTreeNode _parent;
    public ITreeNode getParent() {
	return _parent; 
    }
    public void setParent(LayoutTreeNode parent) {
	_parent = parent;
    }

    private List<ITreeNode> _children = new ArrayList<ITreeNode>();
    public List<ITreeNode> getChildren() {
	return _children;
    }
    
    public int left;
    public int top;
    public int width;
    public int height;
    public int scrollX;
    public int scrollY;
    public int paddingLeft;
    public int paddingRight;
    public int paddingTop;
    public int paddingBottom;
    public int marginLeft;
    public int marginRight;
    public int marginTop;
    public int marginBottom;
    public int baseline;
    public boolean willNotDraw;
    public boolean hasMargins;
    
    boolean hasFocus;
    int index;

    public boolean decoded;
    public boolean filtered;

    private String shortName;
    // private StateListener listener;

    void decode() {
        _id = _namedProperties.get("mID").getValue();

        left = getInt("mLeft", 0);
        top = getInt("mTop", 0);
        width = getInt("getWidth()", 0);
        height = getInt("getHeight()", 0);
        scrollX = getInt("mScrollX", 0);
        scrollY = getInt("mScrollY", 0);
        paddingLeft = getInt("mPaddingLeft", 0);
        paddingRight = getInt("mPaddingRight", 0);
        paddingTop = getInt("mPaddingTop", 0);
        paddingBottom = getInt("mPaddingBottom", 0);
        marginLeft = getInt("layout_leftMargin", Integer.MIN_VALUE);
        marginRight = getInt("layout_rightMargin", Integer.MIN_VALUE);
        marginTop = getInt("layout_topMargin", Integer.MIN_VALUE);
        marginBottom = getInt("layout_bottomMargin", Integer.MIN_VALUE);
        baseline = getInt("getBaseline()", 0);
        willNotDraw = getBoolean("willNotDraw()", false);
        hasFocus = getBoolean("hasFocus()", false);

        hasMargins = marginLeft != Integer.MIN_VALUE &&
                marginRight != Integer.MIN_VALUE &&
                marginTop != Integer.MIN_VALUE &&
                marginBottom != Integer.MIN_VALUE;

        decoded = true;
    }

    private boolean getBoolean(String name, boolean defaultValue) {
        IProperty p = _namedProperties.get(name);
        if (p != null) {
            try {
                return Boolean.parseBoolean(p.getValue());
            } catch (NumberFormatException e) {
                return defaultValue;
            }   
        }
        return defaultValue;
    }

    private int getInt(String name, int defaultValue) {
        IProperty p = _namedProperties.get(name);
        if (p != null) {
            try {
                return Integer.parseInt(p.getValue());
            } catch (NumberFormatException e) {
                return defaultValue;
            }
        }
        return defaultValue;
    }

    public void filter(Pattern pattern) {
        if (pattern == null || pattern.pattern().length() == 0) {
            filtered = false;
        } else {
            filtered = pattern.matcher(shortName).find() || pattern.matcher(getId()).find();
        }
        // listener.nodeStateChanged(this);
    }

    void computeIndex() {
        index = _parent == null ? 0 : _parent._children.indexOf(this);
        // listener.nodeIndexChanged(this);
    }

    void setShortName(String shortName) {
        this.shortName = shortName;
    }

    /*
    void setStateListener(StateListener listener) {
        this.listener = listener;
    }
    */

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final LayoutTreeNode other = (LayoutTreeNode) obj;
        return !(_name != other._name && (this._name == null || !this._name.equals(other._name)));
    }

    @Override
    public String toString() {
        return _name;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 67 * hash + (this._name != null ? this._name.hashCode() : 0);
        return hash;
    }

    public static class Property implements IProperty {
        public String name;
	public String getName() { return name; }

        public String value;
	public String getValue() { return value; }

        @Override
        public String toString() {
            return name + '=' + value;
        }
        
        @Override
        public boolean equals(Object obj) {
            if (obj == null) {
                return false;
            }
            if (getClass() != obj.getClass()) {
                return false;
            }
            final Property other = (Property) obj;
            if (this.name != other.name && (this.name == null || !this.name.equals(other.name))) {
                return false;
            }
            return !(this.value != other.value && (this.value == null || !this.value.equals(other.value)));
        }

        @Override
        public int hashCode() {
            int hash = 5;
            hash = 61 * hash + (this.name != null ? this.name.hashCode() : 0);
            hash = 61 * hash + (this.value != null ? this.value.hashCode() : 0);
            return hash;
        }
    }

	@Override
	public String getType() {
		return getName();
	}
	@Override
	public String getText() {
		return containsProperty("mText") ? getProperty("mText").getValue() : null; 
	}
}