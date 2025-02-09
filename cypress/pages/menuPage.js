class MenuPage {
  selectorslist() {
    const selectors = {
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
      preferencesButton: "[href='/web/index.php/performance/viewPerformanceModule']",
      diretybutton: "[href='/web/index.php/directory/viewDirectory']",
      claimButton: "[data-v-6475d26d=''][href='/web/index.php/admin/viewAdminModule']",
      buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
      recruitbutton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
      timebutton: "[href='/web/index.php/time/viewTimeModule']",
      leavebutton: "[href='/web/index.php/leave/viewLeaveModule']",
      pimbutton: "[href='/web/index.php/pim/viewPimModule']",
      adminbutton: "[href='/web/index.php/admin/viewAdminModule']",
    }
    return selectors
  }
  accessMyInfo(){
    cy.get(this.selectorslist().myInfoButton).click()
}
  accessPreferences(){
        cy.get(this.selectorslist().preferencesButton).click()
}
  accessDirectory(){
        cy.get(this.selectorslist().diretybutton).click()
}
  accessClaim(){
        cy.get(this.selectorslist().claimButton).click()
}
  accessBuzz(){
        cy.get(this.selectorslist().buzzButton).click()
}
  accessRecruit(){
        cy.get(this.selectorslist().recruitbutton).click()
}
  accessTime(){
        cy.get(this.selectorslist().timebutton).click()
}
  accessLeave(){
        cy.get(this.selectorslist().leavebutton).click()
}
  accessPim(){
        cy.get(this.selectorslist().pimbutton).click()
}	
  accessAdmin(){
        cy.get(this.selectorslist().adminbutton).click()
}
  
}

export default MenuPage