/*describe('Alteração dos Usuários Cadastrados', () => {
    it('Deve alterar os dados dos usuários cadastrados', () => {
      // Lê os usuários cadastrados do arquivo
      cy.fixture('usuariosCadastrados.json').then(usuariosCadastrados => {
        usuariosCadastrados.forEach(usuario => {
          cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  
          cy.get('[data-test="input-email"]').type(usuario.email);
          cy.get('[data-test="input-password"]').type(usuario.senha);
          cy.get('[data-test="login-button"]').click();
  
          cy.url().should('not.include', '/login'); // verificar se redirecionou após o login
  
          cy.visit('https://adopet-frontend-cypress.vercel.app/perfil'); // URL fictícia para alteração de perfil
  
          const novoNome = faker.person.fullName();
          cy.get('[data-test="input-name"]').clear().type(novoNome);
          cy.get('[data-test="submit-button"]').click();
  
          cy.get('[data-test="input-name"]').should('have.value', novoNome); // verificar se o nome foi alterado
        });
      });
    });
  });
*/
describe('Alteração dos Usuários Cadastrados', () => {
    const { faker } = require('@faker-js/faker');
  
    it('Deve alterar os dados dos usuários cadastrados', () => {
      // Lê os usuários cadastrados do arquivo
      cy.fixture('usuariosCadastrados.json').then(usuariosCadastrados => {
        usuariosCadastrados.forEach(usuario => {
          cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  
          cy.get('[data-test="input-loginEmail"]').type(usuario.email);
          cy.get('[data-test="input-loginPassword"]').type(usuario.senha);
          cy.get('[data-test="submit-button"]').click();
  
          cy.url().should('not.include', '/login'); // Verificar se redirecionou após o login
  
          // Simular cliques necessários para acessar a página de perfil
          cy.get('.header__user').click(); // Clique no botão que abre o menu
          cy.get('.button').click(); // Clique no link de perfil
  
          // Gerar novos dados para os campos de perfil
          const novoTelefone = faker.phone.number('## #########'); // Formato XX XXXXXXXXX
          const novaCidade = faker.address.city();
          const novaInfo = faker.lorem.sentence();
  
          // Preencher os campos com os novos dados
          cy.get('#telefone').clear().type(novoTelefone);
          cy.get('#cidade').clear().type(novaCidade);
          cy.get('#sobre').clear().type(novaInfo);
  
          // Submeter o formulário de alteração
          cy.get('[data-test="submit-button"]').click();
  
          // Verificar se os dados foram alterados corretamente
          //cy.get('#telefone]').should('have.value', novoTelefone);
          //cy.get('#cidade').should('have.value', novaCidade);
          //cy.get('#sobre').should('have.value', novaInfo);
        });
      });
    });
  });
  