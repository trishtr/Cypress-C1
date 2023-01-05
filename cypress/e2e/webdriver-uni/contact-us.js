import Homepage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import ContactUsPage_PO from '../../support/pageObjects/webdriver-uni/ContactUsPage_PO'

///<reference types = "Cypress"/>

describe("Test Contact Us form via WebDriver Uni", () => {
    //Cypress.config("defaultCommandTimeout", 20000)
    //override the timeout in cypress config
    const homepage_PO = new Homepage_PO();
    const contactUsPage = new ContactUsPage_PO();

    before(function() {
        cy.fixture('userDetails').as('user').then(function(data) {
            globalThis.data = data;

        })
    })

    beforeEach(() =>{
    
        homepage_PO.visitHomePage();
        homepage_PO.clickOn_ContactUs_Button();
        //cy.pause()

    })
    it("Should be able to submit a sucessful submission via contact us form", () => {
       

        cy.document().should('have.property', 'charset').and('eq','UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'Contact-Us')
        cy.contains("CONTACT US").click({force:true});
        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, "testing", "h1", "Thank You for your Message!")
    })

    it.only("Should not be able to submit a sucessful submission via contact us form as all fields are required", () => {

        contactUsPage.contactForm_Submission(data.first_name, data.last_name, " ","testing", "body", "Error: Invalid email address" )
    })

})

