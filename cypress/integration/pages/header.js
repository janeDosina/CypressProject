const header = {

  languageBtn: ".bui-avatar__image",
  currencyBtn: "[data-modal-aria-label='Select your currency']",
  closeBtnOnCurrencyModal: ".bui-modal__close",
  selectedCurrency: ".bui-inline-container__end",

  chooseLanguagePage(language) {
    cy.get(this.languageBtn)
      .click();

    cy.get("[title='" + language + "']")
      .then($el => {
        let langHref = $el.attr('hreflang');
        cy.get("[class*='bui-list-ite'][hreflang='" + langHref + "']")
          .click();
      });
  },

  chooseCurrencyPage(currency) {
    cy.get(this.currencyBtn).click();
    cy.get("[data-modal-header-async-url-param*='" + currency + "']")
      .first()
      .click();
      this.checkCurrencyIsCorrect(currency);
    },

    checkCurrencyIsCorrect(currency) {
      cy.get(this.currencyBtn).click();
      cy.get("[data-modal-header-async-url-param*='" + currency + "']")
        .then($el => {
          if(!$el.find(this.selectedCurrency)) {
            chooseCurrencyPage(currency);
          } else {
            cy.get(this.closeBtnOnCurrencyModal)
              .click();
          }
        })
      }
}

export default header;
