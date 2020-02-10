/// <reference types="Cypress" />

describe('Login function test', function () {


    before(function () {

        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include', 'webappsecurity')
    })

    it('should display login form', function () {

        cy.get('#signin_button').click()
        cy.get('form').should('be.visible')

    })

    it('should login to application', function () {
        cy.login('my_name', 'my_password')

    })

    it('should display error message', function(){
        cy.get('.alert').then(function (element) {

            const elemText = element.text()
            expect(elemText.includes('Login and/or password are wrong')).to.be.true

        })

    })
       
    })