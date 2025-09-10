import { Page } from "playwright";
import { CommonSteps } from "./CommonSteps";
import { CommonLocators } from "../Locators/CommonLocators";
import {PropertiesTabLocator} from "../Locators/PropertiesLocator";

export class PropertiesPage extends CommonSteps {
  constructor(page: Page) {
    super(page);
  }

  async verifyingHeadingOnPropertiesPage(url: string) {
    await this.navigateTo(url);
    await this.waitForLocator(CommonLocators.propertiesTabLocator);
    await this.clickOnLocator(CommonLocators.propertiesTabLocator);
    await this.waitForLocator(PropertiesTabLocator.investmentPropertiesLocator);
    await this.waitForLocator(PropertiesTabLocator.modernVillaWithPoolLocator);
    await this.waitForLocator(PropertiesTabLocator.activeInvestmentLocator);
    await this.waitForLocator(PropertiesTabLocator.investNowButtonLocator);
  }
}