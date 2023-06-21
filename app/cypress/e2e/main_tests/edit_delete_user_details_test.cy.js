describe('Edit User Test', () => {
    it('Should edit an existing user\'s details through an admin account successfully', () => {
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
    
      cy.get('[testID=adminPanel]')
        .should('be.visible')
        .click();

      cy.wait(20000);

      // View first user
      cy.get('button[testID=viewuserButton]')
        .should('be.visible')
        .first()
        .click({force: true});

      // Click the Save Button
      cy.get('button[testID=editUser]')
        .should('be.visible')
        .click();

      // Type into edit user name field
      cy.get('input[testID=edituserName]')
        .should('be.visible')
        .type("NewJohn NewDoe");

      // Type into edit user email field
      cy.get('input[testID=edituserEmail]')
        .should('be.visible')
        .type("student1new@example.com");

      // Type into edit user password field
      cy.get('input[testID=edituserPassword]')
        .should('be.visible')
        .type("newPassword");

      // Click the Save Button
      cy.get('button[testID=editSave]')
        .should('be.visible')
        .click();
    })  
})

describe('Delete User Test', () => {
  it('Should delete an existing user\'s details through an admin account successfully', () => {
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
  
    cy.get('[testID=adminPanel]')
      .should('be.visible')
      .click();

    cy.wait(20000);

    // View first user
    cy.get('button[testID=deleteuserButton]')
      .should('be.visible')
      .first()
      .click({force: true});
  })  
})