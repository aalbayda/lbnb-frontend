describe('User Login from Homepage Test', () => {
  it('Verify that a user cannot login with invalid credentials', () => {
    // Visit Website
    cy.visit('http://localhost:3000');

    // Click Log-in Button when not logged in 
    cy.get('button[testID=loginButton]')
      .should('be.visible')
      .click();

    // Enter Login Email Credentials Input
    cy.get('input[testID=loginEmail]')
      .should('be.visible')
      .type("david.johnson@example.com");

    // Enter Login Password Input
    cy.get('input[testID=loginPassword]')
      .should('be.visible')
      .type("wrongPassword");

    // Click Login Button
    cy.get('button[testID=signinButton]')
      .should('be.visible')
      .click();

  })
})