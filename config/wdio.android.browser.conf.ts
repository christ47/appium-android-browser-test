export const config: WebdriverIO.Config = {
    logLevel: 'debug',
    bail: 0,
    baseUrl: 'https://order.jdwetherspoon.com/venue/pubs/95/tables',
    waitforTimeout: 45000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 3 * 60 * 1000, 
    },
    services: [
        [
            'appium',
            {
                args: {
                    relaxedSecurity: true,
                    log: './logs/appium.log',
                },
            },
        ],
    ],
    before: async ()=> {
        if (driver.isAndroid){
            await driver.updateSettings({
                waitForSelectorTimeout: 3 * 1000
            });
        }
    },
    specs: ["../tests/specs/**/*.spec.ts"],
    capabilities: [
        {
            platformName: "Android",
            browserName: "chrome",
            "wdio:maxInstances": 1,
            "appium:deviceName": "PR3CN702LQRY",
            "appium:platformVersion": "13.0",
            "appium:automationName": "UiAutomator2",
            "appium:orientation": "PORTRAIT",
            "appium:newCommandTimeout": 240,
            "wdio:enforceWebDriverClassic": true,
        },
    ],
};
