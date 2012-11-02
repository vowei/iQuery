package com.vowei.android.monkeyrunner;

import org.python.util.PythonInterpreter;
import com.google.common.base.Predicate;

public class Plugin implements Predicate<PythonInterpreter> {
	@Override
	public boolean apply(PythonInterpreter python) {
		python.set("hello", "Hello, monkeyrunner!");
		return true;
	}
}