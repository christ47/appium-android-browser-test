# Mobile Testing App Framework

This Framework is written in Typescript. It uses Appium and WebDriverIO for local Mobile testing.

This app does not require a running Appium server to execute test.

The test are set to run on a Real Android Device.

## Installation

1. Install all dependencies

```sh
npm install
```

2. Install Appium to your local device. This can be done using [appium-installer](https://github.com/AppiumTestDistribution/appium-installer) 

3. Connect your android device. A widely used method for this is [ADB](https://developer.android.com/tools/adb)

4. Adjust the configuration file for your device

5. Run tests locally
```sh
    npm run android.browser
```


## Test Structure

Test are located in the test file. The Spec file acts as the feature file. This contains all test to be run and the steps needed. The Page Object Files define the Locators and Actions for page objects

## Improvememnts

Accessibility IDs/IDs/AndroidUIAutomatorIDs can be added to elements to make the test app more robust. This would allow for test to path to be maintained assuming the user journey remains the same. Similairly, an improvement in selectors would allow for locators to be easily reused, therefore making methods to be used with the paramaeter.