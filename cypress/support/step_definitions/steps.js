import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Given ("I access the Automation Exercise home page", () => {
cy.visit("https://automationexercise.com/")

})
When ("I access the login page", () =>{
cy.get ('.shop-menu > .nav > :nth-child(4) > a').click ()    
})

And ("I fill in with incorrect email and password", () => {
cy.get('[data-qa="login-email"]').type('emailqa@gmail.com') 
cy.get('[data-qa="login-password"]').type('senha1212')
})

Then ("after clicking submit, an error message will appear", () =>{
cy.get('[data-qa="login-button"]').click()  
})