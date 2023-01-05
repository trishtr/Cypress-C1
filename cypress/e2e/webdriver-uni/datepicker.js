///<reference types = "Cypress"/>


describe("Handle Datepicker", () => {
    
    it("Handle datepicker", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})

        cy.get('#datepicker').click()

        // let date = new Date()
        // date.setDate(date.getDate()) // get current day
        // cy.log(date.getDate())

        // let date2 = new Date()
        // date2.setDate(date.getDate() + 5)
        // cy.log(date.getDate()+5)

        var date = new Date()
        //change date.getDate() + 2 ==> will return future Day = currentDate + 2 days
        //date.getDate() + 360 => change one year ahead
        //date.getDate() + 60 ==> change 2 month ahead
        // date.getDate() + n ==> move the calendar ahead n days
        date.setDate(date.getDate() + 176)

        var futureYear = date.getFullYear();
        //format month to correct format as long
        var futureMonth = date.toLocaleString("default", {month: 'long'})
        var futureDay = date.getDate()

       cy.log(futureYear)
       cy.log(futureMonth)
       cy.log(futureDay)
       
       function selectMonthandYear(){
        cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
            //check year: if year is not futureYear, click the next btn
            if(!currentDate.text().includes(futureYear))
            {
                cy.get('.next').first().click();

                //keep click next btn again, call the function again as a loop
                selectMonthandYear();
            }
        }).then(() => {
            //check month
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
                if(!currentDate.text().includes(futureMonth))
                {
                    cy.get('.next').first().click();

                    //keep click next btn again, call the function again as a loop
                    selectMonthandYear();
                }
            })

        })

       }
       function selectFutureDay(){
        cy.get('[class="day"]').contains(futureDay).click()
        
       }

       selectMonthandYear()
       selectFutureDay()

    })
})