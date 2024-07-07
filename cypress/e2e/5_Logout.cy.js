

describe('SauceDemo Logout', () => {
    it('User should log out successfully', () => {
       cy.LoginUI();
       cy.get('#react-burger-menu-btn').click();
       cy.contains('Logout').click();
       cy.url().should('eq', 'https://www.saucedemo.com/');
       
    });
  });
  