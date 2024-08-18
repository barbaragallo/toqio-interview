// configuring plugin and e2e parameters

const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://toqio.co/",
    specPattern: "**/*.feature",
    viewportHeight: 940,
    viewportWidth: 1280,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
  },
});
