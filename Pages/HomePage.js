class HomePage {
        constructor(page) {
            this.page = page;

            //close login button
            this.closeLoginButton = page.getByRole('button', { name: '✕' });

            //next button
            this.nextButton = page.locator('._2t2dSp');

            //banner
            this.banner = page.getByRole('link', { name: 'Cat_Mob_HPW_Poco C55 Cat_Mob_HPW_Poco C55' }).first();

            //Electronic panel
            this.electronicPanel = page.locator('span').filter({ hasText: 'Electronics' },{ exact: true });

            //List of Mobile Phones
            this.mobilePhoneList = page.locator("//*[contains(@title,'Mobiles')]//following-sibling::a");
        }
    }
            module.exports = { HomePage };