# GoldenCity Playwright Project

## 📋 Description
This project automates end-to-end tests for the Golden City platform using [Playwright](https://playwright.dev/).

## 📁 Project Structure

GOLDEN_CITY_AUTOMATION/
 ├── Locators/ # Element locators for various modules
  │ ├── CommonLocators.ts
  │ ├── HomeLocators.ts
  │ ├── ModernVillaWithPoolLocator.ts
  │ └── PropertiesLocator.ts
 ├── pages/ # Page object models
    │ ├── CommonSteps.ts
    │ ├── HomePage.ts
    │ ├── ModernVillaWithPoolPage.ts 
    │ └── Properties.ts 
 ├── tests/ # Test specifications 
    │ ├── GoldenCityHome.test.ts 
    │ ├── GoldenCityModernVillaWithPool.test.ts 
    │ └── GoldenCityProperties.test.ts 
 ├── test-results/ # Test output and artifacts 
 ├── config.ts # Playwright or project-specific config 
 ├── package.json # Project dependencies and scripts 
 ├── tsconfig.json # TypeScript configuration 
 └── README.md # Project documentation

 ---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install

## Run All Tests
npx playwright test

