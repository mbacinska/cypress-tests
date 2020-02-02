/// <reference types="Cypress" />

describe('My testing framework', function () {

    before(function () {
        cy.fixture('data').then(function (data) {
            this.data = data

        })
    })

    it('tests Angular webpage', function () {



        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.url().should('include', 'angularpractice')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender).should('have.value', this.data.gender)
        cy.get('#inlineRadio3').should('be.disabled')

        // cy.contains('Shop').click()

        cy.get('a.nav-link').eq(1).click()
        cy.url().should('include', 'angularpractice/shop')
        this.data.productName.forEach(element => {
            cy.selectProduct(element)

        });

        cy.get('.nav-link.btn.btn-primary').click()

        let sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const elText = $el.text()
            //cy.log(elText)
            let res = elText.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)
        }).then(function () {
            cy.log(sum)
        })

        cy.get('h3 strong').then(function (element) {
            const totalAmount = element.text()
            let total = totalAmount.split(" ")
            total = total[1].trim()
            expect(Number(total)).to.eq(sum)

        })



        cy.get('.btn.btn-success').click()
        Cypress.config('defaultCommandTimeout:', 80000)
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').check({
            force: true
        })
        cy.get('input[value="Purchase"]').click()
        // cy.get('div.alert.alert-success.alert-dismissible').should('contain', 'Success')
        cy.get('.alert').then(function (element) {

            const elemText = element.text()
            expect(elemText.includes('Success')).to.be.true

        })



    })

})