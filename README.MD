### [Deploy do Projeto](https://app-cellphones.vercel.app/)

# Gerenciador de Produtos - Aplicação Web

Este é um aplicativo web desenvolvido para gerenciar produtos, especificamente celulares. Ele permite que os usuários façam login, visualizem uma lista de produtos, adicionem novos produtos, editem produtos existentes e excluam produtos.

## Funcionalidades

- Página de login e registro
- Lista de produtos com operações CRUD (Create, Read, Update, Delete)
- Adição de produtos com três estruturas diferentes
- Interface de usuário intuitiva

## Tecnologias Utilizadas

- Frontend: React.js
- Backend: Node.js com Express.js
- Banco de Dados: PostgreSQL (usando o PostgreSQL do Vercel)
- Autenticação: JSON Web Tokens (JWT)
- Estilização: CSS (ou qualquer outra biblioteca/framework de sua escolha)

## Como Executar Localmente

### Pré-requisitos

- Node.js e npm instalados na sua máquina
- PostgreSQL instalado localmente ou uma instância de PostgreSQL no Vercel

### Passos para Execução

**Clone o Repositório:**

```bash
git clone https://github.com/rodrigomarsa/app-cellphones.git
```

### Instale as Dependências do Backend (server) e Frontend (client):

Navegue até o diretório raiz do Frontend e Backend e execute os seguintes comandos:

```bash
npm install
```

### Configure o Banco de Dados:

Configure o arquivo `config.js` dentro do diretório `server/src/database/config` com as informações de conexão com o seu banco de dados PostgreSQL ou com um arquivo .env.

### Execute o Backend:

Navegue até o diretório `server` e execute o seguinte comando:

```bash
npm start
```

### Execute o Frontend:

Navegue até o diretório `client` e execute o seguinte comando:

```bash
npm start
```

### Acesse a Aplicação:

Abra seu navegador e acesse http://localhost:3000 para visualizar a aplicação.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
