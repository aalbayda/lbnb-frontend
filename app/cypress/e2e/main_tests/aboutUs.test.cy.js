import { convertLength } from "@mui/material/styles/cssUtils";

describe('About Us', () => {
    it('Verify that the AboutUs Page could be accessed.', () => {
    // Visit Website
      cy.visit('http://localhost:3000/devPage');

    cy.wait(3000);   
    })
  })