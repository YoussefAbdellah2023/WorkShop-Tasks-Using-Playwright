import { PageTask8 } from "../Pages/PageTask8";
import { test } from "@playwright/test";

    test("navigate To Herokuapp And Upload File And Assert File Uploaded Successfully", async ({page}) => {
        const pageTask8 = new PageTask8(page);
        await pageTask8.navigateToHerokuapp();
        await pageTask8.uploadFile();
        await pageTask8.assertFileUploadedSuccessfully();
    });