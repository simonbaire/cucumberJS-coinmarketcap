const { Builder } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
driver.manage().window().maximize();

module.exports = driver;