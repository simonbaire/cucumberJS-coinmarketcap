const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const HomePage = require('../pages/home');
const {expect} = require('chai');
const driver = require('../support/env');
const { By } = require('selenium-webdriver');

const home = new HomePage(driver);

Given('I have gone to the coin market app', async function () {
    await driver.get('https://coinmarketcap.com/');
  });

When('I select the option to show results by 20 rows', async function () {
    await home.closeAlert();
    await home.clickFilterRowsDropDown();
    await home.clickShowTwentyRows();
    this.pageContentBefore = await home.getCryptoTableRows();
    console.log(await this.pageContentBefore,  "PAGE CONTENT 1")
});

When('I filter by the PoW Algorithm', async function () {
    await home.clickFilterButton();
    await home.clickAlgorithFilterButton();
    await home.clickPowFilterButton();
});

When('I filter by coins', async function () {
    await home.addFilterOption();
    await home.toggleMinable();
    await home.selectAllCurrencies();
    await home.selectCoins();
});

When('I set a price range', async function () {
    await home.selectPrice();
    await home.setMinPrice();
    await home.setMaxPrice();
});

When('I select the option to show the applied filter results', async function () {
    await home.selectApplyFilter();
    await home.selectShowResults();
    this.pageContentAfter = await home.getCryptoTableRows();

    console.log(await this.pageContentAfter,  "PAGE CONTENT 2")
    expect(this.pageContentAfter.length).to.equal(2)
});

When('I compare the filtered page content with the page content before filtering', async function () {
    expect(this.pageContentBefore.length).to.equal(20)
    expect(this.pageContentAfter.length).to.equal(2)
});