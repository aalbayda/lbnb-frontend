describe('General Functionality Automated Test', () => {
  it('passes', () => {
    // Visit Website
    cy.visit('http://localhost:3000');

    // Enter Search 
    cy.get('input[testID=searchField]').type("Test");

    // Click Search
    cy.get('button[testID=devs]').click();

    // Click Log-in Button when not logged in 
    cy.get('button[testID=login]').click();

    // Enter Login Email Credentials
    cy.get('input[testID=loginEmail]').type("sampleemail1234@email.com");

    // Enter Login Password
    cy.get('input[testID=loginPassword]').type("password1234");

    // Click Create an Account button
    cy.get('button[testID=toggleSignup]').click();

    // Login Signup Modal Back-and-forth Test - Unnecessary
    cy.get('button[testID=toggleLogin]').click();
    cy.get('button[testID=toggleSignup]').click();

    // Enter Signup First Name Input
    cy.get('input[testID=fname]').type("Jonathan");

    // Enter Signup Last Name Input
    cy.get('input[testID=lname]').type("Smith");
 
    // Enter Signup Email Input
    cy.get('input[testID=signupEmail]').type("jonathansmith@email.com");

    // Enter Signup Password Input
    cy.get('input[testID=signupPassword]').type("jonathansmith");

    // Enter Signup Repassword Input
    cy.get('input[testID=signupRepassword]').type("jonathansmith");

    // Click Business Account Checkbox
    cy.get('[testID=business]').click();

    // Click Personal Account Checkbox
    cy.get('[testID=personal]').click();

    // Click Terms and Conditions Checkbox
    cy.get('[testID=terms]').click();
    
    // // Click Signup Button
    // cy.get('[testID=signupButton]').click();

  })
})