const { expect } = require("@playwright/test");
class employeePage{
     constructor(page){
        this.page = page;
        this.employeeMenu = "//*[@title='Employees']";
        this.addEmployeelink = "//*[text()='Add employee']";
        this.firstName='#firstName88';
        this.lastName='#lastName';
        this.email ='#email';
        this.submit="//*[@type='submit']";
        this.employeeLists= "//*[contains(@class, 'text-base font-bold')]",
        this.closeLink="//*[@aria-label='Close modal']",
        this.dateInputSelector = '#startDate [data-testid="input-selector"]';
        this.yearDropdown = '//*[@data-e2e="select-year"]';
        this.monthDropdown = '//*[@data-e2e="select-month"]';
        this.yearButton = '//button[normalize-space(text())="{year}"]';
        this.monthButton = '//button[normalize-space(text())="{month}"]';
        this.dayButton = '//*[@class="DayPicker-Day-Number" and text()="{day}"]';
        this.allButtons = '//button';
        this.allDays = '//*[@class="DayPicker-Day-Number"]';
        this.selecteddate = '#startDate [data-testid="input-selector"]'; 
    }

    async navigateToEmployeeMenu() {
    await this.page.locator(this.employeeMenu).click();
  }
    async clickAddEmployee() {
    await this.page.locator(this.addEmployeelink).click();
  }
    async fillEmployeeDetails( firstName, lastName, email ) {
    await this.page.locator(this.firstName).fill(firstName);
    await this.page.locator(this.lastName).fill(lastName);
    await this.page.locator(this.email).fill(email);
  }
  async submitEmployeeForm() {
   await this.page.locator(this.submit).click();
   await this.page.waitForTimeout(1000); // wait 1 sec for UI to update

  }
  



  async closeModal() {
  const closeButton = this.page.locator(this.closeLink);
  if (await closeButton.isVisible()) {
    await closeButton.click();
    await this.page.waitForSelector(this.closeLink, { state: 'hidden' });
  }
}
 async selectDate(day, month, year) {
  
  await this.page.waitForSelector(this.dateInputSelector, { state: 'visible' });
  await this.page.locator(this.dateInputSelector).click();
  await this.page.waitForSelector(this.yearDropdown, { state: 'visible' });
  await this.page.locator(this.yearDropdown).click();
  await this.page.waitForSelector(this.allButtons, { state: 'visible' });
  const years = await this.page.locator(this.allButtons).allTextContents();
  for (const y of years) {
    if (y.trim() === year) {
      await this.page.locator(this.yearButton.replace('{year}', y)).click();
      break;
    }
  }

  await this.page.waitForSelector(this.monthDropdown, { state: 'visible' });
  await this.page.locator(this.monthDropdown).click();
  await this.page.waitForSelector(this.allButtons, { state: 'visible' });
  const months = await this.page.locator(this.allButtons).allTextContents();
  for (const m of months) {
    if (m.trim() === month) {
      await this.page.locator(this.monthButton.replace('{month}', m)).click();
      break;
    }
  }

  await this.page.waitForSelector(this.allDays, { state: 'visible' });
  const dates = await this.page.locator(this.allDays).allTextContents();
  for (const d of dates) {
    if (d.trim() === day) {
      await this.page.locator(this.dayButton.replace('{day}', d)).click();
      break;
    }
  }

  await this.page.waitForSelector(this.selecteddate, { state: 'visible' });
  const selected = await this.page.textContent(this.selecteddate);
  console.log('Selected date:', selected);
  expect(selected.trim()).toContain(`${day} ${month}`);
}



async addEmployee( firstName, lastName, email,day,month,year ) {
    await this.navigateToEmployeeMenu();
    await this.clickAddEmployee();
    await this.fillEmployeeDetails( firstName, lastName, email );
    await this.selectDate(day,month,year);
    await this.submitEmployeeForm();
    await this.close();
    await this.page.reload();
    await this.page.waitForSelector(this.employeeLists,{ state: 'visible', timeout: 60000 });

   

  }

 async verifyEmployeeVisible(fullName) {
  const names = await this.getEmployeeNames();
  console.log(names);
  if (!names.includes(fullName)) {
    throw new Error(`Employee "${fullName}" not found. Current list: ${names}`);
  }
}


  async getEmployeeNames() {

    const nameLocator = this.page.locator(this.employeeLists);
    const count = await nameLocator.count();
    console.log(count);
    const names = [];

    for (let i = 0; i < count; i++) {
        const name = await nameLocator.nth(i).textContent();
        if (name) {
            names.push(name.trim());
        }
    }

    return names;

}


async GITMain(){

console.log("");

}

}
module.exports ={employeePage};
