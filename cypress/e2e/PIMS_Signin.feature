Feature: Sign In Page

    Scenario: Valid Information Sign In Form
        Given I navigate to PIMS Landing Page
        When I click on the sign in button
        And I enter a valid username 
        And I enter a valid password
        And I click on the sign in button for submit
        Then I should be redirected to user dashboard page

    Scenario: Invalid Information Sign In Form
        Given I navigate to PIMS Landing Page
        When I click on the sign in button
        And I enter a invalid username 
        And I enter a valid password
        And I click on the sign in button for submit
        Then I should see an error message that says "اسم المستخدم أو كلمة المرور غير صحيحة"