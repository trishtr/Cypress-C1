/// <reference types = 'Cypress' />

describe('table handling', ()=>{
    it('table handling', ()=>{

        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')

        let total = 0
        let infoList = []
        cy.get('#thumbnail-1 tr td').each(($el, index, list) =>{

            if(Number($el.text()))
                infoList.push($el.text())       
                
        }).then(()=>{
       
            for(let i=0;i< (infoList).length; i++){
               
                console.log(total)
                total += Number(infoList[i])
            }  
            cy.log(total) 
        })

    })  

    it('verify name and age', ()=> {

        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')

        let infoLst = []
        let nameAgeMap ={}
       

        cy.get('#thumbnail-1 tr td').each(($el, index, list) =>{
            // cy.log($el.text())
            infoLst.push($el.text())

        }).then(() =>{

            for(let i=0 ;i< (infoLst).length; i+=3){
                for(let j =2; j <(infoLst).length; j+=3){
                    let firstname = infoLst[i]
                    let age = infoLst[j]
                    nameAgeMap[firstname] = age
                   
                    
                }
            } 
            cy.log(nameAgeMap) 
            cy.log(nameAgeMap['John'])
         
        })

    })

})