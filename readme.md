# API de gerenciamento de produtos

O objetivo do projeto é facilitar a vida do usuário ao gerenciar informações do produto, como nome, preço e descrição.



## Banco de dados

foi utilizado mongodb como banco de dados e mongoose como ORM


## Pré-requisitos
***Foi usada a versão 18 do node durante o desenvolvimento**
Certifique-se de ter o Node.js e o npm, mongo instalados na sua máquina.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/joaopedrolacerda/ProductsManagement

2. instale as dependencias:

   ```bash
   npm install

3. rode o projeto:

   ```bash
   npm start

## Testes

1. Execute o seguinte comando a baixo:

   ```bash
   npm run test



## Estrutura 



Certamente, aqui está um exemplo de tabela que você pode usar para estruturar o seu projeto em um arquivo Markdown:

markdown
Copy code
# Estrutura de Projeto

## Descrição dos Diretórios e Arquivos
Árvore de arquivos :
```
├── src
│   ├── ___tests___
│   ├── controller
│   ├── domain
│   ├── infra
│   ├── models
│   ├── routes
│   └── index.ts


```
- `README.md`: Documentação do projeto.
- `.env`: Arquivo de configuração para variáveis de ambiente.
- `package.json`: Configurações e dependências do projeto.
- `tsconfig.json`: Configurações do TypeScript.
- `.gitignore`: Lista de arquivos/diretórios a serem ignorados pelo Git.
- `src/`: Diretório principal para o código-fonte.
  - `controllers/`: Controladores da aplicação(a controller foi feita de um jeito de que consiga reaproveitar o código sem usar muito ctrl + c e ctrl + v).
  - `routes/`: Definição das rotas da aplicação.
  - `models/`: Definição de modelos de dados.
  - `infra/`: Conexão com banco de dados.
  - `domain/`: Consultas.
- `test/`: Diretório para os testes(devido ao tempo foi feito só end-to-end).
- `dist/`: Diretório onde os arquivos TypeScript são compilados.

A seguir está a estrutura básica de diretórios e arquivos para o projeto.

