describe('template spec', () => {

  const selectorslist= {
    usernameField: "[name=username]",
    passwordField: "[name=password]",
    loginbutton: "[type=submit]",
    sectionTitletTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    wrongCredentialsAlert : "[role='alert']"
  }
  
  it('login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type('Admin')
    cy.get(selectorslist.passwordField).type('admin123')
    cy.get(selectorslist.loginbutton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.sectionTitletTopBar).contains('Dashboard')
  })
  it('login - failed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type('teste')
    cy.get(selectorslist.passwordField).type('teste')
    cy.get(selectorslist.loginbutton).click()
    cy.get(selectorslist.wrongCredentialsAlert)
  })
})