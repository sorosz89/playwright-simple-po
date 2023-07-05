import { Locator, Page } from "@playwright/test";
import { Selectors } from "./types";
export class PageComponent {
    [key: string]: any
    constructor(page: Page, root: string, selectors: Selectors) {
        for (const key in selectors) {
            this[key] = page.locator(`${root} ${selectors[key]}`);
        }
    }   
}
