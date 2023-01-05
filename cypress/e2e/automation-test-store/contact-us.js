///<reference types = "Cypress"/>
///<reference types = "cypress-xpath"/>
describe("Test Contact Us form via Automation Test Store", () => {
    before(function() {
        //override the setting of viewport inside cypress.config.js
        cy.viewport('iphone-6')
    })
    it("Should be able to submit a successful submission via contact us form" , {
        retries: {
            runMode : 0,
            openMode: 0
        }
        },() => {
        cy.visit("https://automationteststore.com/")

        //cy.get('.info_links_footer > :nth-child(5) > a').click()
        //cy.xpath("//a[contains(@href,'contact')]").click()
        //cy.get('a').contains('Contact Us').click()
        cy.get("a[href$='contact']").click().then(function(linkText){
            cy.log("Click on the link : " + linkText.text())
        })

        cy.get('#ContactUsFrm_first_name').type("Jan")
        cy.get('#ContactUsFrm_email').type("testing@gmail.com")
        //perform testing against the HTML code or the application that we're tested
        //perform testing against the use of visualise 
        //jquery
        cy.get('#ContactUsFrm_email').should("have.attr", "name", "email")
        cy.get('#ContactUsFrm_enquiry').type("testing")
        //cy.get('.col-md-6 > .btn').click()
        cy.contains("Submit").click()
        cy.xpath('//section[@class="mb40"]/p[2]').should("have.text", "Your enquiry has been successfully sent to the store owner!")

    });

    
})