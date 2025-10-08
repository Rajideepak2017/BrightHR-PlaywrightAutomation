const {test,expect}=require('@playwright/test');

const {POTestManager}= require('../pageObjects/POTestManager');
const dataset = JSON.parse(JSON.stringify(require('../utility/config.json')));

test('@Smoke Verify two employees name',async ({page})=>{

    const poManager = new POTestManager(page);
   const employee =poManager.getEmployeePage();
   const login =poManager.getLoginPage();
   const { username, password } = dataset.validUser;
   await login.logincall( username, password);
    const { playwrightUserOne, playwrightUserTwo } = dataset;
             // Add first employee
        await employee.addEmployee( playwrightUserOne.firstName,playwrightUserOne.Lastname, playwrightUserOne.email ,playwrightUserOne.day,playwrightUserOne.month,playwrightUserOne.year );
           // Add second employee
        await employee.addEmployee(playwrightUserTwo.firstName,playwrightUserTwo.Lastname, playwrightUserTwo.email ,playwrightUserTwo.day,playwrightUserTwo.month,playwrightUserTwo.year );
         const firstName = playwrightUserOne.firstName;
         const lastName = playwrightUserOne.Lastname;
         const employeeOne = firstName + " " + lastName;
         await employee.verifyEmployeeVisible(employeeOne);
         const fName = playwrightUserTwo.firstName;
         const lName = playwrightUserTwo.Lastname;
         const employeeTwo = fName + " " + lName;
         await employee.verifyEmployeeVisible(employeeTwo);
})
