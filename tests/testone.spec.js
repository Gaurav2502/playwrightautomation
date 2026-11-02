const{test,expect}=require('@playwright/test');


test.only('handling browser two', async ({page}) => {
    const productTitle = page.locator(".products h4");
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    
    console.log(await productTitle.first().textContent());
    console.log(await productTitle.nth(1).textContent());
})