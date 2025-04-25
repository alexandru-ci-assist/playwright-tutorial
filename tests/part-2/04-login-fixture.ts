import { test as baseTest, Page } from '@playwright/test';

// Define custom types so we can expose in our tests.
type CustomUserPages = {
  standardUserPage: Page;
  visualUserPage: Page;
  guestUserPage: Page;
};

/**
 * Logs in the user.
 * @param page page reference
 * @param username username of the user
 * @param password password of the user
 */
async function loginUser(page: Page, username: string, password: string): Promise<void> {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByText('Login').click();
}

// Extending Playwright's test.
export const test = baseTest.extend<CustomUserPages>({
  standardUserPage: async ({ page }, use) => {
    // Login as a standard user.
    await loginUser(page, 'standard_user', 'secret_sauce');

    // Pass the logged in page to the test.
    await use(page);
  },
  visualUserPage: async ({ page }, use) => {
    // Login as a visual user.
    await loginUser(page, 'visual_user', 'secret_sauce');

    // Pass the logged in page to the test.
    await use(page);
  },
});
