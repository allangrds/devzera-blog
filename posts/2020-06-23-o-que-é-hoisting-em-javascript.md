---
title: O que é Hoisting em Javascript?
date: 2020-06-23 08:45:35
category: javascript
---
Esse artigo é uma tradução livre de[What is Hoisting in Javascript?](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1), por[Sunil Sandhu](https://medium.com/@sunilsandhu).

Uma das muitas peculiaridades do Javascript é algo conhecido como**hoisting**.

Se você começou a desenvolver recentemente com Javascript, é bem provável que você ainda não esteja escrevendo seu código perfeitamente. Então, por causa disso, é altamente provável que seu**hoisting**não esteja perfeito também.😉

## O que é hoisting?

Basicamente, quando o Javascript compila todo seu código, todas as declarações de variáveis usando`var`são hoistiadas(abrasilerei)/levadas ao topo de suas funções/escopo local (se declaradas dentro de uma função), ou ao topo do escopo global (se declaradas fora de uma função) independentemente de onde a declaração foi feita. Isto é o que queremos dizer com “*hoisting*”.

As declarações de funções também são hoistiadas, mas elas irão para a parte mais alta do escopo, por isso ficará acima de todas as declarações de variáveis.

Chega de conversinha, vamos ver alguns exemplos básicos para demonstrar o impacto do hoisting.

Se escrevermos o seguinte código:

```javascript
console.log(meuNome);

var meuNome= 'Bob';
```

Pop quiz! O que o comando`console.log`mostrará?

***1.***`Uncaught ReferenceError: meuNome is not defined`

***2.***`Bob`

**3.**`undefined`

A terceira opção é realmente a resposta correta.

Como falei anteriormente, as variáveis são movidas pro topo de seus escopos\
quando seu Javascript compila em tempo de execução ( que — se excluirmos o NodeJS — de uma forma bem básica é quando sua página está carregando). Entretanto, uma coisa importante a notar é que a única coisa que é movida para o topo são as declarações de variáveis, não o valor real delas.

Para clarear as ideias, se tivermos um pedaço de código, e na linha 10 tivermos um`var name = 'Sunil'`, quando o Javascript for compilado,`var name`será movido ao topo de seu escopo, enquanto`name = 'Sunil'`permanecerá na linha 10 (ou possivelmente na linha 11 se`var name`for levada para a linha 1).

Com isso em mente, vamos olhar pro código que coloquei anteriormente, mas vamos ver como o Javascript irá devolver a saída em tempo de execução:

```javascript
var meuNome;

console.log(meuNome);

meuNome= 'João';
```

É por isso que o`console.log`devolverá**undefined,**pois ele reconhece que a variável**meuNome**existe, porém ela não teve um valor inserido até a terceira linha.

Também mencionamos brevemente anteriormente que funções também são hoistiadas (levadas)para o topo (logo acima, onde as declarações de variáveis ​​são hoistiadas).

Então se olharmos para o código abaixo:

```javascript
function hey() {
    console.log('Iae ' + name);
};

hey();

var name = 'João';
```

A função **hey()** retornará **undefined** mesmo assim, pois o interpretador do JavaScript compilará o código em tempo de execução para o seguinte:

```javascript
function hey() {
    console.log('Iae ' + name);
};

var name;

hey();

name = 'João';
```

Então, no momento em que a função é chamada ela sabe que uma variável chamada`name`existe, mas a variável não possui um valor atribuído. Existem algumas variantes para isso que ocorrem ao usar expressões variáveis (variable expressions) ​​de **IIFE**([clique aqui se você quiser saber mais](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174)), mas tentar obter um controle mental de tudo isso de uma vez não é o ideal, então eu irei deixá-lo pesquisar o hoisting a respeito de **function expressions** e **IIFE’s.**

Tendo falado isso, tudo que mencionei anteriormente deve ajudá-lo a entender como o hoisting funciona.

O conceito de hoisting é a razão pela qual você pode, às vezes, se deparar com o código de outras pessoas, no qual as variáveis são declaradas logo no topo e, em seguida, recebem valores posteriormente. Essas pessoas estão simplesmente tentando fazer com que seu código se assemelhe ao modo como o interpretador irá compilá-lo, a fim de ajudá-lo a minimizar possíveis erros.

Se você gostou desse artigos, envie muitos claps e se inscreva em minha publicação [Javascript In Plain English.](https://medium.com/javascript-in-plain-english)