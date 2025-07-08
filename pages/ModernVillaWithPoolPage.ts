import { Page } from "playwright";
import { CommonSteps } from "./CommonSteps";
import { CommonLocators } from "../Locators/CommonLocators";
import {PropertiesTabLocator} from "../Locators/PropertiesLocator";
import { ModernVillaWithPoolLocator } from '../Locators/ModernVillaWithPoolLocator';

export class ModernVillaWithPoolPage extends CommonSteps {
  constructor(page: Page) {
    super(page);
  }

  async verifyingHeadingOnVillaWithPoolPage(url: string) {
    await this.navigateTo(url);
    await this.waitForLocator(CommonLocators.propertiesTabLocator);
    await this.clickOnLocator(CommonLocators.propertiesTabLocator);
    await this.waitForLocator(PropertiesTabLocator.investNowButtonLocator);
    await this.clickOnLocator(PropertiesTabLocator.investNowButtonLocator);
    await this.waitForLocator(ModernVillaWithPoolLocator.propertyDetailsHeadingLocator);
    await this.waitForLocator(ModernVillaWithPoolLocator.featuresHeadingLocator);
    await this.waitForLocator(ModernVillaWithPoolLocator.tokenInformationHeadingLocator);
    await this.waitForLocator(ModernVillaWithPoolLocator.rentalIncomeHeadingLocator);
    await this.waitForLocator(ModernVillaWithPoolLocator.expensesHeadingLocator);

  }
}