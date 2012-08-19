package cc.iqa.iquery.android;

import cc.iqa.iquery.*;

public class SoloProperty implements IProperty {
	public SoloProperty(String name, String value) {
		this.name = name;
		this.value = value;
	}

	private String name;

	public String getName() {
		return name;
	}

	private String value;

	public String getValue() {
		return value;
	}

	@Override
	public boolean equals(Object obj) {
		if (obj == null) {
			return false;
		}
		if (getClass() != obj.getClass()) {
			return false;
		}
		final IProperty other = (IProperty) obj;
		if (this.name != other.getName()
				&& (this.name == null || !this.name.equals(other.getName()))) {
			return false;
		}
		return !(this.value != other.getValue() && (this.value == null || !this.value
				.equals(other.getValue())));
	}

	@Override
	public int hashCode() {
		int hash = 5;
		hash = 61 * hash + (this.name != null ? this.name.hashCode() : 0);
		hash = 61 * hash + (this.value != null ? this.value.hashCode() : 0);
		return hash;
	}
}
