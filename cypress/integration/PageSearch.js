/// <reference types="Cypress" />

describe('Page search Test Suite', function () {

    before(function () {

        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include', 'webappsecurity')

    })
    it('should search on the web page', function () {

        cy.get('#searchTerm').type('bank {enter}')
        cy.url().should('contain', 'http://zero.webappsecurity.com/search.html?searchTerm=bank')
       // cy.xpath('//h1').should('contain', 'Search Results:')
        cy.go('back')
        cy.url().should('contain', 'webappsecurity')


    })

})