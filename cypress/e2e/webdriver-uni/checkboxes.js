///<reference types = "Cypress"/>

describe("Handling checkboxes", () => {

    beforeEach(function() {
        cy.navigate_WebdriverUni_Checkbox_Page()

    })
    
    it("Check the checkboxes and validate it is checked", () => {
       

        cy.get("#checkboxes input[type='checkbox']").first().as('option-1')
        cy.get('@option-1').check().should('be.checked')

    })

    it("Uncheck the checkboxes and validate it is unchecked", () => {
   

        cy.get("#checkboxes input[type='checkbox']").eq(3).as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')

    })

    it("Multiple checkboxes", () => {

        cy.get("#checkboxes input[type='checkbox']").check(['option-1','option-2','option-3','option-4']).should('be.checked')
        

    })
        
    })