# To-Do List ✅

Este projeto foi desenvolvido para facilitar o gerenciamento de uma lista de tarefas (To-Do List), utilizando tecnologias como Node.js, Express, Sequelize, dotenv e MySQL. Ele é uma atividade prática avaliativa da disciplina de Programação Web II ministrada pelo Professor [Érico Borgonove](https://github.com/EricoBorgonove), com o objetivo de desenvolver habilidades práticas na criação e implementação de APIs RESTful.

## Funcionalidades 🛠️

- **Usuários (Users)**:
  - Criar um novo usuário.
  - Listar todos os usuários.
  - Atualizar informações de um usuário.
  - Excluir um usuário.

- **Tarefas (Tasks)**:
  - Criar uma nova tarefa associada a um usuário.
  - Listar todas as tarefas.
  - Atualizar informações de uma tarefa.
  - Excluir uma tarefa.

## Tecnologias 💻

- Node.js
- Express
- Sequelize 
- MySQL
- Dotenv 
- Postman 

## Estrutura do Projeto 📁

O projeto está estruturado seguindo a arquitetura MVC (Model-View-Controller):

```
todo-list-api/
├── config/
│   └── config.js
├── controllers/
│   ├── userController.js
│   └── taskController.js
├── migrations/
│   ├── xxxxxx-create-users.js
│   └── xxxxxx-create-tasks.js
├── models/
│   ├── index.js
│   ├── user.js
│   └── task.js
├── routes/
│   ├── userRoutes.js
│   └── taskRoutes.js
├── .env.example
├── package.json
├── server.js
└── README.md
```

## Configuração ⚙️

1. **Instalação das Dependências**:
   ```bash
   npm install
   ```

2. **Variáveis de Ambiente**:
   - Renomeie o arquivo `.env.example` para `.env`.
   - Configure as variáveis de ambiente necessárias no arquivo `.env`.

3. **Configuração do Banco de Dados**:
   - Certifique-se de ter um servidor MySQL configurado.
   - Atualize as configurações de conexão com o banco de dados no arquivo `config/config.js`.

4. **Executar as Migrações**:
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Iniciar o Servidor**:
   ```bash
   node server.js
   ```

6. **Testar a API**:
   - Use o [Postman](https://www.postman.com/downloads/) ou [Insomnia](https://insomnia.rest/download) para testar as rotas da API.


## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).