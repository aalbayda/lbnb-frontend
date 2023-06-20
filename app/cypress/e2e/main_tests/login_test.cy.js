describe('User Login from Homepage Test', () => {
  it('Should login an existing user account and logout successfully', () => {
    // Visit Website
    cy.visit('http://localhost:3000');

    // Click Log-in Button when not logged in 
    cy.get('button[testID=loginButton]')
      .should('be.visible')
      .click();

    // Enter Login Email Credentials Input
    cy.get('input[testID=loginEmail]')
      .should('be.visible')
      .type("jonathansmith@email.com");

    // Enter Login Password Input
    cy.get('input[testID=loginPassword]')
      .should('be.visible')
      .type("jonathansmith");

    // Click Login Button
    cy.get('button[testID=signinButton]')
      .should('be.visible')
      .click();

    // Wait for 3 seconds before logging out
    cy.wait(3000);
    cy.scrollTo(0,800);
    cy.wait(3000);

    // Click Logout Button
    cy.get('button[testID=logoutButton]')
      .should('be.visible')
      .click();

  })
})