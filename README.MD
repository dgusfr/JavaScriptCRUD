# CRUD com JavaScript

CRUD representa as quatro operações básicas utilizadas em sistemas de banco de dados: Create (Criar), Read (Ler), Update (Atualizar) e Delete (Apagar). 

Essas operações são essenciais para a manipulação de dados em qualquer aplicação, com JavaScript não é diferente 
e com esse projeto implementamos as operações de CRUD em um aplicação de cadastro de usuários.

## Interface do Projeto

<div align="center">
  <img src="img/proj1.png" alt="Imagem do Projeto" width="800">
</div>

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Status](#status)
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Autor](#autor)

## Tecnologias Utilizadas

<div style="display: flex; flex-direction: row;">
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/html.png" alt="Logo HTML" width="100"/>
  </div>
  <div style="display: flex; justify-content: flex-center;">
    <img src="img/css.png" alt="Logo CSS" width="100"/>
  </div>
  <div style="display: flex; justify-content: flex-end;">
    <img src="img/js.png" alt="Logo CSS" width="100"/>
  </div>
</div>

## Status

![Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

## Descrição

Este projeto realiza requisições do Front-end diretamente no Back-end.

## Funcionalidades

Permite fazer requisições como adicionar, editar e excluir um usuário de uma API.

### Mensagem de Sucesso

<div align="center">
  <img src="img/proj2.png" alt="Imagem do Projeto" width="800">
</div>

### Após a adição do Cliente

#### Sendo possivel editar ou excluir o cliente

<div align="center">
  <img src="img/proj3.png" alt="Imagem do Projeto" width="800">
</div>

## Como Usar

1. Na pasta Admin:
   - `npm install -g json-server`
   - `npm install -g browser-sync`
2. Para rodar as instalações acima:
   - `json-server --watch db.json`
   - `browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html`
   - OBS: Usar um terminal para cada um

## Autor

Desenvolvido por Diego Franco.
