/// <reference types="cypress"/>

import Project03Page from "../../pages/Project03Page";

describe('Project03', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/booking');
    });

const project03Page = new Project03Page();

/*
Navigate to https://techglobal-training.com/frontend/booking
Validate that the “One way” radio button is displayed enabled and selected by default
Validate that the “Round trip” radio button is displayed enabled and not selected by default
Validate that the “Cabin Class” label and dropdown are displayed
Validate that the “From” label and dropdown are displayed
Validate that the “To” label and dropdown are displayed
Validate that the “Depart” label and date picker is displayed
Validate that the “Return” label and date picker is displayed and disabled
Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
Validate that the “Passenger 1” category label and dropdown are displayed and “Adult (16-64)” is the default
Validate that the “BOOK” button is displayed and enabled
*/

it('TC_01 - Validate the default Book your trip form', () => {

    project03Page.getTripTypeRadioButtonsByLabel('One way')
    .should('be.visible')
    .abd('be.enabled')
    .and('be.checked')

    project03Page.getTripTypeRadioButtonsByLabel('Round trip')
    .should('be.visible')
    .and('be.enabled')
    .and('not.be.checked')

    project03Page.getAllLabels().each(($el) => {
        cy.wrap($el).should('be.visible')
    })

    project03Page.getAllDropdowns().each(($el) => {
        cy.wrap($el).should('be.visible')
    })

    project03Page.getAllDatePickers().each(($el) => {
        cy.wrap($el).should('be.visible')
    })

    project03Page.getAllDatePickers().last().shouls('be.disabled')

    project03Page.getDropdownByLabel('Number of passengers').should('have.value', '1')

    project03Page.getDropdownByLabel('Passenger 1').should('have.value', 'Adult (16-64)')

    project03Page.getBookButton().should('be.visible').and('be.enabled')
});

// Bilal's Solution

/*
it("Test Case 01 - Validate the default Book your trip form", () => {
        project03Page.getTripTypeRadioBtnByLabel('One way').should('be.visible').and('be.enabled').and('be.checked')
        project03Page.getTripTypeRadioBtnByLabel('Round trip').should('be.visible').and('be.enabled').and('not.be.checked')

        project03Page.getAllLabels().each(ele =>{
            cy.wrap(ele).should('be.visible')
        })

        project03Page.getAllDropdowns().each(ele =>{
            cy.wrap(ele).should('be.visible')
        })

        project03Page.getAllDatepickers().each(ele =>{
            cy.wrap(ele).should('be.visible')
        })

        project03Page.getAllDatepickers().last().should('be.disabled')

        project03Page.getDropdownByLabel('Number of passengers').should('have.value', '1')
        project03Page.getDropdownByLabel('Passenger 1').should('have.value', 'Adult (16-64)')

        project03Page.getBookBtn().should('be.visible').and('be.enabled')
    });
    */

/*
Navigate to https://techglobal-training.com/frontend/booking
Click on the “Round trip” radio button and validate it is selected
Validate that the “One way” radio button is not selected
Validate that the “Cabin Class” label and dropdown are displayed
Validate that the “From” label and dropdown are displayed
Validate that the “To” label and dropdown are displayed
Validate that the “Depart” label and date picker is displayed
Validate that the “Return” label and date picker is displayed
Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
Validate that the “Passenger 1” label and dropdown are displayed and “Adult (16-64)” is the default
Validate that the “BOOK” button is displayed and enabled
*/

it('TC_02 - Validate the Book your trip form when Round trip is selected', () => {
    project03Page.getTripTypeRadioButtonsByLabel('Round trip')
    .check()
    .should('be.visible')
    .and('be.checked')

    project03Page.getTripTypeRadioButtonsByLabel('One way')
    .should('be.visible')
    .and('not.be.checked')

    project03Page.getAllLabels().each(($el) => {
        cy.wrap($el).should('be.visible')
    })

    project03Page.getAllDropdowns().each(($el) => {
        cy.wrap($el).should('be.visible')
    })

    project03Page.getAllDatePickers().each(($el) => {
        cy.wrap($el).should('be.visible')
    })

    project03Page.getDropdownByLabel('Number of passengers').should('have.value', '1')

    project03Page.getDropdownByLabel('Passenger 1').should('have value', 'Adult (16-64)')

    project03Page.getBookButton().should('be.visible').and('be.enabled')
});

// Bilal's Solution
/*
it("Test Case 02 - Validate the Book your trip form when Round trip is selected", () => {
   project03Page.getTripTypeRadioBtnByLabel('Round trip')
   .check()
   .should('be.checked')

   project03Page.getTripTypeRadioBtnByLabel('One way')
   .should('not.be.checked')
});
*/

/*
Navigate to https://techglobal-training.com/frontend/booking
Select the “One way” radio button
Select “Business” for the “Cabin Class” dropdown
Select “Illinois” for the “From” dropdown
Select “Florida” for the “To” dropdown
Select the next week for the ”Depart”
Select “1” for the “Number of passengers” dropdown
Select “Senior (65+)” for the Passenger 1 dropdown
Click on the “BOOK” button
Validate the booking information displayed below
DEPART
IL to FL
{dynamic date}
Number of passengers: 1
Passenger 1: Senior (65+)
Cabin Class: Business
*/

it('TC_03 - Validate the booking for 1 passenger and one way', () => {
    project03Page.selectTripType('One way')

    const dropdownOptions = {
        cabinClass: 'Business',
        from: 'Illinois',
        to: 'Florida',
        numberOfPassengers: '1',
        passengerOne: 'Senior (65+)'
    }

    project03Page.fillDropdowns(dropdownOptions)

    const futureDateStr = project03Page.getFutureDateByDays(7)

    project03Page.getDatePickerByLabel('Depart')
    .clear()
    .type(`${futureDateStr} {enter}`)

    project03Page.clickBookButton()

    const futureDateBookingFormat = project03Page.getFormattedDateForBooking(futureDateStr)

    const departureAbbreviation = project03Page.getAbbreviationForState(dropdownOptions.from)
    const destinationAbbreviation = project03Page.getAbbreviationForState(dropdownOptions.to)

    const inf = ['DEPART', `${departureAbbreviation} to ${destinationAbbreviation}`, futureDateBookingFormat]

    project03Page.getTravelInfoDepart().each(($el, index) => {
    cy.wrap($el).should('have.text', inf[index])
    })

    const expectedTexts = project03Page.formatDropdownOptionsToBookingText(dropdownOptions)

    project03Page.getPassengerInfo().each(($el, index) => {
        cy.wrap($el).should('have.text', expectedTexts[index]);
    });
});

// Bilal's Solution
/*
it("Test Case 03 – Validate the Book your trip form when Round trip is selected", () => {
    const options = {
        cabinClass: 'Business',
        from: 'Illinois',
        to: 'Florida',
        numberOfPassengers: '1',
        passerger1: 'Senior (65+)'
    }
    const departDate = project03Page.getFutureDate(7); 

    project03Page.fillTripTypeRadioBtn('One way')
    project03Page.fillBookingDropdowns(options)

    project03Page.getDatePickerByLabel('Depart').clear().type(`${project03Page.formatDateByAmericanDate(departDate)}{enter}`)

    project03Page.getBookBtn().click()


    const inf = ['DEPART', `${project03Page.getAbbreviationForState(options.from)} to ${project03Page.getAbbreviationForState(options.to)}`, project03Page.formatDateToShortDate(departDate)];

    project03Page.getTravelInfoDepart().each(($el, index) => {
        cy.wrap($el).should('have.text', inf[index]);
      });
});
*/

/*
Navigate to https://techglobal-training.com/frontend/booking
Select the “Round trip” radio button
Select “First” for the “Cabin Class” dropdown
Select “California” for the “From” dropdown
Select “Illinois” for the “To” dropdown
Select the next week for the ”Depart”
Select the next month for the “Return”
Select “1” for the “Number of passengers” dropdown
Select “Adult (16-64)” for the Passenger 1 dropdown
Click on the “BOOK” button
Validate the booking information displayed below
DEPART
CA to IL
{dynamic date}
Number of passengers: 1
Passenger 1: Adult (16-64)
Cabin Class: First


RETURN
IL to CA
{dynamic date}
*/

it('TC_04 - validate the booking for 1 passenger and round trip', () => {
    project03Page.selectTripType('Round trip')

    const dropdownOptions = {
        cabinClass: 'First',
        from: 'California',
        to: 'Illinois',
        numberOfPassengers: '1',
        passengerOne: 'Adult (16-64)'
    };

    project03Page.fillDropdowns(dropdownOptions)

    const departDate = project03Page.getFutureDateByDays(7)
    const returnDate = project03Page.getAbbreviationForState(30)

    project03Page.getDatePickerByLabel('Depart')
    .clear()
    .type(`${departDate} {enter}`)

    project03Page.getDatePickerByLabel('Return')
    .clear()
    .type(`${returnDate} {enter}`)

    project03Page.clickBookButton()

    const departureAbbreviation = project03Page.getAbbreviationForState(
        dropdownOptions.from
    );

    const destinationAbbreviation = project03Page.getAbbreviationForState(
        dropdownOptions.to
    );

    const departBookingFormat = project03Page.getFormattedDateForBooking(departDate);

    const returnDateBookingFormat = project03Page.getFormattedDateForBooking(returnDate);

    const departInf = [
        'DEPART',
        `${departureAbbreviation} to ${destinationAbbreviation}`,
        departBookingFormat
    ];

    project03Page.getTravelInfoDepart().each(($el, index) => {
        cy.wrap($el).should('have.text', departInf[index])
    });

    const returnInf = [
    'RETURN',
    `${destinationAbbreviation} to ${departureAbbreviation}`,
    returnDateBookingFormat
    ];

    project03Page.getTravelInfoReturn().each(($el, index) => {
        cy.wrap($el).should('have.text', returnInf[index])
    });

    const expectedTexts = project03Page.formatDropdownOptionsToBookingText(dropdownOptions);

    project03Page.getPassengerInfo().each(($el, index) => {
        cy.wrap($el).should('have.text', expectedTexts[index]);
    });
});

/*
Navigate to https://techglobal-training.com/frontend/booking
Select the “One way” radio button
Select “Premium Economy” for the “Cabin Class” dropdown
Select “New York” for the “From” dropdown
Select “Texas” for the “To” dropdown
Select the next day for the ”Depart”
Select “2” for the “Number of passengers” dropdown
Select “Adult (16-64)” for the Passenger 1 dropdown
Select “Child (2-11)” for the Passenger 2 dropdown
Click on the “BOOK” button
Validate the booking information displayed below
DEPART
NY to TX
{dynamic date}
Number of passengers: 2
Passenger 1: Adult (16-64)
Passenger 2: Child (2-11)
Cabin Class: Premium Economy
*/

it('TC_05 - Validate the booking for 2 passengers and one way', () => {
    project03Page.selectTripType('One way')

    const dropdownOptions = {
        cabinClass: 'Premium Economy',
        from: 'New York',
        to: 'Texas',
        numberOfPassengers: '2',
        passengerOne: 'Adult (16-64)',
        passengerTwo: 'Child (2-11)'
    };

    project03Page.fillDropdowns(dropdownOptions)

    const departDate = project03Page.getFutureDateByDays(1)

    project03Page.getDatePickerByLabel('Depart')
    .clear()
    .type(`${departDate} {enter}`)

    project03Page.clickBookButton()

    const departureAbbreviation = project03Page.getAbbreviationForState(dropdownOptions.from)

    const destinationAbbreviation = project03Page.getAbbreviationForState(dropdownOptions.to)

    const departBookingFormat = project03Page.getFormattedDateForBooking(departDate)

    const departInf = [
        'DEPART',
        `${departureAbbreviation} to ${destinationAbbreviation}`,
        departBookingFormat
    ];

    project03Page.getTravelInfoDepart().each(($el, index) => {
        cy.wrap($el).should('have.text', expectedTexts[index])
    })

});
});