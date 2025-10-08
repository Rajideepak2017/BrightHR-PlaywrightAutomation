const{Given,When,Then}=require('@cucumber/cucumber');
const { POTestManager } = require('../../pageObjects/POTestManager');
const{expect} = require('@playwright/test');
const path = require('path');
const dataset = require(path.resolve(__dirname, '../../utility/config.json'));

         When('I add the employee details from JSON file along with email and date', { timeout: 30000 },async function () {
          const { firstUser, secondUser } = dataset;
             // Add first employee
          await this.poManager.getEmployeePage().addEmployee( firstUser.firstName,firstUser.Lastname, firstUser.email ,firstUser.day,firstUser.month,firstUser.year );
           // Add second employee
          await this.poManager.getEmployeePage().addEmployee(secondUser.firstName,secondUser.Lastname, secondUser.email ,secondUser.day,secondUser.month,secondUser.year );

         });

         Then('I should see LewiThomas and StephThomas in the employee list in the page',{ timeout: 30000 },async function () {
         const { firstUser, secondUser  } = dataset;
         const firstName = firstUser.firstName;
         const lastName = firstUser.Lastname;
         const employeeOne = firstName + " " + lastName;
         await this.poManager.getEmployeePage().verifyEmployeeVisible(employeeOne);
              
         const fName = secondUser.firstName;
         const lName = secondUser.Lastname;
         const employeeTwo = fName + " " + lName;
         await this.poManager.getEmployeePage().verifyEmployeeVisible(employeeTwo);


         });
