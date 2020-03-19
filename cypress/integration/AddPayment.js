/// <reference types="Cypress" />

describe('test of creating new payment', function () {

    before(function () {
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('contain', 'http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()
        cy.get('form').should('be.visible')
        cy.fixture('user').then(user => {

            const username = user.id
            const password = user.pwd
            cy.loginToBank(username, password)
            cy.url().should('include', 'account-summary.html')
        })

    })
    it('should add new payment', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('form').should('be.visible')
        cy.get('#sp_payee').select('Bank of America').should('have.value', 'bofa')
        cy.get('#sp_account').select('Brokerage').should('have.value', '6')
        cy.get('#sp_amount').type(15000)
        cy.get('#sp_date').type('2020-03-17{enter}')
        cy.get('#sp_description').type('just description')
        cy.get('#pay_saved_payees').click()
        cy.wait(2000)
    })


    it('should display success message', () => {

        cy.url().should('include', 'pay-bills-saved-payee.html')
        cy.get('#alert_content').should('be.visible').and('contain', 'The payment was successfully submitted.')
    })



})