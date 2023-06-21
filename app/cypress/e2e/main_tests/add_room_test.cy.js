describe('Owner Add Room Test', () => {
    it('Should add a room to an accommodation successfully', () => {
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

      cy.wait(30000);

      cy.get('[testID=addRoom]')
        .should('be.visible')
        .first()
        .click({force: true});
    })
  })