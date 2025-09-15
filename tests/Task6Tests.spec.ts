import { PageTask6 } from "../Pages/PageTask6";
import { test } from "@playwright/test";

    test("navigate To DuckDuckGo And Search for Cucumber and Assert The Third Result Link", async ({page}) => {
        const pageTask6 = new PageTask6(page);
        await pageTask6.navigateToHerokuapp();
        await pageTask6.checkCheckbox1();
        await pageTask6.assertBothCheckboxesChecked();
    });