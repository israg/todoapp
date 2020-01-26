exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
    logLevel: 'silent',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    // ====================
    // Appium Configuration
    // ====================
    services: ['appium'],
    // Appium Service config
    // see details: https://webdriver.io/docs/appium-service.html
    appium: {
        command: 'appium',
    },
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    onPrepare: function (capabilities) {
        console.log('<<< TO-DO App Test Started >>>')
    },

    before: function () {
        console.log('before start')
    },

    beforeSuite: function (suite) {
        console.log('suite started');
    },

    afterSuite: function (suite) {
        console.log('suited finished');
    },

    onComplete: function () {
        console.log('<<< TO-DO App Test Finished >>>')
    }

}
