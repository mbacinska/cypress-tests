/// <reference types="Cypress" />

describe('My visible-invisible elements Test Suite', function () {
  it('tests visible elements', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#displayed-text').should('be.visible')

    cy.get('#hide-textbox').click()

    cy.get('#displayed-text').should('not.be.visible')

    cy.get('#show-textbox').click()

    cy.get('#displayed-text').should('be.visible')








  })
})