import { convertLength } from "@mui/material/styles/cssUtils";

describe('Homepage Carousel Exists Test', () => {
    it('Should scroll the homepage and display the carousels as well as check if they exist', () => {
      // Visit Website
      cy.visit('http://localhost:3000');

    // Check if in homepage
    cy.get('[testID=homepage]')
        .should('be.visible');

    cy.scrollTo(0,700);
    
    // Check if Carousel Containers Exist
    cy.get('[testID="apartmentCarousel"]')
        .should('be.visible');

    cy.wait(2000);  
    cy.scrollTo(0,1400);    

    cy.get('[testID="dormCarousel"]')
    .should('be.visible');

    cy.wait(2000);  
    cy.scrollTo(0,2100);

    cy.get('[testID="hotelCarousel"]')
        .should('be.visible')
    })
  })

describe('Homepage Carousel Buttons Exist', () => {
    it('Should scroll the homepage and display the carousels as well as check if they exist', () => {
    // Visit Website
    cy.visit('http://localhost:3000');

    // Check if in homepage
    cy.get('[testID=homepage]')
        .should('be.visible');

    // Check if Apartment Carousel Containers Exist and if Buttons exist
    cy.get('[testID="apartmentCarousel"]')
        .should('be.visible')
        .get('[testID="apartmentNext"')
        .should('be.visible')
        .click()

    cy.wait(2000);
    
    cy.get('[testID="apartmentPrev"')
        .should('be.visible')
        .click();

    cy.wait(2000);  

    cy.get('[testID="dormCarousel"]')
        .should('be.visible')
        .get('[testID="dormNext"')
        .should('be.visible')
        .click()

    cy.wait(2000);
    
    cy.get('[testID="dormPrev"')
        .should('be.visible')
        .click();

    cy.wait(2000);   

    cy.get('[testID="hotelCarousel"]')
        .should('be.visible')
        .get('[testID="hotelNext"')
        .should('be.visible')
        .click()

    cy.wait(2000);
    
    cy.get('[testID="hotelPrev"')
        .should('be.visible')
        .click();

    })
})