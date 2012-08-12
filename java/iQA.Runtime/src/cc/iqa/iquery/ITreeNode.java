package cc.iqa.iquery;

import java.util.*;

public interface ITreeNode {
    String getName();

    boolean containsProperty(String key);
    IProperty getProperty(String key);

    ITreeNode getParent();
    List<ITreeNode> getChildren();
    
    String getType();
    
    String getText();
}