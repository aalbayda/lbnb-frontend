import { convertLength } from "@mui/material/styles/cssUtils";

describe('Generate Summary Test', () => {
    it('Verify that the user should be able to view and/or download the list of filtered accommodations based on their query.', () => {
      // Visit Website
      cy.visit('http://localhost:3000');

      cy.wait(2000);

    // Click Search Button
    cy.get('button[testID=searchButton]')
        .should('be.visible')
        .click();
    
    cy.get('button[testID=searchButton]')
    .should('be.visible')
    .click();     
    cy.wait(2000);

    // cy.get('button[testID=generateSummary]')
    // .should('be.visible')
    // .click();
    
    cy.wait(2000);


    })
})  
