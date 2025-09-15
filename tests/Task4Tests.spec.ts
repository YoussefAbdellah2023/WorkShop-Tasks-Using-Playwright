import { PageTask4 } from "../Pages/PageTask4";
import { test } from "@playwright/test";

    test("navigate To DuckDuckGo And Search for TestNG and Assert The Fourth Result Text", async ({page}) => {
        const pageTask4 = new PageTask4(page);
        await pageTask4.navigateToDuckDuckGo();
        await pageTask4.search("TestNG");
        await pageTask4.assertFourthResultText("TestNG Tutorial");
    });