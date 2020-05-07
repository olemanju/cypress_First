describe('test suite to verify the invalid login functionality, with test data',()=>{ 
    it('launch the browser',()=>{
    
        cy.visit('http://zero.webappsecurity.com/login.html',{timeout:20000})
        cy.url().should('include','webappsecurity')
        cy.log('Website launched')
        
    })
    it('Enter the Username and password',()=>{
        cy.logindetails('username','password')
    })
})