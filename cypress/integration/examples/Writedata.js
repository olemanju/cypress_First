describe('test suite to verify the Writing the data in to json file and txt file, with test data',()=>{ 
    it('write a Json file',()=>{
    
        cy.writeFile('log.json',{
            name:'manju',
            lname:'ole',
            mob:9538911711,
            place:'melbourne'
        })
        
    })
    it('write a text file',()=>{
        cy.writeFile('log.txt','Welcome to India and melbourne')
    })
})