describe('User Login from Homepage Test', () => {
  it('Should login an existing user account successfully', () => {
    // Visit Website
    cy.visit('http://localhost:3000');

    // Click Log-in Button when not logged in 
    cy.get('button[testID=login]').click();

    // Enter Login Email Credentials Input
    cy.get('input[testID=loginEmail]').type("jonathansmith@email.com");

    // Enter Login Password Input
    cy.get('input[testID=loginPassword]').type("jonathansmith");

    // Click Login Button
    cy.get('button[testID=loginButton]').click();

  })
})