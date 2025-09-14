import { PageTask2 } from "../Pages/PageTask2";
import { test } from "@playwright/test";

    test('Navigate To DuckDuckGo And Assert The Logo Is Displayed', async ({ page }) => {
        const pageTask2 = new PageTask2(page);
        await pageTask2.goto();
        await pageTask2.assertLogo();
    });