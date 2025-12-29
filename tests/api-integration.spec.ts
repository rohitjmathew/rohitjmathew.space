import { test, expect } from '@playwright/test';

test.describe('API Integration Tests', () => {
    test('should handle Spotify API gracefully', async ({ page }) => {
        await page.goto('/');

        // Wait for page to load
        await page.waitForLoadState('domcontentloaded');

        // Check that Now Playing component is present
        const spotifyIcon = page.locator('svg path[fill="#1ED760"]');
        await expect(spotifyIcon).toBeVisible();

        // Should show either "Not Playing" or a song/artist
        const nowPlayingText = page.getByText('Not Playing');
        const spotifyLink = page.locator('a[href*="spotify.com"]');

        // At least one should be visible
        const isTextVisible = await nowPlayingText.isVisible();
        const isLinkVisible = await spotifyLink.count() > 0;

        expect(isTextVisible || isLinkVisible).toBe(true);
    });

    test('should handle API failures gracefully', async ({ page }) => {
        // Block the API endpoint
        await page.route('/api/now-playing', route => {
            route.fulfill({
                status: 500,
                contentType: 'application/json',
                body: JSON.stringify({ error: 'API Error' })
            });
        });

        await page.goto('/');
        await page.waitForLoadState('domcontentloaded');

        // Should still show the Spotify icon and graceful fallback
        const spotifyIcon = page.locator('svg path[fill="#1ED760"]');
        await expect(spotifyIcon).toBeVisible();

        // Should show fallback text
        await expect(page.getByText('Spotify').first()).toBeVisible();
    });

    test('should handle slow API responses', async ({ page }) => {
        // Delay the API response
        await page.route('/api/now-playing', async route => {
            await new Promise(resolve => setTimeout(resolve, 2000)); // 2s delay
            route.continue();
        });

        await page.goto('/');

        // Page should still load without the API data
        await expect(page.getByRole('heading', { name: /Hey, I'm Rohit Jacob Mathew/ })).toBeVisible();

        // Spotify component should be present but may show loading state
        const spotifyIcon = page.locator('svg path[fill="#1ED760"]');
        await expect(spotifyIcon).toBeVisible();
    });
});