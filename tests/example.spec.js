import { test, expect, Page } from '@playwright/test';
const testData = require("../Resources/testData.json");

test.describe('Demo Test', () => {
  test('FLIPKART LISTING', async ({ page }) => {

  await page.goto(testData.baseURL);
  await page.getByRole('button', { name: '✕' }).click();
  await page.locator('._2t2dSp').hover();
  const bannerImage= page.locator("//body//div[@id='container']//div//div//div//div[2]//div[1]//a[1]//div[1]//img[2]");
  await bannerImage.dispatchEvent('click');
  await page.locator('span').filter({ hasText: 'Electronics' },{ exact: true }).click();
  const mobileBrands = page.locator("//*[contains(@title,'Mobiles')]//following-sibling::a");
  await expect(mobileBrands).toHaveCount(18);
  const allText = await mobileBrands.allTextContents();
  console.log("\n\nList of all the mobile brands present in flipkart are as listed below:\n")
  for (let i = 0; i < (allText.length)-1; i++)
  {    
          console.log(`${i+1}. ${allText[i]}`);  
  }
});
});



