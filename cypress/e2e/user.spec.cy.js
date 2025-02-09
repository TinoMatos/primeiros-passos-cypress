import  userData  from '../fixtures/userData.json'
import  LoginPage  from '../pages/loginPage.js'
import  DashboardPage  from '../pages/dashboardPage.js'
import  MenuPage  from '../pages/menuPage.js'


const  loginPage = new LoginPage()
const  dashboardPage = new DashboardPage()
const  menuPage= new MenuPage()

describe('template spec', () => {

  const selectorslist= {
  
    
    myInfoButton:"[href='/web/index.php/pim/viewMyDetails']",
    fristNameField: "[name=firstName]",
    middleNameField: "[name=middleName]",
    lastNameField: "[name=lastName]",
    genericField: ".oxd-input--active",
    genericComboBox: ".oxd-select-text--arrow",
    seconditemcombobox: ".oxd-select-dropdown > :nth-child(27)",
    thirdItemcombobox: ".oxd-select-dropdown > :nth-child(3)",
    datecloseButton:".--close",
    submiyButton: "[type='submit']"

  }

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
    
    cy.get(selectorslist.fristNameField).clear().type("Tino")
    cy.get(selectorslist.middleNameField).clear().type("Belmont")
    cy.get(selectorslist.lastNameField).clear().type("Matos")
    cy.get(selectorslist.genericField).eq(3).clear().type("employ000")
    cy.get(selectorslist.genericField).eq(4).clear().type("other000")
    cy.get(selectorslist.genericField).eq(5).clear().type("emergence000")
    cy.get(selectorslist.genericField).eq(6).clear().type("2025-02-08")
    cy.get(selectorslist.datecloseButton).click()
    cy.get(selectorslist.submiyButton).eq(0).click({force:true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

    cy.get(selectorslist.genericComboBox).eq(0).click({force:true})
    cy.get(selectorslist.seconditemcombobox).click()
    cy.get(selectorslist.genericComboBox).eq(1).click()
    cy.get(selectorslist.thirdItemcombobox).click({force:true})

  })
 // it('login - failed', () => {
 //   loginPage.accessLoginPage()
 //   loginPage.loginWithWrongCredentials(userData.userFailed.username, userData.userFailed.password)
//  })
})