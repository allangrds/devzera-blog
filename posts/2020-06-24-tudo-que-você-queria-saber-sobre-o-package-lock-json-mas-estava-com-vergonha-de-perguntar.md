---
title: Tudo que você queria saber sobre o package-lock.json mas estava com
  vergonha de perguntar
date: 2020-06-23 09:22:24
category: javascript
---
Esse texto é uma tradução livre do artigo[Everything You Wanted To Know About package-lock.json But Were Too Afraid To Ask](https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8).

## Introdução

Então você atualizou o Node Package Manager (npm) para a versão 5.x.x e tudo parece que está funcionando bem, certo? Mas pera, o que é isso? Um novo arquivo foi criado automaticamente:`package-lock.json`. Se você abri-lo até vai parecer um`package.json`, mas com muito mais coisa, mais verboso. Você decide ignorá-lo enquanto desenvolve seu projeto. Eventualmente você se depara com um problema de dependência. Não pode ser encontrada ou uma versão errada foi instalada. A maior parte das pessoas deleta o`package-lock.json`e reexecuta o`npm install`. Então por que o temos? O que deveríamos fazer? O que ele faz?

## Resumo

* Se você está usando uma versão do NPM superior a 5.x.x o`package-lock.json`será gerado para você;
* Você deve usar o`package-lock.json`para garantir uma instalação consistente e dependências compatíveis;
* Você**DEVE**commitar seu`package-lock.json`em seu sistema de controle de versão;
* A partir da versão 5.1.0 do npm o conteúdo do`package.json`é capaz de sobrescrever o que estiver no`package-lock.json`para instalar ou modificar uma dependência, o que*deve*gerar menos dor de cabeça;
* Não precisa mais deletar o`package-lock.json`e executar o`npm install`para regerá-lo;
* Use semver (versionamento semântico) se sua aplicação for uma API e siga as regras do semver.

## Background

### Versionamento Semântico (semver)

Antes de entender o`package-lock.json`e o`package.json`você precisa entender o[versionamento semântico (semver)](http://semver.org/). É a sacada por trás do NPM, e o que o tornou um sucesso. Você pode ler mais sobre como o NPM faz seu uso por[aqui](http://blog.npmjs.org/post/162134793605/why-use-semver).

De forma resumida, se você está criando uma aplicação com a qual outras irão integrar, você deve comunicar como as alterações feitas afetarão a capacidade de integração desses terceiros com sua aplicação. Isso é feito através do versionamento semântico.

*Uma versão é dividida em 3 partes: X, Y e Z, onde a primeira é considerada a**major**(principal), a segunda, a**minor**(menor) e a terceira é o**patch**(correção).*Um exemplo como 1.2.3 representaria que 1 é a major, a 2 é a minor, e o 3 o patch.

* Uma modificação no patch não quebrará nada. Muito pelo contrário, corrigirá algo.
* Uma alteração na versão minor lhe trará uma nova funcionalidade, mas sem quebrar o que existe atualmente.
* E por fim, alterar algo na versão major significa que houve uma quebra de compatibilidade. Se o usuário não fizer a alteração necessária, ele não conseguirá mais integrar com sua aplicação.

### Gerenciando pacotes

O NPM existe para facilitar o gerenciamento de dependências. Seu projeto pode ter centenas de dependências, cada uma com suas próprias dependências. Para nos mantermos longe desse inferno de dependências, o NPM foi criado com um conjunto de comandos que permitem você instalar e gerenciar tudo isso e, dificilmente, precisar se preocupar com elas.

Quando você instala um pacote com o NPM (e o salva), uma nova entrada é adicionada ao arquivo`package.json`contendo o nome do pacote e a versão (semver) que será usada. Entretanto, existem algumas artimanhas para definir melhor as versões.

Por padrão o NPM instalará a versão mais nova do pacote, inserindo um símbolo na frente da versão`^2.12.0`. Isso significa que o pacote será instalada com uma versão que seja igual ou superior a 2.12.0. Leia mais sobre semver e wildcards e brinque com uma[ferramenta para calcular a versão do pacote.](http://blog.npmjs.org/post/115305091285/introducing-the-npm-semantic-version-calculator)

### Projetos Compartilhados

O real benefício de ter dependências definidas no`package.json`é que qualquer um pode ter acesso a esse arquivo e criar um pasta de dependências contendo todos os módulos para rodar sua aplicação. Mas vamos dar uma olhada em uma caso específico em que as coisas podem dar errado.

Vamos dizer que criamos um projeto utilizando o[express](http://Mas%20vamos%20dar%20uma%20olhada%20em%20uma%20maneira%20espec%C3%ADfica%20em%20que%20as%20coisas%20podem%20dar%20errado./). Depois de rodar`npm init`instalamos o express:`npm install express --save`. Até o momento em que escrevo esse artigo, a última versão do express é a 4.15.4. Então será adicionado como dependência ao`package.json`a linha`express: ^4.15.4`, e isso informará exatamente a versão que será instalada em meu computador.

Não agora, mas talvez amanhã, o pessoal que desenvolve o express pode lançar um bug fix, então a nova versão será a 4.15.5. Então se alguém quiser contribuir com meu projeto, precisará cloná-lo e rodar o comando`npm install`. Com isso ele terá instalado em seu computador a versão 4.15.5. Nós dois teremos o express instalado, mas versões diferentes. Teoricamente ambas devem ser compatíveis, mas talvez esse bug fix afete alguma funcionalidade que fazemos uso, e nossa aplicação poderá produzir resultados diferentes, já que uma possui a versão 4.15.4, e outra a 4.15.5.

## Package-lock

### O objetivo

A proposta do`package-lock`é evitar que situações como o caso acima, onde módulos instalados a partir do mesmo`package.json`resulte em duas diferentes instalações. O`package-lock`foi adicionado em versões superiores ao do NPM 5.x.x, então se você está usando essa versão ou alguma maior, você o verá ser gerado, a não ser que você desabilite essa função.

### O formato

O`package-lock.json`é uma larga lista de dependências listadas no seu`package.json`, além de especificar a versão exata que deve ser instalado, a localização do módulo (URI), o hash que verifica a integridade do módulo e a lista de pacotes necessários. Vamos dar uma olhada nos registros presentes apenas para o express:

```json
"express": {
      "version": "4.15.4",
      "resolved": "https://registry.npmjs.org/express/-/express-4.15.4.tgz",
      "integrity": "sha1-Ay4iU0ic+PzgJma+yj0R7XotrtE=",
      "requires": {
        "accepts": "1.3.3",
        "array-flatten": "1.1.1",
        "content-disposition": "0.5.2",
        "content-type": "1.0.2",
        "cookie": "0.3.1",
        "cookie-signature": "1.0.6",
        "debug": "2.6.8",
        "depd": "1.1.1",
        "encodeurl": "1.0.1",
        "escape-html": "1.0.3",
        "etag": "1.8.0",
        "finalhandler": "1.0.4",
        "fresh": "0.5.0",
        "merge-descriptors": "1.0.1",
        "methods": "1.1.2",
        "on-finished": "2.3.0",
        "parseurl": "1.3.1",
        "path-to-regexp": "0.1.7",
        "proxy-addr": "1.1.5",
        "qs": "6.5.0",
        "range-parser": "1.2.0",
        "send": "0.15.4",
        "serve-static": "1.12.4",
        "setprototypeof": "1.0.3",
        "statuses": "1.3.1",
        "type-is": "1.6.15",
        "utils-merge": "1.0.0",
        "vary": "1.1.1"
      }
    },
```

Entradas equivalentes podem ser encontradas para cada pacote listado na seção “requires”.

Então a ideia é que ao invés do NPM ler o`package.json`para instalar os módulos ele use o`package-lock.json`. Isso acontece justamente por conta do que disse anteriormente. Pelo`package-lock`especificar a versão, localização, hash para cada módulo, e suas dependências próprias, a instalação criada será sempre a mesma, toda vez. Não importa qual dispositivo você use, ou quando você fará a instalação, ele deverá ter o mesmo resultado, sempre, e isso é útil demais.

### A controvérsia

Então, se o`package-lock.json`supostamente resolve um problema comum, por que os principais resultados de pesquisa (além da documentação do npm) são todos sobre desabilitá-lo ou questionar a função que ele desempenha?

Antes do NPM 5, o`package.json`era a fonte absoluta para qualquer projeto. O que estava nele era a lei. Os usuários do NPM gostaram desse modelo e se acostumaram a mantê-lo assim. Entretanto, quando o`package-lock`foi introduzido, ele agiu de forma contrária ao que as pessoas esperavam.

Dado um pacote preexistente e um`package-lock`, uma alteração no`package.json`(o que muitos usuários consideravam a fonte da verdade) não era refletida no`package-lock`.

**Exemplo**: Pacote A, versão 1.0.0 no`package`e no`package-lock`. No`package.json`a versão A foi alterada manualmente para 1.1.0. Se um usuário considerar o`package.json`como a fonte da verdade e executar o`npm install`, ele irá esperar que a versão 1.1.0 seja instalada. Entretanto, a versão 1.0.0 é instalada, apesar do fato de que a versão 1.1.0 está listada no`package.json`.

**Exemplo:**Um módulo não existe no`package-lock.json`, mas existe no`package.json`. Como um usuário que olha para o`package.json`como a fonte de toda a verdade, eu esperaria que meu módulo fosse instalado. No entanto, como o módulo não está presente no`package-lock.json`, ele não está instalado e meu código falha porque não consegue encontrar o módulo.

Na maior parte do tempo, porque a pessoa não conseguiu descobrir o motivo de suas dependências não estarem sendo instaladas corretamente, ela irá preferir remover o`package-lock.json`e rodar o comando`install`novamente, ou irá desabilitar sua criação.

O conflito entre o esperado e a realidade gerou[uma discussão muito interessante no repositório do NPM](https://github.com/npm/npm/issues/16866). Algumas pessoas acham que o`package.json`deveria ser a fonte da verdade, outras acham que desde que o NPM considerou o`package-lock.json`como a fonte para realizar a instalação, essa deve ser a fonte real. A resolução desse conflito está no[PR #17508](https://github.com/npm/npm/pull/17508).*Os contribuidores do projeto adicionaram uma mudança ao`package.json`fazendo com que as regras presentes nele se sobrepujam ao que está no`package-lock`.*

Agora, em ambos cenários, os pacotes que os usuários esperam ser instalados, serão instalados corretamente. Essa mudança faz parte do release lançado na versão 5.1.0 do NPM, que foi ao ar em 5 julho de 2017.