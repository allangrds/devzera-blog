---
title: Um guia para entender JavaScript hoisting 🚩com variáveis usando let e const
date: 2020-06-23 08:54:47
category: javascript
---
Esse artigo é uma livre tradução do artigo[A guide to JavaScript variable hoisting 🚩 with let and const](https://medium.freecodecamp.org/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d), por[Bhuvan Malik](https://medium.freecodecamp.org/@bhuvanmalik)

Novos desenvolvedores de JavaScript geralmente têm dificuldade em entender o comportamento exclusivo do hoisting de*variáveis*​​/*funções*.

Já que vamos falar sobre declarações de`var, let`e`const`mais tarde, é importante entender o içamento (hoisting) de variáveis ​​em vez do içamento (hoisting) de funções. Vamos mergulhar!

## O que é içamento de variável (variable hoisting)?

A engine do Javascript trata todas as variáveis declaradas com`var`como se fossem declaradas no topo do escopo de uma função (se colocadas dentro de uma), ou no topo do escopo global (se declaradas fora de uma função), independentemente de onde a declaração real ocorrer. Isso essencialmente é “*hoisting*”.

Então, variáveis podem realmente estar disponíveis antes de sua declaração.

![Hoisting](assets/img/1_q7bpdmcgkh2sblc5ew2m8a.gif "Hoisting")

Vamos ver essa parada em ação…

```javascript
// Saída (Output): undefined
console.log(shape);

var shape = "square";

// Saída (Output): "square"
console.log(shape);
```

Se você está vindo de linguagens baseadas em C, você estava esperando que um erro fosse lançado ao chamar o primeiro`console.log`, já que a variável`shape`não foi definida naquele momento. Entretanto, o interpretador do Javascript vai além, e iça (hoists) todas as declarações de variáveis pro top, e a suas inicializações permanecem no mesmo local.

É isso que acontece por baixo dos panos:

```javascript
//a declaraçã da variável é içada (hoisted)
var shape;

// Saída (Output): undefined
console.log(shape);

shape = "square";

// Saída (Output): "square"
console.log(shape);
```

Abaixo está outro exemplo, dessa vez no escopo de uma função para deixar as coisas mais claras:

```javascript
function getShape(condition) {
// shape existe aqui com o valor "undefined"
// Saída (Output): undefined
console.log(shape);

if (condition) {
        var shape = "square";
        // outro código qualquer
        return shape;
    } else {
        // shape existe aqui com o valor "undefined"
        return false;
    }
}
```

Perceba que no exemplo acima a declaração de`shape`é içada (hoisted) para o topo da função`getShape`. Isso acontece pois os blocos`if/else`não criam escopos locais como vemos em outras linguagens. O escopo local é essencialmente o escopo de um função em JavaScript. Portanto, “shape” é acessível em todos os lugares fora do bloco if e dentro da função com um valor “undefined”.

Esse comportamento padrão do JavaScript tem suas vantagens e desvantagens. Não entender completamente isso pode levar a bugs sutis, mas perigosos, em nosso código.

## Declarações no Nível do Bloco (Block-Level Declarations)

O**ES6**introduziu escopos no nível de bloco (block-level scoping) para prover aos desenvolvedores maior controle e flexibilidade sobre o ciclo de vida de uma variável.

Declarações no Nível do Bloco (Block-Level Declarations) são feitas em blocks/escopos léxicos que são criadas dentro do block`{}`.

### Declaração com “let”

Essa syntax é similar a`var`, apenas troque`var`por`let`para declarar uma variável para que seu escopo fique apenas naquele bloco.

Coloque a declaração do seu`let`no topo do bloco para que ele esteja disponível para o bloco inteiro.

Exemplo:

```javascript
function getShape(condition) {
// shape não existe aqui
// console.log(shape); => ReferenceError: shape is not defined
if (condition) {
        let shape = "square";
        // algum có
        return shape;
    } else {
        // shape também não existe
        return false;
    }
}
```

Perceba como`shape`existe apenas dentro do block do`if`, e como um erro é lançado quando é feita a tentiva de acesso for dele, lançando um`undefined`como vimos anteriormente quando usamos`var`.

**Observação:**Se um identificador já foi definido dentro do escopo com`var`, usando o mesmo identificador como`let`dentro desse escopo lançará um erro. Além disso, nenhum erro será mostrado se uma declaração`let`criar uma variável com o mesmo nome de uma variável em seu escopo externo. (Este caso é o mesmo ao usar`const`).

Por exemplo:

```javascript
var shape = "square";

let shape = "rectangle";

// SyntaxError: Identifier 'shape' has already been declared
```

e:

```javascript
var shape = "square";

if (condicao) {
    // não lança um erro
    let shape = "rectangle";
    // mais código
}

// Sem erro
```

### Declaração com “const”

A syntax dessa declaração é similar a`let`&`var`, o ciclo de vida(lifecycle) é o mesmo que o do`let`, mas você precisa seguir certas regras.

Toda`const`é tratada como**constantes**, e, portanto, ela não pode ter seu valore reatribuído após ser definida. Devido a isto, toda`const`deve ser inicializada no momento da declaração.

Exemplo:

```javascript
// válido 
const shape = "triangle";
// syntax error: missing initialization

const color;
// TypeError: Assignment to constant variable

shape = "square"
```

**Entretando**, propriedades de um objeto podem ser alteradas!

```javascript
const shape = {
    name: "triangle",
    sides: 3
}

// FUNCIONA
shape.name = "square";
shape.sides = 4;

// SyntaxError: Invalid shorthand property initializer
shape = {
    name: "hexagon",
    sides: 6
}
```

No exemplo acima podemos ver que as propriedades do objeto`shape`puderem ser alteradas pois nós mudamos apenas o que ela contém, e não o que está vinculado, como em uma string, por exemplo.

Podemos resumir dizendo que`const`impede a modificação da ligação(binding) como um todo — não o valor ao qual ela está vinculada.

Observação: Propriedades podem ser alteradas. Para uma real imutabilidade user Object.Freeze, Immutable.js ou Mori.

## A zona temporal morta

Agora sabemos que acessar uma variável com`let`ou`const`antes de ser declarada lançará um`ReferenceError`. Esse período entre a entrada do escopo e a declaração de onde eles não podem ser acessados é chamado de Zona Temporal Morta (Temporal Dead Zone).

Perceba que a “Zona Temporal Morta” não é formalmente mencionada nas especificações do ECMAScript, é apenas um termo popular entre os programadores.

Eu pessoalmente recomendo que sempre use`const`, pois gera menos bugs. Atualmente eu raramente encontro uma situação onde precise usar o`var`.

Como regra geral, use`let`somente para contadores de loop ou se você realmente precisará alterar o valor da variável depois. Pra qualquer outro caso, vá de`const`. Pessoalmente eu abandonei loops para usar **filter (), map () & reduce ()**. Você deveria também.

**Fica esperto e veja a 2a parte em “Function Hoisting & Questões importantes de hoisting em processos seletivos”.**

https://medium.freecodecamp.org/function-hoisting-hoisting-interview-questions-b6f91dbc2be8

Clique[aqui](https://medium.com/@bhuvanmalik/es6-functions-9f61c72b1e86)para ver meus artigos sobre as úteis features do ES6 relacionadas a funções.