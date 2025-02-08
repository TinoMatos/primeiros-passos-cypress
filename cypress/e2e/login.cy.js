import  userData  from '../fixtures/userData.json'

describe('template spec', () => {

  const selectorslist= {
    usernameField: "[name=username]",
    passwordField: "[name=password]",
    loginbutton: "[type=submit]",
    dashboardGrid:".orangehrm-dashboard-grid",
    wrongCredentialsAlert : "[role='alert']"
  }

  it('login - success', () => {
    cy.visit('auth/login')
    cy.get(selectorslist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorslist.passwordField).type(userData.userSuccess.password)
    cy.get(selectorslist.loginbutton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.dashboardGrid)
  })
  it('login - failed', () => {
    cy.visit('auth/login')
    cy.get(selectorslist.usernameField).type(userData.userFail.username)
    cy.get(selectorslist.passwordField).type(userData.userFail.password)
    cy.get(selectorslist.loginbutton).click()
    cy.get(selectorslist.wrongCredentialsAlert)
  })
})