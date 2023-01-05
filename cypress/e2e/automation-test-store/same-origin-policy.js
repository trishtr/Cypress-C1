///<reference types = "Cypress"/>

describe("Cypress web security", () => {

    it.skip("Validate visiting two different domains", () => {
        //it will be failed because of same origin policy
       
        cy.visit("http://www.webdriveruniversity.com/");
        cy.visit("https://automationteststore.com/");
       
    })
    
    it.skip("Validate visiting two different domains via user actions", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        //make sure remove the attribute target and its value to let the new page open in the same tab
        //execute jquery by using invoke comment
        //this one will be failed when trying to access 2 different super domain
        //to resolve it, we need to set up chromeWebSecurity: false inside cypress.config.js
        //and using the same logic as below
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click({force:true});
    })

    it.skip("Origin command", () => {
        //it will be failed because of same origin policy
       
        cy.origin('webdriveruniversity.com', ()=>{
            cy.visit("/");
        })
        cy.origin("automationteststore.com", ()=>{
            cy.visit("/")
        })
    })

})