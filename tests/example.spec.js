import { test, expect, Page } from '@playwright/test';
const {HomePage} = require("../Pages/HomePage");
const testData = require("../Resources/testData.json");

test.describe('Demo Test', () => {

  test('FLIPKART LISTING', async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto(testData.baseURL);
  await homePage.closeLoginButton.click();
  await homePage.nextButton.hover();
  await homePage.banner.click();
  await homePage.electronicPanel.click();
  await expect(homePage.mobilePhoneList).toHaveCount(18);
  const allText = await homePage.mobilePhoneList.allTextContents();
  console.log("\n\nList of all the mobile brands present in flipkart are as listed below:\n")
  for (let i = 0; i < (allText.length)-1; i++)
  {    
          console.log(`${i+1}. ${allText[i]}`);  
  }
});
});



