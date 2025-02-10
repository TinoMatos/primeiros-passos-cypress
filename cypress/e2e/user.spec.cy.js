import  userData  from '../fixtures/userData.json'
import  LoginPage  from '../pages/loginPage.js'
import  DashboardPage  from '../pages/dashboardPage.js'
import  MenuPage  from '../pages/menuPage.js'
import  MyInfoPage  from '../pages/myInfoPage.js'

const  loginPage = new LoginPage()
const  dashboardPage = new DashboardPage()
const  menuPage= new MenuPage()
const  myInfoPage = new MyInfoPage()

describe('template spec', () => {


  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    
    menuPage.accessPim()
    menuPage.accessPreferences
    menuPage.accessTime()
    menuPage.accessDirectory()
    menuPage.accessClaim()
    menuPage.accessBuzz()
    menuPage.accessRecruit()
    menuPage.accessLeave()
    menuPage.accessAdmin()
    menuPage.accessMyInfo() 

    myInfoPage.fillPersonalDetails('Tino', 'Belmont', 'Matos')
    myInfoPage.fillEmployeeDetails('EmployeeID', 'OtherID', 'EmergenID', '2025-02-09')
    myInfoPage.fillstatus()
    myInfoPage.saveform()

  })
 it('login - failed', () => {
   loginPage.accessLoginPage()
   loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
   loginPage.checkaAccessIvalid()
   })
})