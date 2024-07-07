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

//import get from 'loadash/get';


//Custom command for login using valid credentials to can be reused in testscripts when required

Cypress.Commands.add('LoginUI', () => {
    cy.visit('/', {onBeforeLoad: (win) => {win.fetch = null}}) //Ref: https://github.com/cypress-io/cypress/issues/95#issuecomment-281273126
    cy.get('#user-name').type("standard_user");
    cy.get('#password').type("secret_sauce");
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html') ;
  })

  Cypress.Commands.add('FilterbyPriceAscending', () => {
    cy.LoginUI();
    cy.get('.product_sort_container').should('exist');
    cy.get('.product_sort_container').select('lohi');
    cy.get('.active_option').should('have.text', 'Price (low to high)')
  })