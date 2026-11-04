const{test,expect}=require('@playwright/test');


test('Assigment1', async ({page}) => {
    const Register=page.locator(".text-reset");
    const firstName=page.locator("[type='firstName']");
    const lastName=page.locator("[id='lastName']");
    const email=page.locator("input#userEmail");
    const mobile=page.locator("input#userMobile");
    const occupation=page.locator("[formcontrolname='occupation']");
    const maleradio=page.locator("[value='Male']");
    const password=page.locator("input#userPassword");
    const confirmpassword=page.locator("input#confirmPassword");
    const above18=page.locator("[type='checkbox']");
    const submit=page.locator("//input[@name='login']");
    const Loginbtn=page.locator(".btn.btn-primary");
    const logint=page.locator("input#login");
    const productTitle = page.locator(".card-body h5");

    
    const testData = {
        firstName: process.env.PLAYWRIGHT_TEST_FIRST_NAME,
        lastName: process.env.PLAYWRIGHT_TEST_LAST_NAME,
        email: process.env.PLAYWRIGHT_TEST_EMAIL,
        mobile: process.env.PLAYWRIGHT_TEST_MOBILE,
        password: process.env.PLAYWRIGHT_TEST_PASSWORD,
    };
    test.skip(!Object.values(testData).every(Boolean), 'Set the PLAYWRIGHT_TEST_* variables to run this registration flow.');

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    await Register.click();
    await firstName.fill(testData.firstName);
    await lastName.fill(testData.lastName);
    await email.fill(testData.email);
    await mobile.fill(testData.mobile);
    await occupation.selectOption("Student");
    await maleradio.click();
    await password.fill(testData.password);
    await confirmpassword.fill(testData.password);
    await above18.click();

    await submit.click();//register button click

    await Loginbtn.click();
    await email.fill(testData.email);
    await password.fill(testData.password);
    await logint.click();

    console.log(await productTitle.first().textContent());
    
})