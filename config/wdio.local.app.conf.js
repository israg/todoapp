const { config } = require('./wdio.conf');

// ============
// Specs
// ============
config.specs = [
    './test/specs/**/*.spec.js',
];

config.suites = {
    task: [
        './test/specs/task/*.spec.js',
    ],
};


config.exclude = [
    //'./test/specs/task/*.spec.js'
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        deviceName: 'emulator-5554',
        platformVersion: '9.0',
        orientation: 'PORTRAIT',
        automationName: 'UiAutomator2',
        app: '/Users/isranarman/Desktop/app-mock-debug.apk',
        noReset: false,
        newCommandTimeout: 240,
        autoGrantPermissions: true,
    },
];

exports.config = config;