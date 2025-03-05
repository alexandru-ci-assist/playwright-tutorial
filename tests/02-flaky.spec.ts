import { test, expect } from '@playwright/test';

test.describe('Flaky and non-flaky tests', () => {
  test('might be flaky', async ({ page }) => {
    await page.goto('https://example.com/');

    // Assuming that the page will take longer to load than expected, the following assertion might be flaky.
    // Playwright doesn't recommend this approach.
    const text = await page.locator('h1').textContent();

    // Check if the text is correct.
    expect(text).toBe("Example Domain");
  });

  test('is not flaky', async ({ page }) => {
    await page.goto('https://example.com/');

    // Use smart assertions to avoid flakiness.
    await expect(page.locator('h1')).toHaveText("Example Domain", {
      timeout: 10000
    });
  });
});