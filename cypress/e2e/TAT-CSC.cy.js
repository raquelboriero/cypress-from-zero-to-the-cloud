describe('TAT Customer Service Center', () => {

  beforeEach(() => {
    cy.visit('./src/index.html') // visita a página antes de cada teste
  })

  it('checks the application title', () => {
    cy.title().should('eq','TAT Customer Service Center')
  })

//SECTION 3 | LESSON 2-----------------------------------------------------------------------

  //EXERCISE + EXERCISE 1
  it('1 - fills in the required fields and submits the form', () => {
    
    const longText = Cypress._.repeat('abcde', 100)

    cy.get('input[id="firstName"]').type('Raquel').should('have.value', 'Raquel')
    cy.get('input[id="lastName"]').type('Boriero').should('have.value', 'Boriero')
    cy.get('input[id="email"]').type('raquel@gmail.com').should('have.value', 'raquel@gmail.com')
    cy.get('textarea[id="open-text-area"]').should('be.visible')
      .type(longText, { delay: 0 }) // sem atraso ao digitar o texto
      .should('have.value', longText)
    cy.contains('button', 'Send').should('be.visible').click()
    
    cy.get('.success').should('be.visible')   
  })

  //EXERCISE 2 
  it('2 - displays an error message when submitting the form with an email with invalid formatting', () => {
    
    cy.get('#firstName').type('Raquel')
    cy.get('#lastName').type('Boriero')
    cy.get('#email').type('raquel').should('have.value', 'raquel')
    cy.get('#open-text-area').type('My text.').should('have.value', 'My text.')
    cy.contains('button', 'Send').should('be.visible').click()

    cy.get('.error').should('be.visible')   
  })

    //EXERCISE 3 
  it('3 - validate that if a non-numeric value is entered, its value will remain empty', () => {
    
    cy.get('#phone').type('abc').should('have.value', '')
    
  })

    //EXERCISE 4 
  it('4 - displays an error message when the phone becomes required but is not filled in before the form submission', () => {
    
    cy.get('#firstName').type('Raquel')
    cy.get('#lastName').type('Boriero')
    cy.get('#email').type('raquel').should('have.value', 'raquel')
   // cy.get('#phone').invoke('attr', 'required-mark', 'required')
    cy.get('#phone-checkbox').click()
    cy.contains('button', 'Send').should('be.visible').click()
  
    cy.get('.error').should('be.visible') 
  })

    //EXERCISE 5 
    it('5 - fills and clears the first name, last name, email, and phone fields', () => {
    
      cy.get('input[id="firstName"]').type('Raquel').should('have.value', 'Raquel').clear().should('have.value','')
      cy.get('input[id="lastName"]').type('Boriero').should('have.value', 'Boriero').clear().should('have.value','')
      cy.get('input[id="email"]').type('raquel').should('have.value', 'raquel').clear().should('have.value','')
      cy.get('input[id="phone"]').type('123456').should('have.value', '123456').clear().should('have.value','')     
    })

    //EXERCISE 6 
    it('6 - displays an error message when submitting the form without filling the required fields', () => {
    
      cy.contains('button', 'Send').should('be.visible').click()
      cy.get('.error').should('be.visible') 
    })


    //EXERCISE 7 
    it('7 - successfully submits the form using a custom command', () => {
    
      cy.fillMandatoryFieldsAndSubmit({ firstName: 'Ricardo', email: 'ricardo@example.com' })

      cy.get('.success').should('be.visible') 

    })

    //EXERCISE 8: Your exercise is to change all the places where we identify the button for later clicking, where instead of identifying that element with cy.get(), we will use cy.contains().

//SECTION 4 | LESSON 3-----------------------------------------------------------------------

    
  it('0 - selects a product (YouTube) by its content', () => {
    cy.get('select').select('YouTube').should('have.value', 'youtube')
    })

  it('1 - selects a product (Mentorship) by its value', () => {
    cy.get('select').select('mentorship').should('have.value', 'mentorship')
    })

    it('2 - selects a product (Blog) by its index', () => {
      cy.get('select').select(1).should('have.value', 'blog')
      })
  
})