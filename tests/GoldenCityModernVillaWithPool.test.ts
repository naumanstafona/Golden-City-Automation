import { test, chromium, Page, Browser, BrowserContext } from "@playwright/test";
import config from "../config";
import { ModernVillaWithPoolPage } from "../pages/ModernVillaWithPoolPage";

let browser: Browser;
let context: BrowserContext;
let page: Page;
let modernVillaWithPoolPage: ModernVillaWithPoolPage;

test.describe("Golden City Modern Villa with Pool Page - UI Elements Verification", () => {
  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    modernVillaWithPoolPage = new ModernVillaWithPoolPage(page);
  });

  test("Verify headings on the Modern Villa with Pool Page", async () => {
    await modernVillaWithPoolPage.verifyingHeadingOnVillaWithPoolPage(config.url);
  });

  test.afterAll(async () => {
    console.log("Closing the browser...");
    await browser.close();
  });
});
