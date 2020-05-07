describe('Device test',()=>{
    it('720',()=>{
        cy.viewport(1280,720)
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })
    
    it('1080',()=>{
        cy.viewport(1980,1080)
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })
    it('i phone x',()=>{
        cy.viewport('iphone-x')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })
    it('Mac book pro',()=>{
        cy.viewport('macbook-15')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })
})