const { faker } = require('@faker-js/faker');
const fs = require('fs');

// Função para gerar um único usuário
const generateUser = () => {
  const nome = faker.person.fullName();
  const email = faker.internet.email();
  const senha = faker.internet.password(faker.datatype.number({ min: 6, max: 15 }));
  const confirmarSenha = senha; // A confirmação de senha deve ser igual à senha

  return { nome, email, senha, confirmarSenha };
};

// Gerar 50 usuários
const generateUsers = (numUsers = 50) => {
  const users = [];

  for (let i = 0; i < numUsers; i++) {
    let user = generateUser();

    // Garante que o email não seja repetido
    while (users.find(u => u.email === user.email)) {
      user = generateUser();
    }

    users.push(user);
  }

  return users;
};

// Salvar os usuários em um arquivo JSON
const saveUsersToFile = (filename, users) => {
  fs.writeFile(filename, JSON.stringify(users, null, 2), err => {
    if (err) {
      console.error('Erro ao salvar o arquivo:', err);
    } else {
      console.log('Usuários salvos com sucesso em', filename);
    }
  });
};

// Gerar e salvar os usuários
const users = generateUsers();
saveUsersToFile('usuariosCadastrados.json', users);
