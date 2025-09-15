import { PageTask9 } from "../Pages/PageTask9";
import { test } from "@playwright/test";

    test("navigate To Jqueryui And Drag And Drop And Assert Text Changed To Dropped", async ({page}) => {
        const pageTask9 = new PageTask9(page);
        await pageTask9.navigateToJqueryui();
        await pageTask9.dragAndDrop();
        await pageTask9.assertTextChangedToDropped();
    });