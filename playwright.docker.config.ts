import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 2 : 4, // Parallel workers for faster execution
    reporter: [['html', { outputFolder: 'playwright-report' }], ['github'], ['line']],
    outputDir: 'test-results',

    use: {
        baseURL: 'http://localhost:3000',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },

    projects: [
        // All browsers like original - 40 tests × 5 browsers = 200 total executions
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
        {
            name: 'Mobile Chrome',
            use: { ...devices['Pixel 5'] },
        },
        {
            name: 'Mobile Safari',
            use: { ...devices['iPhone 12'] },
        },
    ],

    timeout: 60000,
    expect: { timeout: 15000 },
});