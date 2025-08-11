import{test, expect} from '@playwright/test';

test.beforeEach('beforeEach', async ({page}) => {
    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('password').fill('admin123');
await page.getByRole('button', {name:'Login'}).click();
await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
console.log('execute before each TCs');
});

const baseURLs = [
    '/admin/viewAdminModule',
    '/pim/viewPimModule', 
     '/leave/viewLeaveModule', 
    '/recruitment/viewRecruitmentModule', 
    '/myinfo/viewMyDetails', 
    '/performance/viewPerformanceModule', 
    '/dashboard', 
    '/directory/viewDirectory', 
    '/maintenance/viewMaintenanceModule',
    '/claim/viewClaimModule', 
    '/buzz/viewBuzz'
];
baseURLs.forEach(urlPath => {
    test(`verify menu for ${urlPath}`, async ({ page }) => {
        // urlPath is now the single string from the array, e.g., '/admin/viewAdminModule'
        await page.locator(`a[href*="${urlPath}"]`).click();
        const regex = new RegExp(urlPath);
        await expect(page).toHaveURL(regex);
        console.log(`Mapsd to ${urlPath}`);
    });
});   



/* baseURLs.forEach(baseUrl => {
    test(`verify menu ${baseUrl}`, async ({page}) => {
            await page.locator(`a[href*="${baseUrl}"]`).click();
          const regex = new RegExp(baseUrl);
            await expect(page).toHaveURL(regex);
            console.log(`navigateed to ${baseUrl}`);
    });
}); */

test.afterEach('afterEach', async({page}) => {
    console.log('execute after each TCs');
    const logOutLink = page.getByRole('link', {name: 'Logout'});
    if(await logOutLink.isVisible()){
        await logOutLink.click();

    } else {
        console.log('lotout link is not visible');
    }
});

