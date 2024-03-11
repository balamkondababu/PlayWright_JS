const{test, expect} = require("@playwright/test")

test("practice tables", async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")

   const table = await page.locator("#productTable")
   await expect(await table.locator("thead th").count()).toBe(4)
   await expect(await table.locator("tbody tr").count()).toBe(5)

   const rows = table.locator("tbody tr")

   const matchedRow = rows.filter({
       
        has: page.locator('td'),
        hasText: "Product 2"

   })

   await matchedRow.locator("input").check()
   await selectProduct(page,rows,"Product 4")
   await selectProduct(page,rows,"Product 1")

   for(let i=0; i< await rows.count();i++){
     
    const col = await rows.nth(i).locator("td")

     for(let j=0; j< await col.count()-1; j++){
        console.log(await col.nth(j).textContent())
     }
   }

   const p = await page.locator("#pagination li a")

   for(let k=0; k< await p.count(); k++){

    if(k>0){
        await p.nth(k).click()
    }

    for(let i=0; i< await rows.count();i++){
     
        const col = await rows.nth(i).locator("td")
    
         for(let j=0; j< await col.count()-1; j++){
            console.log(await col.nth(j).textContent())
         }
       }

   }


});


async function selectProduct(page, rows, name){

    const matchedRow = rows.filter({     
        has: page.locator('td'),
        hasText: name
   })

   await matchedRow.locator("input").check()
}