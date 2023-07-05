import { Locator, Page } from "@playwright/test";
import { PageComponent } from "../../pageComponent";
import { SearchBar } from "./searchBar.component"
import selectors from "./header.selectors.json";

export type K = keyof typeof selectors

export class Header extends PageComponent {
    searchBar: SearchBar;
    private root: Locator
    constructor(page: Page, root: string) {
        super(page, root, selectors)
        this.root = page.locator(root)
        this.searchBar = new SearchBar(page, root + " .searchBox_ZlJk")
    }

    get(name?: K): Locator {
        return name ? this[name] : this.root;
    }
}