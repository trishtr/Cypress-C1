///<reference types = "Cypress"/>

describe("Test mouse actions", () => {
    
    it("Scoll elements  into view", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        //make sure remove the attribute target and its value to let the new page open in the same tab
        //execute jquery by using invoke comment
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})   

    })

    it("Drag and drop", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        //make sure remove the attribute target and its value to let the new page open in the same tab
        //execute jquery by using invoke comment
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})   

        cy.get('#draggable').trigger('mousedown', {which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    })

    it("Double click", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        //make sure remove the attribute target and its value to let the new page open in the same tab
        //execute jquery by using invoke comment
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})   

        cy.get('#double-click').dblclick()
    })

    it("Double click", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        //make sure remove the attribute target and its value to let the new page open in the same tab
        //execute jquery by using invoke comment
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})   

        cy.get('#double-click').dblclick()
    })

    it.only("Hold down left mouse", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        //make sure remove the attribute target and its value to let the new page open in the same tab
        //execute jquery by using invoke comment
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})   

        cy.get('#click-box').trigger('mousedown', {which:1}).then(($element)=> {
            expect($element).to.have.css('background-color','rgb(0, 255, 0)')
            expect($element.text()).contains('Well done')
            
        })
    })

})