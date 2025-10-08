const { expect } = require("@playwright/test");
const path = require('path');
const dataset = require(path.resolve(__dirname, '../utility/config.json'));


class loginPage{
     constructor(page){
        this.page = page;
        this.loginLink="//*[text()='Log in']";
        this.userName='#username';
        this.password='#password';
        this.login= "//*[text()='Login']";
        this.url=dataset.brightHRUrl;
        this.dashboard = dataset.dashboardURL;

    }


async logincall(email, password) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      console.log(`Login attempt ${attempt + 1}`);
      await this.page.goto(this.url);

      await this.page.locator(this.loginLink).click();
      await this.page.locator(this.userName).fill(email);
      await this.page.locator(this.password).fill(password);
      await this.page.locator(this.login).click();

      await this.page.waitForURL(this.dashboard, { timeout: 10000 });
      await expect(this.page).toHaveURL(this.dashboard);
      console.log('Login successful');
      return; 
    } catch (error) {
      console.warn(`Login attempt ${attempt + 1} failed: ${error.message}`);
      if (attempt === 1) throw new Error('Login failed after 2 attempts');
    }
  }
}

} 

module.exports ={loginPage};
