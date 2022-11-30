## Usage
webdriver-js-example
Contains example cucumber tests using https://coinmarketcap.com/
Dependencies

Chrome version 107

Language Runtimes

Node.js 19.0.0 - Recommended way to manage Node versions is [nvm][].
Usage

In order to run these locally make sure you have performed the following:

```bash
$ npm install
$ npm test
```

### Limitations

1. Currently only works with chrome, need to configure it to work with multiple browsers and remote browsers (browserstack)
2. Create helpers and remove some code from step definitions so code can be easily reused.
3. Set up bash script for integrating with ci pipeline
4. Set up parrallel test run
5. Would be good to set up headless tests to make things faster
6. Change console output to display features that have passed and failed rather than by step
7. Some error handling required
8. add reporting after running tests