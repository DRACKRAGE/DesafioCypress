# DesafioCypress:
- realizar o registro de 50 cadastros de usuarios no site.
- através de um arquivo JSON gerado pelo javascript ao efetuar o comando "node generateUsers.js utilizando a biblioteca faker para criar 50 usuários aleatórios e salvando esses usuarios
no arquivo usuariosCadastrados.json.
- posteriormente utilziar esse usuarioCadastrados.json para que o cypress leia cada informação e insira nos campos solicitados.
- primeiro executar o teste Registrausuarios.cy.js para registar esses usuarios.
- depois executar o teste Alteradados.cy.js realizar o login, ele ira acessar o perfil desse usuário e incluira novos dados nesses campos.

# Observações:
utilizei essa forma para interpretar a alteração pois o front-end e back-end que foi usado (o site para realizar os testes) não salva as informações de cada perfil, sendo assim
cada vez que os dados fossem inseridos ele automaticamente ficaria em branco, caso fosse possivel salvar, teria usado o comando clear para limpar os campos de informações desses usuarios incluindo novos.
