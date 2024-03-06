// @ts-check
const { test, expect } = require("@playwright/test")

test('practice text element with locators',async({page})=>{

    await page.goto("https://demoqa.com/")
    await expect(page).toHaveTitle(/DEMOQA/)
    await page.click("//h5[normalize-space()='Elements']")
    
    const menu_list = await page.$$("//div[@class='element-list collapse show']//ul[@class='menu-list']//li")

    for(const menu of menu_list){
        console.log(await menu.textContent())
        if(await menu.textContent() == 'Text Box'){
            await menu.click();
        }
    }

    await expect(page.locator("//input[@id='userName']")).toBeVisible()
    await page.fill("//input[@id='userName']",'Kondababu')
    await expect(page.locator("//input[@id='userEmail']")).toBeEmpty()
    await page.locator("//input[@id='userEmail']").fill('bobby26227@gmail.com')
    await expect(page.locator("id=userEmail")).toBeFocused()
    await expect(page.locator("//input[@id='userEmail']")).not.toBeEmpty()
    await expect(page.locator("//input[@id='userEmail']")).toHaveValue('bobby26227@gmail.com')
    await expect(page.locator("#currentAddress")).toBeEditable()
    await expect(page.locator("id=permanentAddress")).toBeEnabled()
    await expect(page.locator("id=currentAddress-label")).toHaveText("Current Address")
    await expect(page.locator("id=currentAddress-label")).toContainText("Current")
    await expect(page.locator("id=currentAddress-label")).toHaveAttribute("class","form-label")
    await expect(page.locator("id=currentAddress-label").isVisible()).toBeTruthy()


    await page.fill("//input[@id='userName']",'Kondababu')
    await page.locator("//input[@id='userEmail']").fill('bobby26227@gmail.com')
    await page.fill("#currentAddress","kondapur")
    await page.fill("id=permanentAddress","kondapur")

});