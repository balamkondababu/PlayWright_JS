//@ts-check
const {test, expect} = require("@playwright/test")

test("practice single checkbox features", async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    await expect(page).toHaveTitle(/Selenium/)

    await expect(await page.locator("id=isAgeSelected")).not.toBeChecked()
    await page.check('id=isAgeSelected')
    await expect(await page.locator("id=isAgeSelected")).toBeChecked()
    await expect(await page.locator("id=isAgeSelected").isChecked()).toBeTruthy()

    await page.uncheck('id=isAgeSelected')
    await expect(await page.locator("id=isAgeSelected")).not.toBeChecked()
    await expect(await page.locator("id=isAgeSelected").isChecked()).toBeFalsy()

});

test("practice disabled checkbox features", async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    await expect(page).toHaveTitle(/Selenium/)


    await expect(await page.locator("(//input[@type='checkbox'])[4]")).toBeDisabled()
    await expect(await page.locator("(//input[@type='checkbox'])[5]")).toBeDisabled()
    await expect(await page.locator("(//input[@type='checkbox'])[2]")).toBeEnabled()
    await expect(await page.locator("(//input[@type='checkbox'])[3]")).toBeEnabled()

    await page.check("(//input[@type='checkbox'])[2]")
    await expect(await page.locator("(//input[@type='checkbox'])[2]")).toBeChecked()
    await expect(await page.locator("(//input[@type='checkbox'])[2]").isChecked()).toBeTruthy()

    await page.check("(//input[@type='checkbox'])[3]")
    await expect(await page.locator("(//input[@type='checkbox'])[3]")).toBeChecked()
    await expect(await page.locator("(//input[@type='checkbox'])[3]").isChecked()).toBeTruthy()

    await page.uncheck("(//input[@type='checkbox'])[2]")
    await expect(await page.locator("(//input[@type='checkbox'])[2]")).not.toBeChecked()
    await expect(await page.locator("(//input[@type='checkbox'])[2]").isChecked()).toBeFalsy()

    await page.uncheck("(//input[@type='checkbox'])[3]")
    await expect(await page.locator("(//input[@type='checkbox'])[3]")).not.toBeChecked()
    await expect(await page.locator("(//input[@type='checkbox'])[3]").isChecked()).toBeFalsy()

});

test("practice multiple checkbox features", async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    await expect(page).toHaveTitle(/Selenium/)


    await expect(await page.locator("#ex1-check1")).not.toBeChecked()
    await expect(await page.locator("#ex1-check1").isChecked()).toBeFalsy()
    await expect(await page.locator("#ex1-check2")).not.toBeChecked()
    await expect(await page.locator("#ex1-check2").isChecked()).toBeFalsy()
    await expect(await page.locator("(//input[@id='ex1-check3'])[1]")).not.toBeChecked()
    await expect(await page.locator("(//input[@id='ex1-check3'])[1]").isChecked()).toBeFalsy()
    await expect(await page.locator("(//input[@id='ex1-check3'])[2]")).not.toBeChecked()
    await expect(await page.locator("(//input[@id='ex1-check3'])[2]").isChecked()).toBeFalsy()

    await page.click("//input[@id='box']")

    await expect(await page.locator("#ex1-check1")).toBeChecked()
    await expect(await page.locator("#ex1-check1").isChecked()).toBeTruthy()
    await expect(await page.locator("#ex1-check2")).toBeChecked()
    await expect(await page.locator("#ex1-check2").isChecked()).toBeTruthy()
    await expect(await page.locator("(//input[@id='ex1-check3'])[1]")).toBeChecked()
    await expect(await page.locator("(//input[@id='ex1-check3'])[1]").isChecked()).toBeTruthy()
    await expect(await page.locator("(//input[@id='ex1-check3'])[2]")).toBeChecked()
    await expect(await page.locator("(//input[@id='ex1-check3'])[2]").isChecked()).toBeTruthy()

    await page.locator("#ex1-check1").uncheck()
    await page.uncheck("#ex1-check2")

    await expect(await page.locator("#ex1-check1")).not.toBeChecked()
    await expect(await page.locator("#ex1-check1").isChecked()).toBeFalsy()
    await expect(await page.locator("#ex1-check2")).not.toBeChecked()
    await expect(await page.locator("#ex1-check2").isChecked()).toBeFalsy()

    await page.click("//input[@id='box']")

    await expect(await page.locator("#ex1-check1")).not.toBeChecked()
    await expect(await page.locator("#ex1-check1").isChecked()).toBeFalsy()
    await expect(await page.locator("#ex1-check2")).not.toBeChecked()
    await expect(await page.locator("#ex1-check2").isChecked()).toBeFalsy()
    await expect(await page.locator("(//input[@id='ex1-check3'])[1]")).not.toBeChecked()
    await expect(await page.locator("(//input[@id='ex1-check3'])[1]").isChecked()).toBeFalsy()
    await expect(await page.locator("(//input[@id='ex1-check3'])[2]")).not.toBeChecked()
    await expect(await page.locator("(//input[@id='ex1-check3'])[2]").isChecked()).toBeFalsy()

});