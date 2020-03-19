/// <reference types="Cypress" />

describe('test of feedback form fill', function () {

before(function () {

    cy.visit('http://zero.webappsecurity.com/')
    cy.url().should('contain', 'http://zero.webappsecurity.com/')
    cy.contains('Feedback').click()
    cy.url().should('include', 'feedback.html')
})

it('should check if form is visible', () => {
    cy.get('#feedback-title').should('be.visible')
})

it('should fill the feedback form', () => {

    cy.get('#name').type('Monika')
    cy.get('#email').type('monika.bacinska@email.com')
    cy.get('#subject').type('feedback form subject')
    cy.get('#comment').type('this is my question put in here')
})

it('should submit the form', () => {
    cy.get('input[name="submit"]').click()
})

it('should check the feedback message', () => {
    cy.get('#feedback-title').should('be.visible')

    cy.get('div.offset3.span6').then(element => {

        const elText = element.text()
        expect(elText.includes('Thank you for your comments, Monika.')).to.be.true
    })
})


})