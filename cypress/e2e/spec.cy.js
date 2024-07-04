describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Teste');
    cy.get('input[name="email"]').type('teste@email.com');
    cy.get('input[name="password"]').type('Teste123');
    cy.get('input[name="confirm_password"]').type('Teste123');
    cy.contains('button', 'Cadastrar').click();

  })
})