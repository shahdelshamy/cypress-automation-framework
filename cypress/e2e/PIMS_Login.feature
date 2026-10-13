@login
Feature: Login Page

    Scenario: Valid Information Login Form
        Given I navigate to PIMS Landing Page
        When I click on the login button
        And I enter a valid username
        And I enter a valid password
        And I click on the login button for submit
        Then I should be redirected to user dashboard page

    Scenario: Invalid Information Login Form
        Given I navigate to PIMS Landing Page
        When I click on the login button
        And I enter a invalid username
        And I enter a valid password
        And I click on the login button for submit
        Then I should see an error message that says "اسم المستخدم أو كلمة المرور غير صحيحة"