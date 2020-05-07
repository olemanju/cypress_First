describe('This is my first testcase',()=>{
    it('This is to check the first step',()=>{
        cy.visit("http://example.com/",{timeout:20000})
    })

    it('Second step and asserting url',()=>{
        cy.url().should('include','example.com')
    })
    it('This statement is for wait ',()=>{
        cy.wait(3000)
    })
    it('it will pause untill i click on resume button',()=>{
        cy.pause()
    })

    it('Assertion, verify in the page displayed items h1 tag is exists',()=>{
        cy.get('h1').should('be.visible')
    })
})