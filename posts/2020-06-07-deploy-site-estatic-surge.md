---
title: Deploy de sites estáticos com Surge
description: De GRAÇA
date: 2020-06-09 06:16:34
category: desenvolvimento
---
Como essa será uma postagem rápida, falarei o motivo de ter optado por escolher o **Surge** ao **Github Pages**: queria testar algo novo.

Apesar de ter criado um repositório público para o site([aqui](https://github.com/allangrds/DevLitoral)), não foram poucas as vezes que acabei fazendo freelas de sites estáticos e fazer o cliente economizar com hospedagem, por mais barato que seja(Umbler S2), é sempre uma coisa boa.

Chega de falar e vamos logo!

É só instalar o pacote `surge `globalmente.

```
yarn add global surge
```

Feito isso, navegue até a página que deseja deployar e digite no terminal `surge`.

![Comando "surge"](assets/img/1_hhoa-fvpjptfi0r-1csbkg.png "Comando \"surge\"")

Ele pedirá um email e senha, e logo depois começará o upload e lhe dará uma url de acesso.

No meu caso foi [internal-wing.surge.sh](http://internal-wing.surge.sh/)

## Adicionando um domínio

Para adicionar o domínio, só segui a documentação presente no site([aqui](https://surge.sh/help/adding-a-custom-domain)).

Vá até o site que proveu seu domínio e adicione os seguintes registros:

![Surge domínios](assets/img/1_stpusnnaec5zughtoohj_q.png "Surge domínios")

O registro`A`, que representa o endereço Ipv4, e o `CNAME`que representa um nome alternativo.

Esse número IP, caso você esteja pensando de onde apareceu, também está presente na documentação.

Após fazer isso, é só rodar o comando abaixo, e o deploy será feito diretamente em seu domínio:

```
surge --domain devlitoral.com.br
```

Até a próxima!