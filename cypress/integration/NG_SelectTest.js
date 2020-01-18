/// <reference types="Cypress" />

describe('My each loop Test', function () {
  it('Open the web page', function () {
    cy.visit('https://ng-select.github.io/ng-select#/data-sources');
    cy.url().should('include', 'data-sources')

    cy.get('.ng-select').eq(2).click()

    //method chaining(parent-child relation)
    cy.get('.ng-dropdown-panel.ng-select-bottom').find('.ng-option').should('have.length', 3);

    cy.get('.ng-dropdown-panel.ng-select-bottom').find('.ng-option').each(($el, index, $list) => {

      const elValue = $el.find('.ng-option-label').text()

      cy.log(elValue);

      if (elValue.includes('3')) {
        cy.wrap($el).click();
      }

    })
    cy.wait(2000)
    //cy.get('.ng-select').eq(2).find('div input[role="combobox"]').should('have.value', '3')

  })
})