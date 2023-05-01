/// <reference types ='Cypress'/>

describe('Basic Login Tests - positive test', ()=>{

    beforeEach(function(){
        cy.intercept('POST', '**/login', {fixture : 'mockingLoginResponse.json'}).as('successLogin')
        cy.visit('baseURL')
        cy.fixture('LoginTestData.json').then(function(data) {
            globalThis.data = data;
        })

    })

    it('Login with valid credentials', ()=>{
        
        cy.loginToThePage(data.valid_username, data.valid_password,data.serverURL)
        cy.get('h2').should('contain', 'You are signed in')
        cy.logoutFromThePage()
    })
})