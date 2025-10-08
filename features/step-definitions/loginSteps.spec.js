const { Given } = require('@cucumber/cucumber');
const{POTestManager} = require('../../pageObjects/POTestManager');
const playwright = require('@playwright/test');
const path = require('path');
const dataset = require(path.resolve(__dirname, '../../utility/config.json'));

Given('I am logged into BrightHR',{ timeout: 30000 }, async function () {
     const { username, password } = dataset.validUser;
 console.log('POManager:', this.poManager); 
  await this.poManager.getLoginPage().logincall(username,password);
});
