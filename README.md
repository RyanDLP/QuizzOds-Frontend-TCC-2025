# QuizzODS — Front-end Challenge

Este repositório contém o desafio front-end do **QuizzODS**, parte do Desafio Suplementar 2025 do Estartando Devs.
O objetivo é implementar as telas fornecidas no Figma, integrar com a API da sua dupla e entregar uma aplicação funcional, organizada e fiel ao fluxo do projeto.

## Sobre o desafio

Você deve desenvolver o front-end do **QuizzODS**, um aplicativo simples para leitura das ODS e realização de quizzes temáticos.
O projeto segue um fluxo definido no Figma, que deve ser respeitado.

Este repositório já inclui um **boilerplate inicial**, mas você tem liberdade total para alterar, reorganizar ou expandir o projeto conforme achar necessário.

## 🎨 Layout (Figma)

Acesse o layout completo:

🔗 [Desafio Suplementar TCC 2025](https://www.figma.com/design/BIueXxPq9QG62vWj8OgOVh/Desafio-Suplementar-TCC-2025?node-id=0-1)

## 🖼️ Telas do Projeto

Abaixo estão as telas que você deve implementar.

![QuizzODS](./docs/QuizzOds.svg)

## O que já vem neste repositório

Este repositório inclui:

* Estrutura inicial do projeto
* Dependências básicas
* Configurações mínimas para iniciar o desenvolvimento

Você pode alterar absolutamente tudo:
organização de pastas, componentes, estilos, estrutura, libs adicionais etc.

## O que deve ser implementado

### **1. Home**

* Listagem das 17 ODS
* Navegação para a tela de conteúdo

### **2. Conteúdo da ODS**

* Exibir o texto correspondente
* Pode usar mock enquanto a API não estiver pronta

### **3. Lista de Quizzes**

* Listar quizzes disponíveis
* Navegação para o quiz selecionado

### **4. Tela do Quiz**

* Pergunta
* Opções
* Feedback de acerto/erro

### **5. Navegação**

* Navbar inferior com abas **Início** e **Quiz**

## Integração com o Back-end

Sua dupla criará a API em **.NET**.
Vocês devem alinhar juntos:

* Estrutura dos dados
* Rotas
* Formato dos quizzes
* Respostas e feedbacks

O front deve consumir os dados reais assim que o back estiver pronto.

## Como rodar o projeto

1. Faça um fork deste repositório
2. Clone o repositório da **sua conta**:

   ```shell
   git clone https://github.com/seu-usuario/quizzods-frontend
   ```

3. Instale as dependências:

   ```shell
   npm install
   ```

4. Execute o projeto:

   ```shell
   npm run dev
   ```

5. Configure a URL da API no momento da integração

## Entrega

A entrega deve conter:

* Repositório público no GitHub (seu fork)
* Aplicação funcional
* Publicação do app em um serviço gratuito (ex: Vercel, Netlify, GitHub Pages) — inclua o link no README
* Código organizado e versionado adequadamente
* README atualizado
* Integração real com a API
* Histórico de commits legível

## Critérios de Avaliação

* Interface fiel ao fluxo do Figma
* Boa organização e divisão de componentes
* Integração com o back-end
* Clareza do código
* Colaboração e comunicação entre a dupla
* Boas práticas de desenvolvimento
* Code review entre os membros

## Observações

* Liberdade total para estilização, desde que mantenha o fluxo
* É permitido mockar dados antes da API ficar pronta
* Pode adicionar bibliotecas (Axios, Zustand, React Router, etc.)
* O foco é entregar um app funcional, limpo e bem estruturado
