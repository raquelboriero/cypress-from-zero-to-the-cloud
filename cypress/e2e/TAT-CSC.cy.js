// npx cypress run --record --key d1e75291-8546-4a19-a9d5-8fbee7effa36



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
    cy.get('#phone-checkbox').check().should('be.checked')
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
    cy.get('#product').select('YouTube').should('have.value', 'youtube')
    })

  it('1 - selects a product (Mentorship) by its value', () => {
    cy.get('#product').select('mentorship').should('have.value', 'mentorship')
    })

  it('2 - selects a product (Blog) by its index', () => {
    cy.get('#product').select(1).should('have.value', 'blog')
    })

//SECTION 5 | LESSON 4-----------------------------------------------------------------------


    it('3 - checks the type of service "Feedback"', () => {
      cy.get('input[type="radio"][value="feedback"]')
      .check().should('be.checked')
    })

    it('4 - checks each type of service', () => {

      cy.get('#support-type').find('input[type="radio"]')
      .each(typeOfService => {
        cy.wrap(typeOfService).check().should('be.checked')
      })

    })

//SECTION 6 | LESSON 5-----------------------------------------------------------------------

    it('5 - checks both checkboxes, then unchecks the last one', () => {
      
      cy.get('input[type="checkbox"]')
      .check().should('be.checked')
      .last()
      .uncheck().should('be.not.checked')

    })

//SECTION 7 | LESSON 6-----------------------------------------------------------------------


it('6 - selects a file and verifies the file name', () => {
  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/example.json') 
    .should(input => {
      expect(input[0].files[0].name).to.equal('example.json')
    })
});

it('7 - selects a file simulating a drag-and-drop', () => {
  cy.get('input[type="file"]')
  .selectFile('cypress/fixtures/example.json',{action: 'drag-drop'})
  .should(input => {
    expect(input[0].files[0].name).to.equal('example.json')
  })
})

it('8 - selects a file using a fixture to which an alias was given', () => {
  cy.fixture('example.json').as('myFile')
  cy.get('input[type="file"]').selectFile('@myFile')
  .should(input => {
    expect(input[0].files[0].name).to.equal('example.json')
  })
})

//SECTION 8 | LESSON 7-----------------------------------------------------------------------

it('9 - verifies that the privacy policy page opens in another tab without the need for a click', () => {
  cy.contains('a', 'Privacy Policy')
  .should('have.attr', 'href', 'privacy.html')
  .and('have.attr', 'target', '_blank')
  
})

it('10 - access the privacy policy page by removing the target, then clicking on the link', () => {
  cy.contains('a', 'Privacy Policy').invoke('removeAttr', 'target')
  .click()
})

it('11 - independently test the privacy policy page', () => {
  cy.contains('a', 'Privacy Policy').invoke('removeAttr', 'target')
  .click()

  cy.contains('h1', 'TAT CSC - Privacy Policy')
})

})

