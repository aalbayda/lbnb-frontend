// describe('Edit Accommodation Test', () => {
//     it('Should edit an existing accommodation\'s details through an admin account successfully', () => {
//       // Visit Website
//       cy.visit('http://localhost:3000');
  
//       // Click Log-in Button when not logged in 
//       cy.get('button[testID=loginButton]')
//         .should('be.visible')
//         .click();
  
//       // Enter Login Email Credentials Input
//       cy.get('input[testID=loginEmail]')
//         .should('be.visible')
//         .type("john.doe@example.com");
  
//       // Enter Login Password Input
//       cy.get('input[testID=loginPassword]')
//         .should('be.visible')
//         .type("john123");
  
//       // Click Login Button
//       cy.get('button[testID=signinButton]')
//         .should('be.visible')
//         .click();

//       cy.wait(10000);
    
//       // Access admin Panel
//       cy.get('[testID=adminPanel]')
//         .should('be.visible')
//         .click();

//       cy.wait(20000);

//       // Click Owners Tab
//       cy.get('[testID=ownerTab')
//         .should('be.visible')
//         .click();

//       // View first user
//       cy.get('button[testID=viewlandlordButton]')
//         .should('be.visible')
//         .first()
//         .click({force: true});

//       // Click the Edit Button
//       cy.get('button[testID=editAccomRoom]')
//         .should('be.visible')
//         .click();

//       // Type into edit Accommodation Name field
//       cy.get('input[testID=accomName]')
//         .should('be.visible')
//         .type("New Accomm Name");

//       // Type into edit Accommodation Desc field
//       cy.get('input[testID=accomDesc]')
//         .should('be.visible')
//         .type("New Accomm Desc");

//       // Type into edit Accommodation Location field
//       cy.get('input[testID=accomLoc]')
//         .should('be.visible')
//          .type("New Accomm Location");

//       // Type into edit Accommodation Amenities field
//       cy.get('input[testID=accomAmen]')
//         .should('be.visible')
//         .type("New Accomm Amenities");

//       // Type into edit Room Name field
//       cy.get('input[testID=roomName]')
//         .should('be.visible')
//         .type("New Room Name");

//       // Type into edit Room Capacity field
//       cy.get('input[testID=roomCap]')
//         .should('be.visible')
//         .type("6");

//       // Type into edit Room Price field
//       cy.get('input[testID=roomPrice]')
//         .should('be.visible')
//         .type("5000");

//       // Click the Save Button
//       cy.get('button[testID=saveAccomRoom]')
//         .should('be.visible')
//         .click();
//     })  
// })

describe('Delete Accommodation Test', () => {
    it('Should delete an existing accommodation\'s details through an admin account successfully', () => {
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
      cy.get('[testID=accommsTab')
        .should('be.visible')
        .click();

      // View first user
      cy.get('button[testID=deleteAccom]')
        .should('be.visible')
        .first()
        .click({force: true});
        
    })  
})