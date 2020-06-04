---
title: Expondo seu webserver local com Ngrok
description: Facilitando testes e validações
date: 2020-06-04 10:43:03
category: desenvolvimento
---

## Qual o problema?

Ser ágil. Posso mostrar para um cliente o site que estou fazendo através de prints, compartilhamento de tela, ou até passar os arquivos para um serviço de hospedagem. Mas eu não quero ter que configurar mais serviços, e ter que me preocupar se todo mundo poderá visualizar a url. Eu só quero testar e validar o que fiz!

## O que é Ngrok?

**[Ngrok](https://ngrok.com/)** é uma CLI que permite deixar exposta portas de serviços locais para o resto do mundo, ou seja, você pode gerar uma url para seu desenvolvimento local.

## Como instalo?

1. Baixe o arquivo em <https://ngrok.com/download>;
2. Extraia utilizando o comando `unzip`.

## Como uso?

```bash
./ngrok http <numero_da_porta>
```

## Pondo em prática

Vamos deixar seu uso mais concreto. Vou criar um simples “hello world” em PHP e expô-lo.

### Criando o projeto

```bash
mkdir hello_world
cd hello_world
cat <<EOF >> index.php
<?php
echo "Hello World!";
EOF
```

Feito isso, agora vamos usar o próprio PHP para rodar nossa aplicação:

```bash
php -S localhost:8080
```

## Expondo o projeto

```bash
./ngrok http 8080

```

![Ngrok terminal](assets/img/1.png)

![URL do Ngrok no navegador](assets/img/2.png)

## Dando mais segurança

Usá-lo já é uma mão na roda sinistra, mas quem disse que eu desejo expor o que estou fazendo para qualquer com a url? Vamos botar uma autenticação nisso.

Mas antes de fazê-lo, você precisará criar uma conta na Ngrok. Após isso, é só rodar o comando abaixo com o token fornecido por eles:

```bash
./ngrok authtoken token_hash
```

Agora sim vamos autenticar nossa url:

```bash
ngrok http -auth="username:password" 8080
```

![Página do Ngrok com autenticação](assets/img/3.png)

## Uma pequena melhoria

Nós só podemos executá-lo na pasta em que o arquivo estiver, e isso é um saco. Para que isso não aconteça mais, use o comando abaixo para poder executá-lo de qualquer lugar:

```bash
cp ngrok /usr/local/bin

```

## Referências

\[1] <https://ngrok.com/docs>
