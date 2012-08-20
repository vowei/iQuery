package cc.iqa.runtime;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Enumeration;
import java.util.Hashtable;
import java.util.List;
import java.io.File;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Constructor;
import java.lang.reflect.Modifier;
import java.util.jar.*;
import org.picocontainer.MutablePicoContainer;
import cc.iqa.core.Binding;
import cc.iqa.core.ContextBase;
import cc.iqa.core.FeatureContext;
import cc.iqa.core.FeatureInfo;
import cc.iqa.core.ITestRunner;
import cc.iqa.core.ScenarioContext;
import cc.iqa.core.ScenarioInfo;
import cc.iqa.core.Step;
import cc.iqa.core.StepBindingDescription;
import cc.iqa.core.Table;
import cc.iqa.regexp.NamedPattern;

public class TestRunner implements ITestRunner {
	private FeatureContext _featureContext;
	private ScenarioContext _scenarioContext;
	private StepBindingRegistry _bindingRegistry;
	private MutablePicoContainer _container;

	public StepBindingRegistry get_BindingRegistry() {
		return _bindingRegistry;
	}

	public TestRunner(FeatureContext featureContext,
			ScenarioContext scenarioContext) throws Exception {
		this(featureContext, scenarioContext, null);
	}

	public TestRunner(FeatureContext featureContext,
			ScenarioContext scenarioContext, MutablePicoContainer container)
			throws Exception {
		// TODO: 想想办法将下面的路径去掉
		// TODO: 在第一版本里暂时去不掉，只好在文档里写下来了。
		this(featureContext, scenarioContext, container,
				new String[] { "/data/app/iQA.Runtime.Instrument.jar" });
	}

	public TestRunner(FeatureContext featureContext,
			ScenarioContext scenarioContext, MutablePicoContainer container,
			String[] jarpathes) throws Exception {
		_featureContext = featureContext;
		_scenarioContext = scenarioContext;
		_bindingRegistry = new StepBindingRegistry();
		_container = container;

		InitializeTestRunner(jarpathes);
	}

	@Override
	public FeatureContext getFeatureContext() {
		return _featureContext;
	}

	@Override
	public ScenarioContext getScenarioContext() {
		return _scenarioContext;
	}

	@Override
	public void InitializeTestRunner(String[] jarPaths) throws Exception {
		for (String path : jarPaths) {
			processPath(path);
		}
	}

	private void processPath(String path) throws Exception {
		File file = new File(path);
		path = file.getAbsolutePath();
		if (path.endsWith(".jar")) {
			reflectJarFile(path);
		} else if (file.isDirectory()) {
			String[] list = file.list();
			for (String l : list) {
				if (l.endsWith(".jar")) {
					reflectJarFile(file.getAbsolutePath() + "/" + l);
				}
			}
		}
	}

	private void reflectJarFile(String path) throws Exception {
		JarFile jarFile = new JarFile(path);
		Enumeration<JarEntry> entries = jarFile.entries();

		while (entries.hasMoreElements()) {
			JarEntry entry = entries.nextElement();
			String entryName = entry.getName();

			if (entryName.endsWith(".class")) {
				String className = entryName.replace('/', '.')
						.replace('\\', '.').replace(".class", "");

				Class<?> cls = Class.forName(className);
				if (cls.getAnnotation(Binding.class) != null) {
					RegisterBindableMethods(cls);
				}
			}
		}
	}

	/*
	 * TODO:调研reflections库 这里用到了reflections这个开源库，看说明好像是可以从文件系统直接搜索指定条件的类型文件的
	 * 但问题是，这个库用的是maven编译，里面有很多依赖的库，不用maven的话，跑起来非常麻烦 到目前为止，我下载了下面这几个库：
	 * slf4j-1.6.4 guava-11.0.2 javassist
	 * 才勉强能运行到下面for语句那一行，但问题是，由于没有指定正确的classloader
	 * getTypesAnnotatedWith这个函数虽然可以找到标识有Binding属性的类，
	 * 但却无法加载进程序里，导致types是一个只包含null引用的数组。
	 * 
	 * Reflections reflections = new Reflections( new ConfigurationBuilder()
	 * .addUrls(urls) .setScanners(new SubTypesScanner(), new
	 * TypeAnnotationsScanner(), new MethodAnnotationsScanner(), new
	 * FieldAnnotationsScanner(), new ConvertersScanner())); Set<Class<?>> types
	 * = reflections.getTypesAnnotatedWith(Binding.class); for ( Class<?> type :
	 * types ) { RegisterBindableMethods(type); } }
	 */

	@Override
	public void OnFeatureStart(FeatureInfo info) {
		// TODO Auto-generated method stub

	}

	@Override
	public void OnFeatureEnd() {
		// TODO Auto-generated method stub

	}

	@Override
	public void OnScenarioStart(ScenarioInfo info) {
		// TODO Auto-generated method stub

	}

	@Override
	public void CollectScenarioErrors() {
		// TODO Auto-generated method stub

	}

	@Override
	public void OnScenarioEnd() {
		// TODO Auto-generated method stub

	}

	@Override
	public void OnTestRunEnd() {
		// TODO Auto-generated method stub

	}

	/*
	 * TODO: Given, When, Then, And, But这些关键字应该要被删掉
	 */
	@Override
	public void Given(String text, String multilineTextArg, Table tableArgs)
			throws Exception {
		Step(text, multilineTextArg, tableArgs);
	}

	@Override
	public void Step(String text) throws Exception {
		Step(text, null, null);
	}

	@Override
	public void Step(String text, String multilineTextArg) throws Exception {
		Step(text, multilineTextArg, null);
	}

	@Override
	public void Step(String text, String multilineTextArg, Table tableArgs)
			throws IllegalAccessException, StepBindingMismatchException,
			IllegalArgumentException, InvocationTargetException {
		Step(text, multilineTextArg, tableArgs, true);
	}

	public void Step(String text, String multilineTextArg, Table tableArgs,
			boolean invokeIt) throws IllegalAccessException,
			StepBindingMismatchException, IllegalArgumentException,
			InvocationTargetException {
		if (text == null)
			throw new IllegalArgumentException();

		// TODO: 需要将Step步骤里的文本保存到日志文件里，特别是logcat里

		StepBindingRegistry.StepMatchResult result = _bindingRegistry
				.Match(text.trim());
		if (result != null) {
			ArrayList<Object> args = new ArrayList<Object>();

			// TODO: 最好是像specflow那样能够在根据参数的类型自动匹配
			// 调用的顺序是：
			// 1、先是Table类型的参数
			// 2、再是多行文本的参数
			// 3、最后是步骤按正则表达式匹配的参数列表
			if (tableArgs != null) {
				args.add(tableArgs);
			}

			if (multilineTextArg != null) {
				args.add(multilineTextArg);
			}

			Hashtable<String, String> stepArgs = result.get_StepArgs();
			MethodInvoker invoker = result.get_Invoker();
			Method method = invoker.get_Method();
			VerifyBoundMethod(method, text);
			if (stepArgs != null) {
				java.lang.annotation.Annotation[][] panns = method
						.getParameterAnnotations();
				// 标有StepBindingDescription属性的参数个数
				int annsCount = 0;

				for (int i = 0; i < panns.length; ++i) {
					for (int j = 0; j < panns[i].length; ++j) {
						if (panns[i][j].annotationType() == StepBindingDescription.class) {
							StepBindingDescription sbd = (StepBindingDescription) panns[i][j];
							args.add(stepArgs.get(sbd.groupName()));
							annsCount++;
						}
					}
				}

				// 参数上没有注释，说明不是采用named group匹配的调用方式
				if (annsCount == 0) {
					List<String> keys = new ArrayList<String>(stepArgs.keySet());
					Collections.sort(keys);

					for (String key : keys) {
						args.add(stepArgs.get(key));
					}
				} else if (annsCount != stepArgs.size()) {
					throw new StepBindingMismatchException(
							String.format(
									"函数 [%1$s] 里标识有Annotation的参数个数：[%2$d]和bindingRegex正则表达式里的分组个数：[%3$d]不一致",
									method.getName(), annsCount,
									stepArgs.size()));
				}
			}

			// 判断函数的最后一个参数是否是ContextBase类型的参数
			Class<?>[] types = method.getParameterTypes();
			if (types.length > 0
					&& ContextBase.class
							.isAssignableFrom(types[types.length - 1])) {
				if (_container == null) {
					throw new IllegalAccessException(
							"步骤绑定的函数包含了ContextBase的参数， 但TestRunner没有使用Ioc容器初始化！");
				}
				args.add(_container.getComponent(ContextBase.class));
			}

			if (invokeIt) {
				invoker.Invoke(args.toArray());
				// TODO: 把下面的注释放到文档里面去
				// 调用成功后，给手机一点时间，以便其切换界面
				// 默认只等待0.5秒，否则需要测试人员在步骤里显示指定等待的时间
				try {
					Thread.sleep(500);
				} catch (InterruptedException e) {
				}
			}
		} else {
			throw new StepBindingMismatchException(String.format(
					"找不到与步骤“[%1$s]”相匹配的函数！", text));
		}
	}

	private void VerifyBoundMethod(Method method, String stepText)
			throws StepBindingMismatchException {
		if (method == null)
			throw new StepBindingMismatchException("步骤: “[%1$s]”所绑定的函数找不到！");

		Class<?>[] types = method.getParameterTypes();
		for (int i = 0; i < types.length - 1; ++i) {
			if (types[i] == ContextBase.class) {
				// 如果函数不是除最后一个参数外，有其他函数是ContextBase的参数，抛出异常
				throw new StepBindingMismatchException(
						String.format(
								"步骤: “[%1$s]”所绑定的函数有误！\nContextBase类型的参数只能是函数[%2$s]的最后一个参数！",
								stepText, method.getName()));
			}

			// 如果有Table类型的参数，那么它一定要是函数的第一个参数
			if (types[i] == Table.class && i != 0) {
				throw new StepBindingMismatchException(String.format(
						"步骤: “[%1$s]”所绑定的函数有误！\nTable类型的参数只能是函数[%2$s]的第一个参数！",
						stepText, method.getName()));
			}
		}
	}

	@Override
	public void Pending() {
		// TODO Auto-generated method stub

	}

	private void RegisterBindableMethods(Class<?> type)
			throws SecurityException, NoSuchMethodException,
			IllegalArgumentException, InstantiationException,
			IllegalAccessException, InvocationTargetException {
		Object instance = null;

		Method[] methods = type.getMethods();
		for (Method method : methods) {
			Step step = method.getAnnotation(Step.class);
			if (step != null) {
				// TODO: 应该需要判断是否在当前指定的jar列表里，是否有两个以上相同的正则表达式
				NamedPattern pattern = NamedPattern
						.compile(step.bindingRegex());
				if (!Modifier.isStatic(method.getModifiers())) {

					if (instance == null) {
						Constructor<?> ctor = type
								.getConstructor((Class<?>[]) null);
						instance = ctor.newInstance((Object[]) null);
					}

					_bindingRegistry.put(pattern, new MethodInvoker(instance,
							method));
				} else {
					_bindingRegistry.put(pattern, new MethodInvoker(null,
							method));
				}
			}
		}
	}
}
