describe("Appeared Elements", () => {
  it("Is Search Bar Exist?", () => {
    cy.visit("http://localhost:19006/");
    cy.get("[data-testid=stocks-loader]").should("be.visible");
    cy.wait(4000);
    cy.get("[data-testid=stocks-loader]").should("not.exist");
    cy.get("[data-testid=searchbar-input]").should("be.visible");
  });
});
