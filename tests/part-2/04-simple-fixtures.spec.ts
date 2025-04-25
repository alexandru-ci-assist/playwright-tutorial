import { test, expect, Browser, Page } from '@playwright/test';
import { BrowserSingleton } from './03-browser-singleton';

test.describe('login with different users', () => {
  let browser: Browser;
  let page: Page;

  // Hook that is called once before each individual test is executed.
  test.beforeEach(async () => {
    // Use our singleton to get the browser instance.
    browser = await BrowserSingleton.getInstance();
    page = await browser.newPage();

    // Navigate to the page so that we don't do it in every test.
    await page.goto('https://www.saucedemo.com/');

    // Login with an user.
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByText('Login').click();
  });

  // Hook that is called once before each individual test is executed.
  test.afterEach(async () => {
    // Close the browser instance.
    browser.close();
  });

  test('check login page', async () => {
    // We are already logged in.
    await expect(page.getByText('Login')).not.toBeVisible();
  });

  test('should handle login', async () => {
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
});
