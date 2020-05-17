package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;



@CucumberOptions(
	features="./Features",
	glue= {"steps"},
	plugin= {"pretty","html:target/cucumber-html-report"}
)
public class TestRunner extends AbstractTestNGCucumberTests
{
	

}
