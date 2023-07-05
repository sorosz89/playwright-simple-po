import { Page } from "@playwright/test";
import { Header } from "./header/header.component";
export class Home {
    readonly header: Header;
    constructor(page: Page) {
        this.header = new Header(page, ".navbar");
    }

    async isTitleVisible(): Promise<boolean> {
        return this.header.get().isVisible();
    }
}              