/// <reference types="Cypress" />

describe('Page actions Test Suite', function () {

    beforeEach(function () {

        cy.visit('https://devexpress.github.io/testcafe/example/')

    })

    it('should submit developer name', function () {

        cy.get('#submit-button').as('submitBtn')
        cy.get('#developer-name').type('Monika')
        cy.get('@submitBtn').scrollIntoView()
        cy.get('@submitBtn').click()
        cy.get('#article-header').should('contain.text', 'Thank you, Monika!')

    })

    it('should enable slider', function () {

        cy.get('#slider').as('slider')
        cy.get('#tried-test-cafe').check().should('be.checked')
        cy.get('@slider').should('not.have.class', '.ui-state-disabled')

    })

    it('should check empty values', function(){

        cy.get('#comments').as('textArea')
        cy.get('@textArea').should('have.value', '')
        cy.get('#tried-test-cafe').check().should('be.checked')
        cy.get('@textArea').type('something special').should('have.value', 'something special')
     



    })
})