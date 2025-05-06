/// <reference types="cypress"/>

describe('Cypress Advanced Actions', () => {
    beforeEach(() => {
        cy.contains(".card", "Actions").click();
    });

    it('Type and clear actions', () => {

        let query = 'Apple';

        cy.get("#input_box")
        //.should("exist") is useless since we have many other explicit assertions
        .and("be.visible")
        .and("be.enabled")
        .and("have.attr", "placeholder", "Enter your message...")
        .and("have.attr", "value", "")
        .type(query)
        .should("have.attr", "value", query)
        .clear()
        .should("have.attr", "value", "")
        .and("be.empty")

        cy.get("#input_box").then(($inputElement) => {
            const placeholder = $inputElement.attr("placeholder");
            expect(placeholder).to.include("Enter");

            $inputElement.val("TechGlobal")
            expect($inputElement.val()).eq("techGlobal");
        }); // selector in cypress is chainable
    })
})