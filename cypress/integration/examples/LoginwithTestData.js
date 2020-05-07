describe('test suite to verify the invalid login functionality, with test data',()=>{ 
    it('launch the browser',()=>{
    
        cy.visit('http://zero.webappsecurity.com/login.html',{timeout:20000})
        cy.url().should('include','webappsecurity')
        cy.log('Website launched')
        
    })
    it('Enter the Username and password',()=>{
        cy.fixture('user').then(user =>{
            const username= user.username
            const password= user.password
            cy.get('#user_login').as('username')
            cy.get('#user_password').as('password')

            cy.get('@username').type(username)
            cy.get('@password').type(password)
            
        })
        cy.get('input[id="user_remember_me"]').click()
            cy.contains('Sign in')
            .click()
    })
})