

//New Command for TestZootopia

Cypress.Commands.add('login', (email, password) => {


  // 4. Verify that the "Log in" located at the top right side of the web page is visible.  
  cy.get('.iprof').should('be.visible').click()

  // 5. Verify that by clicking on "Log in", a window pops up with E-mail and Password input fields.  
  // 6. Fill E-mail input field with valid data.  
  // 7. Fill password input field with valid data.  
  cy.get('[name="login_email"]').should('be.visible').type(email)
  cy.get('[name="login_password"]').should('be.visible').type(password)

  // 8. Click the "Authorization" button. 
  cy.get('.form-button').contains('Authorization').click()



})
