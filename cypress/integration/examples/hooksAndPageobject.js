class BasePage
{
    static loadHomePage(){
        cy.visit('http://zero.webappsecurity.com/login.html',{timeout:20000})
    }

    static wait(number)
    {
        cy.wait(number)
    }
}

class HomePage extends BasePage
{
    static enterUserName(){
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('invalid username')
    }
    static enterPassword(){
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('invalid password')
    }
    static selectCheckBox(){
        cy.get('input[id="user_remember_me"]').click()
    }
    static clickOnLogin(){
        cy.contains('Sign in')
        .click()
    }
    static verifyErrorMessage(){
        cy.get('.alert-error').should('be.visible').and('contain','Login and/or password are wrong.')
    }

}

describe('This is the implementation of hooks and Page object model',()=>{
    before(function(){
        HomePage.loadHomePage()
    })
    after(function(){
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    it.only
    ('Enter the username ',()=>{
        HomePage.enterUserName()
    })
    it('Enter Password',()=>{
        HomePage.enterPassword()
    })

    it('Click on check box',()=>{
        HomePage.selectCheckBox()
    })

    it('click on Login button',()=>{
        HomePage.clickOnLogin()
    })

    it.skip('verify Error Message',()=>
    {
        HomePage.verifyErrorMessage()
    })
})
