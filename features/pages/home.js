// Home page containing elements for the home page
const basePage = require('../pages/base');
const { By,Key, until } = require('selenium-webdriver');

class HomePage extends basePage {
    constructor(driver) {
        super(driver);
    }

    // elements located using BY
    alertCross = By.className("gv-close");
    tableControlArea = By.css(".sc-aef7b723-0.dDQUel.table-control-area");
    showTwentyRows = By.xpath("//button[contains(.,'20')]");
    cryptoTableRows = By.css("tbody > tr");
    algorithmFilter = By.css("li:nth-child(2) > div > span > button");
    powFilterOption = By.css("div.tippy-content > div > div > div:nth-child(1) > ul > li:nth-child(5)");

    filterArea = By.css(".sc-458448f9-0.fsDYiB");
    mineable = By.css("#mineable > span");
    allCurrencies = By.css(".filter-area > div:nth-child(1) > button");
    coins = By.css("div.sc-481879dc-0.hGTtWz.cmc-options > div:nth-child(2) > button");
    price = By.css(".filter-area > div:nth-child(3) > button");
    minPrice = By.css("div.cmc-input-row > input:nth-child(1)");
    maxPrice = By.css("div.cmc-input-row > input:nth-child(3)");
    applyFilter = By.css(".glxMF.cmc-filter-button");
    showResults = By.css(".cXksaI.cmc-filter-button");

    // functions to opperate in home page
    async closeAlert(){
        await this.driver.wait(until.elementLocated(this.alertCross));
        await this.driver.findElement(this.alertCross).click();
    }

    async clickFilterRowsDropDown(){
        await this.driver.wait(until.elementLocated(this.tableControlArea));
        const el = await this.driver.findElement(this.tableControlArea);
        await el.findElement(By.css(".sc-aef7b723-0.sc-dae82938-0.coScOT")).click()
    }

    async clickShowTwentyRows(){
        await this.driver.wait(until.elementLocated(this.showTwentyRows));
        await this.driver.findElement(this.showTwentyRows).click();
    }

    async getCryptoTableRows(){
        // TODO
        // I run of time so planning to remove sleep and investigate why selenium is not waiting for element
        // to load before executing next lines code to iterate of rows
        await this.driver.sleep(4000)
        await this.waitUntilElementLoadedAndDisplayed(this.cryptoTableRows)
        const items = await this.driver.findElements(this.cryptoTableRows);
        const itemsArray = [];
        await console.log('ELEMENT FOUND', itemsArray.length )
        await Promise.all(await items.map(async (item) => {
            let  itemsText;
            await item.getText().then(function (value) {
                itemsText = value;
                itemsArray.push(itemsText.replace(/[\n\/\\]/g, ' '))
            })
        }));
        return itemsArray;
    }

    async waitUntilElementLoadedAndDisplayed(locator){
        const locatorValue = JSON.stringify(locator);
        this.driver.wait(until.elementLocated(locator), 55000, `Element not located: ${locatorValue}`);
        this.driver.wait(until.elementIsVisible(this.driver.findElement(locator)), 55000,
            `Element not visible: ${locatorValue}`);

        return this.driver.findElement(locator);
    }

    async clickFilterButton(){
        await this.driver.wait(until.elementLocated(this.tableControlArea));
        const el = await this.driver.findElement(this.tableControlArea);
        await el.findElement(By.css(".sc-a4a6801b-0.gNHIvn.sc-c8c9e58f-0.eTWSGQ.table-control-filter")).click()
    }

    clickAlgorithFilterButton = async () => {
        await this.driver.wait(until.elementLocated(this.algorithmFilter));
        await this.driver.findElement(this.algorithmFilter).click();
    }

    clickPowFilterButton = async () => {
        await this.driver.wait(until.elementLocated(this.powFilterOption));
        await this.driver.findElement(this.powFilterOption).click();
    }

    addFilterOption = async () => {
        await this.driver.wait(until.elementLocated(this.filterArea));
        const el = await this.driver.findElement(this.filterArea);
        await el.findElement(By.css("div > div:nth-child(1) > ul > li:nth-child(5) > button")).click()
    }


    toggleMinable = async () => {
        await this.driver.wait(until.elementLocated(this.mineable));
        await this.driver.findElement(this.mineable).click();
    }

    selectAllCurrencies = async () => {
        await this.driver.wait(until.elementLocated(this.allCurrencies));
        await this.driver.findElement(this.allCurrencies).click();
    }

    selectCoins = async () => {
        await this.driver.wait(until.elementLocated(this.coins));
        await this.driver.findElement(this.coins).click();
    }

    selectPrice = async () => {
        await this.driver.wait(until.elementLocated(this.price));
        await this.driver.findElement(this.price).click();
    }

    setMinPrice = async () => {
        await this.driver.wait(until.elementLocated(this.minPrice));
        await this.driver.findElement(this.minPrice).sendKeys('100');
    }

    setMaxPrice = async () => {
        await this.driver.wait(until.elementLocated(this.maxPrice));
        await this.driver.findElement(this.maxPrice).sendKeys('10000');
    }

    selectApplyFilter = async () => {
        await this.driver.wait(until.elementLocated(this.applyFilter));
        await this.driver.findElement(this.applyFilter).click();
    }

    selectShowResults = async () => {
        await this.driver.wait(until.elementLocated(this.showResults));
        await this.driver.findElement(this.showResults).click();
    }
}

module.exports = HomePage;