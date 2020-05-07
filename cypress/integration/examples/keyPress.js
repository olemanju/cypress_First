describe('test suite to verify the invalid login functionality, with test data',()=>{ 
    it('launch the browser',()=>{
    
        cy.visit('http://zero.webappsecurity.com/',{timeout:20000})
        cy.url().should('include','webappsecurity')
        cy.log('Website launched')
        
    })

    it('Enter Search Element and press Enter',()=>{
    
        cy.get('#searchTerm').type('savings  {enter}')
        cy.wait(5000)
    })
})