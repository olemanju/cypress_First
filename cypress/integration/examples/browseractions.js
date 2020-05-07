describe('test suite to simulate the web buttons and other stuff',()=>{
it('Enter url name and assert it',()=>{

    cy.visit('http://books.toscrape.com/',{timeout:20000})
    cy.url().should('include','books.toscrape')
    cy.log('Website launched')
    cy.log('Before reload')
    cy.reload()
    cy.log('after reload')
})

it('Click on the link for travel and assert it',()=>{

    cy.get('a')
    .contains('Travel')
    .click()

   cy.get('h1').contains('Travel')
})

it('get the count of the list of travel',()=>{

    cy.get('.product_pod')
    .its('length')
    .should('eq',11)

    
})

it('click on poetry link',()=>{

    cy.get('a')
    .contains('Poetry')
    .click()
    
})

it('click on olle Image ',()=>{

    cy.get('a')
    .contains('Olio')
    .click()

    
})
it(' verify the price and it should be 23.88',()=>{

    cy.get('.price_color')
    .contains('£23.88')   

    name=cy.get('.price_color').invoke('text')
    console.log(name)
})
})