describe('template spec', () => {
  it('Deve preencher corretamente para cadastro de usuario', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Teste');
    cy.get('[data-test="input-email"]').type('teste@email.com');
    cy.get('[data-test="input-password"]').type('Teste123');
    cy.get('[data-test="input-confirm-password"]').type('Teste123');
    cy.get('[data-test="submit-button"]').click();

  })
})