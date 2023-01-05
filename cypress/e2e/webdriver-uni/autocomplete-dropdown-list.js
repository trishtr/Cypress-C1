///<reference types = "Cypress"/>

describe("Handling autocomplete-dropdown-list", () => {
    
    it.only("handling autocomplete-dropdown-list", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        //make sure remove the attribute target and its value to let the new page open in the same tab
        //execute jquery by using invoke comment
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true});

        cy.get('#myInput').type('A')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) =>{
            const prod = $el.text()
            const productToSelect = 'Avacado'

            if(prod == productToSelect){
                //$el.click()
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('include',productToSelect)
            }

        }).then(()=>{
                cy.get('#myInput').type('G')
                cy.get('#myInputautocomplete-list > *').each(($el, index, $list) =>{
                    const prod = $el.text()
                    const productToSelect = 'Grapes'
        
                    if(prod == productToSelect){
                        //$el.click()
                        $el.trigger('click')
                        cy.get('#submit-button').click()
                        cy.url().should('include',productToSelect)
                    }
        }) 
    })
})

    it.skip("selecting specific suggested selection", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        //make sure remove the attribute target and its value to let the new page open in the same tab
        //execute jquery by using invoke comment
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true});
    
        cy.get('#myInput').type('G')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) =>{

            const suggestedNameLst = $el.text()
            const nameToSelect = "Grapes"
            
            if(suggestedNameLst === nameToSelect)
            {
                //$el.click();
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('include', nameToSelect)

            }
        })
    
            
    
        })     

})

