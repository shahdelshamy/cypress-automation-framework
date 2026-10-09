/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I type a first name", () => {
  cy.get('[name="first_name"]').type("Shahd");
});

When("I type a last name", () => {
  cy.get('[name="last_name"]').type("Abdelnaby");
});

When("I type an email address", () => {
  cy.get('[name="email"]').type("shahd.abdelnaby@example.com");
});

When("I type a message", () => {
  cy.get('[name="message"]').type("This is a test message.");
});

When("I click on the submit button", () => {
  cy.get('[type="submit"]').click();
});

Then("I should see a success message", () => {
  cy.get('h1').should('have.text', 'Thank You for your Message!');
});

Then("I should see an error message", () => {
  cy.get('body').should('contain.text', 'Error: Invalid email address');
});