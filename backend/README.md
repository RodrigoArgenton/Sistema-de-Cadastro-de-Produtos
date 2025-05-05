# 🛠️ Backend do Projeto

Este é o backend do sistema de cadastro de produtos com categorias hierárquicas.

## ⚙️ Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- MongoDB (via Mongoose)

## 📄 Descrição

A API fornece suporte para cadastrar e listar **categorias** e **produtos**, mantendo a relação entre eles.

## 📦 Rotas Disponíveis

### 📁 Categorias

- `POST /categories`  
  Cria uma nova categoria. É possível definir uma categoria pai (para hierarquia).

- `GET /categories`  
  Lista todas as categorias cadastradas, incluindo a estrutura hierárquica (se configurada).

### 📦 Produtos

- `POST /products`  
  Cadastra um novo produto, associando-o a uma categoria existente.

- `GET /products`  
  Lista todos os produtos cadastrados, com informações da categoria vinculada.
