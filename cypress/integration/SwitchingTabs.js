/// <reference types="Cypress" />

describe('My switching tabs Test Suite', function () {
  it('tests switching tabs', function () {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    //invoke Jquery method to remove 'target' attribute
    cy.get('#opentab').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'https://www.rahulshettyacademy.com/#/index')

    //navigate to previous page in the history
    cy.go('back')
    cy.url().then(url => cy.log(url))









  })
})