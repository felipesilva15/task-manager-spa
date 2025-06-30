# Task manager

<div align="center">
    <img alt="Logo" width="350px" src="https://i.imgur.com/fbBeiWj.png" />

![Status](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=RED&style=for-the-badge)

[![Build](https://img.shields.io/github/actions/workflow/status/felipesilva15/task-manager-spa/build.yml?logo=github&label=build)](https://github.com/felipesilva15/task-manager-spa/actions/workflows/build.yml)
![Top language](https://img.shields.io/github/languages/top/felipesilva15/task-manager-spa.svg)
![Language count](https://img.shields.io/github/languages/count/felipesilva15/task-manager-spa.svg)
![Repository size](https://img.shields.io/github/repo-size/felipesilva15/task-manager-spa.svg)
[![Last commit](https://img.shields.io/github/last-commit/felipesilva15/task-manager-spa.svg)](https://github.com/felipesilva15/task-manager-spa/commits/main)
[![Issues](https://img.shields.io/github/issues/felipesilva15/task-manager-spa.svg)](https://github.com/felipesilva15/task-manager-spa/issues)
[![Licence](https://img.shields.io/github/license/felipesilva15/task-manager-spa.svg)](https://github.com/felipesilva15/task-manager-spa/blob/main/LICENSE)

</div>

Uma ferramenta para gerenciar suas tarefas de forma simples entre diferentes usuários. Veja nas seções abaixo os detalhamentos do mesmo.

## 📑 Sumário

- [Descrição geral](#-descrição-geral)
- [Principais funcionalidades](#-principais-funcionalidades)
- [Screenshots](#-screenshots)
- [Tecnologias utilizadas](#%EF%B8%8F-tecnologias-utilizadas)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Endpoints](#-endpoints)
- [Executando localmente](#-executando-localmente)
- [Executando com Docker](#-executando-com-docker)
- [Autores](#%EF%B8%8F-autores)
- [Licença](#-licença)

## 📘 Descrição Geral

- **Versão:** 1.0.0
- **Autor:** [Felipe Silva](mailto:felipe.allware@gmail.com)
- **Licença:** [Licença](https://github.com/felipesilva15/task-manager-spa/blob/main/LICENSE)
- **Deploy:** [Site](https://task-manager-app.felipesilva15.com.br) | [API](https://task-manager-api.felipesilva15.com.br/api)

## ⚙ Principais funcionalidades

- Autenticação
- Consumo de dados via API
- CRUD básico
- CI com GitHub Actions
- RESTful API

## 📷 Screenshots

Abaixo são apenas algumas capturas de tela da aplicação.

![Login](https://i.imgur.com/nCSOH3X.jpeg)
*Login*

![Cadastre-se](https://i.imgur.com/RHIvqfa.jpeg)
*Cadastre-se*

![Listagem - Tarefas](https://i.imgur.com/TFY4rtj.jpeg)
*Listagem - Tarefas*

![Formulário - Tarefas](https://i.imgur.com/6kxXbjB.jpeg)
*Formulário - Tarefas*

## 🛠️ Tecnologias utilizadas

- **Express**
- **React 18**
- **Styled components**
- **Chakra UI 2.8**
- **Docker**
- **GitHub Actions (CI/CD)**

## 📁 Estrutura de pastas

Veja abaixo uma breve explicação da estrutura de pastas utilizadas neste projeto.

```text
.
├── api/ 
│   └── src/
│       ├── data/                       # Arquivos JSON de cada entidade
│       ├── libs/                       # Classes gerais para toda aplicação
│       ├── routes/                     # Configuração de rotas e controllers
│       ├── services/                   # Service para execução de ação de cada entidade
│       └── app.js                      # Arquivo raiz para inicialização e configuração da API
└── app/
    ├── docker/                         # Configurações e instruções para build da imagem com Docker 
    ├── public/                         # Arquivos estáticos públicos (Favicon, imagens etc.)
    └── src/
        ├── components/                 # Componentes reutilizáveis e globais
        ├── layouts/                    # Layouts (Raiz, autenticação etc.)
        ├── pages/                      # Páginas da aplicação
        ├── services/                   # Serviços/classes utilitárias
        ├── App.jsx                     # Componente raiz da aplicação
        ├── index.js                    # Arquivo raiz para inicialização e configuração do app
        └── theme.js                    # Configuração de tema da aplicação com Chakra UI
```

## 📁 Endpoints

### 🔐 Autenticação

| Método | Endpoint                 | Descrição                                             |
|--------|--------------------------|-------------------------------------------------------|
| POST   | `/api/login`             | Obtém os dados do usuário com base nas credenciais    |

### ☑ Tarefas

| Método | Endpoint                             | Descrição                         |
|--------|--------------------------------------|-----------------------------------|
| GET    | `/api/task`                          | Lista todas as tarefas            |
| GET    | `/api/task/{id}`                     | Detalha uma tarefa pelo ID        |
| POST   | `/api/task`                          | Cadastra uma novo tarefa          |
| PUT    | `/api/task/{id}`                     | Atualiza uma tarefa               |
| DELETE | `/api/task/{id}`                     | Remove uma tarefa                 |
| PATCH  | `/api/task/{id}/toogle-completed`    | Inverte o status de uma tarefa    |

### 👤 Usuários

| Método | Endpoint                 | Descrição                         |
|--------|--------------------------|-----------------------------------|
| GET    | `/api/user`              | Lista todos os usuários           |
| GET    | `/api/user/{id}`         | Detalha um usuário pelo ID        |
| PUT    | `/api/user/{id}`         | Atualiza um usuário               |
| DELETE | `/api/user/{id}`         | Remove um usuário                 |
| GET    | `/api/user/{id}/tasks`   | Lista as tarefas de um usuário    |

## 🚀 Executando localmente

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

- Node v18+
- npm

### 🔧 Instalação

1. Clone o projeto utilizando o comando abaixo

    ``` bash
    git clone https://github.com/felipesilva15/task-manager-spa.git
    ```

2. Acesse a pasta dos fonts deste projeto

    ```bash
    cd task-manager-spa
    ```

3. Inicialização da API

    1. Abra um terminal e acesse a pasta dos fonts da API

        ```bash
        cd api
        ```

    2. Instale as dependências

        ```bash
        npm install
        ```

    3. Inicie a API

        ```bash
        npm run start
        ```

4. Inicialização do app

    1. Abra um novo terminal e acesse a pasta dos fonts do app

        ```bash
        cd app
        ```

    2. Instale as dependências

        ```bash
        npm install
        ```

    3. Inicie o app

        ```bash
        npm run start
        ```

5. Acesse a aplicação em <http://localhost:3000>.

## 🐳 Executando com Docker

```bash
# Build da imagem e execução do container
docker compose up -d
```

Após completar a execução, basta acessar o site em <http://localhost:3000> e a API em <http://localhost:3050/api>.

## ✒️ Autores

- **Felipe Silva** - *Desenvolvedor e mentor* - [felipesilva15](https://github.com/felipesilva15)

## 📄 Licença

Este projeto está sob a licença (MIT) - veja o arquivo [LICENSE](https://github.com/felipesilva15/task-manager-spa/blob/main/LICENSE) para detalhes.

---

Documentado por [Felipe Silva](https://github.com/felipesilva15) 😊
