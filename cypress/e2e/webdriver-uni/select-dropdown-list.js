///<reference types = "Cypress"/>

describe("Handling select dropdown list", () => {
    
    it("select specific dropdown list", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        //make sure remove the attribute target and its value to let the new page open in the same tab
        //execute jquery by using invoke comment
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});

        cy.get('#dropdowm-menu-1').select('java').should('have.value', 'java')

        cy.get('#dropdowm-menu-3').select('JQuery')

        cy.get('#dropdowm-menu-2').select('Maven').contains('Maven')

       

    })
})