describe('test suite to verify the invalid login functionality, with test data',()=>{ 
    it('launch the browser',()=>{
    
        cy.visit('https://devexpress.github.io/testcafe/example/',{timeout:20000})
        cy.url().should('include','devexpress')
        cy.log('Website launched')
        cy.screenshot()
        
    })
    it('take a screenshot',()=>{
        cy.get('header').screenshot()
        cy.get('#preferred-interface').screenshot()
        cy.wait(3000)
    })
})