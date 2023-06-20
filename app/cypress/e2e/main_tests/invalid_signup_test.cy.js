describe('User Signup from Homepage Test', () => {
  it('Should sign up a new user and create a new account unsuccessfuly', () => {
    // Visit Website
    cy.visit('http://localhost:3000');

    // Click Log-in Button when not logged in 
    cy.get('button[testID=loginButton]').click();

    // Click Signup Button
    cy.get('button[testID=toggleSignup]').click();

    // Enter Signup First Name and Last Name Input
    cy.get('input[testID=fname]')
      .type("Fname")
      .get('input[testID=lname]')
      .type("Lname");
 
    // Enter Signup Email Input
    cy.get('input[testID=signupEmail]').type("signup@email.com");

    // Click Business Account then Personal Account Checkbox
    cy.get('[testID=business]')
      .click()
      .get('[testID=personal]')
      .click();

    // Click Terms and Conditions Checkbox
    cy.get('[testID=terms]').click();
    
    // Click Signup Button -- Uncomment if necessary.
    cy.get('[testID=signupButton]').click();

  })
})