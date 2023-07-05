import { test, expect } from '@playwright/test';

import { Home } from "../po/home.page"

test('the logo in the header should be visible', async ({ page }) => {
    const home = new Home(page)
    await page.goto("/");
    await expect(home.header.get("logo")).toBeVisible();
});