import { Page } from "playwright";
import { CommonSteps } from "./CommonSteps";
import { CommonLocators } from "../Locators/CommonLocators";
import { HomeLocators } from "../Locators/HomeLocators";

export class HomePage extends CommonSteps {
  constructor(page: Page) {
    super(page);
  }

  async verifyingAllHeadingAndButtons(url: string) {
    await this.navigateTo(url);
    await this.waitForLocator(CommonLocators.logoLocator);
    await this.waitForLocator(CommonLocators.homeTabLocator);
    await this.waitForLocator(CommonLocators.propertiesTabLocator);
    await this.waitForLocator(CommonLocators.aboutTabLocator);
    await this.waitForLocator(CommonLocators.fAQTabLocator);
    await this.waitForLocator(CommonLocators.blogTabLocator);
    await this.waitForLocator(CommonLocators.connectButtonLocator);
    await this.waitForLocator(HomeLocators.logoLocator);
    await this.waitForLocator(HomeLocators.mainHeadingLocator);
    await this.waitForLocator(HomeLocators.startInvestingHeadingLocator);
    await this.waitForLocator(HomeLocators.step1HeadingLocator);
    await this.waitForLocator(HomeLocators.connectWalletHeadingLocator);
    await this.waitForLocator(HomeLocators.step2HeadingLocator);
    await this.waitForLocator(HomeLocators.choosePropertyHeadingLocator);
    await this.waitForLocator(HomeLocators.step3HeadingLocator);
    await this.waitForLocator(HomeLocators.receiveReturnsHeadingLocator);
    await this.waitForLocator(HomeLocators.step4HeadingLocator);
    await this.waitForLocator(HomeLocators.flexibleExitHeadingLocator);
    await this.waitForLocator(HomeLocators.howGoldenCityWorksHeadingLocator);
    await this.waitForLocator(HomeLocators.tokenizationHeadingLocator);
    await this.waitForLocator(HomeLocators.purchaseNFTsHeadingLocator);
    await this.waitForLocator(HomeLocators.monthlyReturnsHeadingLocator);
    await this.waitForLocator(HomeLocators.flexibleTradingHeadingLocator);
    await this.waitForLocator(HomeLocators.featuredInvestmentOpportunitiesHeadingLocator);
    await this.waitForLocator(HomeLocators.whyChooseGoldenCityHeadingLocator);
    await this.waitForLocator(HomeLocators.profitabilityHeadingLocator);
    await this.waitForLocator(HomeLocators.liquidityHeadingLocator);
    await this.waitForLocator(HomeLocators.noHiddenFeesHeadingLocator);
    await this.waitForLocator(HomeLocators.hassleFreeManagementHeadingLocator);
    await this.waitForLocator(HomeLocators.readyToStartInvestingHeadingLocator);
    await this.waitForLocator(HomeLocators.browsePropertiesButtonLocator);
    await this.waitForLocator(HomeLocators.connectWalletButtonLocator);
    await this.waitForLocator(HomeLocators.latestInsightsHeadingLocator);
    await this.waitForLocator(HomeLocators.frequentlyAskedQuestionsHeadingLocator);
    await this.waitForLocator(HomeLocators.joinOurCommunityHeadingLocator);
    await this.waitForLocator(HomeLocators.joinNowButtonLocator);
  }
}