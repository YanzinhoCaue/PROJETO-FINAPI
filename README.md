# 💰 FinAPI - API Financeira Simples

FinAPI é uma API RESTful simples para simular operações bancárias básicas. Desenvolvida com **Node.js** e **Express**, esta aplicação foi criada para focar nos fundamentos da construção de APIs, incluindo roteamento, middlewares e manipulação de requisições HTTP. Todos os dados são armazenados em memória e são resetados a cada reinicialização do servidor.

---

### **✅ Funcionalidades Principais**

A API permite realizar as seguintes operações:

* **👤 Criar Conta**: Cadastra um novo cliente.
* **📄 Buscar Extrato**: Retorna o extrato de transações do cliente (completo ou por data).
* **💸 Realizar Depósito**: Adiciona um valor ao saldo da conta.
* **💳 Realizar Saque**: Retira um valor do saldo da conta, validando fundos.
* **🔄 Atualizar Dados**: Altera o nome do cliente.
* **📊 Obter Saldo**: Retorna o saldo atual da conta.
* **🗑️ Excluir Conta**: Remove a conta de um cliente.

---

### **⚖️ Regras de Negócio**

* Não é possível cadastrar uma conta com um CPF já existente.
* Todas as operações (depósito, saque, extrato, etc.) exigem que o CPF do cliente seja enviado no **header** da requisição.
* Não é possível realizar um saque se o saldo em conta for insuficiente.
* Não é possível excluir uma conta que não existe.

---

### **🛠️ Tecnologias Utilizadas**

As seguintes ferramentas foram utilizadas no projeto:

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)

---

### **▶️ Como Executar o Projeto**

Para executar este projeto em seu ambiente local, siga os passos abaixo. É necessário ter Node.js e Yarn (ou NPM) instalados.

**1️⃣ Clone o repositório**
```bash
git clone [https://github.com/YanzinhoCaue/finapi.git](https://github.com/YanzinhoCaue/finapi.git)
````

**2️⃣ Navegue até o diretório do projeto**

```bash
cd finapi
```

**3️⃣ Instale as dependências**

```bash
yarn install
```

ou

```bash
npm install
```

**4️⃣ Execute a aplicação**

```bash
yarn dev
```

O servidor será iniciado em `http://localhost:3333`.

-----

### **📂 Estrutura do Projeto**

Este projeto adota uma estrutura monolítica simples, com toda a lógica contida no arquivo principal, ideal para aplicações de pequeno porte e fins didáticos.

```
finapi/
├── src/
│   └── index.js   # Arquivo principal com toda a lógica da API
└── package.json
```

-----

### **🗺️ Próximos Passos e Melhorias Futuras**

  * **💾 Persistência de Dados**: Migrar o armazenamento em memória para um banco de dados (como SQLite ou PostgreSQL) para tornar os dados permanentes.
  * **🗂️ Arquitetura**: Refatorar o código para uma arquitetura mais robusta e escalável (como a Clean Architecture).
  * **✅ Testes**: Adicionar testes unitários e de integração para garantir a confiabilidade da API.
  * **🔒 Validação de Dados**: Implementar uma biblioteca como Zod ou Joi para validar os dados de entrada (`body`, `params`, `query`).

-----

### **💬 Contato**

**Yan Cauê**

**LinkedIn:** [linkedin.com/in/yancue](https://linkedin.com/in/yancaue)

**GitHub:** [github.com/YanzinhoCaue](https://github.com/YanzinhoCaue)
