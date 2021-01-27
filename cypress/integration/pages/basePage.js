const basePage = {
  goTo(){
    cy.visit(Cypress.config().baseUrl);
  }
}

export default basePage;
