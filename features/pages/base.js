// base page that can contain common elements amongst different page object classes

const { By } = require('selenium-webdriver');

class basePage {
    constructor(driver) {
        this.driver = driver;
    }
}


module.exports = basePage;