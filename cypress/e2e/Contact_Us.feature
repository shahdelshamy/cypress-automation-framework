Feature: Contact Us Page

    Scenario: Valid Contact Us Form Submission
        Given I navigate to webdriveruniversity.com homepage
        When I click on the Contact Us button
        And I type a first name
        And I type a last name
        And I type an email address
        And I type a message
        And I click on the submit button
        Then I should see a success message

    Scenario: Invalid Contact Us Form Submission
        Given I navigate to webdriveruniversity.com homepage
        When I click on the Contact Us button
        And I type a first name
        And I type a last name
        And I type a message
        And I click on the submit button
        Then I should see an error message