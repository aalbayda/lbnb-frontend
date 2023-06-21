describe('Message Test', () => {
    it('Should open the message window', () => {
      // Visit Website
      cy.visit('http://localhost:3000');
  
      // Click Log-in Button when not logged in 
      cy.get('button[testID=loginButton]')
        .should('be.visible')
        .click();
  
      // Enter Login Email Credentials Input
      cy.get('input[testID=loginEmail]')
        .should('be.visible')
        .type("testing@test.com");
  
      // Enter Login Password Input
      cy.get('input[testID=loginPassword]')
        .should('be.visible')
        .type("testing123");
  
      // Click Login Button
      cy.get('button[testID=signinButton]')
        .should('be.visible')
        .click();

      cy.wait(10000);

      // View an accommodation
      cy.get('button[testID=apartmentView]')
        .should('be.visible')
        .first()
        .click();

      cy.wait(10000);

      // Click Chat button
      cy.get('button[testID=chatButton]')
        .should('be.visible')
        .click();


    })  
})