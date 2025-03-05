import test, { expect } from "@playwright/test";

test.describe('Cross-browsers tests', () => {
  // Use 'npx playwright test' and all the tests will run on multiple browsers.
  test('Title is correct', async ({ page }) => {
    await page.goto('https://example.com/');

    // Check if the page has a specific title.
    await expect(page).toHaveTitle("Example Domain");
  });
});