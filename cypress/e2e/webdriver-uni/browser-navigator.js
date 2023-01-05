///<reference types = "Cypress"/>

describe("Validate webdriveruni homepage link", () => {
    
    it("Confirm links redirect to the correct pages", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        //make sure remove the attribute target and its value to let the new page open in the same tab
        //execute jquery by using invoke comment
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});

        //validate if we are landing to the contact us page
        cy.url().should('include' , 'contactus')

        //browser action cy.go
        cy.go('back')
        cy.reload()
        //cy.reload(true) // reload the page without using cache
        cy.go('forward')
        cy.url().should('include' , 'contactus')

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true});

        cy.go('back')

        cy.get('#to-do-list').invoke('removeAttr','target').click({force:true})
        cy.url().should('include','To-Do-List')

        
        
    })
})