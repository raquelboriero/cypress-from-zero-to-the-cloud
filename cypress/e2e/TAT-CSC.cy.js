describe('TAT Customer Service Center', () => {

  beforeEach(() => {
    cy.visit('./src/index.html') // visita a página antes de cada teste
  })


  it('checks the application title', () => {
    cy.title().should('eq','TAT Customer Service Center')
  })



  //EXERCISE + EXERCISE 1
  it.only('fills in the required fields and submits the form', () => {
    
    cy.get('input[id="firstName"]').type('Raquel').should('have.value', 'Raquel')
    cy.get('input[id="lastName"]').type('Boriero').should('have.value', 'Boriero')
    cy.get('input[id="email"]').type('raquel@gmail.com').should('have.value', 'raquel@gmail.com')
    cy.get('textarea[id="open-text-area"]').should('be.visible')
      .type('O professor Sebastião Salvino, morador de Patrocínio, no Alto Paranaíba, foi o responsável por registrar mais de 200 espécies de pássaros ao longo de 20 anos.', { delay: 0 }) // sem atraso ao digitar o texto
      //.type('O professor Sebastião Salvino, morador de Patrocínio, no Alto Paranaíba, foi o responsável por registrar mais de 200 espécies de pássaros ao longo de 20 anos.') 
      .should('have.value', 'O professor Sebastião Salvino, morador de Patrocínio, no Alto Paranaíba, foi o responsável por registrar mais de 200 espécies de pássaros ao longo de 20 anos.')
    cy.contains('button', 'Send').should('be.visible').click()
    cy.get('span[class="success"]').should('be.visible')   
  })

  //EXERCISE 2 
  it('displays an error message when submitting the form with an email with invalid formatting', () => {
    
    cy.get('input[id="firstName"]')
    .should('be.visible')
    .type('Raquel')
    .should('have.value', 'Raquel')
  
    cy.get('input[id="lastName"]')
    .should('be.visible')
    .type('Boriero')
    .should('have.value', 'Boriero')

    cy.get('input[id="email"]')
    .should('be.visible')
    .type('raquel')
    .should('have.value', 'raquel')

    cy.get('textarea[id="open-text-area"]')
      .should('be.visible')
      .type('My text.') 
      .should('have.value', 'My text.')

    cy.contains('button', 'Send').should('be.visible').click()

    cy.get('span[class="error"]')
    .should('be.visible')   
  })

    //EXERCISE 3 
  it('validate that if a non-numeric value is entered, its value will remain empty', () => {
    
    cy.get('input[id="phone"]')
    .should('be.visible')
    .type('abc')
    .should('have.value', '')
    
  })

    //EXERCISE 4 
  it('displays an error message when the phone becomes required but is not filled in before the form submission', () => {
    
    cy.get('input[id="firstName"]').should('be.visible').type('Raquel').should('have.value', 'Raquel')
    cy.get('input[id="lastName"]').should('be.visible').type('Boriero').should('have.value', 'Boriero')
    cy.get('input[id="email"]').should('be.visible').type('raquel').should('have.value', 'raquel')

    cy.get('input[id="phone"]').invoke('attr', 'required-mark', 'required')
  
    cy.contains('button', 'Send').should('be.visible').click()
    cy.get('span[class="error"]').should('be.visible') 
  })

    //EXERCISE 5 
    it('fills and clears the first name, last name, email, and phone fields', () => {
    
      cy.get('input[id="firstName"]').should('be.visible').type('Raquel').should('have.value', 'Raquel').clear().should('have.value','')
      cy.get('input[id="lastName"]').should('be.visible').type('Boriero').should('have.value', 'Boriero').clear().should('have.value','')
      cy.get('input[id="email"]').should('be.visible').type('raquel').should('have.value', 'raquel').clear().should('have.value','')
      cy.get('input[id="phone"]').should('be.visible').type('123456').should('have.value', '123456').clear().should('have.value','')     
    })

    //EXERCISE 6 
    it('displays an error message when submitting the form without filling the required fields', () => {
    
      cy.contains('button', 'Send').should('be.visible').click()
      cy.get('span[class="error"]').should('be.visible') 
    })


    //EXERCISE 7 The test must make use of a fillMandatoryFieldsAndSubmit command, which must be implemented in the cypress/support/commands.js file.
    // There must be verification that the success message is displayed.
    it('successfully submits the form using a custom command', () => {
    
      cy.fillMandatoryFieldsAndSubmit()
      cy.get('span[class="success"]')
      .should('be.visible') 

    })

    //EXERCISE 8: Your exercise is to change all the places where we identify the button for later clicking, where instead of identifying that element with cy.get(), we will use cy.contains().


})