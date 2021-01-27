import homePage from '../pages/homePage';

/// <reference types="cypress" />

describe('Test Home page', () => {
  beforeEach('open page', () => {
    homePage.goTo();
  })

  it('Check elements text', () => {
    homePage.getDestinationInputText()
            .should('contain', 'Where are you going?');

    homePage.getCheckInBtnText()
            .should('contain', 'Check-in');

    homePage.getCheckOutBtnText()
            .should('contain', 'Check-out');

    homePage.getGuestsAdultsText()
            .should((el) => {
              const text = el.text();
              expect(text).to.match(/2 adults/);
            });
    homePage.getGuestsChildrenText()
            .should((el) => {
              const text = el.text();
              expect(text).to.match(/0 children/);
            });
    homePage.getGuestsRoomsText()
            .should((el) => {
              const text = el.text();
              expect(text).to.match(/1 room/);
            });
  });

  it('Enter data for traveling', () => {
    let startDate = '25 January 2021';
    let endDate = '31 January 2021';

    homePage.setDefaultParametersForTravel('Rome', startDate, endDate);
    homePage.clickOnSearchBtn();
  })
})
