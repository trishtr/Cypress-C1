/// <reference types ='Cypress'/>

describe('Basic Login Tests - positive test', ()=>{

    beforeEach(()=>{
        cy.visit()
    }) 
    
    it('networking',()=>{
        cy.intercept({
            method: 'GET', 
            url:''},
            {
                body:{
                    id: 'mock data'
                }
            }).as('mockingdata')
        })

        cy.get('interact with UI btn to see the response').click()
        cy.get('@mockingdata').its('response.statusCode').should('eq', 200)

})
    