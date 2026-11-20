# 🌐 Minha Primeira API (Node.js + Express)

Primeiro projeto prático de Back-end criando um servidor web com **Node.js** e **Express**, configurado para receber e responder requisições no formato JSON.

## 🎯 O que foi praticado
* Inicialização de projeto Node (`npm init`) e gerenciamento de dependências.
* Criação de servidor HTTP com Express na porta `3000`.
* Uso do middleware `express.json()` para leitura do corpo das requisições.
* Implementação de rotas `GET` e `POST`.

---

## 📌 Rotas da API

### `GET /`
Verifica se o servidor está online.
* **Resposta (`200 OK`):**
  ```json
  {
    "mensagem": "API Node.js rodando com sucesso!"
  }
  ```

### `POST /usuarios`
Simula o recebimento de dados para cadastro de um usuário.
* **Corpo da Requisição (JSON):**
  ```json
  {
    "nome": "Herik",
    "cargo": "Desenvolvedor Back-end"
  }
  ```
* **Resposta (`201 Created`):**
  ```json
  {
    "mensagem": "Usuário cadastrado com sucesso!",
    "dados": {
      "nome": "Herik",
      "cargo": "Desenvolvedor Back-end"
    }
  }
  ```

---

## 💻 Como executar localmente

1. Clone o repositório e acesse a pasta do projeto:
   ```bash
   git clone git@github.com:Herikdev9/projetos-backend.git
   cd projetos-backend/minha-primeira-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node server.js
   ```
   O servidor estará disponível em `http://localhost:3000`.
