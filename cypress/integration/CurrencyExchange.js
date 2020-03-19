/// <reference types="Cypress" />

describe('test of currency exchange', function () {

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
        it('should make currency exchange', () => {

            cy.get('#pay_bills_tab').click()
            cy.contains('Purchase Foreign Currency').click()
            cy.get('#pc_currency').select('Great Britain (pound)').should('have.value', 'GBP')
            cy.get('#pc_amount').type(1000)
            cy.get('#pc_inDollars_true').click()
            cy.get('#pc_calculate_costs').click()
        })

        it('should display proper results', ()=>{

            cy.get('#pc_conversion_amount').should('contain', '590.25 pound (GBP) = 1000.00 U.S. dollar (USD)')
        })
    })
