// Mapping all scenario steps that are inside the feature file

import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../pages/homePage.cy";
import { ContactPage } from "../pages/contactPage.cy";

Given("that I'm visiting toqio website", () => {
    HomePage.visitToqioWebsite();
    HomePage.isCookieBannerVisible();
    HomePage.acceptCookie();
});

When("I see the request demo button and I click on it", () => {
    HomePage.clickRequestDemoBtnWhenIsVisible();
});

Then("I have been redirect to the contact page", () => {
    ContactPage.checkPageRedirect();
});

And("I can send an email to the company by submitting the form", () => {
    ContactPage.submitFormAndSendMail();
    ContactPage.isFormSubmittedSuccessfully();
});

Then("I want to verify if all links are reachable", () => {
    HomePage.areLinksReachable();
});
