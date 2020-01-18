/// <reference types="Cypress" />

describe('My tables Test Suite', function () {
  it('tests web pages', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.url().should('include', 'AutomationPractice')

    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

      const elText = $el.text()
      cy.log(elText)
      if (elText.includes('Python')) {

        cy.get('tr td:nth-child(2)').eq(index).next().then(price => {

          const priceValue = price.text()
          expect(priceValue).equal('25')

        })


      }



    })



  })
})