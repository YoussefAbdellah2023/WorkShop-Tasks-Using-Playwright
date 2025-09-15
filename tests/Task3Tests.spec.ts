import { PageTask3 } from "../Pages/PageTask3";
import { test } from "@playwright/test";



  test("Search for Selenium WebDriver and verify first result link", async ({page}) => {
    const pageTask3 = new PageTask3(page);
    await pageTask3.navigateToDuckDuckGo();
    await pageTask3.search("Selenium WebDriver");
    await pageTask3.assertFirstResultLink("https://www.selenium.dev/documentation/webdriver/");
  });