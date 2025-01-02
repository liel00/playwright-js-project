const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    timeout: 30000, // Maximum time one test can run, in milliseconds
    retries: 1, // Number of times to retry a test if it fails
    workers: 3, // Number of parallel workers to run tests
    reporter: [['list'], ['html', { outputFolder: 'test-results', open: 'never' }]], // Format and location of test results
    projects: [
        {
            name: 'Chromium',
            use: { 
                ...devices['Desktop Chrome'],
                headless: false, // Run tests in headless mode or not
                screenshot: 'on', // Take screenshots on every step
                video: 'retain-on-failure', // Retain video recordings only on test failure
                ignoreHTTPSErrors: true, // Ignore HTTPS errors
                trace: 'retain-on-failure', // Retain trace files only on test failure
                viewport: { width: 1280, height: 720 }, // Set browser viewport size
                geolocation: { longitude: 12.4924, latitude: 41.8902 }, // Set geolocation (example: Rome)
                outputDir: 'test-results/screenshots', // Directory for storing test results and screenshots
            },
        },
        {
            name: 'Firefox',
            use: { 
                ...devices['Desktop Firefox'],
                headless: false, // Run tests in headless mode or not
                screenshot: 'on', // Take screenshots on every step
                video: 'retain-on-failure', // Retain video recordings only on test failure
                ignoreHTTPSErrors: true, // Ignore HTTPS errors
                trace: 'retain-on-failure', // Retain trace files only on test failure
                viewport: { width: 1280, height: 720 }, // Set browser viewport size
                geolocation: { longitude: 12.4924, latitude: 41.8902 }, // Set geolocation (example: Rome)
                outputDir: 'test-results/screenshots', // Directory for storing test results and screenshots
            },
        },
        {
            name: 'WebKit',
            use: { 
                ...devices['Desktop Safari'],
                headless: false, // Run tests in headless mode or not
                screenshot: 'on', // Take screenshots on every step
                video: 'retain-on-failure', // Retain video recordings only on test failure
                ignoreHTTPSErrors: true, // Ignore HTTPS errors
                trace: 'retain-on-failure', // Retain trace files only on test failure
                viewport: { width: 1280, height: 720 }, // Set browser viewport size
                geolocation: { longitude: 12.4924, latitude: 41.8902 }, // Set geolocation (example: Rome)
                outputDir: 'test-results/screenshots', // Directory for storing test results and screenshots
            },
        },
        {
            name: 'Pixel 5',
            use: {
                ...devices['Pixel 5'],
                headless: false, // Run tests in headless mode or not
                screenshot: 'on', // Take screenshots on every step
                video: 'retain-on-failure', // Retain video recordings only on test failure
                ignoreHTTPSErrors: true, // Ignore HTTPS errors
                trace: 'retain-on-failure', // Retain trace files only on test failure
                outputDir: 'test-results/screenshots', // Directory for storing test results and screenshots
            },
        },
        {
            name: 'iPhone 11',
            use: {
                ...devices['iPhone 11'],
                headless: false, // Run tests in headless mode or not
                screenshot: 'on', // Take screenshots on every step
                video: 'retain-on-failure', // Retain video recordings only on test failure
                ignoreHTTPSErrors: true, // Ignore HTTPS errors
                trace: 'retain-on-failure', // Retain trace files only on test failure
                outputDir: 'test-results/screenshots', // Directory for storing test results and screenshots
            },
        }
    ],
    use: {
        baseURL: 'https://www.automationexercise.com/', // Base URL for the application under test
    },
});
