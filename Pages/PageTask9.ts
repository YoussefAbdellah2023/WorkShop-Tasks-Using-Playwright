import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";

//    Open Google Chrome
//    Navigate to [https://jqueryui.com/resources/demos/droppable/default.html]
//    Drag [Drag me to my target] and drop it on [Drop here]
//    Assert that the text has been changed to [Dropped!]
//    Close Google Chrome

export class PageTask9 extends BasePage {

    dragMe = this.page.locator('//*[@id="draggable"]')
    dropIt = this.page.locator('//*[@id="droppable"]')

    async navigateToJqueryui() {
        await this.page.goto('https://jqueryui.com/resources/demos/droppable/default.html');
    }   
    async dragAndDrop() {
        await this.dragMe.dragTo(this.dropIt);
    }

    async assertTextChangedToDropped() {
        await expect(this.dropIt).toHaveText('Dropped!');
    }
}