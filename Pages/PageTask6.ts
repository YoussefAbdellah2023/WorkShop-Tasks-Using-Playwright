import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";

//    Open Google Chrome
//    Navigate to [http://the-internet.herokuapp.com/checkboxes]
//    Check Checkbox 1
//    Assert that both Checkboxes are checked
//    Close Google Chrome

export class PageTask6 extends BasePage {
    checkbox1 = this.page.locator('//input[1]');
    checkbox2 = this.page.locator('//input[2]');

    
    async navigateToHerokuapp() {
        await this.page.goto('http://the-internet.herokuapp.com/checkboxes');
    }
    async checkCheckbox1() {
        await this.checkbox1.check();
    }
    async assertBothCheckboxesChecked() {
        await expect(this.checkbox1).toBeChecked();
        await expect(this.checkbox2).toBeChecked();
    }
}