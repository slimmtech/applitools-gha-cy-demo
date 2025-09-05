describe("Applitools Demo Test", () => {
  it("Visits the Applitools demo page and performs visual testing", () => {
    // Visit the Applitools demo page
    if (
      Cypress.env("FORCED_FAILURE") === false ||
      Cypress.env("FORCED_FAILURE") === undefined
    ) {
      cy.visit("helloworld");
    } else {
      cy.log("Forcing a visual failure");
      console.log("Forcing a visual failure");
      cy.visit("helloworld?diff1");
    }

    // Perform visual testing using Applitools
    cy.eyesOpen({
      appName: "Applitools Demo",
      testName: "Hello World Page",
    });

    // Capture a screenshot for visual comparison
    cy.eyesCheckWindow("Hello World Page");

    // Close the eyes session
    cy.eyesClose();
  });
});
