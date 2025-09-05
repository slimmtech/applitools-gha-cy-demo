const { defineConfig } = require("cypress");
const eyesPlugin = require("@applitools/eyes-cypress");
module.exports = eyesPlugin(
  defineConfig({
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "cy-reporter-config.json",
    },
    e2e: {
      baseUrl: "https://applitools.com",
      viewportWidth: 1280,
      viewportHeight: 720,
      defaultCommandTimeout: 8000,
      requestTimeout: 15000,
      responseTimeout: 15000,
      pageLoadTimeout: 60000,
      retries: {
        runMode: 0,
        openMode: 0,
      },
      video: true,
      videoCompression: true,
    },
  }),
);
