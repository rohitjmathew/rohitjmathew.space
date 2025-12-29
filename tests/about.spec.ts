import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('should load and display all main sections', async ({ page }) => {
    // Check page title and heading
    await expect(page).toHaveTitle(/About.*Rohit Jacob Mathew/);
    await expect(page.locator('h1')).toContainText('About Me');
    
    // Check main sections exist
    await expect(page.getByText('Executive Summary')).toBeVisible();
    await expect(page.getByText('What I Work On Today')).toBeVisible();
    await expect(page.getByText('Scaling Systems in the Real World')).toBeVisible();
    await expect(page.getByText('Identity, Security & Privacy')).toBeVisible();
    await expect(page.getByText('Developer Experience & Knowledge Sharing')).toBeVisible();
    await expect(page.getByText('Beyond Work')).toBeVisible();
    
    // Check the separate sections at the bottom
    await expect(page.getByRole('heading', { name: '🎤 Talks' })).toBeVisible();
    await expect(page.getByRole('heading', { name: '📄 Research Papers' })).toBeVisible(); 
    await expect(page.getByRole('heading', { name: '🚀 Projects' })).toBeVisible();
  });

  test('should have proper card layout and styling', async ({ page }) => {
    // Check welcome message card
    await expect(page.getByText('If you\'re here as an engineer, a security practitioner')).toBeVisible();
    
    // Check Executive Summary card with gradient background
    const executiveSummaryCard = page.locator('div').filter({ hasText: 'Executive Summary' }).first();
    await expect(executiveSummaryCard).toBeVisible();
    
    // Check for company links with proper attributes
    const trellixLink = page.getByRole('link', { name: 'Trellix' });
    await expect(trellixLink).toBeVisible();
    await expect(trellixLink).toHaveAttribute('target', '_blank');
    await expect(trellixLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should display content structure correctly', async ({ page }) => {
    // Check main bio text
    await expect(page.getByText(/Staff Software Development Engineer building security-first platforms/)).toBeVisible();
    
    // Check key themes are covered
    await expect(page.getByText(/SecOps and platform engineering/)).toBeVisible();
    await expect(page.getByText(/security, privacy, and developer experience/)).toBeVisible();
    await expect(page.getByText(/Security isn't something I "add on"/)).toBeVisible();
  });

  test('should have project and research sections with external links', async ({ page }) => {
    // Scroll to bottom to make sure all sections are loaded
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Check some project/talk cards exist
    await expect(page.getByText('Personal Website')).toBeVisible();
    await expect(page.getByText('Survey of Deep Learning Based Entertainment')).toBeVisible();
    
    // Check that external project links have proper attributes
    const projectLinks = page.locator('div.bg-white a[target="_blank"]');
    await expect(projectLinks.first()).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check main elements are still visible
    await expect(page.locator('h1')).toContainText('About Me');
    await expect(page.getByText('Executive Summary')).toBeVisible();
    
    // Check that cards stack properly on mobile
    const executiveSummaryCard = page.locator('div').filter({ hasText: 'Executive Summary' }).first();
    await expect(executiveSummaryCard).toBeVisible();
  });

  test('should have consistent styling', async ({ page }) => {
    // Check that gradient cards exist
    const gradientCards = page.locator('.bg-gradient-to-r');
    await expect(gradientCards.first()).toBeVisible();
    
    // Check section headers are properly styled
    const sectionHeaders = page.locator('h3.text-xl.font-semibold');
    await expect(sectionHeaders.first()).toBeVisible();
  });
});