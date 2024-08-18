import 
{ 
    CONTACT_FORM, 
    EMAIL_INPUT, 
    FIRSTNAME_INPUT, 
    LASTNAME_INPUT, 
    PHONE_INPUT, 
    COMPANY_NAME_INPUT, 
    COUNTRY_REGION_INPUT, 
    HEADQUARTERED_DROPDOWN, 
    HEAR_ABOUT_US_DROPDOWN, 
    PRIVACY_POLICY_RADIOBUTTON, 
    SUBSCRIBE_MAIL_RADIOBUTTON,
    ERROR_MESSAGE_LABEL,
} from "../pageSelectors/contactPageSelectors.cy"; 

/// <reference types="cypress" />

export class ContactPage {

    // Verify that when the user click on the request demo button, the contact sales page should be shown
    static checkPageRedirect(){
        cy.url().should("eq", "https://toqio.co/contact-sales/");
    }
    
    // Verify that an user can't submit the form without fill the required fields
    static submitWithoutFill(){
        cy.wait(5000);
        cy.get(CONTACT_FORM).should("be.visible");
        cy.get(CONTACT_FORM).submit();
        cy.wait(5000);
        cy.get(ERROR_MESSAGE_LABEL).should("be.visible");
    }

    // Verify that if the user enter invalid values, he can't submit the form
    static enterInvalidValuesAndCheckErrorMessages(){
        cy.wait(5000);
        cy.get(CONTACT_FORM).should("be.visible");
        cy.get(FIRSTNAME_INPUT).clear().type(" ");
        cy.get(LASTNAME_INPUT).clear().type(" ");
        cy.get(EMAIL_INPUT).clear().type("email");
        cy.get(PHONE_INPUT).clear().type("123");
        cy.get(COMPANY_NAME_INPUT).clear().type(" ");
        cy.get(COUNTRY_REGION_INPUT).clear().type(" ");
        cy.get(HEADQUARTERED_DROPDOWN).select("Spain");
        cy.get(HEAR_ABOUT_US_DROPDOWN).select("Online search");
        cy.get(PRIVACY_POLICY_RADIOBUTTON).uncheck();
        cy.get(SUBSCRIBE_MAIL_RADIOBUTTON).uncheck();
        cy.get(CONTACT_FORM).submit();
        cy.wait(5000);
        cy.get(ERROR_MESSAGE_LABEL).should("be.visible");
    }

    // Fill the required fields and click on submit to send an email to toqio company
    static submitFormAndSendMail(){
        this.submitWithoutFill();
        this.enterInvalidValuesAndCheckErrorMessages();
        cy.wait(5000);
        cy.get(CONTACT_FORM).should("be.visible");
        cy.get(FIRSTNAME_INPUT).clear().type("Barbara");
        cy.get(LASTNAME_INPUT).clear().type("Gallo");
        cy.get(EMAIL_INPUT).clear().type("barbara.gallo@kalpa.it");
        cy.get(PHONE_INPUT).clear().type("3488116947");
        cy.get(COMPANY_NAME_INPUT).clear().type("Kalpa Srl");
        cy.get(COUNTRY_REGION_INPUT).clear().type("Sesto San Giovanni");
        cy.get(HEADQUARTERED_DROPDOWN).select("Italy");
        cy.get(HEAR_ABOUT_US_DROPDOWN).select("Online search");
        cy.get(PRIVACY_POLICY_RADIOBUTTON).check();
        cy.get(SUBSCRIBE_MAIL_RADIOBUTTON).uncheck();
    }

    // Verify that the form has been submit successfully, so the user received a follow up message in the inbox
    static isFormSubmittedSuccessfully(){
        cy.get(CONTACT_FORM).submit();
        cy.wait(5000);
        cy.get("span").should("be.visible");
        cy.get("span").should("have.text", "Thanks for contacting us!");
        cy.get("span").should("be.visible");
        cy.get("span").should("have.text", "Check your inbox for a follow up message and next steps.");
    }

}