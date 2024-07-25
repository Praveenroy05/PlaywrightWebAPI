const {test, expect} = require('@playwright/test');

let email
const password = "Test@123"
let randomNumber = generateRandomString(4);

test.beforeAll("User Registration" , async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const EmailID = page.locator("#userEmail")
    const gender = page.locator("input[value='Male']")
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator("a[routerlink='/auth/register']").click()
    await page.locator("#firstName").fill("Test")
    await page.locator("#lastName").fill("playwright")
    await EmailID.fill("test"+randomNumber+"@gmail.com")
    email = await EmailID.inputValue()
    await page.getByPlaceholder("enter your number").fill("1234567890")
    await page.selectOption('select.custom-select', "3: Engineer")
    await page.locator("#userPassword").fill(password)
    await page.locator("#confirmPassword").fill(password)
    await gender.check()
    await expect(gender).toBeChecked()
    await page.locator("input[formcontrolname='required']").check()
    await expect(page.locator("input[formcontrolname='required']")).toBeChecked() 
    await page.locator("#login").click()
    await expect(page.locator("button[routerlink='/auth']")).toBeVisible()
    await page.locator("button[routerlink='/auth']").click()

})
test("Login Test" , async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator("#userEmail").fill(email)
    await page.locator("#userPassword").fill(password)
    await page.locator("#login").click()
    await expect(page.getByRole("button", {name:'Home'})).toBeVisible()
    

})



function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}



