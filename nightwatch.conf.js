const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

const config = {
  src_folders: [
    './src/__tests__/e2e/nightwatch.js'
  ],
  output_folder: 'reports',
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
      'webdriver.gecko.driver': geckodriver.path
    }
  },
  test_workers: {
    enabled: true,
    workers: 'auto'
  },
  test_settings: {
    default: {
      screenshots: {
        enabled: false
      },
      globals: {
        waitForConditionTimeout: 5000
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        nativeEvents: true
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        nativeEvents: true
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        nativeEvents: true
      }
    },
    safari: {
      desiredCapabilities: {
        browserName: 'safari',
        javascriptEnabled: true,
        acceptSslCerts: true,
        nativeEvents: true
      }
    }
  }
};

module.exports = config;
