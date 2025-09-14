import { expect} from '@playwright/test';
import { BasePage } from './BasePage';



//    Open Google Chrome
//    Navigate to [https://duckduckgo.com/]
//    Assert that the DuckDuckGo logo is displayed
//    Close Google Chrome

export class PageTask2 extends BasePage {
  
 logo = this.page.locator('//div[contains(@class,"container_fullWidth__1H_L8")]//img');

  async goto() {
    await this.page.goto('https://duckduckgo.com/');
  }
    async assertLogo() {
    await expect(this.logo).toBeVisible();
  }
}
