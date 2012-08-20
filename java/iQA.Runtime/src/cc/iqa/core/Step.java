package cc.iqa.core;

import java.lang.annotation.*;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Retention(RUNTIME)
public @interface Step {
	String bindingRegex();
}
