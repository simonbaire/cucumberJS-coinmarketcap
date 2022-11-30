var {After, Before, setDefaultTimeout} = require('cucumber');
const driver = require('.//env');

setDefaultTimeout(60 * 10000);

// Synchronous
Before( function () {
});

// Asynchronous Promise
After(async function () {
  // Assuming this.driver is a selenium webdriver
  await driver.quit();
});