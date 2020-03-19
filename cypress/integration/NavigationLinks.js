/// <reference types="Cypress" />

describe('Test of navigation bar links', function () {

    before(function () {

        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('contain', 'http://zero.webappsecurity.com/')

    })
    it('should navigate to online banking link', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')

    })
    it('should navigate to feedback link', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.go('back')
    })

    it('should navigate to home link', () => {

        cy.get('#homeMenu').click()
        cy.url().should('include', 'index.html')
    })

})