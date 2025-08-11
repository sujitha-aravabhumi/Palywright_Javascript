import{test, expect } from '@playwright/test';
let baseURL= "https://www.dummyticket.com/dummy-ticket-for-visa-application/";
test('RadioButton', async({page})=>{
    await page.goto(baseURL)
    const RadioButton1 = page.locator('#product_549'); //locator
    await RadioButton1.check();
    await expect(page.locator('.woocommerce-message')).toContainText("Dummy ticket for Visa Application",{ timeout: 15000 });
   // await expect(page.locator('.woocommerce-message')).toContainText("Dummy ticket for Visa Application");
    //await expect(page.locator('.woocommerce-message')).toBeVisible();
//    await RadioButton1.uncheck();
//    await expect(RadioButton1).not.toBeChecked();
   //await RadioButton2.waitFor({state: 'attached'})
    const RadioButton2 = page.locator('#product_550'); 
   await RadioButton2.check();
   await expect(page.locator('#opc-messages'), {timeout: 15000}).toContainText("Dummy return ticket");
   const RadioButton3 = page.locator('#product_551'); 
   await RadioButton3.check();
   await expect(page.locator('#opc-messages'), {timeout: 15000}).toContainText("Dummy hotel booking");  
   const RadioButton4 = page.locator('#product_3186'); 
   await RadioButton4.check();
   await expect(page.locator('#opc-messages'), {timeout: 15000}).toContainText("Dummy ticket and hotel");  
   const RadioButton5 = page.locator('#product_7441'); 
   await RadioButton5.check();
   await expect(page.locator('#opc-messages'), {timeout: 15000}).toContainText("Dummy ticket and hotel");  

});
