

describe('test suite to verify the invalid login functionality, with test data',()=>{ 
    it('launch the browser',()=>{
    
        cy.visit('https://devexpress.github.io/testcafe/example/',{timeout:20000})
        cy.url().should('include','devexpress')
        cy.log('Website launched')
        
        
    })
    it('Scroll ti viw',()=>{
        cy.get('#submit-button').scrollIntoView()
        
    })
})