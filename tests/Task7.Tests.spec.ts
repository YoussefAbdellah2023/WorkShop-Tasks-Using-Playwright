import { PageTask7 } from "../Pages/PageTask7";
import { test } from "@playwright/test";



    test("navigate To W3schools And Assert Country for Company Ernst Handel Is Austria", async ({page}) => {
        const pageTask7 = new PageTask7(page);
        await pageTask7.navigateToW3schools();
        await pageTask7.assertCountryForCompanyErnstHandel();
    });

