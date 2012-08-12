package cc.iqa.iquery;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.antlr.runtime.ANTLRInputStream;
import org.antlr.runtime.CommonTokenStream;
import org.antlr.runtime.RecognitionException;

public class iQueryIdeParser {
	/*
	 * public static iQueryParser parse(String iquery) throws IOException,
	 * RecognitionException { return parse(iquery, new ArrayList<ITreeNode>());
	 * }
	 * 
	 * public static iQueryParser parse(String iquery, List<ITreeNode>
	 * candidates) throws IOException, RecognitionException { InputStream query
	 * = new ByteArrayInputStream(iquery.getBytes("utf8")); ANTLRInputStream
	 * input = new ANTLRInputStream(query); List<String> errors = new
	 * ArrayList<String>(); iQueryLexer lexer = new iQueryLexer(input, errors);
	 * CommonTokenStream tokens = new CommonTokenStream(lexer); iQueryParser
	 * parser = new iQueryParser(tokens, errors, true);
	 * 
	 * parser.query(candidates); return parser; }
	 */

	public static iQueryParser createParser(String iquery) throws IOException,
			RecognitionException {
		return createParser(iquery, true);
	}

	public static iQueryParser createParser(String iquery,
			boolean registerPseudo) throws IOException, RecognitionException {
		InputStream query = new ByteArrayInputStream(iquery.getBytes("utf8"));
		ANTLRInputStream input = new ANTLRInputStream(query);
		List<String> errors = new ArrayList<String>();
		iQueryLexer lexer = new iQueryLexer(input, errors);
		CommonTokenStream tokens = new CommonTokenStream(lexer);
		iQueryParser parser = new iQueryParser(tokens, errors, true);

		if (registerPseudo) {
		    registerPseudoAttributes(parser);
		    registerPseudoClasses(parser);
		}

		return parser;
	}

    private static void registerPseudoClasses(iQueryParser parser) {
	parser.registerPseudoClass("text", new IPseudoClass() {
		public boolean resolve(ITreeNode node) {
		    return filterByNameEndsWith(node, "EditText");
		}
	    });

	parser.registerPseudoClass("radio", new IPseudoClass() {
		public boolean resolve(ITreeNode node) {
		    return filterByNameEndsWith(node, "RadioButton");
		}
	    });

	parser.registerPseudoClass("visible", new IPseudoClass() {
		public boolean resolve(ITreeNode node) {
		    Map<String, String> attributes = new HashMap<String, String>();
		    attributes.put("getVisibility()", "VISIBLE");
		    return filterByAttributes(node, attributes);
		}
	    });

	parser.registerPseudoClass("hidden", new IPseudoClass() {
		public boolean resolve(ITreeNode node) {
		    Map<String, String> attributes = new HashMap<String, String>();
		    attributes.put("getVisibility()", "VISIBLE");
		    return filterByExcludingAttributes(node, attributes);
		}
	    });

	parser.registerPseudoClass("focus", new IPseudoClass() {
		public boolean resolve(ITreeNode node) {
		    Map<String, String> attributes = new HashMap<String, String>();
		    attributes.put("isFocused()", "true");
		    return filterByAttributes(node, attributes);
		}
	    });

	parser.registerPseudoClass("button", new IPseudoClass() {
		public boolean resolve(ITreeNode node) {
		    return filterByNameEndsWith(node, "Button");
		}
	    });

	parser.registerPseudoClass("image", new IPseudoClass() {
		public boolean resolve(ITreeNode node) {
		    return filterByNameEndsWith(node, "ImageButton", "ImageView");
		}
	    });

	parser.registerPseudoClass("label", new IPseudoClass() {
		public boolean resolve(ITreeNode node) {
		    return filterByNameEndsWith(node, "TextView");
		}
	    });
    }

	private static void registerPseudoAttributes(iQueryParser parser) {
		parser.registerPseudoAttribute("top", new IPseudoAttribute() {
			public String resolve(ITreeNode node) {
				return node.getProperty("mTop").getValue();
			}
		});
		parser.registerPseudoAttribute("left", new IPseudoAttribute() {
			public String resolve(ITreeNode node) {
				return node.getProperty("mLeft").getValue();
			}
		});
		parser.registerPseudoAttribute("bottom", new IPseudoAttribute() {
			public String resolve(ITreeNode node) {
				return node.getProperty("mBottom").getValue();
			}
		});
		parser.registerPseudoAttribute("right", new IPseudoAttribute() {
			public String resolve(ITreeNode node) {
				return node.getProperty("mRight").getValue();
			}
		});
		parser.registerPseudoAttribute("width", new IPseudoAttribute() {
			public String resolve(ITreeNode node) {
				return node.getProperty("mWidth").getValue();
			}
		});
		parser.registerPseudoAttribute("height", new IPseudoAttribute() {
			public String resolve(ITreeNode node) {
				return node.getProperty("mHeight").getValue();
			}
		});

	}

    public static boolean filterByNameStartsWith(ITreeNode node, String ... criterias){
	String name = type(node);
	if ( name != null ) {
	    for (int j = 0; j < criterias.length; ++j ) {
		if ( name.startsWith(criterias[j]) ) {
		    return true;
		}
	    }
	}
    
	return false;
    }
    
    public static boolean filterByNameEndsWith(ITreeNode node, String ... criterias){
	String name = type(node);
	if ( name != null ) {
	    for (int j = 0; j < criterias.length; ++j ) {
		if ( name.endsWith(criterias[j]) ) {
		    return true;
		}
	    }
	}
    
	return false;
    }
    
    public static boolean filterByAttributes(ITreeNode node, String ... attributes) {
	for ( int j = 0; j < attributes.length; ++j ) {
	    String key = attributes[j];
	    
	    if ( !node.containsProperty(key) ) {
		return false;
	    }
	}	    	    
	
	return true;
    }
    
    public static boolean filterByAttributes(ITreeNode node, Map<String, String> attributes) {
	for ( Map.Entry<String, String> entry : attributes.entrySet() ) {
	    if ( !node.containsProperty(entry.getKey()) ) {
		return false;
	    }
	    
	    IProperty property = node.getProperty(entry.getKey());
	    if ( property == null ||
		 property.getValue().compareTo(entry.getValue()) != 0 ) {
		return false;
	    }
	}             
	
	return true;
    }
    
    public static boolean filterByExcludingAttributes(ITreeNode node, 
						       Map<String, String> attributes) {
	boolean isMatched = false;
	for ( Map.Entry<String, String> entry : attributes.entrySet() ) {
	    if ( !node.containsProperty(entry.getKey()) ) {
		isMatched = true;
		break;
	    }
		
	    IProperty property = node.getProperty(entry.getKey());
	    if ( property == null ||
		 property.getValue().compareTo(entry.getValue()) != 0 ) {
		isMatched = true;
		break;
	    }
	}
	    
	return isMatched;
    }
    private static String type(ITreeNode node) {
        String name = node.getType();
        int endIdx = name.indexOf('@');
        if ( endIdx == -1 )
                endIdx = name.length();
        
        int startIdx = name.lastIndexOf('.', endIdx);
        if ( startIdx < 0 ) 
            startIdx = -1;
        
        return name.substring(startIdx + 1, endIdx).replace('$', '.');
    }
}
