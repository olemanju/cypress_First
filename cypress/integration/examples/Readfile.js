describe('test suite to verify the Reading the data in to json file and txt file, with test data',()=>{ 
    it('Read a Json file',()=>{
    
        cy.readFile('log.json')
        .its('mob')
        .should('eq',9538911711)
        
    })
    it('read a file from fixture file',()=>{
        cy.fixture('user').then((ole)  => {
            var name = ole.username
            var password = ole.password

            cy.log(name)
            cy.log(password)
            
        })
    })
})