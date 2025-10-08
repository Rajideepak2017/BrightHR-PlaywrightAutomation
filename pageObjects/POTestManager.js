const {employeePage}= require('../pageObjects/employeePage');
const {loginPage}= require('../pageObjects/loginPage');
class POTestManager{


    constructor(page){
        this.employeePage= new employeePage(page);
        this.loginPage = new loginPage(page);

    }

    getEmployeePage(){
        return this.employeePage;
    }
    getLoginPage(){
        return this.loginPage;
    }
}

module.exports={POTestManager};