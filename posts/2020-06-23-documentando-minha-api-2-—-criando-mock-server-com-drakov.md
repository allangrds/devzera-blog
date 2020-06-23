---
title: "Documentando minha API #2 — Criando mock server com Drakov"
date: 2020-06-23 08:42:52
category: desenvolvimento
---
Já diz a frase:

> Uma API documentada é uma API feliz

Mas também existe uma outra frase:

> Uma API com mock server tem dev felizes

Eu criei e documentei a API 😃, e ele será usada pela equipe de front-end. Para facilitar a integração do trabalho deles com essa API, posso prover um *mocke server* que vai gerar uma api mockada baseada nas especificações do meu arquivo de documentação.

![Não ter que esperar você deployar tudo pra poder integrar? Show! #partiu](assets/img/0_v15ujwdq_rno4kej.gif "Não ter que esperar você deployar tudo pra poder integrar? Show! #partiu")

## \#partiu

Pra poder fazer isso, farei uso da ferramenta[Drakov](https://github.com/Aconex/drakov).

Para subir meu mock eu apenas preciso rodar os seguintes comandos:

* npm install -g drakov
* drakov -f “\*\*/*.apib” -p 4000 — discover

Com esse último comando será feito algumas coisas:

* Servidor mockado rodando na porta 4000;
* A flag “--discover” criará uma rota*GET /drakovque listará todas as rotas disponíveis;*
* Importará para mockar o servidor todos os arquivos com extensão **.apib**.

![Mock API com Drakov](assets/img/1_jed7mr9w1-f5ocyecfd4xw.png "Mock API com Drakov")