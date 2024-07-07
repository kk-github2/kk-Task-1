describe('Checkout', () => {
    it('Checkout and complete purchase', () => {
      cy.LoginUI();
      cy.FilterbyPriceAscending();
      cy.log('Firstly check that there are more than 2 items to be added to cart')
      cy.get('.inventory_item').should('have.length.gt', 2).then(($products) => {
        if ($products.length >= 2) {
          cy.wrap($products.get(0)).find('.btn_primary').click()
          cy.wrap($products.get(1)).find('.btn_primary').click()
        } 
        else {
            cy.log('There are less than 2 items to add to cart.')
        }
        cy.log('Verify that the shopping cart icon now shows 2 items')
        cy.get('.shopping_cart_badge').should('have.text', '2')
        cy.log('First 2 products sorted by price(low to high) are now added to the cart')
        cy.get('.shopping_cart_badge').should('have.text', '2').click();
        cy.get('#checkout').should('have.text', 'Checkout').click();
        cy.url().should('include', '/checkout-step-one.html') ;
        cy.get('#first-name').type("Jane");
        cy.get('#last-name').type("Smith");
        cy.get('#postal-code').type("2315");
        cy.get('#continue').click();
        cy.url().should('include', '/checkout-step-two.html') ;
        cy.contains('SauceCard #').should('exist');
        cy.contains('Total: $').should('exist');
        cy.get('#finish').click();
        cy.get('img.pony_express').should('have.attr', 'src').and('include', 'data:image/png;base64,');
        cy.contains('Thank you for your order').should('exist');


    })
      });
  });



