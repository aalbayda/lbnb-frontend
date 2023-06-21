import { convertLength } from "@mui/material/styles/cssUtils";

describe('Write Review Test', () => {
    it('Verify that a registered user can leave a review on an accommodation..', () => {
    // Visit Website
      cy.visit('http://localhost:3000');

      cy.wait(10000);
    // // Click Log-in Button when not logged in 
    // cy.get('button[testID=loginButton]')
    //   .should('be.visible')
    //   .click();

    // // Enter Login Email Credentials Input
    // cy.get('input[testID=loginEmail]')
    //   .should('be.visible')
    //   .type("russ@owner.com");

    // // Enter Login Password Input
    // cy.get('input[testID=loginPassword]')
    //   .should('be.visible')
    //   .type("qwertyuiop");

    // // Click Login Button
    // cy.get('button[testID=signinButton]')
    //   .should('be.visible')
    //   .click();

    // cy.wait(20000);
    
    // cy.get('button[testID=landlordProfile]')
    //   .should('be.visible')
    //   .click();
    
    // cy.wait(10000);

    cy.get('button[testID=viewMore]')
    .should('be.visible')
    .first()
    .click({force:true});

    cy.wait(3000);   
    })
  })