import { convertLength } from "@mui/material/styles/cssUtils";

describe('Accommodation Search Bar Test', () => {
    it('Verify that the search bar is displayed on the home page.', () => {
      // Visit Website
      cy.visit('http://localhost:3000');


    // Click Search Button
    cy.get('input[testID=searchField]')
        .should('be.visible')

        cy.wait(2000);
    })
  })


describe('Accommodation Search No Preference Test', () => {
    it('Verify that the user can view all listings when no filters are applied.', () => {
      // Visit Website
      cy.visit('http://localhost:3000');

      cy.wait(2000);

    // Click Search Button
    cy.get('button[testID=searchButton]')
        .should('be.visible')
        .click();
        cy.wait(2000);
    })
  })


describe('Accommodation Search Filter Test', () => {
    it('Should filter the available accommodations using Accommodation Type, Price, Capacity, and Location successfully', () => {
      // Visit Website
      cy.visit('http://localhost:3000');
    
      cy.wait(10000);

    // Enter Text into Search Field
    cy.get('input[testID=searchField]')
        .should('be.visible')
        .type("Dorm");

    // Click Accommodation Type Dropdown Button
    cy.get('[testID=accomTypeDropdownToggle]')
        .should('be.visible')
        .click();

    // Click Dorm Accommodation Type Filter
    cy.get('[testID=accomTypeDorm]')
        .should('be.visible')
        .click();

    // Click Search Button
    cy.get('button[testID=searchButton]')
        .should('be.visible')
        .click();

    // Clear Search Field and press Search Button

    cy.get('input[testID=searchField]')
        .should('be.visible')
        .clear()
        .get('button[testID=searchButton]')
        .should('be.visible')
        .click();

    cy.wait(2000);

    // Click Accommodation Type Dropdown and Search Bedspace Accommodation Type
    cy.get('[testID=accomTypeDropdownToggle]')
        .should('be.visible')
        .click()
        .get('[testID=accomTypeBedspace]')
        .should('be.visible')
        .click()
        .get('button[testID=searchButton]')
        .should('be.visible')
        .click();

    // Filter Accommodation Price and Search
    cy.get('input[testID=accommFilterPrice]')
        .should('be.visible')
        .type("1200")
        .get('button[testID=searchButton]')
        .should('be.visible')
        .click();
        
    // Clear Accommodation Type and Price Filter and then Filter Accommodation Capacity and Location
    cy.get('input[testID=accommFilterPrice]')
        .should('be.visible')
        .invoke('val', '')
        .get('[testID=accomTypeDropdownToggle]')
        .should('be.visible')
        .click()
        .get('[testID=accomTypeNoPref]')
        .should('be.visible')
        .click()
        .get('input[testID=accommFilterCapacity]')
        .should('be.visible')
        .type("6")
        .get('[testID=accommLocDropdownToggle]')
        .should('be.visible')
        .click()
        .get('[testID=accommLocWithin]')
        .should('be.visible')
        .click()
        .get('button[testID=searchButton]')
        .should('be.visible')
        .click();

        cy.wait(2000);
    })
  })


describe('Name Search Filter Test', () => {
    it('Should filter the available accommodations name successfully', () => {
      // Visit Website
      cy.visit('http://localhost:3000');

      cy.wait(10000);

    // Enter Text into Search Field
    cy.get('input[testID=searchField]')
        .should('be.visible')
        .type("Kael");

    // Click Search Button
    cy.get('button[testID=searchButton]')
        .should('be.visible')
        .click();

    cy.wait(2000);


    })
})  

