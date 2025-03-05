import test, { expect } from "@playwright/test";

test.describe('Regression tests', () => {
  test('Snapshot assertion', async ({ page }) => {
    await page.goto('https://example.com');

    // Compare the screenshot with a baseline image.
    // Note that on first run, the test will fail (since the reference images do not exist).
    await expect(page).toHaveScreenshot();
  });

  test('Snapshot assertion 2', async ({ page }) => {
    await page.goto('https://example.com');

    // Compare the text content inside the first paragraph with the text from inside the specified file.
    // Note that on first run, the test will fail (since the reference text doesn't exist).
    const textContent = await page.locator('p').first().textContent();
    expect(textContent).toMatchSnapshot('first_paragraph.txt');
  });
});