//@ts-check
const {test, expect} = require("@playwright/test")

test("practice alert with ok", async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    await expect(page).toHaveTitle(/Selenium/)

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain("alert")
        expect(dialog.message()).toContain("I am an alert box!")
        await dialog.accept()
    })

    await page.click("(//button[@type='button'][normalize-space()='Click Me'])[1]")

});


test("practice confirmation box with ok and cancel", async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    await expect(page).toHaveTitle(/Selenium/)

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain("confirm")
        expect(dialog.message()).toContain("Press a button!")
        await dialog.accept()
    })

    await page.click("(//button[@type='button'][normalize-space()='Click Me'])[2]")

});


test("practice prompt", async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    await expect(page).toHaveTitle(/Selenium/)

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain("prompt")
        expect(dialog.message()).toContain("Please enter your name")
        expect(dialog.defaultValue()).toContain("Enter name")
        await dialog.accept("Bobby")
    })

    await page.click("(//button[@type='button'][normalize-space()='Click Me'])[3]")

});