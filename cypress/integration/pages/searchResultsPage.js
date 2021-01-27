/// <reference types="cypress" />

const searchResultsPage = {

  priceFilterContainer: "#filter_price [class*='bui-checkbox__label filter_item css-checkbox']",
  priceLabel: " .filter_label",
  selectedPrice: "#filter_price [checked='checked'] ~ div > .filter_label",
  starsRateContainer: "#filter_class",
  overlayContainer: "[class*='sr-usp-overlay sr-usp-overlay']",
  hotelStarsContainer: "[class*='c-accommodation-classification-rating'] [class*='bui-rating bui-rating']",
  destinationName: ".sr_card_address_line > .bui-link",

  selectStarsAndOtherRatings(rate) {
    cy.get(this.starsRateContainer + " [data-value='" + rate + "']")
      .click();
    cy.get(this.overlayContainer)
      .should('not.exist');
  },

  selectPriceOption(price) {
    cy.get(this.priceFilterContainer + this.priceLabel)
      .each(elem => {
        if(elem.text().trim().includes(price)) {
          elem.parent().click();
        }
      });
    
    cy.get(this.overlayContainer)
      .should('not.exist');
  },

  checkPriceWasSelected(price) {
    cy.get(this.selectedPrice)
      .invoke('text')
      .should(el => {
        expect(el).to.include(price);
      });
  },

  checkSearchPageContainsCorrectDestination(destination) {
    cy.get(this.destinationName)
      .each(elem => {
          expect(elem.text().trim()).to.include(destination);
      })
  },

  checkStarsRateIsCorrect(rate) {
    cy.get(this.hotelStarsContainer)
      .each(element => {
        let elemChildren = element.children();
        expect(elemChildren).to.have.length(rate);
      })
  }
}

export default searchResultsPage;
