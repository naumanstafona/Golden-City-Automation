import { test, chromium, Page, Browser, BrowserContext } from "@playwright/test";
import config from "../config";
import { HomePage } from "../pages/HomePage";

let browser: Browser;
let context: BrowserContext;
let page: Page;
let homePage: HomePage;

test.describe("Home Page - UI Elements Verification", () => {
  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    homePage = new HomePage(page);
  });

  test("Verify all headings and buttons on the Home Page", async () => {
    await homePage.verifyingAllHeadingAndButtons(config.url);
  });

  test.afterAll(async () => {
    console.log("Closing the browser...");
    await browser.close();
  });
});
