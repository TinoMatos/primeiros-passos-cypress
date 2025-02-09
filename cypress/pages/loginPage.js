class LoginPage{

    selectorsList() {
        const selectors = {
            usernameField: "[name=username]",
            passwordField: "[name=password]",
            loginbutton: "[type=submit]",
            wrongCredentialsAlert : "[role='alert']",
        }
        return selectors
    }
    accessLoginPage(){
        cy.visit('auth/login')
    }
    loginWithUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginbutton).click()
    }
    loginWithWrongCredentials(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginbutton).click()
        cy.get(this.selectorsList().wrongCredentialsAlert)
    }
}

export default LoginPage