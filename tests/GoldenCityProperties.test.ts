import { test, chromium, Page, Browser, BrowserContext } from "@playwright/test";
import config from "../config";
import { PropertiesPage } from "../pages/Properties";

let browser: Browser;
let context: BrowserContext;
let page: Page;
let propertiesPage: PropertiesPage;

test.describe("Properties Page - UI Elements Verification", () => {
  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    propertiesPage = new PropertiesPage(page);
  });

  test("Verify headings on the Properties Page", async () => {
    await propertiesPage.verifyingHeadingOnPropertiesPage(config.url);
  });

  test.afterAll(async () => {
    console.log("Closing the browser...");
    await browser.close();
  });
});
