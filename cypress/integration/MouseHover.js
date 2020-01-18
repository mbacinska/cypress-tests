/// <reference types="Cypress" />

describe('My Mouse hover Test Suite', function () {
  it('tests imitation of mouse movements ', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.url().should('contain', 'AutomationPractice')

    //invoke JQuery 'show' method
    cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include', 'top')



  })
})