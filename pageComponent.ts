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

// const addLocators = (selectors: Selectors, root?: string): void => {

//     console.log("ROOT", root)
//     let rollingRoot = selectors.root ? `${root} ${selectors.root}` : root
//     console.log("ROLLING ROOT", rollingRoot)
//     for (const key in selectors) {
//         if (typeof selectors[key] === "object") {
//             addLocators(selectors[key] as unknown as Selectors, rollingRoot as string)
//         } else {
//             console.log("KEY", key)
//             if (key !== "root") {
//                 this[key] = page.locator(`${rollingRoot ? rollingRoot : root} ${selectors[key]}`)
//                 console.log("SNAPSHOT", this)
//             } else {
//                 root = rollingRoot
//             }
//         }
//     }
// }
// addLocators(selectors, root)

// console.log("LOCATORS", this)