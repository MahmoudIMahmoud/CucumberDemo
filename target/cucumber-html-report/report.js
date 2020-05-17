$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login;login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "open the web app",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter user name \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter user password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Hit login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Should be navigated to home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "login;login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "login;login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 10,
      "id": "login;login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6145534400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login;login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "open the web app",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter user name Admin",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter user password admin123",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Hit login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Should be navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.open_the_web_app()"
});
formatter.result({
  "duration": 7245480500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 16
    }
  ],
  "location": "LoginSteps.enter_user_name_Admin(String)"
});
formatter.result({
  "duration": 3105706900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 20
    }
  ],
  "location": "LoginSteps.enter_user_password_paassword(String)"
});
formatter.result({
  "duration": 88588000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.hit_login()"
});
formatter.result({
  "duration": 7823990200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.should_be_navigated_to_home_page()"
});
formatter.result({
  "duration": 3981741500,
  "status": "passed"
});
formatter.after({
  "duration": 847125300,
  "status": "passed"
});
});