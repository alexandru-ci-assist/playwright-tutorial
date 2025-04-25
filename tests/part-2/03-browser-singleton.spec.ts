import test, { expect } from '@playwright/test';
import { BrowserSingleton } from './03-browser-singleton';

test.describe('Login with Browser Singleton', async () => {
  test('successful login to Sauce Demo', async () => {
    // Note that we no longer expose 'page'.
    // Get the instance from our singleton and then create a new page inside the browser.
    const browser = await BrowserSingleton.getInstance();
    const page = await browser.newPage();

    // Arrange.
    await page.goto('https://www.saucedemo.com/');

    // Act.
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByText('Login').click();

    // Assert.
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
});
