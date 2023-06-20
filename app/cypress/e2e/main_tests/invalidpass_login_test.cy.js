describe('User Login from Homepage Test', () => {
  it('Should login an existing user account unsuccessfully due to an invalid password', () => {
    // Visit Website
    cy.visit('http://localhost:3000');

    // Click Log-in Button when not logged in 
    cy.get('button[testID=loginButton]').click();

    // Enter Login Email Credentials Input
    cy.get('input[testID=loginEmail]').type("david.johnson@example.com");

    // Enter Login Password Input
    cy.get('input[testID=loginPassword]').type("wrongPassword");

    // Click Login Button
    cy.get('button[testID=signinButton]').click();

  })
})