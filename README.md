# PixelCore API

API REST desenvolvida com NestJS e TypeScript para gerenciamento de produtos e categorias.

## Tecnologias Utilizadas

- TypeScript
- Node.js
- NestJS
- TypeORM
- MySQL
- Jest
- ESLint

## Funcionalidades

- CRUD de categorias
- CRUD de produtos
- Estrutura modular com NestJS
- Organização em camadas
- Integração com banco de dados relacional
- Testes automatizados

## Estrutura do Projeto

```bash
src/
 ├── categoria/
 ├── produto/
 ├── app.module.ts
 ├── app.controller.ts
 ├── app.service.ts
 └── main.ts
```

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- npm ou yarn
- Banco de dados MySQL configurado

### Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### Acesse a pasta do projeto

```bash
cd PixelCore
```

### Instale as dependências

```bash
npm install
```

### Execute o projeto

```bash
npm run start:dev
```

A aplicação estará disponível em:

```bash
http://localhost:3000
```

## Executando os Testes

```bash
npm run test
```

## Aprendizados

Este projeto foi desenvolvido com foco em:

- Estruturação de APIs REST com NestJS
- Arquitetura modular
- Boas práticas com TypeScript
- Organização de controllers, modules e services
- Integração backend com banco de dados
