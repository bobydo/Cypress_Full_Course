describe("Recording 2/16/2026 at 9:33:37 PM", () => {
  it("tests Recording 2/16/2026 at 9:33:37 PM", () => {
    cy.viewport(1341, 911);
    cy.visit("http://localhost:3000/__/#/specs/runner?file=cypress/e2e/fundamentals.cy.js");
    cy.get("[data-test='accordion-item-2'] div.MuiAccordionSummary-content").click();
    cy.get("[data-test='accordion-item-2'] > div.MuiCollapse-root p").click();
  });
});
//# recorderSourceMap=BCBDBEBFB
