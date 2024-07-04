describe('Cadastro de 50 Usuários', () => {
    it('Deve preencher corretamente para cadastro de 50 usuários', () => {
      // Lê os usuários do arquivo JSON
      cy.fixture('usuariosCadastrados.json').then(usuarios => {
        usuarios.forEach(usuario => {
          cy.visit('https://adopet-frontend-cypress.vercel.app/')
          cy.get('[data-test="register-button"]').click();
          cy.get('[data-test="input-name"]').type(usuario.nome);
          cy.get('[data-test="input-email"]').type(usuario.email);
          cy.get('[data-test="input-password"]').type(usuario.senha);
          cy.get('[data-test="input-confirm-password"]').type(usuario.confirmarSenha);
          cy.get('[data-test="submit-button"]').click();
        });
      });
    });
  });
  
  