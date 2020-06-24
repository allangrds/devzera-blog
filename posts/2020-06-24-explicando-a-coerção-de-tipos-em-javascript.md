---
title: Explicando a coerção de tipos em Javascript
description: Saiba como funciona
date: 2020-06-23 09:03:00
category: javascript
---
![Coisas estranhas podem acontecer no Javascript](assets/img/1_dcx9uywci8ye3aujdx0wtg.png "Coisas estranhas podem acontecer no Javascript")

Esse texto é uma tradução livre do artigo[JavaScript type coercion explained](https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839)de[Alexey Samoshkin](https://medium.freecodecamp.org/@alexeysamoshkin?source=post_header_lockup).

**\[Edit 02/05/2018]**: Esse post está[disponível em Russo](https://medium.com/@sergeybulavyk/%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2-%D0%B2-javascript-35a15ddfc333). Palmas a[Serj Bulavyk](https://medium.com/u/8ce091dcbd92?source=post_page-----d6c9203c4e5----------------------)por seus esforços.

**Coerção de tipos (type coercion)**é o processo de conversão de um valor de um tipo, para outro (como a conversão de uma string para um número, um objeto para um booleano e etc). Qualquer tipo, seja primitivo ou um objeto, é um sujeito válido para coerção de tipo. Para recordar, os primitivos são: number, string, booleano, null, undefined + Symbol (adicionado no ES6).

Como um exemplo de coerção de tipo em prática, veja o link[JavaScript Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/), que mostra como o operador de igualdade`==`se comporta para diferentes tipos. Essa matriz parece assustadora devido à coerção de tipo implícita que o operador`==`faz, e dificilmente será possível lembrar de todas essas combinações. E você não precisa fazer isso — apenas aprenda os princípios básicos da coerção de tipos.

Esse artigo vai a fundo de como a coerção de tipos funciona no Javascript, e irá prepará-lo com o conhecimento básico para que você possa sentir-se confiante ao explicar sobre as expressões. Ao final do artigo, mostrarei as respostas e as explicarei.

```javascript
true + false
12 / "6"
"number" + 15 + 3
15 + 3 + "number"
[1] > null
"foo" + + "bar"
'true' == true
false == 'false'
null == ''
!!"false" == !!"true"
[‘x’] == ‘x’
[] + null + 1
[1,2,3] == [1,2,3]
{}+[]+{}+[1]
!+[]+[]+![]
new Date(0) - 0
new Date(0) + 0
```

Sim, essa é uma lista boba de coisas que você pode fazer como desenvolvedor. Em 90% dos casos é melhor evitar a coerção de tipos implícita. Considere essa lista como exercícios para aprendizagem para testar seu conhecimento de como a coerção de tipos funciona. Se estiver entendiado, você pode encontrar mais em[wtfjs.com](https://wtfjs.com/).

A propósito, você pode encontrar perguntas disso em entrevistas para vagas de Javascript. Então continue lendo 😄.

## Coerção Implícita vs Explícita

Coerção de tipos pode ser explícita ou implícita.

Quando um desenvolvedor deseja converter um tipo escrevendo algo como,`Number(valor)`, isso é chamado de**coerção de tipos explícita**(**explicit type coercion**ou**type casting.**

Já que o Javascript é uma linguagem fracamente tipada (weakly-typed language), valores também podem ser convertidos entre diferentes tipos automaticamente, e isso é chamado de**coerção de tipos implícita (implicit type coercion).**Isso acontece quando você atribui operados para valores de diferentes tipos, como`1 == null`,`2/’5'`,`null + new Date()`, ou isso pode decorrer do contexto, como usar`if (value) {…}`, onde`value`é forçado a retornar um booleano.

Um operador que não desencadeia a coerção de tipos implítica é`===`, que é chamado de operador restrito de igualdade (strict equality operator). O operador de igualdade`==`por outro lado, faz a comparação e ativa a coerção de tipos, se necessário.

Coerção de tipo implícito é uma faca de dois gumes: é uma grande fonte de frustração e defeitos, mas também um mecanismo útil que nos permite escrever menos código sem perder a legibilidade.

## Três tipos de conversão

A primeira regra que precisamos saber é que existem apenas 3 tipos de conversão no Javascript:

* para string;
* para boolean;
* para number.

A segunda, é que a lógica para conversão de tipos primitivos e objetos funcionam de forma diferente, mas ambos só podem ser convertido nessas 3 maneiras.

Vamos começar primeiro com os primitivos.

## Conversão de String

Para indicar a conversão explícita de valores para string use a função`String()`. A coerção implícita é ativada pelo operador binário`+`, quando qualquer operando é uma string:

```javascript
String(123) // explícito
123 + ''    // implícito
```

Todos os valores primitivos são convertidos em strings naturalmente, como você poderia esperar:

```javascript
String(123)                   // '123'
String(-12.3)                 // '-12.3'
String(null)                  // 'null'
String(undefined)             // 'undefined'
String(true)                  // 'true'
String(false)                 // 'false'
```

A conversão de Symbol é um pouco complicada, porque só pode ser convertida explicitamente, mas não implicitamente. Leia mais nas regras de coerção de tipos do[Symbol](https://leanpub.com/understandinges6/read/#leanpub-auto-symbol-coercion).

```javascript
String(Symbol('my symbol'))   // 'Symbol(my symbol)'
'' + Symbol('my symbol')      // TypeError é lançado
```

## Conversão de Boolean

Para indicar a conversão explícita de valores para boolean use a função`Boolean()`. A conversão implícita ocorre no contexto lógico ou é ativada por operadores lógicos (`||&&!`) .

```javascript
Boolean(2)          // explícito
if (2) { ... }      // implícito devido ao contexto lógico
!!2                 // implícito devido ao operador lógico
2 || 'hello'        // implícito devido ao operador lógico
```

**Observação**: Operadores lógicos como`||`e`&&`fazem conversões booleanas internamente, mas[na verdade retornam o valor dos operandos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical_operators)originais, mesmo que eles não sejam booleanos.

```javascript
// retorna o número 123 ao invés de true
// 'hello' e 123 são convertidos para boolean internamente para calcular a expressão
let x = 'hello' && 123;   //x === 123 é true
```

Assim que houver apenas dois resultados possíveis da conversão booleana:`true`ou`false`, é mais fácil lembrar a lista de valores falsos (falsy values).

```javascript
Boolean('')           // false
Boolean(0)            // false     
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false
```

Qualquer valor não inserido nessa lista ao ser convertido será`true`, incluindo objetos, funções,`Array`,`Date`, tipos definidos pelo usuário e assim por diante. Symbols são considerados como valores verdadeiros (truthy values). Objetos vazios e arrays também:

```javascript
Boolean({})             // true
Boolean([])             // true
Boolean(Symbol())       // true
!!Symbol()              // true
Boolean(function() {})  // true
```

## Conversão Numérica

Para uma conversão explícita aplique a função`Number()`, assim como feito com`Boolean()`e`String()`.

A conversão implícita é complicada, pois é acionada em mais casos:

* operadores de comparação (comparison operators)(`>`,`<`,`<=`,`>=`)
* operadores bitwise (`|&^~`)
* operadores aritméticos (`-+*/%`). Saiba que usar`+`não irá ativar a conversão numérica quando qualquer operando for uma string.
* operador unário`+`
* operador de igualdade`==`(incl.`!=`).\
  Perceba que`==`não ativa a conversão numérica quando ambos operandos são strings.

```javascript
Number('123')   // explícito
+'123'          // implícito
123 != '456'    // implícito
4 > '5'         // implícito
5/null          // implícito
true | 0        // implícito
```

Abaixo como valores primitivos são convertido para números:

```javascript
Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
Number(123)                    // 123
```

Ao converter uma string em número, a engine primeiro remove os espaços em branco com os caracteres`\n`e`\t`, retornando`NaN`se a string tratada não representar um número válido. Se a string estiver vazia, retornará`0`.

`null`e`undefined`são tratados de forma diferentes:`null`vira 0, enquanto`undefined`se torna`NaN`.

Symbols não podem ser convertidos em números nem explicitamente nem implicitamente. Além disse,`TypeError`é lançado ao invés de silenciosamente converter para`NaN`, como acontece para`undefined`. Veja mais sobre as regras de conversão de símbolo no MDN.

```javascript
Number(Symbol('my symbol'))    // TypeError é lançado
+Symbol('123')                 // TypeError é lançado
```

Existem**duas regras especiais**para relembrar:

1. Quando aplicamos`==`para`null`ou`undefined`, a conversão numérico não ocorre.`null`é apenas igual a`null`ou`undefined`, e não é igual a mais nada.

```javascript
null == 0               // false, null is not converted to 0
null == null            // true
undefined == undefined  // true
null == undefined       // true
```

2.`NaN`não é igual a nada que não seja ele mesmo:

```javascript
if (value !== value) { console.log("we're dealing with NaN here") }
```

## Coerção de tipos para objetos

Até agora, analisamos a coerção de tipos para valores primitivos. Isso não é muito empolgante.

Quando isso ocorre com objetos, e a engine encontra expressões como`[1] + [2,3]`, primeiramente será preciso converter o objeto para um valor primitivo, que é então convertido pro tipo final. E ainda assim existem apenas três tipos de conversão: numérico, string e booleano.

O caso mais simples é a conversão para booleano: qualquer valor não primitivo sempre será convertido para`true`, não importa se um objeto ou array está vazio ou não.

Objetos são convertidos para primitivos através da função`[[ToPrimitive]]`, que é responsável pela conversão numérica e string.

Abaixo uma pseudo implementação do método`[[ToPrimitive]]`:

```javascript
function ToPrimitive(input, preferredType){
  
  switch (preferredType){
    case Number:
      return toNumber(input);
      break;
    case String:
      return toString(input);
      break
    default:
      return toNumber(input);  
  }
  
  function isPrimitive(value){
    return value !== Object(value);
  }

  function toString(){
    if (isPrimitive(input.toString())) return input.toString();
    if (isPrimitive(input.valueOf())) return input.valueOf();
    throw new TypeError();
  }

  function toNumber(){
    if (isPrimitive(input.valueOf())) return input.valueOf();
    if (isPrimitive(input.toString())) return input.toString();
    throw new TypeError();
  }
}
```

`[[ToPrimitive]]`é invocado passando dois argumentos:

* input: valor a ser convertido;
* preferredType: Tipo escolhido para conversão, podendo ser`Number`ou`String`. Esse argumento é opcional.

Ambas conversões, número e string fazem uso de dois métodos do objeto de entrada (input):`valueOf`e`toString`. Ambas funções são declaradas no`Object.prototype`e, portanto, disponível para qualquer tipo derivado, como`Date`,`Array`, e etc.

Em geral, o algoritmo é o seguinte:

1. Se o input já é do tipo primitivo, retorne-o;

2. Chame a função`input.toString()`, se o resultado for do tipo primitivo, retorne-o;

3. Chame a função`input.valueOf()`, se o resultado for do tipo primitivo, retorne-o;

4. Se nem a função`input.toString()`ou`input.valueOf()`retornar um tipo primitivo, lance`TypeError`.

Conversões numéricas primeiro chamam a função`valueOf`(3) com o fallback`toString`(2).

A conversão de string faz exatamente o oposto:`toString`(2) seguido de`valueOf`(3).

A maioria dos tipos internos(built-in) não possui a função`valueOf`, ou possui`valueOf`retornando o próprio objeto, então é ignorado por não ser do tipo primitivo. É por isso que a conversão de tipos`number`e`string`podem funcionar da mesma forma — ambos acabam chamando`toString()`.

Operadores diferentes podem acionar a conversão numérica ou de string com a ajuda do parâmetro`preferredType`. Mas existem duas exceções: o comparador de igualdade abstrato`==`e a opção binária`+`acionam modos de conversão padrão (`preferredType`não é especificado, ou igual a`default`). Nesse caso, a maior dos tipos internos(built-in) assumirão uma conversão numérica como default, exceto`Date`que fará uma conversão de string.

Segue abaixo um exemplo de como se comporta uma conversa de`Date`:

```javascript
let d = new Date();

// obtém a representação em string
let str = d.toString();  // 'Wed Jan 17 2018 16:15:42'

// obtém a representação numérica, número em milisegundos desde a época do Unix
let num = d.valueOf();   // 1516198542525

// comparara com uma representação de string
// é true, pois "d" foi convertido para a mesma string
console.log(d == str);   // true

// compara com a representação numérica
// false, pois d não foi convertido para um número usando valueOf()
console.log(d == num);   // false

// O resulado é 'Wed Jan 17 2018 16:15:42Wed Jan 17 2018 16:15:42'
// '+' funcional igual ao '==', aciona o modo padrão de conversão
console.log(d + d);

// O resultado é 0, pois o operador '-' aciona explicitamente a conversão numérica, não a padrão
console.log(d - d);
```

Você pode sobrescrever os métodos padrão`toString()`e`valueOf()`para conectar-se à lógica de conversão objeto para primitivo(object-to-primitive).

```javascript
var obj = {
  prop: 101,
  toString(){
    return 'Prop: ' + this.prop;
  },
  valueOf() {
    return this.prop;
  }
};

console.log(String(obj));  // 'Prop: 101'
console.log(obj + '')      // '101'
console.log(+obj);         //  101
console.log(obj > 100);    //  true
```

Observe como`obj + ‘’`retorna`'101'`como uma string. O operador`+`dispara um modo de conversão padrão, e como dito anteriormente,`Object`assume a conversão numérico como padrão, usando portanto, o método`valueOf()`ao invés do`toString()`.

## Método do ES6 - Symbol.toPrimitive

No ES5 você pode conectar a lógica de conversão de objeto a primitivo(object-to-primitive) substituindo os métodos`toString`e`valueOf`.

No ES6 você pode ir mais longe, podendo substituir completamente a rotina interna`[[ToPrimitive]]`implementando o método`[Symbol.toPrimtive]`em um objeto.

```javascript
class Disk {
  constructor(capacity){
    this.capacity = capacity;
  }

  [Symbol.toPrimitive](hint){
    switch (hint) {
      case 'string':
        return 'Capacity: ' + this.capacity + ' bytes';

      case 'number':
        // convert to KiB
        return this.capacity / 1024;

      default:
        // assume numeric conversion as a default
        return this.capacity / 1024;
    }
  }
}

// 1MiB disk
let disk = new Disk(1024 * 1024);

console.log(String(disk))  // Capacity: 1048576 bytes
console.log(disk + '')     // '1024'
console.log(+disk);        // 1024
console.log(disk > 1000);  // true
```

## Exemplos

Sabendo a teoria, agora vamos aos exemplos:

```javascript
true + false             // 1
12 / "6"                 // 2
"number" + 15 + 3        // 'number153'
15 + 3 + "number"        // '18number'
[1] > null               // true
"foo" + + "bar"          // 'fooNaN'
'true' == true           // false
false == 'false'         // false
null == ''               // false
!!"false" == !!"true"    // true
['x'] == 'x'             // true 
[] + null + 1            // 'null1'
[1,2,3] == [1,2,3]       // false
{}+[]+{}+[1]             // '0[object Object]1'
!+[]+[]+![]              // 'truefalse'
new Date(0) - 0          // 0
new Date(0) + 0          // 'Thu Jan 01 1970 02:00:00(EET)0'
```

Abaixo, você encontrará explicações para cada expressão.

O operador binário`+`aciona a conversão numérica gerando o resultado`true`ou`false`.

```javascript
true + false
==> 1 + 0
==> 1
```

O operador aritmético`/`aciona a conversão numérico para a string`'6'`:

```javascript
12 / '6'
==> 12 / 6
==>> 2
```

O operador`+`possui uma associação de leitura a partir da esquerda para a direita (left-to-right associativity), portanto a expressão`"number" + 15`é executada primeiro. Desde que o primeiro operando é uma string, o operador`+`aciona a conversão para string do número 15. No segundo passo, a expressão`"number15" + 3`é tratada da mesma forma.

```javascript
"number" + 15 + 3 
==> "number15" + 3 
==> "number153"
```

A expressão`15 + 3`é avaliada primeiro. Já que ambos operandos são numéricos, não é preciso fazer a coerção dos tipos. Mas na segunda expressão, quando`18 + 'number'`é avalido, ao verificar que um dos operandos é uma string, ele aciona a conversão para string.

```javascript
15 + 3 + "number" 
==> 18 + "number" 
==> "18number"

```

O operador de comparação`>`acionada a conversão numérica para`[1]`e`null`.

```javascript
[1] > null
==> '1' > 0
==> 1 > 0
==> true
```

O operador unário`+`tem maior precedência ao operador binário`+`. Então a expressão`+'bar'`é avaliada primeiro. O operador unário aciona a conversão numérica para a string`'bar'`. Já que a string não apresenta um número válido, o resultado será`NaN`. Na segunda etapa, a expressão`'foo' + NaN`será avaliada.

```javascript
"foo" + + "bar" 
==> "foo" + (+"bar") 
==> "foo" + NaN 
==> "fooNaN"
```

O operador`==`aciona a conversão numérica, a string`true`é convertida para`NaN`, o booleano`true`é convertido para 1.

```javascript
'true' == true
==> NaN == 1
==> false

false == 'false'   
==> 0 == NaN
==> false
```

O operador`==`normalmente aciona a conversão numérica, mas não é o caso quando é colocado`null`.`null`é igual apenas a`null`ou`undefined`.

```javascript
null == ''
==> false
```

O operador`!!`converter ambas strings`'true'`e`'false'`para o booleano`true`, já que eles não são strings vazias. Então,`==`apenas verifica a igualdade de dois booleanos`true`sem qualquer coerção.

```javascript
!!"false" == !!"true"  
==> true == true
==> true
```

O operador`==`aciona a conversão numérica para um array. O método do array`valueOf()`retorna o próprio array, e é ignorado por não ser um primitivo. A função do array`toString()`converte`['x']`para a string`'x'`.

```javascript
['x'] == 'x'  
==> 'x' == 'x'
==>  true
```

O operador`+`aciona uma conversão numérica para`[]`. A função do array`valueOf()`é ignorado, pois retorna a si mesmo, cujo valor não é primitivo. A função do array`toString()`retorna uma string vazia.

Na segunda expressão`'' + null + 1`é avaliada.

```javascript
[] + null + 1  
==>  '' + null + 1  
==>  'null' + 1  
==> 'null1'
```

Os operadores lógicos`||`e`&&`fazem coerção para booleano, mas retornando os operandos originais — não valores booleanos.`0`é falso(falsy), enquanto`'0'`é verdadeiro(truthy), pois não é uma string vazia. Um objeto vazio`{}`também retorna verdadeiro(truthy).

```javascript
0 || "0" && {}  
==>  (0 || "0") && {}
==> (false || true) && true  // internamente
==> "0" && {}
==> true && true             // internamente
==> {}
```

Não é preciso fazer coerção pois ambos operandos são do mesmo tipo. Desde que`==`verifica a identidade do objeto (object identity), e não sua igualdade (object equality), o resultado será`false`, por conta dos 2 arrays serem de instâncias diferentes.

```javascript
[1,2,3] == [1,2,3]
==>  false
```

Todos os operandos são valores não primitivos, portanto,`+`inicia a conversão numérica com o item mais a esquerda. A função`valueOf`de ambos objetos e arrays retornarão a si mesmo, e serão ignorados. O método`toString()`é usado como fallback. A pegadinha aqui é que`{}`não é considerado um objeto literal, mas sim como um bloco de declaração de estado, então é ignorado. A avaliação começará com a próxima expressão`+ []`, que será convertido para uma string vazia através do método`toString()`, e então para`0`.

```javascript
{}+[]+{}+[1]
==> +[]+{}+[1]
==> 0 + {} + [1]
==> 0 + '[object Object]' + [1]
==> '0[object Object]' + [1]
==> '0[object Object]' + '1'
==> '0[object Object]1'
```

Esse é mais fácil de explicar, pois o passo a passo de sua resolução se dará de acordo com a precedência do operador.

```javascript
!+[]+[]+![]  
==> (!+[]) + [] + (![])
==> !0 + [] + false
==> true + [] + false
==> true + '' + false
==> 'truefalse'
```

O operador`-`acionará a conversão numérica para`Date`. A função`Date.valueOf()`retornará o número de milissegundos desde a época do Unix.

```javascript
new Date(0) - 0
==> 0 - 0
==> 0
```

O operador`+`acionará a conversão padrão.`Date`assumirá uma conversão para string, portanto o método`toString()`será utilizado, ao invés do`valueOf()`.

```javascript
new Date(0) + 0
==> 'Thu Jan 01 1970 02:00:00 GMT+0200 (EET)' + 0
==> 'Thu Jan 01 1970 02:00:00 GMT+0200 (EET)0'
```

## Rápidas explicações

### O que é um operador unário e binário?

* Unário: aquele que interage sobre um elemento. Ex: +, -, ++.
* Binário: aquele que interage sobre dois elementos. Ex: +, -, *, /, &, &&.

## Referências

Recomendo o excelente livro“[Understanding ES6](https://leanpub.com/understandinges6)” escrito por[Nicholas C. Zakas](https://medium.com/u/77c787f473e5?source=post_page-----d6c9203c4e5----------------------). É uma grande fonte para aprender ES6, não é tão avançado, e não fica muito tempo em partes mais profundas.

E aqui um ótimo livro de ES5 —[SpeakingJS](http://speakingjs.com/)written por[Axel Rauschmayer](https://medium.com/u/7fab51e62203?source=post_page-----d6c9203c4e5----------------------).

(**Russian**) Современный учебник Javascript —<https://learn.javascript.ru/>. Especially[these](https://learn.javascript.ru/object-conversion)[two](https://learn.javascript.ru/types-conversion)pages on type coercion.

JavaScript Comparison Table —<https://dorey.github.io/JavaScript-Equality-Table/>

wtfjs — a little code blog about that language we love despite giving us so much to hate —<https://wtfjs.com/>

<https://codeburst.io/javascript-quickie-what-is-type-coercion-74f19df6d16f>

[](https://codeburst.io/javascript-quickie-what-is-type-coercion-74f19df6d16f)<https://medium.com/codezillas/let-me-coerce-you-into-liking-javascripts-dynamic-typing-system-3cd22c19cb64>

<https://medium.com/intrinsic/javascript-object-type-coercion-b2ec176c02c4>

<https://hackernoon.com/understanding-js-coercion-ff5684475bfc>