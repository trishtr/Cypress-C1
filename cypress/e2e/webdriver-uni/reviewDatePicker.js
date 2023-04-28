/// <reference types = 'Cypress'/>

describe('handling date picker', ()=>{
    it('handling datepicker', ()=>{
        cy.visit('https://www.webdriveruniversity.com/Datepicker/index.html')
        const time = new Date().toLocaleDateString('en-us', { year:"numeric", month:"long"})
     
        cy.log(time)
        cy.get('#datepicker').click()
        cy.get('th.datepicker-switch').first().then(($month)=>{
          
            cy.log($month.text())
            if($month.text() === time){
                cy.xpath('//td[@class="day"]' || '//td[@class="today day"]').each(($date, index, list)=> {
                    
                    if($date.text() === '29'){
                        
                        $date.trigger('click')
                    }
                
                })
               
        }})

    })
})