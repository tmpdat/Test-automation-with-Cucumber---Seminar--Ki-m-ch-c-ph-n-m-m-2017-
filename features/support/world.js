require('geckodriver');
require('node-firefox-driver')
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

function CustomWorld() {
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('firefox')
        .build();
}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld)
})

defineSupportCode(function({setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);
});