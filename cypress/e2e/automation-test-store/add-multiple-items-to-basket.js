///<reference types = "Cypress"/>

import AutoStore_HairCarePage_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCarePage_PO";
import AutoStore_HomePage_PO from "../../support/pageObjects/automation-test-store/AutoStore_HomePage_PO";

describe("Add multiple items to basket", () => {
    const autoStore_homePage = new AutoStore_HomePage_PO()
    const autoStore_hairCarePage = new AutoStore_HairCarePage_PO()

    before(function () {
        cy.fixture('product').then(function (data) {
            globalThis.data = data;
        })
    })


    beforeEach(function () {
        cy.clearLocalStorage()
        //cy.clearCookies()
        autoStore_homePage.accessHomePage()
        autoStore_homePage.clickOn_HairCareLink() 
    })

    it("Add specific items to basket", () => {

       autoStore_hairCarePage.addHairCareProductsToBasket()
       //cy.screenshot();
       //cy.screenshot("add specific items to basket")
    })


})