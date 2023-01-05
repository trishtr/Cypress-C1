///<reference types = "Cypress"/>

describe("Verifying varibles, cypress commands and jquery commands", () => {
    
    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/");
        //not recommended
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click()
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skincareLink.click()
        //recommend approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
        
    })

    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/");
     
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
       
        //the following code will fail, it should be resovled by promise and then
        //const header = cy.get("h1 .maintext")
        //cy.log(header.text())
        cy.get("h1 .maintext").then(($headerText)=> {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq("Makeup")
        })


        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
        
    })


    it.only("Validate the properties of Contact us", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
     
        //Use cypress command chainings
        //find the element with id ContactUsFrm which contains the txt "Contact Us Form", then find the child element with id field_11
        cy.contains("#ContactUsFrm", "Contact Us Form").find('#field_11').should('contain', 'First name')

        //Jquery Approach
        cy.contains("#ContactUsFrm", "Contact Us Form").then($text =>{
            const firstNameText = $text.find("#field_11").text()
            expect(firstNameText).to.contain("First name")


            //Embedded commands(closure)
            cy.get("#field_11").then(fnText =>{
                cy.log(fnText.text())
            })
            
        })
 


        
    })
})

       
        
