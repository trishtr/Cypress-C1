/// <reference types = 'Cypress'/>

describe('post request', ()=>{
    it('post request example', ()=>{
        cy.intercept({
            method: 'POST', 
            url: 'api-endpoint'
        }).as('aliasname')

        cy.get('.btnUI-tointeract').click()
        cy.get('@aliasname').should(({request, response})=>{
            console.log(request)

            expect(request.body).to.include('email')

            expect(response.body).to.have.property('name', 'abc')

            expect(response.headers).to.have.property('autority', '')
        })
    })
})