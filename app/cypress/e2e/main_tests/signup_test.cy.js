describe('User Signup from Homepage Test', () => {
  it('Should sign up a new user and create a new account successfully', () => {
    // Visit Website
    cy.visit('http://localhost:3000');

    // Click Log-in Button when not logged in 
    cy.get('button[testID=loginButton]')
      .should('be.visible')
      .click();

    // Click Signup Button
    cy.get('button[testID=toggleSignup]')
      .should('be.visible')
      .click();

    // Enter Signup First Name and Last Name Input
    cy.get('input[testID=fname]')
      .should('be.visible')
      .type("Fname")
      .get('input[testID=lname]')
      .should('be.visible')
      .type("Lname");
 
    // Enter Signup Email Input
    cy.get('input[testID=signupEmail]')
      .should('be.visible')
      .type("signup@email.com");

    // Enter Signup Password Input
    cy.get('input[testID=signupPassword]')
      .should('be.visible')
      .type("signuppassword");

    // Enter Signup Repassword Input
    cy.get('input[testID=signupRepassword]')
      .should('be.visible')
      .type("signuppassword");

    // Click Business Account then Personal Account Checkbox
    cy.get('[testID=business]')
      .should('be.visible')
      .click()
      .get('[testID=personal]')
      .should('be.visible')
      .click();

    // Click Terms and Conditions Checkbox
    cy.get('[testID=terms]')
      .should('be.visible')
      .click();
    
    // // Click Signup Button -- Uncomment if necessary.
    // cy.get('[testID=signupButton]')
    //   .should('be.visible')
    //   .click();


  })
})