webdriver-js-example
Contains example cucumber tests using https://coinmarketcap.com/
Dependencies

Chrome version 107

Language Runtimes

Node.js 19.0.0 - Recommended way to manage Node versions is [nvm][].
Usage

In order to run these locally make sure you have performed the following:

$ npm install
$ npm test

Limitations

Currently only works with chrome, need to configure it to work with multiple browsers and remote browsers (browserstack)
Create helpers and remove some code from step definitions so code can be easily reused.
Set up bash script for integrating with ci pipeline
Set up parrallel test run
Would be good to set up headless tests to make things faster
Change console output to display features that have passed and failed rather than by step
Some error handling required
add reporting after running tests