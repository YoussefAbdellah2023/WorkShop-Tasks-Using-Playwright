import path from "path";
import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";



//    Open Google Chrome
//    Navigate to [http://the-internet.herokuapp.com/upload]
//    Upload a small image file
//    Assert that the file was uploaded successfully
//    Close Google Chrome

export class PageTask8 extends BasePage {

    chooseFileButton = this.page.locator('#file-upload');
    uploadButton = this.page.locator('#file-submit');
    successMessage = this.page.locator('//div[@class="example"]/h3');

    // filePath = 'Files/download.png';

    async navigateToHerokuapp() {
        await this.page.goto('http://the-internet.herokuapp.com/upload');
    }
    async uploadFile() {
        await this.chooseFileButton.setInputFiles(path.join('../WorkShop-Playwright/Files/download.jpg'));
        await this.uploadButton.click();
    }
    async assertFileUploadedSuccessfully() {
        await expect(this.successMessage).toHaveText('File Uploaded!');
    }
}