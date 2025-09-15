import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

//    Open Mozilla Firefox
//    Navigate to [https://duckduckgo.com/]
//    Search for [TestNG]
//    Assert that the text of the fourth result is [TestNG Tutorial]
//    Close Mozilla Firefox

export class PageTask4 extends BasePage {

  searchBox = this.page.locator('[name="q"]');
  fourthResultText = this.page.locator('//article[@id="r1-3"]//h2/a').first();

    async navigateToDuckDuckGo() {
    await this.page.goto('https://duckduckgo.com/');
  }
    async search(query: string) {
    await this.searchBox.fill(query);
    await this.searchBox.press('Enter');
    await this.page.waitForLoadState('networkidle');
  }
    async assertFourthResultText(expectedText: string) {
    await expect(this.fourthResultText).toHaveText(expectedText);
  }
};