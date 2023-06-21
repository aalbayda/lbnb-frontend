import { convertLength } from "@mui/material/styles/cssUtils";

describe('View More Test', () => {
    it('Verify that a  user view more information on an accommodation..', () => {
    // Visit Website
      cy.visit('http://localhost:3000');

      cy.wait(10000);

    cy.get('button[testID=viewMore]')
    .should('be.visible')
    .first()
    .click({force:true});

    cy.wait(3000);   
    })
  })