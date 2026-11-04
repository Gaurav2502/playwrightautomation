const{test,expect}=require('@playwright/test');


test.only('Assigment1', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
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

    
    const Email="gaurav06@mailinator.com";
    const Password="Password123";


    await Register.click();
    await firstName.fill("Gaurav");
    await lastName.fill("Arundekar");
    await email.fill(Email);
    await mobile.fill("7894563216");
    await occupation.selectOption("Student");
    await maleradio.click();
    await password.fill(Password);
    await confirmpassword.fill(Password);
    await above18.click();

    await submit.click();//register button click

    await Loginbtn.click();
    await email.fill(Email);
    await password.fill(Password);
    await logint.click();

    console.log(await productTitle.first().textContent());
    
})