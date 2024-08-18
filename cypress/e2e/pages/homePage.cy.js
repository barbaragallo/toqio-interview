import {REQUEST_DEMO_BTN, COOKIE_BANNER, ACCEPT_BTN, IFRAME} from "../pageSelectors/homePageSelectors.cy"; 

/// <reference types="cypress" />

export class HomePage {
    
    // Clear cookies and open toqio website 
    static visitToqioWebsite(){
       cy.clearCookies(); 
       cy.visit("/");
    }

    // Verify that the cookie banner is shown
    static isCookieBannerVisible(){
        cy.get(COOKIE_BANNER).should("be.visible");
    }

    // Accept the cookie
    static acceptCookie(){
        cy.get(ACCEPT_BTN).click();
    }

    // Verify that the request demo button is shown and then click on it
    static clickRequestDemoBtnWhenIsVisible(){
        cy.get(IFRAME).its("0.contentDocument").should("exist").find(REQUEST_DEMO_BTN).invoke('removeAttr', 'target').click();
    } 
    
    // Verify that there are no broken links (like page not found, access denied, server not reachable...)
    static areLinksReachable(){
        cy.get("a").each($a => {
            const message = $a.text();
            expect($a, message).to.have.attr("href").not.contain("undefined");
        });
    }

}