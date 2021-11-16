context("Search CEP", () => {
  it("Enters search page and type a CEP number", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1400, 900);

    cy.get("input[type=number]").type(88010000);
    cy.contains("Buscar pelo CEP").click();
    cy.get("input#city").should("have.value", "Florianópolis");
  });
});
