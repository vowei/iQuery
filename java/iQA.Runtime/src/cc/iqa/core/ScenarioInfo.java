package cc.iqa.core;

public class ScenarioInfo {
	private String[] _tags;

	public String[] getTags() {
		return _tags;
	}

	private String _title;

	public String getTitle() {
		return _title;
	}

	public ScenarioInfo(String title, String[] tags) {
		_title = title;
		_tags = tags;
	}
}
