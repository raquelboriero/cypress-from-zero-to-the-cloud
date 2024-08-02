describe('TAT Customer Service Center', () => {
  it('checks the application title', () => {
    cy.visit('./src/index.html')
    cy.title().should('eq','TAT Customer Service Center')
  })
})