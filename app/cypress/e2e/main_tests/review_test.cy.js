import { convertLength } from "@mui/material/styles/cssUtils";

describe('Invalid Write Review Test', () => {
    it('Verify that an owner cannot leave a review on their own accommodation.', () => {
    // Visit Website
      cy.visit('http://localhost:3000');

      cy.wait(10000);
    // Click Log-in Button when not logged in 
    cy.get('button[testID=loginButton]')
      .should('be.visible')
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

    cy.wait(20000);
    
    // cy.get('[testID=landlordProfile]')
    //   .should('be.visible')
    //   .click();
    
    // cy.wait(10000);

    // cy.get('button[testID=viewMore]')
    // .should('be.visible')
    // .first()
    // .click({force:true});

    // cy.wait(5000);

    // cy.get('input[testID=commenField]')
    // .should('be.visible')
    // .type("This is a review");

    // cy.get('button[testID=submitReview]')
    //   .should('be.visible')
    //   .click();

    cy.wait(3000);   
    })
  })

describe('Invalid Write Review Test', () => {
  it('Verify that an unregistered user cannot leave a review.', () => {
  // Visit Website
    cy.visit('http://localhost:3000');

  
  // cy.wait(10000);

  // cy.get('button[testID=viewMore]')
  // .should('be.visible')
  // .first()
  // .click({force:true});

  // cy.wait(5000);

  // cy.get('input[testID=commenField]')
  // .should('be.visible')
  // .type("This is a review");

  // cy.get('button[testID=submitReview]')
  //   .should('be.visible')
  //   .click();

  cy.wait(3000);   
  })
})

describe('Valid Write Review Test', () => {
  it('Verify that a registered user can leave a review on an accommodation', () => {
// Visit Website
cy.visit('http://localhost:3000');

  cy.wait(10000);
// Click Log-in Button when not logged in 
cy.get('button[testID=loginButton]')
  .should('be.visible')
//   .click();

// // Enter Login Email Credentials Input
// cy.get('input[testID=loginEmail]')
//   .should('be.visible')
//   .type("sarah.jones@example.com");

// // Enter Login Password Input
// cy.get('input[testID=loginPassword]')
//   .should('be.visible')
//   .type("sarah123");

// // Click Login Button
// cy.get('button[testID=signinButton]')
//   .should('be.visible')
//   .click();

// cy.wait(20000);

// cy.get('button[testID=viewMore]')
// .should('be.visible')
// .first()
// .click({force:true});

// cy.wait(5000);

// cy.get('input[testID=commenField]')
// .should('be.visible')
// .type("This is a review");

// cy.get('button[testID=submitReview]')
//   .should('be.visible')
//   .click();

// cy.wait(3000);    
  })
})

