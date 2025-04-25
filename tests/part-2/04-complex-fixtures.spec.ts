import { expect } from '@playwright/test';
import { test } from '../part-2/04-login-fixture.ts'; // Note that we are importing the 'test' that we defined previously.

test.describe('Tests using complex fixtures', async () => {
  test('check login page', async ({ standardUserPage }) => {
    // We are using the standardUserPage defined previously.
    // We are already logged in.
    await expect(standardUserPage.getByText('Login')).not.toBeVisible();
  });

  test('should handle login', async ({ visualUserPage }) => {
    // We are using the visualUserPage defined previously.
    // We are already logged in.
    await expect(visualUserPage).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
});