import homePage from '../pages/homePage';
import searchResultsPage from '../pages/searchResultsPage';
import header from '../pages/header';

/// <reference types="cypress" />

describe('Check that search page', () => {
  beforeEach('open page', () => {
    homePage.goTo();

    homePage.setDefaultParametersForTravel('Rome', '25 January 2021', '31 January 2021');
    homePage.clickOnSearchBtn();

    header.chooseLanguagePage("English (US)");
    header.chooseCurrencyPage("USD")
  });

  it('Check that search page contains Romes hotels', () => {
    searchResultsPage.checkSearchPageContainsCorrectDestination('Rome');
  });

  it('Filter hotels by price and check the result', () => {
    searchResultsPage.selectPriceOption(243);
    searchResultsPage.checkPriceWasSelected(243);
  });

  it("Filter by 'Stars and other ratings' and check the results", () => {
    searchResultsPage.selectStarsAndOtherRatings(4);
    searchResultsPage.checkStarsRateIsCorrect(4);
  })
});
