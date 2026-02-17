// Cypress AI-generated tests for Forms Page
// prompt: already added data-test to forms/page.jsx file
// could you please generate forms_ai.cy.js file?

describe('Forms Page AI', () => {
  beforeEach(() => {
    cy.visit('/forms')
  })

  it('should allow typing in the email input', () => {
    cy.get('[data-test="subscribe-form"]').find('input').type('aiuser@example.com')
    cy.get('[data-test="subscribe-form"]').find('input').should('have.value', 'aiuser@example.com')
  })

  it('should show success message for valid email', () => {
    cy.get('[data-test="subscribe-form"]').find('input').type('aiuser@example.com')
    cy.get('[data-test="subscribe-button"]').click()
    cy.contains(/Successfully subbed: aiuser@example.com!/i).should('be.visible')
    cy.wait(3000)
    cy.contains(/Successfully subbed: aiuser@example.com!/i).should('not.exist')
  })

  it('should show invalid message for invalid email', () => {
    cy.get('[data-test="subscribe-form"]').find('input').type('aiuser@invalid')
    cy.get('[data-test="subscribe-button"]').click()
    cy.contains(/Invalid email: aiuser@invalid!/i).should('be.visible')
    cy.wait(3000)
    cy.contains(/Invalid email: aiuser@invalid!/i).should('not.exist')
  })

  it('should show fail message for empty input', () => {
    cy.get('[data-test="subscribe-button"]').click()
    cy.contains(/fail!/i).should('be.visible')
    cy.wait(3000)
    cy.contains(/fail!/i).should('not.exist')
  })
})
