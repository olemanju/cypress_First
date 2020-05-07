describe('test suite to verify the invalid login functionality',()=>{
    it('It overrides the Default time',()=>{
        const date = new Date(2020,5,9).getTime()
        cy.log(date)
        cy.clock(date)
    })
    
    it('launch the browser',()=>{
    
        cy.visit('http://zero.webappsecurity.com/login.html',{timeout:20000})
        cy.url().should('include','webappsecurity')
        cy.log('Website launched')
        cy.log('Before reload')
        cy.reload()
        cy.log('after reload')
        cy.clearCookies({log:true})
        cy.clearLocalStorage('your item',{log:true})

        cy.title().should('include','Zero - Log in')
        cy.title().should('equal','Zero - Log in')
        cy.log(cy.title())
        const tit= cy.title()
        console.log(tit)
    })
    
    it('clear and Enter Username',()=>{
        cy.get('#user_login').as('username')
       cy.get('@username').clear()
       cy.get('@username').type('invalid username')
    })
    
    it('Enter invalid userpassword',()=>{
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('invalid password')
    
    })

    it('Click on the Checkbox',()=>{
    
        cy.get('input[id="user_remember_me"]').click()
        cy.wait(5000)
    
    })
    
    
    it('Click on Sign on',()=>{
    
        cy.contains('Sign in')
        .click()
        
    })
    
    it('Verify Error Message ',()=>{
    
        cy.get('.alert-error').should('be.visible').and('contain','Login and/or password are wrong.')
    
    })
   
    })