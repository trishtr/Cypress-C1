///<reference types = "Cypress"/>

describe("Iterate over elements", () => {

    beforeEach(function() {
        cy.visit("https://automationteststore.com/");
       
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    })
    
    it("Log information of all hair care product", () => {
    
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
           cy.log("Index: " + index + " : " + $el.text() )
        })
      
         
    })
    it("Add specific product to basket", () => {
    
        // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        //     if($el.text().includes('Curls to straight Shampoo')) {
        //         cy.wrap($el).click()
        //     }
        // })

        cy.selectProduct('Curls to straight Shampoo')  
        
    })

    it("Add another specific product to basket, by applying Custom Commands in support files", () => {
   
        cy.selectProduct('Seaweed Conditioner')  
        
    })

    it.only("Add another specific product to basket, by applying Custom Commands in support files", () => {

        cy.selectProduct('Pantene Pro-V Conditioner, Classic Care')  
        
    })
})