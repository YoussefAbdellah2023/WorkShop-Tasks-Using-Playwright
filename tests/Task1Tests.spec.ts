import { test, expect } from '@playwright/test';
import { PageTask1 } from '../Pages/PageTask1';

    test('Navigate To DuckDuckGo And Assert The Title', async ({ page }) => {
        const pageTask1 = new PageTask1(page);
        await pageTask1.navigateToDuckDuckGo();
        await pageTask1.assertTitle();
    });