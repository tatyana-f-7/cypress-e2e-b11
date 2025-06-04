class Project03Page {

    // Locators

    getTripTypeRadioButtonsByLabel(label) {
        return cy.contains('.radio', label).find('input')
    }

    getAllLabels() {
        return cy.get('.field > label')
    }

    getAllDropdowns() {
        return cy.get('.select > select')
    }

    getDropdownByLabel() {
        return cy.contains(label).parent().find('select')
    }

    getAllDatePickers() {
        return cy.get('[class*="react"] > div > input')
    }

    getDatePickerByLabel(label) {
        return cy.contains(label).parent().find('input')
    }

    getBookButton() {
        return cy.get('button')
    }

    getTravelInfoDepart() {
        return cy.get('.ml-3 > div > div').first().children()
    }

    getTravelInfoReturn() {
        return cy.get('.ml-3 .ml').children()
    }

    getPassengerInfo() {
        return cy.get('.mt-4 > p')
    }

    // Methods

    selectTripType(type) {
        this.getTripTypeRadioButtonsByLabel(type).check()
    }

    fillDropdowns(dropdownOptions) {
        Object.values(dropdownOptions).forEach((option, index) => {
            this.getAllDropdowns().eq(index).select(option)
        })
    }

    getFutureDateByDays(day) {
        const futureDate = new Date()

        futureDate.setDate(futureDate.getDate() + day)

        return `${futureDate.getMonth() + 1}/${futureDate.getDate()}/${futureDate.getFullYear()}`
    }

    clickBookButton() {
        this.getBookButton().click()
    }

    getFormattedDateForBooking(dateStr) {
        const date = new Date(dateStr)

        const dayName = date.toLocaleString('en-US', { weekday: 'short' })

        const monthName = date.toLocaleString('en-US', { month: 'short' })

        const day = date.toLocaleString('en-US', { day: '2-digit' })

        return `${dayname} ${monthName} ${day} ${date.getFullYear()}`
    }

    formatDropdownOptionsToBookingText(options) {
        const result = [
            `Number of Passengers: ${options.numberOfPassengers}`,
            `Passenger 1: ${options.passengerOne}`,
            `Cabin class: ${options.cabinClass}`
        ]

        if(options.passengerTwo) {
            result.splice(2, 0, `Passenger 2: ${options.passengerTwo}`);
        }

        return result
    }

    stateAbbreviations = {
        Illinois: 'IL',
        Florida: 'FL',
        California: 'CA',
        'New York': 'NY',
        Texas: 'TX'
    }

    getAbbreviationForState(state) {
        return this.stateAbbreviations[state]
    }
}

export default Project03Page

// Bilal's Version

/*
import { format } from 'date-fns'

class Project03Page {
    // locators

    getTripTypeRadioBtnByLabel(label){
        return cy.contains('.radio', label).find('input')
    }

    getAllLabels(){
        return cy.get('.field > .label')
    }
    
    getAllDropdowns(){
        return cy.get('.select select')
    }

    getDropdownByLabel(label){
        return cy.contains(label).parent().find('select')
    }

    getAllDatepickers(){
        return cy.get('[class*="react"]>input')
    }

    getDatePickerByLabel(label){
        return cy.contains(label).parent().find('input')
    }


    getBookBtn() {
        return cy.get('[type="submit"]')
    }


        // cabinClass: 'Business',
        // from: 'Illinois',
        // to: 'Florida',
        // numberOfPassengers: '1',
        // passerger1: 'Senior (65+)'
    
    fillBookingDropdowns(options) {
        Object.values(options).forEach((option, index)=>{
            this.getAllDropdowns().eq(index).select(option)
        })
    }

    fillTripTypeRadioBtn(labelOption){
        this.getTripTypeRadioBtnByLabel(labelOption).check()
    }

    getFutureDate(days){
        let futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + days)

        return futureDate;
    }

    formatDateByAmericanDate(date) {
        return format(date, 'MM/dd/yyyy')
    }

    formatDateToShortDate(date){ 
        return format(date, 'eee MMM dd yyyy')
      }

    stateAbbreviations = {
        Illinois: 'IL',
        Florida: 'FL'
      }
      
      getAbbreviationForState(state) {
        return this.stateAbbreviations[state];
      }

      getTravelInfoDepart() {
        return cy.get('.ml-3 .field>div').children()
      }
}
  export default Project03Page
  */