///<reference types = "Cypress"/>

describe("Handling radio buttons", () => {

    beforeEach (function() {
        cy.visit("http://www.webdriveruniversity.com/");
        //make sure remove the attribute target and its value to let the new page open in the same tab
        //execute jquery by using invoke comment
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});
    })
    
    it("check specific radio btn", () => {
       
        //cy.get("#radio-buttons").find("input[type='radio']").first().check()
        cy.get("#radio-buttons").find("input[type='radio']").as('radioBtnLst')
        cy.get('@radioBtnLst').check('blue')

    })

     
    it("Validate the states of specific radio btn", () => {
       
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')

        cy.get("[value='cabbage']").should('be.disabled')
       

        

    })
})