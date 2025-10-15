const{Before,After,AfterStep,Status} = require("@cucumber/cucumber");
const playwright = require('@playwright/test');
const {POTestManager}= require('../pageObjects/POTestManager');
const fs = require('fs');
const path = require('path');

const configPath = JSON.parse(JSON.stringify(require('../utility/config.json')));




Before(async function (scenario) {
  console.log("Before hook executing...");

  const tags = scenario.pickle.tags.map(tag => tag.name);
  let browserType = configPath.default;

  for (const tag of tags) {
    if (configPath.tagMapping[tag]) {
      browserType = configPath.tagMapping[tag];
      break;
    }
  }

  const browser = await playwright[browserType].launch({headless :true});
  const context = await browser.newContext();
  const page = await context.newPage();

  this.page = page;
  this.poManager = new POTestManager(page);
});


AfterStep(async function ({ result }) {
  if (result.status === Status.PASSED || result.status === Status.FAILED) {
    fs.mkdirSync('Screenshots', { recursive: true }); 

    const screenshotPath = `Screenshots/${result.status}-final-${Date.now()}.png`;
    await this.page.screenshot({
      path: screenshotPath,
      fullPage: true
    });

    console.log(`Saved screenshot: ${screenshotPath}`);
  }
});
;

After(async function () {
  if (this.page) {
    const context = this.page.context();
    const browser = context.browser();

    // Close page first
    await this.page.close();

    // Then close context
    if (context) {
      await context.close();
    }

    // Finally close browser
    if (browser) {
      await browser.close();
    }
  }
});
