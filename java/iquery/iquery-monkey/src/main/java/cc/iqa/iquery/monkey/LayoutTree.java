package cc.iqa.iquery.monkey;

import java.util.*;
import cc.iqa.iquery.*;

public class LayoutTree {
	private LayoutTreeNode _root;

	public LayoutTreeNode getRoot() {
		return _root;
	}

	private ArrayList<ITreeNode> _nodes = new ArrayList<ITreeNode>();

	@SuppressWarnings("unchecked")
	public List<ITreeNode> getAllNodesCopy() {
		return (ArrayList<ITreeNode>) _nodes.clone();
	}

	public LayoutTree(LayoutTreeNode root) {
		_root = root;
		addNode(root);
	}

	public void addNode(LayoutTreeNode node) {
		_nodes.add(node);
	}
}