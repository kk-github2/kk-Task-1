describe('Filter by price', () => {
    it('Filters products by price from low to high', () => {
      cy.LoginUI();
      cy.FilterbyPriceAscending();
      });
  });


