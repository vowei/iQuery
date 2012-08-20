package cc.iqa.core;

public interface ITestRunner {
    FeatureContext getFeatureContext();
    
    ScenarioContext getScenarioContext();
    
    void InitializeTestRunner(String[] jarPaths) throws Exception;
	
    void OnFeatureStart(FeatureInfo info);
    
    void OnFeatureEnd();

    void OnScenarioStart(ScenarioInfo info);

    void CollectScenarioErrors();
    
    void OnScenarioEnd();

    void OnTestRunEnd();

    void Given(String text, String multilineTextArg, Table tableArgs) throws Exception;
    
    void Step(String text) throws Exception;
    
    void Step(String text, String multilineTextArg) throws Exception;
    
    void Step(String text, String multilineTextArg, Table tableArgs) throws Exception;

    void Pending();
}
