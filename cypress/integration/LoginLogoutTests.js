/// <reference types="Cypress" />

describe('Successful login test', function () {


    before(function () {

        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include', 'webappsecurity')
    })

    it('should display login form', function () {

        cy.get('#signin_button').click()
        cy.get('form').should('be.visible')

    })

    it('should login to application', function () {
        cy.login('username', 'password')
        cy.url().should('include', 'bank/account-summary.html')

    })

    it('should display tabs', function () {
        cy.get('#account_summary_tab').should('be.visible')
        cy.get('#account_activity_tab').should('be.visible')
        cy.get('#transfer_funds_tab').should('be.visible')
        cy.get('#pay_bills_tab').should('be.visible')
        cy.get('#money_map_tab').should('be.visible')
        cy.get('#online_statements_tab').should('be.visible')


    })

    it('should logout from the app', function () {

        cy.get('.dropdown-toggle',{multiple:true}).invoke('show')
        cy.contains('Logout').click({force:true})
        cy.url().should('include', 'webappsecurity')

    })

})