class AutoStore_HairCarePage_PO {

    addHairCareProductsToBasket(){
         //using forEach to iterate the elements inside the [] product.json file
         globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element)
         
        })

        cy.get(".block_7 .dropdown-toggle").click()
    }

    
}

export default AutoStore_HairCarePage_PO;