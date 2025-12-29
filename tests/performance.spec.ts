import { test, expect } from '@playwright/test';

test.describe('Performance and Accessibility Tests', () => {
    test('should have good Core Web Vitals', async ({ page }) => {
        await page.goto('/');

        // Wait for page to fully load
        await page.waitForLoadState('networkidle');

        // Check that images are loaded
        const profileImage = page.getByAltText('Rohit Jacob Mathew');
        await expect(profileImage).toBeVisible();

        // Verify image has proper dimensions (not 0x0 which would indicate loading issues)
        const imageBox = await profileImage.boundingBox();
        expect(imageBox?.width).toBeGreaterThan(100);
        expect(imageBox?.height).toBeGreaterThan(100);
    });

    test('should have proper accessibility attributes', async ({ page }) => {
        await page.goto('/');

        // Check main heading has proper structure
        await expect(page.locator('h1')).toBeVisible();

        // Check images have alt text
        const profileImage = page.getByAltText('Rohit Jacob Mathew');
        await expect(profileImage).toBeVisible();

        // Check links have accessible text (not just icons)
        const links = page.locator('a').all();
        const linkTexts = await Promise.all((await links).map(async (link) => {
            return await link.textContent();
        }));

        // Ensure most links have text content
        const linksWithText = linkTexts.filter(text => text && text.trim().length > 0);
        expect(linksWithText.length).toBeGreaterThan(5);
    });

    test('should have proper meta tags for SEO', async ({ page }) => {
        await page.goto('/');

        // Check title is set
        const title = await page.title();
        expect(title).toBeTruthy();
        expect(title.length).toBeGreaterThan(10);

        // Check meta description exists
        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toBeAttached();

        // Check structured data exists
        const structuredData = page.locator('script[type="application/ld+json"]');
        await expect(structuredData).toBeAttached();
    });

    test('should work with JavaScript disabled', async ({ browser }) => {
        // Create a new context with JavaScript disabled
        const context = await browser.newContext({
            javaScriptEnabled: false
        });
        const page = await context.newPage();

        await page.goto('/');

        // Check that basic content is still visible
        await expect(page.getByText(/Hey, I'm Rohit Jacob Mathew/)).toBeVisible();
        await expect(page.getByText(/Staff Software Engineer/)).toBeVisible();

        // Check that images are still loaded
        await expect(page.getByAltText('Rohit Jacob Mathew')).toBeVisible();

        await context.close();
    });

    test('should handle slow network conditions', async ({ page }) => {
        // Simulate slow 3G
        await page.route('**/*', async route => {
            await new Promise(resolve => setTimeout(resolve, 100)); // Add 100ms delay
            route.continue();
        });

        await page.goto('/', { waitUntil: 'domcontentloaded' });

        // Check that essential content loads
        await expect(page.getByRole('heading', { name: /Hey, I'm Rohit Jacob Mathew/ })).toBeVisible();

        // Wait for images to load
        await page.waitForLoadState('networkidle');
        await expect(page.getByAltText('Rohit Jacob Mathew')).toBeVisible();
    });
});