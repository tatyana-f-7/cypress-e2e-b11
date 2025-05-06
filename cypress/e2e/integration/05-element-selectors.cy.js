/// <reference types="cypress"/>

/*
TEST CASE: Validate Register Button
Go to https://www.techglobal-training.com/frontend/html-elements
Click on "Register" button
Validate "You clicked on “Register”" is visible

TEST CASE: Validate Headings Section
Go to https://www.techglobal-training.com/frontend/html-elements
Validate "Programming Languages" heading is visible
Validate "Automation Tools" heading is visible
*/

describe("Cypress Selectors", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend/html-elements");
    });
  
    it("Validate Register Button", () => {
      cy.get("#register_button")
        .should("be.visible")
        .and("be.enabled")
        .and("have.text", "Register")
        .click();
  
      cy.get(".mt-1")
        .should("be.visible")
        .and("have.text", "You clicked on “Register”");
  
      cy.contains('You clicked on “Register”').should('be.visible');
    });
  
    it("Validate Headings Section", () => {
      cy.get("#languages_heading")
        .should("be.visible")
        .and("have.text", "Programming Languages");
  
      cy.get("#tools_heading")
        .should("be.visible")
        .and("have.text", "Automation Tools");
    });

    it('Understanding CSS Syntax - Locating using tags', () => {

      cy.get('button')

      cy.get('h3')

      cy.get('li')

      cy.get('input')
    })

    it('Understanding CSS Syntax - Locating using class and ID', () => {

      cy.get('#checkbox-button-group')

      cy.get('.checkbox')
    })

    it('Understanding CSS Syntax - Locating web elements using multiple selectors', () => {

      cy.get('label.checkbox.is-inline')      
    })

    it('Understanding CSS Syntax - Locating child', () => {

      cy.get('label.checkbox.is-inline')      
    })
    cy.get('che')
  });

cy.visit('https://www.techglobal-training.com/frontend/html-elements');
cy.get('#text_input1').should('be.visible');
cy.get('#facebook_link').should('be.visible');

it('Test Case', () => {

  /**
   * Navigate to "https://www.techglobal-training.com/frontend/dynamic-elements"
   * Locate the below boxes is displayed
   * Box 1
   * Box 2
   */

  cy.visit('https://www.techglobal-training.com/frontend/dynamic-elements');
  cy.get('[id="box_1_2cdff0"]');
  cy.get('[id="box_2_29e656"]');
});


cy.get('#apple_check')
.parent('#checkbox-button-group')
.next()
.find('div')
.children()
.find('input')
.parent()
.parent()
.parent()
.prev()