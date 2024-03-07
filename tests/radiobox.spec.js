// @ts-check
const { test, expect } = require("@playwright/test")


test('practice radio box features',async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/radiobutton-demo")
    await expect(page).toHaveTitle(/Selenium/)
    
    await expect(await page.locator("input[value='Male'][name='optradio']")).not.toBeChecked()
    await page.locator("input[value='Male'][name='optradio']").check()
    await expect(await page.locator("input[value='Male'][name='optradio']")).toBeChecked()
    await expect(await page.locator("input[value='Male'][name='optradio']").isChecked()).toBeTruthy()
    await expect(await page.locator("input[value='Female'][name='optradio']").isChecked()).toBeFalsy()

    await expect(await page.locator("input[value='Female'][name='optradio']")).not.toBeChecked()
    await page.locator("input[value='Female'][name='optradio']").check()
    await expect(await page.locator("input[value='Female'][name='optradio']")).toBeChecked()
    await expect(await page.locator("input[value='Female'][name='optradio']").isChecked()).toBeTruthy()
    await expect(await page.locator("input[value='Male'][name='optradio']").isChecked()).toBeFalsy()


    console.log(await page.textContent("#buttoncheck"))

});