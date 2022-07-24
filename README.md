# Desafio Técnico XP

Projeto desenvolvido por <strong>Vinicius Pacheco Franco</strong> para o desafio técnico de Software Engineer I da XP.

[Deploy da Aplicação](https://francoviniciusp.github.io/xp-challenge/)
## Objetivo

Desenvolver o FrontEnd/Mobile de um aplicativo de investimento em ações com algumas funcionalidades de conta digital.

## Como executar o Projeto? 

<details>
  <summary><strong>:whale: Com Docker :whale:</strong></summary><br />


  > Clone o repositório com `git clone git@github.com:FrancoViniciusP/xp-challenge.git`.
  - Entre na pasta do projeto `cd xp-challenge`.

  > Crie uma imagem Docker com `docker build -t app-xp .`.
  - Não esqueça do ponto após "app-xp".
    
  > Crie um container a partir da imagem app-xp `docker run -dp 3000:3000 app-xp`.
    
  > Pronto! Agora acesse `http://localhost:3000/`.
  </details>

<details>
  <summary><strong>:computer: Localmente :computer:</strong></summary><br />

  > Clone o repositório `git clone git@github.com:FrancoViniciusP/xp-challenge.git`.
  - Entre na pasta do projeto `cd xp-challenge`.
  
  > Instale as dependências `npm install`.
  
  > Inicie o projeto com `npm start`.
  
</details>

<details>
  <summary><strong>:iphone: Experiência Mobile :iphone:</strong></summary><br />

> Esse aplicativo foi desenvolvido inicialmente para Mobile.
 - Para uma melhor experiencia aperte `F12` no browser.
 - E depois `Ctrl + Shift + M` para visualizar como mobile :smiley:.

</details>

## O que foi desenvolvido?

Um aplicativo para compra e venda de ações com foco na expêriencia mobile do usuário, utilizando:
 - JavaScript
 - React Hooks
 - Redux ToolKit
 - Styled Components
 - Jest
 
<details>
 <summary><strong>:art: Imagens do App :art:</strong></summary><br />

 <img src="public/app-screens.png">  
  
</details>

### Fatos Importantes

 - O design do aplicativo foi baseado no Design System <strong>Soma</strong> do grupo XP com o objetivo de se assemelhar as marcas que compõe o grupo.

 - De forma a garantir a privacidade do usuário e permitir que ele possa utilizar o app onde deseja, foi utilizado a biblioteca skeleton para esconder os valores quando desejar.

 - Durante a compra e venda de ações o cliente pode escolher se deseja fazer a transação por quantidade de ativos ou por valor financeiro, não sendo necessário realizar contas para chegar ao valor que deseja, o app faz isso automaticamente por você.

 - O app também se encarrega de validar toda inserção de valores, desabilitando ou habilitando os botões, quando necessário, impedindo que uma transação inválida seja executada.

### Próximos Passos

 - Melhorar a responsividade.

 - Integrar o FrontEnd a um BackEnd com banco de dados.

### :clipboard: Aberto para Code Reviews, críticas e sugestões. :clipboard:





