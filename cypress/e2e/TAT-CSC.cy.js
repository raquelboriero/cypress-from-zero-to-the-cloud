describe('TAT Customer Service Center', () => {

  beforeEach(() => {
    cy.visit('./src/index.html') // visita a página antes de cada teste
  })


  it('checks the application title', () => {
    cy.title().should('eq','TAT Customer Service Center')
  })

  it('fills in the required fields and submits the form', () => {
    
    cy.get('input[id="firstName"]')
    .should('be.visible')
    .type('Raquel')
    .should('have.value', 'Raquel')
    //.type in the fields: First name, Last name, Email and How ​​can we help you? Any praise or feedback for us?
    //.click(Send button)
    //.should the message is visble and has an element with the success class )
    cy.get('input[id="lastName"]')
    .should('be.visible')
    .type('Boriero')
    .should('have.value', 'Boriero')

    cy.get('input[id="email"]')
    .should('be.visible')
    .type('raquel@gmail.com')
    .should('have.value', 'raquel@gmail.com')

    cy.get('input[id="open-text-area"]')
    //.should('be.visible')
    .type('my first text')
    .should('have.value', 'my first text')

    
  })




})