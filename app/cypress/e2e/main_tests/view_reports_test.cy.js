describe('Admin View Reports Test', () => {
    it('Should display all report details through an admin account successfully', () => {
      // Visit Website
      cy.visit('http://localhost:3000');
  
      // Click Log-in Button when not logged in 
      cy.get('button[testID=loginButton]')
        .should('be.visible')
        .click();
  
      // Enter Login Email Credentials Input
      cy.get('input[testID=loginEmail]')
        .should('be.visible')
        .type("john.doe@example.com");
  
      // Enter Login Password Input
      cy.get('input[testID=loginPassword]')
        .should('be.visible')
        .type("john123");
  
      // Click Login Button
      cy.get('button[testID=signinButton]')
        .should('be.visible')
        .click();

      cy.wait(10000);
    
      // Access admin Panel
      cy.get('[testID=adminPanel]')
        .should('be.visible')
        .click();

      cy.wait(20000);

      // Click Owners Tab
      cy.get('[testID=reportsTab')
        .should('be.visible')
        .click();
    })  
})