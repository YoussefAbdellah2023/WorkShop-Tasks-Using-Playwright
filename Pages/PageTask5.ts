import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";


//    Open Google Chrome
//    Navigate to [https://duckduckgo.com/]
//    Search for [Cucumber IO]
//    Assert that the link of the second result contains [https://www.linkedin.com]
//    Close Google Chrome

export class PageTask5 extends BasePage {

  searchBox = this.page.locator('[name="q"]');
  secondResultLink = this.page.locator('(//*[@id="r1-1"]//a)[5]');

    async navigateToDuckDuckGo() {
    await this.page.goto('https://duckduckgo.com/');
  }

    async search(query: string) {
    await this.searchBox.fill(query);
    await this.searchBox.press('Enter');
    await this.page.waitForLoadState('networkidle');
  }

    async assertSecondResultLinkContains(expectedLinkPart: string) {
    await expect(this.secondResultLink).toHaveAttribute('href', expectedLinkPart);
  }
}