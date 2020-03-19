/// <reference types="Cypress" />

describe('Test of link on the page', function () {


    before(function () {

        cy.visit('http://books.toscrape.com/index.html')
        cy.url().should('include', 'index.html')

    })

    it('should check clicking of the page link', () => {

        cy.get('a').contains('Childrens').click()
        cy.get('h1').should('contain', 'Childrens')
        
    })

    it('should check the number of elements displayed', () => {
        cy.get('.row').find('.product_pod').should('have.length', 20)

    })
})