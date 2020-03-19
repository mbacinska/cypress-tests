/// <reference types="Cypress" />

describe('test of creating new payee', function () {

    before(function () {

        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('contain', 'http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()
        cy.get('form').should('be.visible')
        cy.fixture('user').then(user => {

            const username = user.id
            const password = user.pwd

            // cy.get('#user_login').type(username)
            // cy.get('#user_password').type(password)
            // cy.get('#user_remember_me').check()
            // cy.get('input[value = "Sign in"]').click()
            cy.loginToBank(username,password)
            cy.url().should('include', 'account-summary.html')

        })


    })


    it('should navigate to pay bills link', () => {
        cy.get('#pay_bills_tab').click()
        cy.url().should('include', 'pay-bills.html')
        cy.contains('Add New Payee').click()
        cy.get('form').should('be.visible')
        cy.get('#np_new_payee_name').type('Name')
        cy.get('#np_new_payee_address').type('Adress: Street 123, 05-080 Hornowek')
        cy.get('#np_new_payee_account').type('account name')
        cy.get('#np_new_payee_details').type('account details')
        cy.get('#add_new_payee').click()
        cy.url().should('include', 'pay-bills-new-payee.html')
    })


    it('should check alert message', () => {

        // cy.get('#alert_content').then(element=>{
        //     const elText= element.text()
        //     expect(elText.includes('The new payee Name was successfully created.')).to.be.true 
        // })
        cy.get('#alert_content').should('be.visible').and('contain','The new payee Name was successfully created.')
        
    })


})