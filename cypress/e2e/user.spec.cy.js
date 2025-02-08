import  userData  from '../fixtures/userData.json'

describe('template spec', () => {

  const selectorslist= {
    usernameField: "[name=username]",
    passwordField: "[name=password]",
    loginbutton: "[type=submit]",
    dashboardGrid:".orangehrm-dashboard-grid",
    wrongCredentialsAlert : "[role='alert']",
    myInfoButton:"[href='/web/index.php/pim/viewMyDetails']",
    fristNameField: "[name=firstName]",
    middleNameField: "[name=middleName]",
    lastNameField: "[name=lastName]",
    genericField: ".oxd-input--active",
    datecloseButton:".--close",
    submiyButton: "[type='submit']"

  }

  it.only('User Info Update - Success', () => {
    cy.visit('auth/login')
    cy.get(selectorslist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorslist.passwordField).type(userData.userSuccess.password)
    cy.get(selectorslist.loginbutton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.dashboardGrid)
    cy.get(selectorslist.myInfoButton).click()
    cy.get(selectorslist.fristNameField).clear().type("Tino")
    cy.get(selectorslist.middleNameField).clear().type("Belmont")
    cy.get(selectorslist.lastNameField).clear().type("Matos")
    cy.get(selectorslist.genericField).eq(3).clear().type("employ000")
    cy.get(selectorslist.genericField).eq(4).clear().type("other000")
    cy.get(selectorslist.genericField).eq(5).clear().type("emergence000")
    cy.get(selectorslist.genericField).eq(6).clear().type("2025-02-08")
    cy.get(selectorslist.datecloseButton).click()
    cy.get(selectorslist.submiyButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast__close')
  })
  it('login - failed', () => {
    cy.visit('auth/login')
    cy.get(selectorslist.usernameField).type(userData.userFail.username)
    cy.get(selectorslist.passwordField).type(userData.userFail.password)
    cy.get(selectorslist.loginbutton).click()
    cy.get(selectorslist.wrongCredentialsAlert)
  })
})