///<reference types = "Cypress"/>

describe("Alias and invoke", () => {
    
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com/");
       
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include','Seaweed Conditioner')
        
    })

    it("Alias and Invoke Challenges", () => {
        cy.visit("https://automationteststore.com/");
        cy.get(".thumbnail").as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
      
        cy.get('@productThumbnail').find('.productcart').invoke('attr','title').should('include','Add to Cart')

    })

    it.only("Calculate total of normal and sale products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get(".thumbnail").as('productThumbnail')
        
        // cy.get('@productThumbnail').find('.oneprice').each(($price, index, $list) => {    
        //     cy.log($price.text()) 
        //})
        //the following returns the array of itemPrice
        //.split($) => return the subarray of itemprice without $ signs
        cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('@productThumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0;

        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for(i=0; i<itemPrice.length; i++){
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
        
            }
            itemsTotal += itemsPriceTotal
            cy.log("normal price: " + itemsPriceTotal)
        })


        cy.get('@saleItemPrice').then($linkText => {
            var saleItemPriceTotal = 0
            //arr >>>> saleItemPrice >>> $linkText is param
            var saleItemPrice = $linkText.split('$');
            var i;
            for(i=0; i<saleItemPrice.length; i++){
                cy.log(saleItemPrice[i])
                saleItemPriceTotal += Number(saleItemPrice[i])

            }
            itemsTotal += saleItemPriceTotal
            cy.log("sales price: " + saleItemPriceTotal)
        })
        .then(() => { 
            cy.log("Total price : " + itemsTotal)
            expect(itemsTotal).to.equal(625.6)
        })

        
    })     
    
   
})