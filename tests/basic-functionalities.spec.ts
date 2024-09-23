import { test, expect } from '@playwright/test';

test.describe("Basic funcitonalities", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('has title', async ({ page }) => {
    
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
  
  test('get started link', async ({ page }) => {  
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test('Click "Community" tab', async ({page}) => {
    // Get link and click it
    await page.getByRole('link', { name: 'Community' }).click()
    //Confirm page is open
    await expect(page.getByText(/Playwright Community/)).toBeVisible()
  });

  

});

