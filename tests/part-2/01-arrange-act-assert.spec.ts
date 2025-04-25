import { test, expect } from '@playwright/test';

test.describe('Arrange-Act-Assert example', async () => {
  test('successful login to Sauce Demo', async ({ page }) => {
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
