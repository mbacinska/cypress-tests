/// <reference types="Cypress" />

describe('My Dynamic dropdown Test Suite', function () {
  it('tests dropdown by iteration through its values', function () {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.url().should('include', 'Automation')

    //dynamic dropdown
    cy.get('#autocomplete').type('ind')

    cy.get('.ui-menu-item div').each(($el, index, $list) => {

      if ($el.text() === 'India') {
        $el.click()
      }

    })

    //check if 'India' was selected
    cy.get('#autocomplete').should('have.value', 'India')




  })
})