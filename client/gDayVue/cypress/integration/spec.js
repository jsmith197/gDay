describe("gDay", () => {
  it("Should display and function correctly", () => {
    cy.visit("http://foamy-mass.surge.sh/");

    cy.url().should('contain', "http://foamy-mass.surge.sh/");
    cy.get("#app");
    cy.get("#foot");
    cy.get("#login");
    cy.get("#nav-item");
    cy.get("#top");
    cy.get("#line");
    });
});