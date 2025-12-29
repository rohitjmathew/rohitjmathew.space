import { test, expect } from '@playwright/test';

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
            `
        });

        // Wait for dynamic content to settle
        await page.waitForTimeout(1000);

        await expect(page).toHaveScreenshot('homepage.png', {
            fullPage: true,
            threshold: 0.8,
            animations: 'disabled'
        });
    });

    test('about page visual comparison', async ({ page }) => {
        await page.goto('/about');
        await page.waitForLoadState('networkidle');

        await page.addStyleTag({
            content: `
                * { 
                    font-smooth: always !important; 
                    -webkit-font-smoothing: antialiased !important;
                    -moz-osx-font-smoothing: grayscale !important;
                    animation-duration: 0s !important;
                    animation-delay: 0s !important;
                    transition-duration: 0s !important;
                    transition-delay: 0s !important;
                }
            `
        });

        await expect(page).toHaveScreenshot('about-page.png', {
            fullPage: true,
            threshold: 0.8,
            animations: 'disabled'
        });
    });

    test('uses page visual comparison', async ({ page }) => {
        await page.goto('/uses');
        await page.waitForLoadState('networkidle');

        await page.addStyleTag({
            content: `
                * { 
                    font-smooth: always !important; 
                    -webkit-font-smoothing: antialiased !important;
                    -moz-osx-font-smoothing: grayscale !important;
                    animation-duration: 0s !important;
                    animation-delay: 0s !important;
                    transition-duration: 0s !important;
                    transition-delay: 0s !important;
                }
            `
        });

        await expect(page).toHaveScreenshot('uses-page.png', {
            fullPage: true,
            threshold: 0.8,
            animations: 'disabled'
        });
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
            await page.waitForLoadState('networkidle');

            await page.addStyleTag({
                content: `
                    * { 
                        font-smooth: always !important; 
                        -webkit-font-smoothing: antialiased !important;
                        -moz-osx-font-smoothing: grayscale !important;
                        animation-duration: 0s !important;
                        animation-delay: 0s !important;
                        transition-duration: 0s !important;
                        transition-delay: 0s !important;
                    }
                `
            });

            // Wait for dynamic content to settle
            await page.waitForTimeout(1000);

            const screenshotName = `mobile-${pagePath.replace('/', 'home').replace('/', '-')}.png`;
            await expect(page).toHaveScreenshot(screenshotName, {
                fullPage: false,
                clip: { x: 0, y: 0, width: 375, height: 800 },
                threshold: 0.8,
                animations: 'disabled'
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
        await page.waitForLoadState('networkidle');

        await page.addStyleTag({
            content: `
                * { 
                    font-smooth: always !important; 
                    -webkit-font-smoothing: antialiased !important;
                    -moz-osx-font-smoothing: grayscale !important;
                    animation-duration: 0s !important;
                    animation-delay: 0s !important;
                    transition-duration: 0s !important;
                    transition-delay: 0s !important;
                }
            `
        });

        // Wait for dynamic content to settle
        await page.waitForTimeout(1000);

        await expect(page).toHaveScreenshot('homepage-dark.png', {
            fullPage: true,
            threshold: 0.8,
            animations: 'disabled'
        });
    });

    test('bookshelf page visual comparison', async ({ page }) => {
        await page.goto('/bookshelf');
        await page.waitForLoadState('networkidle');

        await page.addStyleTag({
            content: `
                * { 
                    font-smooth: always !important; 
                    -webkit-font-smoothing: antialiased !important;
                    -moz-osx-font-smoothing: grayscale !important;
                    animation-duration: 0s !important;
                    animation-delay: 0s !important;
                    transition-duration: 0s !important;
                    transition-delay: 0s !important;
                }
            `
        });

        await expect(page).toHaveScreenshot('bookshelf-page.png', {
            fullPage: true,
            threshold: 0.8,
            animations: 'disabled'
        });
    });

    test('links page visual comparison', async ({ page }) => {
        await page.goto('/links');
        await page.waitForLoadState('networkidle');

        await page.addStyleTag({
            content: `
                * { 
                    font-smooth: always !important; 
                    -webkit-font-smoothing: antialiased !important;
                    -moz-osx-font-smoothing: grayscale !important;
                    animation-duration: 0s !important;
                    animation-delay: 0s !important;
                    transition-duration: 0s !important;
                    transition-delay: 0s !important;
                }
            `
        });

        await expect(page).toHaveScreenshot('links-page.png', {
            fullPage: true,
            threshold: 0.8,
            animations: 'disabled'
        });
    });

    test('newsletters page visual comparison', async ({ page }) => {
        await page.goto('/newsletters');
        await page.waitForLoadState('networkidle');

        await page.addStyleTag({
            content: `
                * { 
                    font-smooth: always !important; 
                    -webkit-font-smoothing: antialiased !important;
                    -moz-osx-font-smoothing: grayscale !important;
                    animation-duration: 0s !important;
                    animation-delay: 0s !important;
                    transition-duration: 0s !important;
                    transition-delay: 0s !important;
                }
            `
        });

        await expect(page).toHaveScreenshot('newsletters-page.png', {
            fullPage: true,
            threshold: 0.8,
            animations: 'disabled'
        });
    });

    test('podcasts page visual comparison', async ({ page }) => {
        await page.goto('/podcasts');
        await page.waitForLoadState('networkidle');

        await page.addStyleTag({
            content: `
                * { 
                    font-smooth: always !important; 
                    -webkit-font-smoothing: antialiased !important;
                    -moz-osx-font-smoothing: grayscale !important;
                    animation-duration: 0s !important;
                    animation-delay: 0s !important;
                    transition-duration: 0s !important;
                    transition-delay: 0s !important;
                }
            `
        });

        await expect(page).toHaveScreenshot('podcasts-page.png', {
            fullPage: true,
            threshold: 0.8,
            animations: 'disabled'
        });
    });

    test('404 page visual comparison', async ({ page }) => {
        await page.goto('/non-existent-page');
        await page.waitForLoadState('networkidle');

        await page.addStyleTag({
            content: `
                /* Hide the animated GIF to prevent instability */
                img[src*="giphy.gif"], img[alt*="Error animation"] {
                    opacity: 0 !important;
                    visibility: hidden !important;
                }
                
                * { 
                    font-smooth: always !important; 
                    -webkit-font-smoothing: antialiased !important;
                    -moz-osx-font-smoothing: grayscale !important;
                    animation-duration: 0s !important;
                    animation-delay: 0s !important;
                    transition-duration: 0s !important;
                    transition-delay: 0s !important;
                }
            `
        });

        // Wait for the GIF to be hidden
        await page.waitForTimeout(1000);

        await expect(page).toHaveScreenshot('404-page.png', {
            fullPage: true,
            threshold: 0.8,
            animations: 'disabled'
        });
    });
});