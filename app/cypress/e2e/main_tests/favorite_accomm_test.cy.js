import { convertLength } from "@mui/material/styles/cssUtils";

describe('Favorite Accommodation Test', () => {
    it('Verify that a registered user can successfully add an accommodation to their favorite list.', () => {
  // Visit Website
  cy.visit('http://localhost:3000');
  
    cy.wait(10000);
  // Click Log-in Button when not logged in 
  cy.get('button[testID=loginButton]')
    .should('be.visible')
    .click();
  
  // Enter Login Email Credentials Input
  cy.get('input[testID=loginEmail]')
    .should('be.visible')
    .type("sarah.jones@example.com");
  
  // Enter Login Password Input
  cy.get('input[testID=loginPassword]')
    .should('be.visible')
    .type("sarah123");
  
  // Click Login Button
  cy.get('button[testID=signinButton]')
    .should('be.visible')
    .click();
  
  cy.wait(20000);
  
  cy.get('button[testID=viewMore]')
  .should('be.visible')
  .first()
  .click({force:true});
  
  cy.wait(5000);

  
  cy.get('button[testID=favoriteButton]')
    .should('be.visible')
    .click();
  
  cy.wait(3000);

  cy.get('[testID=userProfile]')
  .should('be.visible')
  .click();

  cy.wait(3000);    
    })
  })

describe('Favorite Accommodation Test', () => {
it('Verify that the user can remove an accommodation from their favorite list.', () => {
// // Visit Website
cy.visit('http://localhost:3000');

cy.wait(10000);
// Click Log-in Button when not logged in 
cy.get('button[testID=loginButton]')
.should('be.visible')
.click();

// Enter Login Email Credentials Input
cy.get('input[testID=loginEmail]')
.should('be.visible')
.type("sarah.jones@example.com");

// Enter Login Password Input
cy.get('input[testID=loginPassword]')
.should('be.visible')
.type("sarah123");

// Click Login Button
cy.get('button[testID=signinButton]')
.should('be.visible')
.click();

cy.wait(20000);

cy.get('button[testID=viewMore]')
.should('be.visible')
.first()
.click({force:true});

cy.wait(5000);

cy.get('button[testID=favoriteButton]')
.should('be.visible')
.click();

cy.wait(3000);
 
cy.get('[testID=userProfile]')
.should('be.visible')
.click();

cy.wait(3000);    
})
}) 