describe("Applitools Demo Test", () => {
  it("Visits the Applitools demo page and performs visual testing", () => {
    // Visit the Applitools demo page
    cy.visit("helloworld");

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
