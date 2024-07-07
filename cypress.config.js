const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {},
    supportFile: 'cypress/support/e2e.js',
    "chromeWebSecurity": false,
    experimentalRunAllSpecs: true
  },
});
