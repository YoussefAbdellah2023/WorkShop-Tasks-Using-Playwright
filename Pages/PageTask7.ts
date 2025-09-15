import {BasePage} from "./BasePage";
import {expect} from "@playwright/test";

//    Open Google Chrome
//    Navigate to [https://www.w3schools.com/html/html_tables.asp]
//    Assert that the Country for the Company [Ernst Handel] is [Austria]
//    Close Google Chrome

export class PageTask7 extends BasePage {

    country = this.page.locator('//table[@id="customers"]//td[text()="Ernst Handel"]/following-sibling::td[2]');


    async navigateToW3schools() {
        await this.page.goto('https://www.w3schools.com/html/html_tables.asp');
    }
    
    async assertCountryForCompanyErnstHandel() {
        await expect(this.country).toHaveText('Austria');
    }
}