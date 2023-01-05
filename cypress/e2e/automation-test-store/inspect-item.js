///<reference types = "Cypress"/>

describe("Inspect Automation Test Store items using chain of commands", () => {
    
    it("Click on the first item using item header", () => {
        cy.visit("https://automationteststore.com/");
        //cy.get("a").contains("Skinsheen Bronzer Stick").click()
        //cy.get(".fixed_wrapper").find('.prdocutname').eq(0).click()
        cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click().then(function(itemHeaderText) {
            console.log("Selectd the following items: " + itemHeaderText.text())
        })
    })

       
        
})
