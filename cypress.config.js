const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://jsonplaceholder.typicode.com',
  },
});