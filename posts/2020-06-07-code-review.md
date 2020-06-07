---
title: Code review
description: Melhorando a qualidade do projeto
date: 2020-06-11 12:30:15
category: desenvolvimento
---
Você fez seu código e agora precisa mandar pra revisão. Pow! O pull request foi criado, ou talvez não.

O que pode acontecer de ruim sem uma revisão?

* **Bugs**: A única garantia que seu código funciona é você, e talvez seus testes, se tiver feito. Mesmo com os testes você pode ter esquecido alguma regra de negócio;
* **Qualidade:**Se ninguém está vendo o que você está produzindo, como saber se existe uma melhor forma de fazer o que foi desenvolvido?

Só de ter esses 2 itens na lista já me deixa tremendo na base. Agora sobre as coisas boas de fazer/analisar pull requests:

* **Menos bugs:** Além de você, agora existe a garantia de que outras pessoas testaram o que foi feito, garantindo que a tarefa feita na quebre;
* **Qualidade:**Sempre vai ter aquele colega com uma sacada. Como a revisão pode consistir em testar a feature e analisar o código, você pode ter ótimos feedbacks de como melhorar o código que foi feito;
* **Time alinhado:**Você pode ter em seu workflow de trabalho alguma metodologia ágil, mas o pull request traz uma intimidade com o projeto muito grande. Não é só a histórinha que você fez e contou a todos na daily. O PR possibilita que todos entendam melhor como o projeto está se formando, e até servir de histórico, para lembrar de alguma decisão tomada;
* **Aprendizado:**O item que mais gosto. O PR é uma ótima fonte de discussão. E com a discussão, pode ter certeza que virá muito aprendizado.

Wow! Realmente parece muito bom. Então como posso criar um PR matador?

## Divida os commits

Se o PR é o que foi feito em sua totalidade, o commit é apenas uma parte da história. Crie commits como se você estivesse contando passo a passo do que foi feito até o PR estar pronto. Não tem problema ter muitos commits, o problema é um commit representar muitas coisas.

* **Ruim**: botao: atualizando componente
* **Bom:**

  * botao: atualizando estilo\
    botao:atualizando comportamento

## **Textos objetivos**

É fácil sem querer acabar enrolando ou não sendo objetivo na criação da descrição do PR ou no texto do commit. É importante lembrar que outra pessoa lerá aquilo, e ela precisa, sem esforço, ler e entender o que foi feito.

Exemplo em commit:

* **Ruim:** botao: atualizando estilo
* **Bom:** botao: inserindo efeito hover

## Responsabilidade única

Se você está fazendo mais de uma coisa no seu PR, já está errado. Pense no caso que você está consertando um bug, e resolve refatorar um código que não tem a mínima relação. Criar um PR com mais de uma responsabilidade tem os seguintes pontos negativos:

* **Você vai demorar mais:** Mais código no PR, mais código para modificar se houver comentários;
* **Seus colegas demorarão mais:** O PR além de fazer o que foi proposta faz outra coisa, e seus colegas precisam passar por tudo;
* **O PR ficará mais tempo na fila:** Se a tarefa core do PR está certa talvez a excedente não, e por isso o PR não poderá ser mergeado.

## Template

Eu escrevo o PR de um modo, o João de outro. No fim, fica um samba. É comum criar um arquivo no repositório para servir de base na criação dos PRs. Crie o arquivo`PULL_REQUEST_TEMPLATE.md`na pasta`.git`e abraços.

Quer ver um exemplo?[Clique aqui.](https://github.com/pagarme/artis/blob/master/.github/PULL_REQUEST_TEMPLATE.md)

## Use labels

Labels são pequenas tags que você pode atrelar ao PR. É ótimo para identificação. Bugs, testes, melhorias…

## Boa descrição

O título e descrição informam o que você fez. Não poupe esforços, muito menos caracteres para descrever o que você fez — nós não estamos no Twitter. Diga o problema, seu motivo, e o que você fez para saná-lo. O PR é também uma boa fonte de documentação.

## Mais de uma aprovação

A não ser que você esteja trabalhando em dupla, te aconselho, como experiência pessoal, que faça isso. Aumentar a quantidade de approves — isso pode ser configurado no repositório — diminui a chance de erro humano no momento da revisão.

# Extra

Já falei dos pontos que acho importante para criar um bom PR, e agora vou falar de uma coisa que acha muito bom para facilitar a vida de todo mundo:

## CI

Use uma ferrmenta como **Travis, Github Actions** ou **CircleCI** para automatizar os testes no PR. A cada commit alterado, a ferramenta roda todo o ciclo novamente, impedindo que seja feito um merge com algo que esteja falhando. Também é possível configurar para que um lint seja aplicado também, o que acaba facilitando na consistência do style guide do repositório.

## GitCop

Para garantir que as mensagens de commit tenham uma padronização, existe essa ferramenta maravilhosa. Nela você consegue configurar a quantidade de caracteres para um título de commit, palavras que obrigatoriamente precisam existir, e uma estrutura. A única coisa ruim, é que só funciona com o Github.