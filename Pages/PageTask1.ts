import { expect} from '@playwright/test';
import { BasePage } from './BasePage';

//    Open Google Chrome
//    Navigate to [https://duckduckgo.com/]
//    Assert that the page title is [Google]
//    Close Google Chrome

export class PageTask1 extends BasePage {

  async goto() {
    await this.page.goto('https://duckduckgo.com/');
  }
  
  async assertTitle() {
    await expect(this.page).toHaveTitle("Google");
  }
}