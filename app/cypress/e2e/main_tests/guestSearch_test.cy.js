import { convertLength } from "@mui/material/styles/cssUtils";

describe('Guest Accommodation Search Filter Test', () => {
    it('Should filter the available accommodations using Accommodation Type, Price, Capacity, and Location through a Guest Account successfully', () => {
      // Visit Website
      cy.visit('http://localhost:3000');

    // Enter Text into Search Field
    cy.get('input[testID=searchField]').type("Dorm");

    // Click Accommodation Type Dropdown Button
    cy.get('[testID=accomTypeDropdownToggle]').click();

    // Click Dorm Accommodation Type Filter
    cy.get('[testID=accomTypeDorm]').click();

    // Click Search Button
    cy.get('button[testID=searchButton]').click();

    // Clear Search Field and press Search Button
    cy.get('input[testID=searchField]')
        .clear()
        .get('button[testID=searchButton]')
        .click();

    cy.wait(2000);

    // Click Accommodation Type Dropdown and Search Bedspace Accommodation Type
    cy.get('[testID=accomTypeDropdownToggle]')
        .click()
        .get('[testID=accomTypeBedspace]')
        .click()
        .get('button[testID=searchButton]')
        .click();

    // Filter Accommodation Price and Search
    cy.get('input[testID=accommFilterPrice]')
        .type("1200")
        .get('button[testID=searchButton]')
        .click();
        
    // Clear Accommodation Type and Price Filter and then Filter Accommodation Capacity and Location
        cy.get('input[testID=accommFilterPrice]')
        .invoke('val', '')
        .get('[testID=accomTypeDropdownToggle]')
        .click()
        .get('[testID=accomTypeNoPref]')
        .click()
        .get('input[testID=accommFilterCapacity]')
        .type("6")
        .get('[testID=accommLocDropdownToggle')
        .click()
        .get('[testID=accommLocWithin')
        .click()
        .get('button[testID=searchButton]')
        .click();
    })
  })