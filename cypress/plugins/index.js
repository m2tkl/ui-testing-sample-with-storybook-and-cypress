/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (!browser.isHeadless) {
      return
    }

    if (browser.name === 'electron') {
      launchOptions.preferences['width'] = 1920
      launchOptions.preferences['height'] = 1080
      launchOptions.preferences['resizable'] = false
      return launchOptions
    }

    if (browser.name === 'chrome') {
      launchOptions.args.push('--window-size=1920,1080')
      return launchOptions
    }

  })

  addMatchImageSnapshotPlugin(on, config)
}
