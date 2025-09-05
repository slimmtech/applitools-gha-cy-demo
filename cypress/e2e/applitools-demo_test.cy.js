describe("Applitools Demo Test", () => {
  it("Visits the Applitools demo page and performs visual testing", () => {
    // Determine the URL based on the FORCED_FAILURE environment variable
    const forcedFailure =
      Cypress.env("FORCED_FAILURE") === true ||
      Cypress.env("FORCED_FAILURE") === "true";
    const url = forcedFailure ? "helloworld?diff1" : "helloworld";
    if (forcedFailure) {
      cy.log("Forcing a visual failure");
    }
    cy.log(`Visiting URL: ${url}`);
    cy.visit(url);

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
