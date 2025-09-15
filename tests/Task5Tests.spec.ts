import { PageTask5 } from "../Pages/PageTask5";
import { test } from "@playwright/test";

    test("navigate To DuckDuckGo And Search for Playwright and Assert The Secind Result Link", async ({page}) => {
        const pageTask5 = new PageTask5(page);
        await pageTask5.navigateToDuckDuckGo();
        await pageTask5.search("Playwright");
        await pageTask5.assertSecondResultLinkContains("https://www.linkedin.com");
    });