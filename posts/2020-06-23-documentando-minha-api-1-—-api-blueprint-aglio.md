---
title: "Documentando minha API #1 — API Blueprint + Aglio"
date: 2020-06-23 08:39:36
category: desenvolvimento
---
Mexer num projeto cuja API não tem documentação é um sofrimento… ter que vasculhar no código do projetos os endpoints e entender o que é possível fazer com cada um deles é um trabalho desnecessário, e seria resolvido de forma simples com uma bendita documentação :(.

Já diz a frase:

> Uma API documentada é uma API feliz

Eis que chega a minha hora de fazer um projeto novo, e não posso cair na mesma mancada de deixar o código ser a fonte de entendimento da API.

Como especificação para a construção dessa documentação, optei pela **[API Blueprint](https://apiblueprint.org/).** Criada pela [Apiary](https://apiary.io/)(Oracle), tem a vantagem de ser escrita utilizando Markdown, facilitando a leitura.

## Começando

Seguindo o padrão da API Blueprint, podemos escrever nossa documentação em **Markdown** ou com a extensão **.apib**. Optei pela segunda, já que é possível encontrar extensões para meu editor de texto.

```markdown
FORMAT: 1A
HOST: http://api.meninogaimeiro.com.br

# API do Menino Gaimeiro

Uma API pra você gerenciar a sua carteirinha xD.

# Group Games

## Games [/games]

### Criar games [POST]

+ Request Criar um game
    + Headers

            Accept: application/json
            Content-Type: application/json

    + Attributes

        + name (required)

+ Response 201 (application/json)
    + Attributes

        + id: 1 (number) - ID do game
        + name: Desperados 3 (string) - Nome do game

+ Response 400 (application/json)
    + Attributes

        + status_code: 400 (number) - Status code da Request
        + errors (array) - Objeto de erros
            + (object)
                + parameter_name: name (string) - Nome do parâmetro
                + message: field is required (string) - Tipo do erro
```

O exemplo acima faz o seguinte:

* Seta a url da api para[http://api.meninogaimeiro.com.br;](http://api.meninogaimeiro.com.br%3B/)
* Cria um grupo de rotas chamada*games*;
* Cria um grupo de rotas*Games /games.*Nesse meu exemplo ficou repetido, mas poderia existir junto com essa rota o*Platforms /games/platforms*;
* Crio uma request informando seus headers e seus atributos;
* Crio uma response informando seus status codes e seus payloads

Para ver como essa documentação é renderizada usando o Apiary,[clique aqui](https://gamer1.docs.apiary.io/).

## Gerando a documentação

A **API Blueprint** é apenas uma especificação, não uma tecnologia. Para gerar uma documentação em meu projeto Node, acabei por utilizar a engine [Aglio](https://github.com/danielgtaylor/aglio), que será responsável por interpretar os arquivos nesse formato e renderizar a documentação formatada.

Para isso, faça:

* npm install -g aglio
* aglio -i api.apib — theme-template triple -s

Esse último comando lerá o arquivo**api.apib**, gerando um template de 3 colunas em um servidor.

Eis que o resultado será algo como mostrado na imagem abaixo:

![Documentação gerada com Aglio](assets/img/1_-nhujaqbl8ovwnaadi48xg.png "Documentação gerada com Aglio")

Pronto! Com isso já posso dar continuidade na documentação da API :).