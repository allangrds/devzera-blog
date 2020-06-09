---
title: Padronizando a codificação de seus projetos com EditorConfig
date: 2018-10-05 12:30:45
category: desenvolvimento
---
# Vamos falar sobre um problema

Nem sempre temos controle ou poder sobre todos os projetos que mexemos, e isso acontece muito quando pego algum freela.

Já aconteceu de eu precisar dar manutenção em um projeto juntamente com outros 2 programadores, e cada um de nós usávamos uma ferramenta diferente, com configurações de coding style distintas. O que aconteceu? O código sempre ficava horrível de ser ler sempre que abríamos um arquivo que havia sido editado previamente pelo outro, e o código não mantinha um padrão de leitura. O que poderia ser feito?

## Uma solução simples

Fazendo uma tradução do que o próprio site do [EditorConfig](https://editorconfig.org/) diz:

> O EditorConfig ajuda os desenvolvedores a definirem e manter um coding style consistente entre diferentes editores de texto e IDEs.**O projeto EditorConfig consiste em um formato de arquivo para definir o coding style**, e vários editores de textos e IDEs conseguem ler esse formato de arquivo e aplicar as configurações ali especificadas. Esse arquivo do EditorConfig é bem fácil de ler e funciona tranquilamente integrado com sistemas de controle de versão.

Se isso não foi claro, segue o que ele é: um formato de arquivo para você definir o coding style de várias linguagens pra uma porrada de editor/IDE conseguir aplicar.

Vamos a um exemplo?

![Editorconfig arquivo de configuração](assets/img/1_7akl27o_nnqh395qyjmicg-1-.png "Editorconfig arquivo de configuração")

## Explicando

* `root = true`indica que esse arquivo está na raiz do projeto e também que ele é o principal — digo isso pois é possível colocar outros arquivos em outras pastas;
* `[*.js]`indica que todas as regras abaixo serão definidas apenas para arquivos Javascript;
* `charset = utf-8`indica o charset do arquivo;
* `end_of_line = lf`indica que tipo de quebra de linha será usado — lf(Unix), crlf(Windows) e cr(macOS);
* `insert_final_newline = true`indica que uma nova linha deve ser criada ao final;
* `indent_style = space`indica que o tipo de espaço utilizado(quando se usa o tab) será usando espaços;
* `indent_size = 2`indica o tamanho do tab;
* `trim_trailing_whitespace = true`indica que devem ser removidos espaços em branco no fim de todas as linhas.

## Compatibilidade

Abaixo as ferramentas que suportam esse formado de arquivo nativamente:

![Ferramentas compatíveis](assets/img/1_9jvjzgt1rx5fjhtvb_2ywg-1-.png "Ferramentas compatíveis")

E aqui, as ferramentas que aceitam através de plugins:

![Ferramentas com plugins](assets/img/1_vdxfc1f1pfr2dlado1f9ww-1-.png "Ferramentas com plugins")



Ele não chega a ser um lint — é uma ferramenta que faz análise do seu código para ver se você está seguindo um padrão previamente configurado — , mas deixará seu editor/IDE com configurações básicas para deixar parte do código padronizado.

## Referências

* [Para entender a parte sobre quebra de linha;](https://digital.ni.com/public.nsf/allkb/2856874215F6134A862576C400554081)
* [Para entender a parte sobre quebra de linha\[2]](https://stackoverflow.com/questions/1552749/difference-between-cr-lf-lf-and-cr-line-break-types)