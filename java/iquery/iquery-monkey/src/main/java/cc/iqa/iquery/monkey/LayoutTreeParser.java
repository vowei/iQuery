package cc.iqa.iquery.monkey;

import java.util.*;
import cc.iqa.iquery.*;

public class LayoutTreeParser {
	public static LayoutTree parse(String[] lines) {
		if (lines == null || lines.length == 0)
			throw new IllegalArgumentException("lines");

		Stack<LayoutTreeNode> stack = new Stack<LayoutTreeNode>();

		LayoutTree tree = null;
		LayoutTreeNode lastNode = null;
		int lastWhitespaceCount = Integer.MAX_VALUE;

		for (int i = 0; i < lines.length; ++i) {
			String line = lines[i];
			if ("DONE.".equalsIgnoreCase(line)) {
				break;
			}

			int whitespaceCount = countFrontWhitespace(line);
			if (lastWhitespaceCount < whitespaceCount) {
				stack.push(lastNode);
			} else if (!stack.isEmpty()) {
				final int count = lastWhitespaceCount - whitespaceCount;
				for (int j = 0; j < count; j++) {
					stack.pop();
				}
			}

			lastWhitespaceCount = whitespaceCount;
			line = line.trim();
			int index = line.indexOf(' ');

			lastNode = new LayoutTreeNode();
			lastNode.setName(line.substring(0, index));

			line = line.substring(index + 1);
			loadProperties(lastNode, line);

			if (tree == null) {
				tree = new LayoutTree(lastNode);
			} else {
				tree.addNode(lastNode);
			}

			if (!stack.isEmpty()) {
				final LayoutTreeNode parent = stack.peek();

				lastNode.setParent(parent);
				parent.getChildren().add(lastNode);
			}
		}

		updateIndices(tree.getRoot());
		return tree;
	}

	private static void updateIndices(LayoutTreeNode root) {
		if (root == null)
			return;

		root.computeIndex();

		for (ITreeNode node : root.getChildren()) {
			updateIndices((LayoutTreeNode) node);
		}
	}

	private static int countFrontWhitespace(String line) {
		int count = 0;
		while (line.charAt(count) == ' ') {
			count++;
		}
		return count;
	}

	private static void loadProperties(LayoutTreeNode node, String data) {
		int start = 0;
		boolean stop;

		do {
			int index = data.indexOf('=', start);
			LayoutTreeNode.Property property = new LayoutTreeNode.Property();
			property.name = data.substring(start, index);

			int colonIndex = property.name.indexOf(':');
			if (colonIndex != -1) {
				property.name = property.name.substring(colonIndex + 1);
			}

			int index2 = data.indexOf(',', index + 1);
			int length = Integer.parseInt(data.substring(index + 1, index2));
			start = index2 + 1 + length;
			property.value = data.substring(index2 + 1, index2 + 1 + length);

			node.getProperties().add(property);
			node.getNamedProperties().put(property.name, property);

			stop = start >= data.length();
			if (!stop) {
				start += 1;
			}
		} while (!stop);

		Collections.sort(node.getProperties(), new Comparator<IProperty>() {
			public int compare(IProperty source, IProperty destination) {
				return source.getName().compareTo(destination.getName());
			}
		});

		node.decode();
	}
}