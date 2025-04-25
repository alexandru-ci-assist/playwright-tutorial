import { test, expect } from '@playwright/test';
import { validloginData } from './02-valid-login-data';

test.describe('login with different users', () => {
  // Fetch all the records from the validloginData defined in a separate file.
  validloginData.forEach(({ username, password, expectedMessage }) => {
    test(`should handle login for ${username}`, async ({ page }) => {
      // Arrange.
      await page.goto('https://www.saucedemo.com/');

      // Act.
      await page.getByPlaceholder('Username').fill(username);
      await page.getByPlaceholder('Password').fill(password);
      await page.getByText('Login').click();

      // Assert.
      await expect(page.locator('.title')).toHaveText(expectedMessage);
    });
  });
});
