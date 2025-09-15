import { expect } from '@playwright/test';
import { BasePage } from './BasePage';


//    Open Google Chrome
//    Navigate to [https://duckduckgo.com/]
//    Search for [Selenium WebDriver]
//    Assert that the link of the first result is [https://www.selenium.dev/documentation/webdriver/]
//    Close Google Chrome

export class PageTask3 extends BasePage {
  

    searchBox = this.page.locator('[name="q"]');
    firstResultLink = this.page.locator('//article[@id="r1-0"]//h2/a').first();
  

    async navigateToDuckDuckGo() {
    await this.page.goto('https://duckduckgo.com/');
  }
    async search(query: string) {
    await this.searchBox.fill(query);
    await this.searchBox.press('Enter');
    await this.page.waitForLoadState('networkidle');
  }
    async assertFirstResultLink(expectedLink: string) {
    await expect(this.firstResultLink).toHaveAttribute('href', expectedLink);
  }
}