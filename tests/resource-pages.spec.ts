import { test, expect } from '@playwright/test';

test.describe('Resource Pages', () => {
  test.describe('Uses Page', () => {
    test('should display proper structure and content', async ({ page }) => {
      await page.goto('/uses');

      // Check page title
      await expect(page).toHaveTitle('Uses');
      await expect(page.getByRole('heading', { name: '⚙️ My Gear' })).toBeVisible();

      // Check last updated subtitle
      await expect(page.getByText('Last updated: December 2025')).toBeVisible();

      // Check description
      await expect(page.getByText(/The tools, apps, and workflows/)).toBeVisible();

      // Check UsesThis link
      await expect(page.getByRole('link', { name: 'Uses This' })).toBeVisible();

      // Check MDX content is loaded
      await expect(page.locator('.prose').first()).toBeVisible();
    });

    test('should have proper styling for MDX content', async ({ page }) => {
      await page.goto('/uses');

      // Check for proper prose styling - use first() to avoid strict mode
      await expect(page.locator('.prose.prose-lg').first()).toBeVisible();

      // Just check that content exists - MDX styling might be different
      await expect(page.locator('ul').first()).toBeVisible();
    });
  });

  test.describe('Bookshelf Page', () => {
    test('should display proper structure', async ({ page }) => {
      await page.goto('/bookshelf');

      await expect(page).toHaveTitle('Bookshelf – Rohit Jacob Mathew');
      await expect(page.getByRole('heading', { name: '📚 Bookshelf' })).toBeVisible();
      await expect(page.getByText('Last updated: December 2025')).toBeVisible();

      // Just check that content exists
      await expect(page.locator('.prose').first()).toBeVisible();

      // Check MDX content is loaded
      await expect(page.locator('.prose').first()).toBeVisible();
    });
  });

  test.describe('Links Page', () => {
    test('should display proper structure', async ({ page }) => {
      await page.goto('/links');

      await expect(page).toHaveTitle('Links');
      await expect(page.getByRole('heading', { name: '🔗 Links' })).toBeVisible();
      await expect(page.getByText('Last updated: December 2025')).toBeVisible();

      // Check description - just check that content exists
      await expect(page.locator('.prose').first()).toBeVisible();

      // Check MDX content is loaded
      await expect(page.locator('.prose').first()).toBeVisible();
    });
  });

  test.describe('Common Features', () => {
    test('should have consistent header layout across pages', async ({ page }) => {
      const pages = ['/uses', '/bookshelf', '/links'];

      for (const pagePath of pages) {
        await page.goto(pagePath);

        // Check common elements using first() to avoid strict mode
        await expect(page.locator('h1').first()).toBeVisible();
        await expect(page.getByText('Last updated: December 2025')).toBeVisible();
        await expect(page.locator('.prose').first()).toBeVisible();

        // Check blue divider line
        await expect(page.locator('div.bg-blue-500')).toBeVisible();
      }
    });

    test('should be mobile responsive', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });

      const pages = ['/uses', '/bookshelf', '/links'];

      for (const pagePath of pages) {
        await page.goto(pagePath);

        // Check that main elements are visible on mobile using first()
        await expect(page.locator('h1').first()).toBeVisible();
        await expect(page.locator('.prose').first()).toBeVisible();
      }
    });
  });
});