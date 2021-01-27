import basePage from '../pages/basePage';

const homePage = {

  destinationInput: '#ss',
  inputGuests: " [data-bui-ref='input-stepper-value']",
  checkInBtn: "[data-mode='checkin']",
  checkOutBtn: "[data-mode='checkout']",
  guestsDropdown: '#xp__guests__toggle',
  addBtnGuests:  " [class*='bui-stepper__add-button ']",
  decreaseBtnGuests: " [class*='bui-stepper__subtract-button ']",
  adultsContainer: "[class*='sb-group__field-adults']",
  childrenContainer: "[class*='sb-group-children ']",
  roomsContainer: "[class*='sb-group__field-rooms']",

  getDestinationInputText() {
    return cy.get(this.destinationInput)
             .invoke('attr', 'placeholder');
  },

  getCheckInBtnText() {
    return cy.get("[data-mode='checkin']")
             .invoke('attr', 'data-calendar2-title');
  },

  getCheckOutBtnText() {
    return cy.get("[data-mode='checkout']")
             .invoke('attr', 'data-calendar2-title');
  },

  getGuestsAdultsText() {
    return cy.get('#xp__guests__toggle>.xp__guests__count')
             .find('[data-adults-count]');
  },

  getGuestsChildrenText() {
    return cy.get('#xp__guests__toggle>.xp__guests__count')
             .find('[data-children-count]');
  },

  getGuestsRoomsText() {
    return cy.get('#xp__guests__toggle>.xp__guests__count')
             .find('[data-room-count]');
  },

  clickOnSearchBtn() {
    cy.get('.sb-searchbox__button ')
      .click();
  },

  setDefaultParametersForTravel(destination, startDate, endDate){
    cy.get(this.destinationInput)
      .type(destination);

    cy.get(this.checkInBtn)
      .click();
    cy.get(".bui-calendar")
      .should('be.visible');
    cy.get("span[aria-label='" + startDate + "']")
      .parent()
      .click();
    cy.get("span[aria-label='" + endDate + "']")
      .parent()
      .click();

    cy.get(this.guestsDropdown)
      .click();
    this.setGuestsNumber(this.adultsContainer, 2);
    this.setGuestsNumber(this.childrenContainer, 0);
    this.setGuestsNumber(this.roomsContainer, 2);
  },

  setGuestsNumber(container, guestsNumber){
    cy.get(container + this.inputGuests)
      .invoke('text')
      .then(el => {
        if (el != guestsNumber) {
          if(guestsNumber > el){
            let count = guestsNumber - el;
            for (var i = 0; i < count; i++) {
              cy.get(container + this.addBtnGuests)
                .click();
            }
          } else {
            let count = el - guestsNumber;
            for (var i = 0; i < count; i++) {
              cy.get(container + this.decreaseBtnGuests)
                .click();
            }
          }
        }
      })
  }
};

export default {...basePage, ...homePage};
