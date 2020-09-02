---
title: Coisas que você pode fazer para melhorar a qualidade do seu código
description: Como diminuir os WTFs por minuto
date: 2020-09-01 12:30:29
category: desenvolvimento
---
Esse post é uma tradução livre do artigo [Things That You Can Do to Improve Code Quality](https://medium.com/better-programming/things-that-you-can-do-to-improve-code-quality-c746c30e7521), escrito por [Daan](https://medium.com/@daaaan?source=post_page-----c746c30e7521----------------------).

- - -

Um código mal escrito pode ser um baita desastre. Quando a bagunça nele aumenta, o tempo para mexer em algo também irá :/. No pior caso, o código ninguém consegue mexer no código, e aos poucos o projeto vai morrendo.

Para prevenir esse tipo de caso, você vai precisar de um código de qualidade. Você **deve** investir seu tempo para desenvolvê-lo. E pense que em longo prazo ele vai se pagar, tranquilamente.

Qualidade não tem dono, é tarefa de todo mundo. Não interessa se você é gerente, um tester ou desenvolvedor. Entregar um código de alta qualidade e funcionando deve ser a meta em todo o processo de desenvolvimento.

Vou mostrar uma lista de **6 coisas que podem ser feitas para melhorar a qualidade do código.**Alguns desses pontos você consegue fazer sozinho, e outras o time precisará se empenhar.

![Como mensurar um bom código: WTFs por minuto. Fonte: https://hackernoon.com/the-book-every-programmer-should-read-33b5ef2e532a](assets/img/1.png "Como mensurar um bom código: WTFs por minuto. Fonte: https://hackernoon.com/the-book-every-programmer-should-read-33b5ef2e532a")

Como mensurar um bom código: WTFs por minuto. Fonte: <https://hackernoon.com/the-book-every-programmer-should-read-33b5ef2e532a>

- - -

### 1. O Princípio dos 4 olhos(Four-Eyes Principle)

O princípio dos 4 olhos é algo fácil de ser entendido e executado. Ele precisa de duas pessoas, a que fez o código, e outra que possa revisá-lo. Um dos métodos atuais mais conhecidos para fazer isso é o pull request.

> *Pull requests permite que você informe aos outros as mudanças que você fez na sua branch em um repositório do Github. Assim que ele é aberto, você pode discutir e revisar algumas mudanças de código com seus colegas antes que suas mudanças sejam mergeadas na branch base.*
>
> *—[Github.com](https://help.github.com/en/articles/about-pull-requests)*

Durante o review de código, algumas coisas devem ser levadas em conta. Uma delas é verificar se parte do código quebra/infringe alguma convenção de código estipulada pelo time. Isso pode ser automatizado através do uso de um linter, mas algumas vezes essa verificação ainda é feita manualmente.

Outras coisas que podem ser feitas, mas não de forma automática, e analisar a manutenabilidade do código e como é feito o tratamento de erros(error handling). Por último, mas não menos importante, o código deve ser verificado quanto à integridade. Esse trecho de código contém o escopo da funcionalidade solicitada?

- - -

### 2. Integração Contínua(Continuous Integration)

“Mas funciona no servidor de desenvolvimento”, ou ainda pior: “Na minha máquina funciona”.

Problemas e discussões dessa natureza são o que você deseja que não aconteçam. É exatamente aí que a integração contínua(CI) pode desempenhar um papel importante.

> Integração Contínua é uma prática de desenvolvimento de software onde os membros do time juntam seus trabalhos de forma frequente, normalmente cada pessoa faz isso diariamente — chegando a múltiplas integrações por dia. Cada integração é verificada por um build automático(incluindo os testes) para detectar erros de integração o mais rápido possível.
>
> *— Martin Fowler*

A sacada da integração contínua é dar aos desenvolvedores um feedback rápido que informe o que ele colocou com o que já existe.

A integração contínua funciona quando você segue esses 2 princípios básicos:

1. Mantenha o build rápido. Não existe nada mais desanimador que um build que demora 1h.
2. Corrija os builds quebrados o mais rápido possível. Toda a ideia de CI é que você está sempre desenvolvendo algo numa base de código estável.

O CI melhora a qualidade do código pois fornece um feedback rápido aos desenvolvedores. Se um teste quebra, o build vai falhar, e o desenvolvedor será notificado. Além disso, é bom que seja adicionado um linter ao script the build, para sempre verificar as convenções de código estipuladas. Isso também aumenta a qualidade do código.

- - -

### 3. Convenções de Codificação(Coding Conventions)

É importante existir uma lista das convenções de código estipuladas. Mantes antes de você começar a fazê-la, todos no time precisam estar alinhados. Isso vai demandar tempo, e precisará ser conversado com pessoa a pessoa, com muita discussão sobre quais convenções escolher.

Faça uma lista das convenções especificando como as variáveis devem ser declaradas, e alguns convenções para nomeclatura, e etc. O número de regras que você pode colocar nessa lista é infinita, e elas podem variar. Apenas tenha as regras que fazem sentido pro seu time. Sinta-se livre para adicionar novas regras se o time gostar.

Depois de ter essa lista, é garantir que ela será cumprida. Como falei anteriormente, o melhor modo de verificar que essas convenções estão sendo seguidas, é através de um linter uma pipeline de CI, já que não é preciso nenhuma ação manual — hoje já é possível você ter extensões em seu editor de texto que verifiquem o código em tempo real e te dê avisos na interface. Sempre se certifique de usar o lint regularmente, pra deixar os commits certinhos. Isso vai aumentar a legibilidade e manutenibilidade da base de código, já que o código estará uniforme.

Um código de alta qualidade pode acelerar o desenvolvimento de software a longo prazo, pois pode ser reutilizado e os desenvolvedores não precisam gastar muito tempo corrigindo bugs antigos e fazendo melhorias nele. Sem contar que também facilita a entrada de novas pessoas no projeto.

- - -

### 4. Teste, Teste, Teste

Quanto menos erros o código tiver, maior será sua qualidade. O teste completo filtra bugs críticos, garantindo que o código funcione da maneira esperada.

Ter uma estratégia de teste é essencial quando o assunto é ter um código de qualidade. No mínimo, seu código deve ter testes de unidade. Se quiser fazer outros, como testes de integração, regressão, será ainda melhor.

De acordo com a pirâmide de testes, a maior quantidade de testes que um software deveria ter, são os de unidade. A razão para isso é que são os mais baratos e mais rápidos. Existe uma porrada de ferramentas disponíveis para te ajudar na criação de testes de unidade e também para relatórios de cobertura de código(code coverage).

![Pirâmide de Testes](assets/img/piramide_teste.png "https://blog.octo.com/en/the-test-pyramid-in-practice-5-5/")

<https://blog.octo.com/en/the-test-pyramid-in-practice-5-5/>

- - -

Executar a bateria de testes e criar um relatório da cobertura de testes é algo que pode ser feito de forma automática através do CI. É possível você fazer o build falhar caso a cobertura de código seja inferior ao percentual configurado.

- - -

### 5. Analise Bugs

Ter bugs é inevitável. O modo como eles são tratados é muito importante. Se você deseja evoluir como desenvolvedor, esse é um ponto chave, para que você aprenda com seus erros. É por isso que você deve analisar os bugs.

Quando um bug ocorre, entenda seu impacto. É um bug de alta ou baixa prioridade? Se for um bug de alta prioridade, corre pra resolver.

Quando a análise do bug for feita, é importante se fazer algumas perguntas. O que aconteceu de errado? Pq não testamos isso(da forma certa)? Onde mais isso acontece? E mais importante: Como podemos fazer com que isso não ocorra novamente:

Claro, ferramentas são importantes para te ajudar a rastrear esses bugs. Existem muitas ferramentas no mercado. Pegue uma que se encaixe em sua necessidade.

> O único e real erro é aquele com o qual não aprendemos nada
>
> *— Henry Ford*

- - -

### 6. Comece a mensurar(Measuring)

Quando se trata de mensurar, existem várias métricas que você pode usar para quantificar a qualidade do seu código.

### Métrica de defeito(Defect metric)

O número de defeitos e a severidade deles é uma métrica importante de qualidade. Se você deseja manter um rastro desses defeitos, você pode usar um bug burndown chart, por exemplo. Ele é funciona como um burndown chart do desenvolvimento ágil. A única diferença é que nesse você vai contar a quantidade de bugs que não foram consertados, ao invés dos pontos das histórias.

### Métrica de complexidade(Complexity metrics)

A complexidade é frequentemente medida com a métrica de complexidade ciclomática. É uma medida quantitativa do número de caminhos linearmente independentes através do código fonte de um programa.

Existe uma correlação entre o número de complexidade ciclomática e a frequência de defeitos:

> *Vários estudos investigaram a correlação entre o número de complexidade ciclomática e a frequência de defeitos que ocorrem em uma função ou método. Alguns estudos encontram uma correlação positiva entre a complexidade e os defeitos ciclomáticos: funções e métodos que têm a maior complexidade tendem a conter também o maior número de defeitos. No entanto, a correlação entre complexidade ciclomática e tamanho do programa (normalmente medida em linhas de código) foi demonstrada muitas vezes.*
>
> *—[Wikipedia](https://en.wikipedia.org/wiki/Cyclomatic_complexity)*

Ter um código menos complexo, deveria, em teoria, gerar menos bugs.