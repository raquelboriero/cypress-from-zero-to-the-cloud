

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {}) => {
    
    const defaultData = {
        firstName: 'Raquel',
        lastName: 'Boriero',
        email: 'raquel@gmail.com',
        message: 'This is a test message.'
    }
    
    const finalData = { ...defaultData, ...data }

    cy.get('#firstName').type(finalData.firstName)
    cy.get('#lastName').type(finalData.lastName)
    cy.get('#email').type(finalData.email)
    cy.get('#open-text-area').type(finalData.message)
    cy.contains('button', 'Send').click()
})


