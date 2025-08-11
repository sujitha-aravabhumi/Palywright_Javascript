import{test, expect} from '@playwright/test';

test.beforeEach('beforeEach', async ({page}) => {
    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('password').fill('admin123');
await page.getByRole('button', {name:'Login'}).click();
await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
console.log('execute before each TCs');
console.log("testing");
});

const baseURLs = [
        {name: 'Admin', urlPath: '/admin/viewSystemUsers'},
        {name: 'PIM', urlPath: '/pim/viewEmployeeList' },
        {name: 'Leave', urlPath: '/leave/viewLeaveList' },
        {name: 'Time', urlPath: '/time/viewEmployeeTimesheet' },
        {name: 'Recruitment', urlPath: '/recruitment/viewCandidates' },
        {name: 'My Info', urlPath: 'pim/viewPersonalDetails/empNumber/7' },
        {name: 'Performance', urlPath: '/performance/searchEvaluatePerformanceReview' },
        {name: 'Dashboard', urlPath: 'dashboard/index' },
        {name: 'Directory', urlPath: '/directory/viewDirectory' },
       // {name: 'Main', urlPath: '/performance/searchEvaluatePerformanceReview' },
        {name: 'Claim', urlPath: '/claim/viewAssignClaim' },
        {name: 'Buzz', urlPath: '/buzz/viewBuzz' },
       
    
    ];

baseURLs.forEach(data => {
    test(`verify menu for ${data.name}`, async ({ page }) => {
        // urlPath is now the single string from the array, e.g., '/admin/viewAdminModule'
        await page.getByRole(`link`, {name:data.name, exact : true}).click();
        const regex = new RegExp(data.urlPath);
        await expect(page).toHaveURL(regex);
        console.log(`Mapped to ${data.urlPath}`);
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
    await page.locator('.oxd-userdropdown-name').click();
    const logOutLink = page.getByText('Logout')
    if(await logOutLink.isVisible()){
        await logOutLink.click();
        console.log('lotout link is clicked');

    } else {
        console.log('lotout link is not visible');
    }
});

