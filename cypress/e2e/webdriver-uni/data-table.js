/// <reference types="Cypress" />
describe("Handling data from tables", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
      it("Calculating total age", () => {
        var userDetails = [];
        let number = 0;

        cy.get('#thumbnail-1 table td').each(($el, index, $list)=> {
            userDetails[index] = $el.text();
    
        }).then(()=>
        {
            var i;
            for(i=0;i<userDetails.length;i++){
                //cy.log(userDetails[i])
                if(Number(userDetails[i]))
                {
                    number += Number(userDetails[i])
                }
            }
            cy.log(number)
            expect(number).to.eq(322)
        })
      })
    

    
        it("Calculating total age", () => {
          
          let number = 0;
  
          cy.get('#thumbnail-1 table td').each(($el, index, $list)=> {
              const extractedTxt = $el.text();
              //cy.log(extractedTxt)
              if(Number(extractedTxt)){
                number +=Number(extractedTxt)
                //cy.log(number)
              }
             
          }).then(() => {
            cy.log('total age : ' + number)
            expect(number).to.eq(322)
          })
    
        })

        it.only("Find the correct age of specific last name user",() => {

            let lastName = "Woods";
          
            cy.get('#thumbnail-1 table tr td:nth-child(2)').each(($el, index, $list)=> {
                const extractedTxt = $el.text();
                if(extractedTxt.includes(lastName)){
                    cy.get('#thumbnail-1 table tr td:nth-child(2)').eq(index).next().then((age) =>
                    {
                        const userAge = age.text()
                        expect(userAge).to.eq("80")
                    })
                }

        })
    })
      
})