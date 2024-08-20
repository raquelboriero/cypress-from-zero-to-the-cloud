// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {}) => {
    
    const defaultData = {
        firstName: 'Raquel',
        lastName: 'Boriero',
        email: 'raquel@gmail.com',
        message: 'This is a test message.'
    }
    
    const finalData = { ...defaultData, ...data }

    cy.get('input[id="firstName"]').type(finalData.firstName)
    cy.get('input[id="lastName"]').type(finalData.lastName)
    cy.get('input[id="email"]').type(finalData.email)
    cy.get('textarea[id="open-text-area"]').type(finalData.message)
    cy.get('button[type="submit"]').click()
    cy.contains('button', 'Send')
})


