import { Locator, Page } from "@playwright/test";
import { PageComponent } from "../../pageComponent";
import selectors from "./searchBar.selectors.json";

export type K = keyof typeof selectors

export class SearchBar extends PageComponent {
    constructor(page: Page, root: string) {
        super(page, root, selectors)
    }

    get(name: K): Locator {
        return this[name];
    }
}