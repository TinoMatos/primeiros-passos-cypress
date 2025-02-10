import  userData  from '../fixtures/userData.json'
import  LoginPage  from '../pages/loginPage.js'
import  DashboardPage  from '../pages/dashboardPage.js'

const  loginPage = new LoginPage()
const  dashboardPage = new DashboardPage()

describe('template spec', () => {

 it('login - failed', () => {
   loginPage.accessLoginPage()
   loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
   loginPage.checkaAccessIvalid()
   })

 it('login - Success', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
  dashboardPage.checkDashboardPage()
  
  })
})