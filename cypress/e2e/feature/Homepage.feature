# Test cases scenario that need to be tested, they are written in Gherkin language
# Main Gherkin keywords are Feature, Background, Given, When, Then, And ...

Feature: Toqio Website - Homepage

    Verify request demo form and if there are any broken links

    # This is a common step
    Background: Visit Toqio website
        Given that I'm visiting toqio website

    Scenario: User shall be able to request a demo from your website
        When I see the request demo button and I click on it
        Then I have been redirect to the contact page
        And I can send an email to the company by submitting the form

    Scenario: User shall be able to navigate through your website without getting any kinds of error
        Then I want to verify if all links are reachable   

    
