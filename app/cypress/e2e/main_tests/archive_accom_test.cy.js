describe('Owner Archive Room Test', () => {
    it('Should archive a room to an accommodation successfully', () => {
      // Visit Website
      cy.visit('http://localhost:3000');
  
      // Click Log-in Button when not logged in 
      cy.get('button[testID=loginButton]')
        .should('be.visible')
        .click();
  
      // Enter Login Email Credentials Input
      cy.get('input[testID=loginEmail]')
        .should('be.visible')
        .type("kael2@example.com");
  
      // Enter Login Password Input
      cy.get('input[testID=loginPassword]')
        .should('be.visible')
        .type("kael12345");
  
      // Click Login Button
      cy.get('button[testID=signinButton]')
        .should('be.visible')
        .click();

      cy.wait(10000);
    
      cy.get('[testID=landlordProfile]')
        .should('be.visible')
        .click();

      cy.wait(50000);

      cy.get('[testID=archiveButton]')
        .should('be.visible')
        .first()
        .click({force: true});

    })  
})