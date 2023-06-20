describe('User Login from Homepage Test', () => {
  it('Should login an existing user account and logout successfully', () => {
    // Visit Website
    cy.visit('http://localhost:3000');

    // Click Log-in Button when not logged in 
    cy.get('button[testID=loginButton]').click();

    // Enter Login Email Credentials Input
    cy.get('input[testID=loginEmail]').type("jonathansmith@email.com");

    // Enter Login Password Input
    cy.get('input[testID=loginPassword]').type("jonathansmith");

    // Click Login Button
    cy.get('button[testID=signinButton]').click();

    // Wait for 3 seconds before logging out
    cy.wait(3000);
    cy.scrollTo(0,800);
    cy.wait(3000);

    // Click Logout Button
    cy.get('button[testID=logoutButton]').click();

  })
})