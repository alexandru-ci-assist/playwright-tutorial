import test, { expect } from "@playwright/test";

test.describe('API mocking tests', () => {
  test('Mocking network response', async ({ page }) => {
    // Mock data to be returned.
    const mockData = [{ id: 1, name: 'Mock Item' }];
    
    // Intercept the network request and respond with mock data.
    await page.route('https://jsonplaceholder.typicode.com/todos/1', route => {
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify(mockData),
      });
    });
    
    // Navigate to the page that makes the network request.
    await page.goto('https://jsonplaceholder.typicode.com/');
    
    // Click on the button to see the response.
    await page.getByText('Run script').click();

    // Simple assert to check if the 'Mock Item' text is visible.
    await expect(page.getByText('Mock Item')).toBeVisible();
  });
});