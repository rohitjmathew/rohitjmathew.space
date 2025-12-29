import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load and display key elements', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Rohit Jacob Mathew/);
    
    // Check main heading
    await expect(page.getByRole('heading', { name: /Hey, I'm Rohit Jacob Mathew/ })).toBeVisible();
    
    // Check profile image
    await expect(page.getByAltText('Rohit Jacob Mathew')).toBeVisible();
    
    // Check main bio text
    await expect(page.getByText(/Staff Software Engineer building security-first platforms/)).toBeVisible();
    
    // Check main CTA
    await expect(page.getByRole('link', { name: /Learn more about my journey/ })).toBeVisible();
    
    // Check Trellix link
    await expect(page.getByRole('link', { name: 'Trellix' })).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    // Test specific internal page links using exact text to avoid conflicts
    await expect(page.getByRole('link', { name: '✍️ Blog' })).toBeVisible();
    await expect(page.getByRole('link', { name: '📚 Reading List' })).toBeVisible();
    await expect(page.getByRole('link', { name: '🔗 Curated Resources' })).toBeVisible();
    await expect(page.getByRole('link', { name: '⚙️ Things I Use' })).toBeVisible();
    
    // Test navigation to about page
    await page.getByRole('link', { name: /Learn more about my journey/ }).click();
    await expect(page).toHaveURL('/about');
  });

  test('should display Now Playing component', async ({ page }) => {
    // Check if Now Playing component is present - it should show "Not Playing" or a Spotify link
    const nowPlayingText = page.getByText('Not Playing');
    const spotifyElements = page.locator('svg path[fill="#1ED760"]');
    
    // At least one of these should be visible
    const isNowPlayingVisible = await nowPlayingText.isVisible();
    const isSpotifyIconVisible = await spotifyElements.count() > 0;
    
    expect(isNowPlayingVisible || isSpotifyIconVisible).toBe(true);
  });

  test('should have structured data for SEO', async ({ page }) => {
    // Check that structured data script exists
    const structuredDataScript = page.locator('script[type="application/ld+json"]');
    await expect(structuredDataScript).toBeAttached();
    
    // Verify the structured data contains expected information
    const structuredDataContent = await structuredDataScript.textContent();
    expect(structuredDataContent).toContain('Rohit Jacob Mathew');
    expect(structuredDataContent).toContain('Staff Software Development Engineer');
  });

  test('should display external links with correct attributes', async ({ page }) => {
    // Check external links have proper rel attributes
    const trellixLink = page.getByRole('link', { name: 'Trellix' });
    await expect(trellixLink).toHaveAttribute('target', '_blank');
    await expect(trellixLink).toHaveAttribute('rel', 'noreferrer');
    
    const hackerRankLink = page.getByRole('link', { name: 'HackerRank' });
    await expect(hackerRankLink).toHaveAttribute('target', '_blank');
    await expect(hackerRankLink).toHaveAttribute('rel', 'noreferrer');
  });

  test('should be responsive and mobile-friendly', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check that main content is still visible on mobile
    await expect(page.getByRole('heading', { name: /Hey, I'm Rohit Jacob Mathew/ })).toBeVisible();
    await expect(page.getByAltText('Rohit Jacob Mathew')).toBeVisible();
    
    // Check that links are still accessible on mobile
    await expect(page.getByRole('link', { name: /Learn more about my journey/ })).toBeVisible();
  });
});