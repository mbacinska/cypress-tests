/// <reference types="Cypress" />

describe('My Static dropdown Test Suite', function () {
  it('tests static dropdown', function () {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    //static dropdown
    cy.get('select').select('option3').should('have.value', 'option3')




  })
})