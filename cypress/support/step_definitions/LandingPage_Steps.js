/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://pims-dev.algoorasystems.com/ar/";

Given("I navigate to PIMS Landing Page", () => {
  cy.visit(url);
});

When("I click on the login button", () => {
  cy.get('a[routerlink="/login"]').click();
});