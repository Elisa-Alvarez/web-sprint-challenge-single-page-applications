describe('Inputs and cancel button', () => { 
   
   
    it('can navigate to the site', () => { // this is the test
      
      cy.visit('http://localhost:3000')
  
      
      cy.url().should('include', 'localhost')
    })

    it('Pizza button', () => { 
   
        cy.get('button').click()
    
       
      })
    
  
    it('get the name text', () => { 
      cy.get('input[name=first_name]')
      .type('First Name')
    .should('have.value', 'First Name')

           
    })
    it('get the name text', () => { 
        cy.get('input[name=last_name]')
        .type('Last Name')
      .should('have.value', 'Last Name')
  
             
      })
  
  it('get email', ()=>{
    cy.get('input[name=email]')
    .type('email@gmail.com')
    .should('have.value', 'email@gmail.com')
  })
  
  it('get email', ()=>{
    cy.get('input[name=text]')
    .type('text')
    .should('have.value', 'text')
  })
 

   it('checkbox valid', ()=>{
     cy.get('input[name=Terms]').check()
    
    .should('have.value','on')
   })

   it('submit info', () => { 
   
    cy.get('button').click()

   
  })

  

   



  })