//@ts-check
const {test, expect} = require("@playwright/test")

test("practice dropdown features", async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    await expect(page).toHaveTitle(/Selenium/)

    await page.selectOption("#select-demo", "Sunday")
    await expect(await page.locator("//p[@class='selected-value text-size-14']").textContent()).toBe("Day selected :- Sunday")
    await page.selectOption("#select-demo", {label: "Monday"})
    await expect(await page.locator("//p[@class='selected-value text-size-14']").textContent()).toBe("Day selected :- Monday")
    await page.locator("#select-demo").selectOption({value:"Tuesday"})
    await expect(await page.locator("//p[@class='selected-value text-size-14']").textContent()).toBe("Day selected :- Tuesday")
    await page.locator("#select-demo").selectOption({index:4})
    await expect(await page.locator("//p[@class='selected-value text-size-14']").textContent()).toBe("Day selected :- Wednesday")

    await expect(page.locator("#select-demo option")).toHaveCount(8)

    const values = await page.$$("#select-demo option")
    await expect(values.length).toBe(8)

    const val  = await page.locator("#select-demo").textContent()
    await expect(val?.includes("Monday")).toBeTruthy()
    await expect(val?.includes("XYZ")).toBeFalsy()

    const vals = await page.$$("#select-demo option")

    for(const v of vals){
       console.log(await v.textContent())
    }

});

test("practice multi select dropdown", async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    await expect(page).toHaveTitle(/Selenium/)
    await page.selectOption("#multi-select", ["California", "Pennsylvania"])
});