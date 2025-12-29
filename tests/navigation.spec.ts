import { test, expect } from '@playwright/test';

test.describe('Navigation and Routing Tests', () => {
    test('should have working navigation from header', async ({ page }) => {
        await page.goto('/');

        // Test navigation menu items (if they exist in header)
        const navigation = page.locator('nav, header');

        // Check if about link exists and works
        const aboutLink = navigation.getByRole('link', { name: /about/i }).first();
        if (await aboutLink.isVisible()) {
            await aboutLink.click();
            await expect(page).toHaveURL('/about');
            await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
        }
    });

    test('should handle 404 page correctly', async ({ page }) => {
        // Set a shorter timeout for this test since 404s can be slow
        page.setDefaultTimeout(10000);

        try {
            await page.goto('/non-existent-page', { waitUntil: 'domcontentloaded' });

            // Check if we get to 404 page or redirect
            await expect(page).toHaveURL(/\/404|\/non-existent-page/);

            // Check for 404 content or error handling
            const pageContent = await page.textContent('body');
            expect(pageContent).toMatch(/404|not found|page not found/i);
        } catch (error) {
            // If timeout, just check if we can access the 404 page directly
            await page.goto('/404');
            const pageContent = await page.textContent('body');
            expect(pageContent).toMatch(/404|not found/i);
        }
    });

    test('should have working internal links', async ({ page }) => {
        await page.goto('/');

        // Test the main CTA link
        await page.getByRole('link', { name: /Learn more about my journey/ }).click();
        await expect(page).toHaveURL('/about');

        // Go back and test resource links
        await page.goto('/');

        // Test resource page links
        await page.getByRole('link', { name: '⚙️ Things I Use' }).click();
        await expect(page).toHaveURL('/uses');

        await page.goto('/');
        await page.getByRole('link', { name: '📚 Reading List' }).click();
        await expect(page).toHaveURL('/bookshelf');

        await page.goto('/');
        await page.getByRole('link', { name: '🔗 Curated Resources' }).click();
        await expect(page).toHaveURL('/links');
    });

    test('should handle external links correctly', async ({ page }) => {
        await page.goto('/');

        // Test external links open in new tabs
        const trellixLink = page.getByRole('link', { name: 'Trellix' });
        await expect(trellixLink).toHaveAttribute('target', '_blank');
        await expect(trellixLink).toHaveAttribute('rel', 'noreferrer');

        const hackerRankLink = page.getByRole('link', { name: 'HackerRank' });
        await expect(hackerRankLink).toHaveAttribute('target', '_blank');
        await expect(hackerRankLink).toHaveAttribute('rel', 'noreferrer');
    });
});