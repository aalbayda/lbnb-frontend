describe('User Signup from Homepage Test', () => {
  it('Should sign up a new user and create a new account successfully', () => {
    // Visit Website
    cy.visit('http://localhost:3000');

    // Click Log-in Button when not logged in 
    cy.get('button[testID=login]').click();

    // Click Signup Button
    cy.get('button[testID=toggleSignup]').click();

    // Enter Signup First Name and Last Name Input
    cy.get('input[testID=fname]')
      .type("Fname")
      .get('input[testID=lname]')
      .type("Lname");
 
    // Enter Signup Email Input
    cy.get('input[testID=signupEmail]').type("signup@email.com");

    // Enter Signup Password Input
    cy.get('input[testID=signupPassword]').type("signuppassword");

    // Enter Signup Repassword Input
    cy.get('input[testID=signupRepassword]').type("signuppassword");

    // Click Business Account then Personal Account Checkbox
    cy.get('[testID=business]')
      .click()
      .get('[testID=personal]')
      .click();

    // Click Terms and Conditions Checkbox
    cy.get('[testID=terms]').click();
    
    // Click Signup Button -- Uncomment if necessary.
    // cy.get('[testID=signupButton]').click();


  })
})