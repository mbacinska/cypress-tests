/// <reference types="Cypress" />

describe('My Checkbox Test Suite', function () {
  it('tests the checkbox on the page', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    //check() and verify if 'option1' was marked
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

    //uncheck()
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    //check() 'option2' & 'option3'
    cy.get('input[type = "checkbox"]').check(['option2', 'option3'])





  })
})