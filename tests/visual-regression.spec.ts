import { test, expect } from '@playwright/test';

// Helper function to prepare page for visual testing
async function preparePageForVisualTest(page: import('@playwright/test').Page) {
    await page.waitForLoadState('networkidle');

    // Apply consistent styling for visual tests
    await page.addStyleTag({
        content: `
            /* Ensure consistent text rendering */
            * { 
                font-smooth: always !important; 
                -webkit-font-smoothing: antialiased !important; 
                -moz-osx-font-smoothing: grayscale !important;
                animation-duration: 0s !important;
                animation-delay: 0s !important;
                transition-duration: 0s !important;
                transition-delay: 0s !important;
            }
            
            /* Hide potentially flaky elements */
            .flaky-element {
                visibility: hidden !important;
            }
            
            /* Ensure consistent font loading */
            body {
                font-display: block !important;
            }
        `
    });

    // Wait for fonts and images to load
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(1500); // Give extra time for fonts and images
}

// Screenshot options for consistent visual comparison
const screenshotOptions = {
    fullPage: true,
    threshold: 0.2, // Allow for slight rendering differences
    animations: 'disabled',
    maxDiffPixels: 1000, // Allow up to 1000 pixels to be different
} as const;

test.describe('Visual Regression Tests', () => {
    test('homepage visual comparison', async ({ page }) => {
        // Mock the Spotify API to return consistent data
        await page.route('/api/now-playing', async route => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    isPlaying: false,
                    title: '',
                    artist: '',
                    album: '',
                    albumImageUrl: '',
                    songUrl: ''
                })
            });
        });

        await page.goto('/');
        await preparePageForVisualTest(page);

        await expect(page).toHaveScreenshot('homepage.png', screenshotOptions);
    });

    test('about page visual comparison', async ({ page }) => {
        await page.goto('/about');
        await preparePageForVisualTest(page);

        await expect(page).toHaveScreenshot('about-page.png', screenshotOptions);
    });

    test('uses page visual comparison', async ({ page }) => {
        await page.goto('/uses');
        await preparePageForVisualTest(page);

        await expect(page).toHaveScreenshot('uses-page.png', screenshotOptions);
    });

    test('responsive design comparison', async ({ page }) => {
        // Test mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });

        const pages = ['/'];

        for (const pagePath of pages) {
            // Mock the Spotify API to return consistent data
            await page.route('/api/now-playing', async route => {
                await route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        isPlaying: false,
                        title: '',
                        artist: '',
                        album: '',
                        albumImageUrl: '',
                        songUrl: ''
                    })
                });
            });

            await page.goto(pagePath);
            await preparePageForVisualTest(page);

            const screenshotName = `mobile-${pagePath.replace('/', 'home').replace('/', '-')}.png`;
            await expect(page).toHaveScreenshot(screenshotName, {
                ...screenshotOptions,
                fullPage: false,
                clip: { x: 0, y: 0, width: 375, height: 800 }
            });
        }
    });

    test('dark mode visual comparison', async ({ page }) => {
        // Mock the Spotify API to return consistent data
        await page.route('/api/now-playing', async route => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    isPlaying: false,
                    title: '',
                    artist: '',
                    album: '',
                    albumImageUrl: '',
                    songUrl: ''
                })
            });
        });

        // Enable dark mode
        await page.emulateMedia({ colorScheme: 'dark' });

        await page.goto('/');
        await preparePageForVisualTest(page);

        await expect(page).toHaveScreenshot('homepage-dark.png', screenshotOptions);
    });

    test('bookshelf page visual comparison', async ({ page }) => {
        await page.goto('/bookshelf');
        await preparePageForVisualTest(page);

        await expect(page).toHaveScreenshot('bookshelf-page.png', screenshotOptions);
    });

    test('links page visual comparison', async ({ page }) => {
        await page.goto('/links');
        await preparePageForVisualTest(page);

        await expect(page).toHaveScreenshot('links-page.png', screenshotOptions);
    });

    test('newsletters page visual comparison', async ({ page }) => {
        await page.goto('/newsletters');
        await preparePageForVisualTest(page);

        await expect(page).toHaveScreenshot('newsletters-page.png', screenshotOptions);
    });

    test('podcasts page visual comparison', async ({ page }) => {
        await page.goto('/podcasts');
        await preparePageForVisualTest(page);

        await expect(page).toHaveScreenshot('podcasts-page.png', screenshotOptions);
    });

    test('404 page visual comparison', async ({ page }) => {
        await page.goto('/non-existent-page');
        await preparePageForVisualTest(page);

        // Hide the animated GIF to prevent instability after standard preparation
        await page.addStyleTag({
            content: `
                /* Hide the animated GIF to prevent instability */
                img[src*="giphy.gif"], img[alt*="Error animation"] {
                    opacity: 0 !important;
                    visibility: hidden !important;
                }
            `
        });

        // Wait for the GIF to be hidden
        await page.waitForTimeout(500);

        await expect(page).toHaveScreenshot('404-page.png', screenshotOptions);
    });
});