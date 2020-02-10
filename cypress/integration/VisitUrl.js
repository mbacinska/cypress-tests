/// <reference types="Cypress" />

describe('My basic Test Suite', function () {
    it('visit the wep page', function () {
        cy.visit('/')

        //console log
        cy.url().then(url =>

            cy.log(url))

        //check url
        cy.url().should('include', 'example.com')

        //check page title
        cy.title().should('eq', 'Example Domain')

        //check page content
        cy.get('h1').should('contain', 'Example Domain')
        cy.get('h1').should('be.visible')


        //using aliasing
        cy.get('h1').as('pageContent')
        cy.get('@pageContent').should('contain', 'Example Domain')
        cy.get('@pageContent').should('be.visible')
        
    })
})