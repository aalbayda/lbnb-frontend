import { convertLength } from "@mui/material/styles/cssUtils";

describe('Guest Accommodation Search Filter Test', () => {
    it('Should filter the available accommodations using Accommodation Type, Price, Capacity, and Location through a Guest Account successfully', () => {
      // Visit Website
      cy.visit('http://localhost:3000');

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
    })
  })