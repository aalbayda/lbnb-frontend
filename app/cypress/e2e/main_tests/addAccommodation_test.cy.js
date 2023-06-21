describe('Owner Add Accommodation Test', () => {
    it('Should add an accommodation successfully', () => {
      // Visit Website
      cy.visit('http://localhost:3000');
  
      // Click Log-in Button when not logged in 
      cy.get('button[testID=loginButton]')
        .should('be.visible')
        .click();
  
      // Enter Login Email Credentials Input
      cy.get('input[testID=loginEmail]')
        .should('be.visible')
        .type("russ@owner.com");
  
      // Enter Login Password Input
      cy.get('input[testID=loginPassword]')
        .should('be.visible')
        .type("qwertyuiop");
  
      // Click Login Button
      cy.get('button[testID=signinButton]')
        .should('be.visible')
        .click();

      cy.wait(5000);
    
      // Click Profile Button
      cy.get('[testID=landlordProfile]')
        .should('be.visible')
        .click();

      // Click Add Accommodation Button
      cy.get('[testID=addAccomm]')
        .should('be.visible')
        .first()
        .click({force: true});

      // Input Accommodation Details then Add
      cy.get('input[testID=addAccommName]')
        .should('be.visible')
        .type("Accommodation Test1")
        .get('input[testID=addAccommAddress]')
        .should('be.visible')
        .type("Address Test")
        .get('input[testID=addAccommAmenities]')
        .should('be.visible')
        .type("Amenities Test")
        .get('button[testID=addAccommButton')
        .click();

      cy.wait(2000);

      cy.get('input[testID=addAccommName]')
        .type('{esc}');
    })

    it('Should validate input', () => {
      // Visit Website
      cy.visit('http://localhost:3000');
  
      // Click Log-in Button when not logged in 
      cy.get('button[testID=loginButton]')
        .should('be.visible')
        .click();
  
      // Enter Login Email Credentials Input
      cy.get('input[testID=loginEmail]')
        .should('be.visible')
        .type("russ@owner.com");
  
      // Enter Login Password Input
      cy.get('input[testID=loginPassword]')
        .should('be.visible')
        .type("qwertyuiop");
  
      // Click Login Button
      cy.get('button[testID=signinButton]')
        .should('be.visible')
        .click();

      cy.wait(5000);
    
      // Click Profile Button
      cy.get('[testID=landlordProfile]')
        .should('be.visible')
        .click();

      // Click Add Accommodation Button
      cy.get('[testID=addAccomm]')
        .should('be.visible')
        .first()
        .click({force: true});

      // Immediately click Add Accommodation Button
      cy.get('button[testID=addAccommButton')
        .click()
        .get('input[testID=alertModal]')
        .should('be.visible')
        .type('{esc}');
    })
})