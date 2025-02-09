class MyinfoPage {
   
    selectorslist() {
      const selectors = {
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
        
      return selectors
    }

    fillPersonalDetails(fristName, middleName, lastName){
        
    cy.get(this.selectorslist().fristNameField).clear().type(fristName)
    cy.get(this.selectorslist().middleNameField).clear().type(middleName)
    cy.get(this.selectorslist().lastNameField).clear().type(lastName)
        
        
  }
  fillEmployeeDetails(emergenceid, employeeid, otherid, data){
    
  cy.get(this.selectorslist().genericField).eq(3).clear().type(employeeid)
  cy.get(this.selectorslist().genericField).eq(4).clear().type(otherid)
  cy.get(this.selectorslist().genericField).eq(5).clear().type(emergenceid)
  cy.get(this.selectorslist().genericField).eq(7).clear().type(data)
  cy.get(this.selectorslist().datecloseButton).click()
 }
  fillstatus(){

  cy.get(this.selectorslist().genericComboBox).eq(0).click()
  cy.get(this.selectorslist().seconditemcombobox).click()
  cy.get(this.selectorslist().genericComboBox).eq(1).click()
  cy.get(this.selectorslist().thirdItemcombobox).click()
}
  saveform(){
    
  cy.get(this.selectorslist().submiyButton).eq(0).click()
  cy.get('body').should('contain', 'Successfully Updated')
  cy.get('.oxd-toast-close')

}

}

  
export default MyinfoPage