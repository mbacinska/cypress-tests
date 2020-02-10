/// <reference types="Cypress" />

describe('Forgotten password tests', function () {

before(function () {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('eq', 'http://zero.webappsecurity.com/index.html')
    cy.contains('Signin').click()

})

it('should send a password to the email provided', () => {

    cy.contains('Forgot your password ?').then(function (el) {
        const link = el.prop('href')
        cy.log(link)
        cy.visit(link)
    })
    cy.get('#user_email').type('monika.wacinska@onet.pl')
    cy.get(' input[name ="submit"]').click()

})

it('should check a message', () => {

    cy.get('.offset3.span6').then(function (element) {

    const elemText = element.text()
    expect(elemText.includes('Your password will be sent to the following email:')).to.be.true


})


})
})



