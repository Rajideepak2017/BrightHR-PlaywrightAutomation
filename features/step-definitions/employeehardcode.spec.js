const{Given,When,Then}=require('@cucumber/cucumber');
const { POTestManager } = require('../../pageObjects/POTestManager');
const playwright = require('@playwright/test');
      

 

         When('I add an first employee with name {string} along with email and date',{ timeout: 30000 },async function (fullName) {
         const [firstName, lastName] = fullName.split(' ');
         const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@BrightHR.com`;
         day="11"; month="Oct"; year="2025";
         await this.poManager.getEmployeePage().addEmployee(firstName,lastName,email,day,month,year);
         });

  

         When('I add an second employee with name {string} along with email and date',{ timeout: 30000 },async function (fullName) {
         const [firstName, lastName] = fullName.split(' ');
         const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@BrightHR.com`;
         day="11"; month="Oct"; year="2025";
         await this.poManager.getEmployeePage().addEmployee(firstName,lastName,email,day,month,year);
         });

   
         Then('I should see {string} and {string} in the employee list',{ timeout: 30000 }, async function (string, string2) {
          
           await this.poManager.getEmployeePage().verifyEmployeeVisible(string);
        
           await this.poManager.getEmployeePage().verifyEmployeeVisible(string2);

         });
