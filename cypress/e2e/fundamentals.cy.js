describe('Fundamentals test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  },
  afterEach(() => { 
    cy.getDataTest('accordion-item-7').click()  
    // cy.get('[data-test="accordion-item-2"] div[role="button"]').click()
  })
  )
  it('Contains correct header text', () => {
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')
  })
  it.only('Accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
})