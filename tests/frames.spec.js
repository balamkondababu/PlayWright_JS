const{test, expect} = require("@playwright/test")

test("practice frames", async({page})=>
{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    console.log("Number of frames:", await page.frames().length)

    const frame = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})  // access frame by using URL
    //const frame = await page.frame("frame_name") // access frame by using frame name
    await frame.fill("[name='mytext1']","Bobby")

    await page.frameLocator("frame[src='frame_2.html']").locator("[name='mytext2']").fill("Sweety")

});


test("practice nested frames", async({page})=>
{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    console.log("Number of frames:", await page.frames().length)

    const frame = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})  // access frame by using URL
    //const frame = await page.frame("frame_name") // access frame by using frame name
    await frame.fill("[name='mytext3']","Bobby babu")

    const child_frame = await frame.childFrames()
    await child_frame[0].locator("//*[@id='i5']/div[3]/div").click()

});