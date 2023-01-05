const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/config', `${file}.json`)

  if(!fs.existsSync(pathToConfigFile))
  {
    console.log("No custom config file found.")
    return {};
  }
  return fs.readJson(pathToConfigFile)
}


module.exports = defineConfig({
  projectId: '4ydidw',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //use the specific the config file, if the file exits, use it, otherwise return nothing
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)
    },
    //specify test files with specPattern
  specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",

  excludeSpecPattern : "cypress/e2e/other/*.js ",
  baseUrl : "http://www.webdriveruniversity.com/",
  chromeWebSecurity: false,
  experimentalSessionAndOrigin: true,
  defaultCommandTimeout: 1000,
  pageLoadTimeout : 40000,
  screenshotOnRunFailure : true,
  trashAssetsBeforeRuns: true,
  viewportHeight : 1080,
  viewportWidth : 1920,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  retries : {
    runMode: 0,
    //openMode : open cypress app retry 2 times
    openMode: 1
  },
  env: {
    first_name : "Sarah",
    webdriveruni_homepage : "http://www.webdriveruniversity.com/"
  }

  },
  
});
