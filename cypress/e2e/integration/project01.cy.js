/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/frontend/form-elements')
    })
    

describe('Validate the Contact Us information', () => {

it('Validate the heading is Contact Us', () => {
cy.get('.is-size-3')
.should('have.text', 'Contact Us');
})

it('Validate the address', () => {
    cy.get('#address')
    .should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')
})

it('Validate the email', () => {
    cy.get('#email')
    .should('have.text', 'info@techglobalschool.com')
})

it('Validate the phone number', () => {
    cy.get('#phone-number')
    .should('have.text', '(224) 580-2150')
})
})



describe('Validate the Full name input box', () => {

it('Validate Full name input box, validate its required', () => {
    cy.get('form').find('input[placeholder="Enter your full name"]')
.should('be.empty')

    cy.get('.button is-link').click()
})

it('Validate label is "Full name"', () => {
    cy.contains('label', 'Full name')
    .should('be.visible')
})
})



describe('Validate the Gender radio button', () => {
  
it('Validate label is "Gender *"', () => {
    cy.contains('label', 'Gender *')
    .should('be.visible')
})

it('Validate Gender is required', () => {

})

it('Validate options are "Female", "Male" and "Prefer not to disclose"', () => {

})

it('Validate options are clickable and not selected', () => {
    
})
})
