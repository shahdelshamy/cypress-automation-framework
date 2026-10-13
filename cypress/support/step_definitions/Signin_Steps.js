/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I enter a valid username", () => {
  cy.get('#mobileNumber').type("1100000053");
});

When("I enter a invalid username", () => {
  cy.get('#mobileNumber').type("1100000053");
});

When("I enter a valid password", () => {
  cy.get('#password').type("Ahmed@123");
});

When("I click on the login button for submit", () => {
  cy.get('[type="submit"]').click();
});

Then("I should be redirected to user dashboard page", () => {
  cy.url().should("include", "https://pims-dev.algoorasystems.com/ar/user");
});

Then("I should see an error message that says {string}", (errorMessage) => {
  cy.get('body').should('contain.text', errorMessage);
});