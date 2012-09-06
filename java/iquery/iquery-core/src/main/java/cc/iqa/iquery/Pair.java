package cc.iqa.iquery;

public class Pair<K, V> {
    public Pair(K first, V second) {
	this.first = first;
	this.second = second;
    }

    public Pair() { }

    public K first;
    public V second;
}