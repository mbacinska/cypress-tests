/// <reference types="Cypress" />

describe('My each loop Test Suite', function () {
  it('iterates through the table', function () {

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    cy.get('.search-keyword').type('ca')
    cy.wait(2000)

    //check only visible elements
    //cy.get('.product:visible').should('have.length',4)

    //method chaining(parent-child relation) --.product is a child of .products
    cy.get('.products').find('.product').should('have.length', 4)

    //select 'second' element of the table and within click on element that contains 'ADD TO CART' text
    //cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();

    //iterate through the table, find text 'Cashews' and click on element that contains 'ADD TO CART' text
    cy.get('.products').find('.product').each(($el, index, $list) => {

      const vegName = $el.find('h4.product-name').text()

      //log 'vegName' on Test Runner
      cy.log(vegName);

      if (vegName.includes('Cashews')) {
        $el.find('button').click();
      }


    })

  })
})