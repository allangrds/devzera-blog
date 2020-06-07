---
title: Tecnologia, negócios, otimização prematura e dívida técnica
description: Sua escolhas como programador afetam, e muito, a criação de novas
  ideias e negócios
date: 2020-06-07 12:30:58
category: desenvolvimento
---
Foi em 2017, logo após sair de meu antigo trabalho que entrei em um projeto com um colega dessa mesma empresa. A ideia era criar uma startup(mais uma?) que fornecesse uma plataforma web do ramo de logística.

## Planejando a aplicação

Estava trabalhando como front há pouco tempo e mexia com PHP nas horas vagas. Queria fazer algo mais separadinho, mesmo que a API fosse um grande monolito.

![SPA e API](assets/img/1_gzvqipqb5m_0mhz_ffsusg.png "SPA e API")

\
Olhando para a imagem colocada acima, o que ela está dizendo para mim?

* Tempo: No projeto sou o único de tecnologia e meu colega na parte de negócio. Sou uma pessoa inexperiente, e a plataforma não terá pouco conteúdo, mesmo para um MVP. O resultado disso será eu tendo que manter 2(duas) aplicações. Se algo novo surgir, alteração nas 2(duas).

Refleti e percebi que eu estava caindo no famoso caso de otimização prematura - Otimize hoje, para não precisar otimizar amanhã -. Eu estava desenvolvendo algo, por mais legal ou interessante que fosse, que poderia ser menor: um monólito com a parte de back e front. O tempo que eu gastaria no desenvolvimento de ambas as aplicações geraria um novo problema, que falarei mais pra frente.

Como falei, a segunda forma que pensei para desenvolver a plataforma foi:

![Monólito](assets/img/1_-uwzhhopmlefgibplspsdg.png "Monólito")

Monólito na sua forma mais pura. Sem API, sem front consumindo. Uma única aplicação que faz tudo.

Com esse cara aqui eu ganho uma vantagem/desvantagem em relação ao modelo anterior:

* Tempo: O recurso mais escasso que todos nós temos, e que neste modelo eu teria uma redução. Usando um framework como Laravel eu já faço uma consulta e mando os dados direto pra minha view renderizar. Sem precisar construir 2(duas) aplicações diferentes. O problema é que futuramente sustentar uma aplicação inteira em um único lugar ficaria inviável.

Refletindo, de novo, esse caso já foi pra outra ponta, caí no caso dedívida técnica- Pense nela como um empréstimo. Você conseguirá o que precisa, mas precisará pagar juros depois -, eu abdiquei de uma qualidade, gerando uma dívida tecnológica, para conseguir desenvolver rápido.

## Esquerda ou direita?

No primeiro caso percebi que estava construindo uma aplicação que não era o ideal, mas dividia a lógica da visualização da manipulação de dados. No segundo caso eu ganhei tempo, deixando tudo junto, no grande monolito emLaravel, mas gerando um problema de manutenção no futuro.

Se você percebe, ambas acabam esbarrando no problema de tempo. E o que essas duas abordagens têm em comum?

## Time to market!

Time to market é o tempo para colocar um produto no mercado. Nesse caso o tempo é meu pior inimigo, pois como querotestar o MVP, meu lindo negócio ainda não nasceu, e tenho que conseguir validá-lo o mais rápido possível.

Se eu escolher minha primeira abordagem(otimização prematura), terei uma curva para entregar o MVP maior, mas no futuro isso se estabiliza. Indo para o outro lado(dívida técnica), eu conseguirei lançar o MVP muito mais rápido, mas isso terá um custo que ficará cada vez maior conforme o tempo passar.

Então tá aí a resposta, né?

Abrace a dívida técnica para crescer, mas saiba deixá-la quando tiver crescido.

## Minha talk

https://youtu.be/RCNoTqd57P0
