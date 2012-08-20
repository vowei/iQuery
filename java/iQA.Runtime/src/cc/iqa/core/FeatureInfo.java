package cc.iqa.core;

import cc.iqa.core.ProgrammingLanguage;

public class FeatureInfo {
	private String[] _tags;

	public String[] get_Tags() {
		return _tags;
	}

	private ProgrammingLanguage _generationTargetLanguage;

	public ProgrammingLanguage get_GenerationTargetLanguage() {
		return _generationTargetLanguage;
	}

	private String _title;

	public String get_Title() {
		return _title;
	}

	private String _description;

	public String get_Description() {
		return _description;
	}

	private CultureInfo _language;

	public CultureInfo get_Language() {
		return _language;
	}

	public FeatureInfo(CultureInfo language, String title, String description,
			ProgrammingLanguage programmingLanguage, String[] tags) {
		_language = language;
		_title = title;
		_description = description;
		_tags = tags;
		_generationTargetLanguage = programmingLanguage;
	}
}
