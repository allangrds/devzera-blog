---
title: "Snyk.io: Segurança de dependências"
description: Automatizando a localização e a correção de vulnerabilidades em
  suas dependências
date: 2020-06-07 06:38:28
category: desenvolvimento
---
Aí você lança algo em produção e depois descobre que uma das suas dependências, na exata versão que você faz uso, possui uma falha de segurança severa. Você corre pra corrigir! Afinal, não é sempre que ficamos ligados nessas coisas.

E se houvesse um modo de automatizar essa busca de vulnerabilidades das dependências que usamos?

Ela existe.

O [snyk.io](https://snyk.io/) foi me apresentado pelo brother [Victor Haberkorn](https://medium.com/@vhaberkorn), após termos discutido sobre isso.

![Snyk descrição do serviço](assets/img/1_o74lr3ttg8fuhx3xdw7eja.png "Snyk descrição do serviço")

Ela possui integração com diversos serviços, como podemos ver abaixo:

![Serviços que tem integração com o Snyk](assets/img/1_5lfln0zgwzokgi3wthvbpa.png "Serviços que tem integração com o Snyk")

Você importa seu repositório do Github — em sua versão gratuita, você pode até importar repositórios privados — , ele faz a verificação na periodicidade que você escolhe, e a cada PR criado ele aparece no check, garantindo que aquele PR não tem uma falha de segurança grave.

![Verificação do Snyk no Github](assets/img/1_ihzi8u36xtzt9dqzvd22_g.png "Verificação do Snyk no Github")

Você também pode configurá-lo para receber noticações por email e até no Slack.

Ao importar e analisar seu repositório, será mostrado algo como a imagem abaixo:

![Snyk dashboard](assets/img/1_vgq6vwtz1xvp5lbwdwpq6g.png "Snyk dashboard")

Esse meu repositório aparentemente não possui em suas dependências nenhum tipo de ameaça com os níveis:

* High severity;
* Medium severity;
* Low severity.

Mas e se existisse. O que seria mostrado?

![Snyk detalhe do projeto](assets/img/1_rx-mykyqmynuesolac8mda.png "Snyk detalhe do projeto")

Esse repositório possui várias dependências com vulnerabilidades dos mais diversos níveis de periculosidade. E para cada uma delas, uma descrição do problema e como resolvê-lo — O Snyk pode abrir um PR pra você fazendo isso, ou você pode deixar isso automático quando ele fizer a análise.

E por fim, o Snyk também fornece uma CLI com comandos bem legais:

* **snyk test**— Escaneia suas dependências em busca de vulnerabilidades;
* **snyk wizard —**Mostra cada uma das vulnerabilidades encontradas e pergunta como você deseja resolvê-la, podendo ignorá-la, corrigi-lá, ou atualizá-la;
* **snyk protect —**Aplicará patches de acordo com as políticas definidas ao executar o**snyk wizard.**