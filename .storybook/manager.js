import { addons } from '@storybook/addons'

// Set config to control the layout of Storybook's UI
// https://storybook.js.org/docs/react/configure/features-and-behavior

const defaultConfig = {
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  isToolshown: true,
  theme: undefined,
  selectPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  }
}

const configForUiTest = {
  ...defaultConfig,
  isFullscreen: true,
  isToolshown: false,
}

const config = process.env.STORYBOOK === 'UITEST' ? configForUiTest : defaultConfig

addons.setConfig(config)
