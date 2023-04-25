

Feature: Task Login
Scenario: Login with incorrect email and password

Given I access the Automation Exercise home page
When I access the login page
And I fill in with incorrect email and password
Then after clicking submit, an error message will appear
