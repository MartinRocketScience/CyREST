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

Cypress.Commands.add('GetOAuth2Token', () => {
    const client_id = Cypress.env('client_id');
    const client_secret = Cypress.env('client_secret');
  
    return cy.request({
        method: 'POST',
        url: '/oauth/token',
        body: {
            grant_type: 'client_credentials',
            client_id: client_id,
            client_secret: client_secret
        },
        form: true
    }).then((response) => {
        expect(response.body).to.have.property('access_token');
        Cypress.env('AUTH_TOKEN', response.body.access_token); 
    });
});
  