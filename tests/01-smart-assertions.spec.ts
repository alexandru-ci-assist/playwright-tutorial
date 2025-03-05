import test, { expect } from "@playwright/test";

test.describe('Smart assertions tests', () => {
  test('Assertion tests', async ({ page }) => {
    await page.goto('https://example.com');
  
    // Verify that an element contains specific text.
    await expect(page.locator('h1')).toHaveText('Example Domain');
  
    // Verify if the redirect link is visible.
    await expect(page.locator('a')).toBeVisible();
  
    // Verify if the page has a specific title.
    await expect(page).toHaveTitle('Example Domain');
  });
});