///<reference types = 'Cypress'/>

describe('Network request',()=>{
    it('put request- mocking response server', ()=>{

        cy.intercept({
            method: 'PUT',
            url: '**/comment/*'},
            {
                statusCode: 404,
                body: {
                    error: 'error message'
                },
                delay: 500
            }).as('putComment')

            cy.get('.networ-put').click()

            cy.wait('@putComment')

            cy.get('').should('contains', message)
    })
})