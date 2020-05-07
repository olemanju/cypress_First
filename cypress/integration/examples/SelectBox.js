describe('test suite to verify the invalid login functionality, with test data',()=>{ 
    it('launch the browser',()=>{
    
        cy.visit('https://devexpress.github.io/testcafe/example/',{timeout:20000})
        cy.url().should('include','devexpress')
        cy.log('Website launched')
        
    })
    it('Select Select box from the list',()=>{
        cy.get('#preferred-interface').select('Both')
        cy.get('#preferred-interface').should('have.value','Both')
        cy.wait(4000)
        cy.get('#preferred-interface').select('JavaScript API')
        cy.get('#preferred-interface').should('have.value','JavaScript API')


    })
})