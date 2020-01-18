/// <reference types="Cypress" />

describe('My AlertsAndPopups Test Suite', function () {
  it('tests alert and popup on the page', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    //cypress will auto accept alert
    cy.get('#alertbtn').click()

    //firing window:alert
    cy.on('window:alert', (str) => {
      //compare two strings
      expect(str).to.equal('Hello , share this practice page and share your knowledge')

    })


    //cy.get('#confirmbtn').click()
    cy.get('input[value="Confirm"]').click()

    //firing window:confirm
    cy.on('window:confirm', (str) => {
      //compare two strings
      expect(str).to.equal('Hello , Are you sure you want to confirm?')

    })







  })
})