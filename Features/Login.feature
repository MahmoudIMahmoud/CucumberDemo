Feature: login
Scenario Outline: Login with valid credentials
    Given open the web app
    When Enter user name <username>
    And Enter user password <password>
    And Hit login
    Then Should be navigated to home page
Examples:
	| username | password |
	| Admin    | admin123 | 