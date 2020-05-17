package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginSteps {
	private WebDriver driver=null;
	@Before
	public void setupTheDriver() {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@After
	public void closeTheOPenedDriver() {
		if(driver!=null) {
			driver.quit();
		}
	}
	@Given("^open the web app$")
	public void open_the_web_app() {		
	    driver.navigate().to("https://opensource-demo.orangehrmlive.com/");
	}

	@When("^Enter user name (.*)$")
	public void enter_user_name_Admin(String username) {
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		driver.findElement(By.id("txtUsername")).sendKeys(username);
	}

	@When("^Enter user password (.*)$")
	public void enter_user_password_paassword(String password) {
	    driver.findElement(By.id("txtPassword")).sendKeys(password);;
	}

	@When("^Hit login$")
	public void hit_login() {
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		driver.findElement(By.id("btnLogin")).click();
		
	}

	@Then("^Should be navigated to home page$")
	public void should_be_navigated_to_home_page() {
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

	    Assert.assertTrue(driver.findElement(By.id("welcome")).getText().contains("Welcome "));
	}

}
