---
title: Controle de Versão,Git e Github
description: O que é tudo isso?
date: 2020-06-05T12:30:18.000Z
category: desenvolvimento
---
Lembro de quando estava fazendo um curso técnico e estava desenvolvendo um projeto com outro 2 colegas. Cada um pegou uma funcionalidade diferente, mas com partes que eram iguais. Como fizemos? Um ficou responsável por fazer essa parte comum entre as 3 funcionalidades, e os outros 2 simularam essa parte e continuaram o desenvolvimento. Ao final de tudo tínhamos 3 pastas, e precisamos gastar um tempinho pra juntar o que foi feito.

E se existisse algo que ajudasse com esse **controle de versionamento**?

## Controle de Versão

Um sistema de **controle de versão**(nome auto-explicativo) tem o objetivo de gerenciar diferentes versões de um mesmo projeto. É possível obter históricos das modificações, permitir que vários programadores trabalhem no mesmo projeto, e permitir um comparativo entre várias versões do projeto.

Dentre as muitas funções do **controle de versão,** existem 3 que são características fundamentais:

### Ele salva seu histórico

Qualquer alteração no projeto, aquela linha modificada, ele irá salvar a modificação. Isso ajuda muito para saber o que foi mudado de uma versão para outra.

### Você pode desenvolver versões diferentes

Os sistemas possuem **branches**(ramificações), permitindo que você crie versões diferentes do mesmo sistema sem afetar outros.

### Programar em paralelo

Permiti que os desenvolvedores possam programar paralelamente sem haver alterações no código alheio.

## Como funciona

O projeto fica armazenada no servidor(repositório remoto), onde ficam armazenados os históricos e modificações de cada versão. O desenvolvedor pode baixar a última versão e trabalhá-la, e posteriormente atualizar a versão contida no servidor.

![Controle de Versão simplificado](assets/img/1_mdpamjow4iv1yvlevdh9na.png "Controle de Versão simplificado")

Essa **sincronização** de arquivos entre a **estação de trabalho** e o **servidor** é feito através dos comandos **commit** e **update**.

O **commit** envia o conjunto de arquivos alterados ao servidor, gerando um novo histórico de atualização. O **update** faz o inverso, mandando a última versão dele ao computador do desenvolvedor.

## Controle de Versão Centralizado

Seguindo a**topologia em estrela**, existe**apenas um servidor**e**várias**cópias do projeto nas diversas**estações de trabalho**. Para haver comunicação entre as estações de trabalho, tal como a topologia, elas precisam passar pelo servidor.

## Controle de Versão Distribuído

Nesse tipo de controle, cada **estação de trabalho** possui seu próprio “servidor”, onde faz as operações básicas de commit e update, além de cada estação de trabalho poder comunicar-se diretamente com a outra.

![Controle de Versão Distribuído](assets/img/1_m8hxygljy-pfvokakejc-a.png "Controle de Versão Distribuído")

## GIT

GIT é um dos muitos sistemas para controle de versão. É rápido, possui um design simples, gratuito, fácil instalação, configuração e baixa curva de aprendizado.

Segue abaixo alguns termos que você verá muitas vezes no terminal de comando e também de outros sistemas:

* **Commit**: Salva parte do código no repositório interno com uma mensagem de identificação.
* **Branch**: Ramificação do projeto — assim como em uma árvore -, permitindo seguir várias “linhas” diferentes de desenvolvimento para o mesmo projeto.
* **Clone**: Comando usado para copiar um repositório já existente em algum servidor para o computador local.
* **Push**: Pega os commits da branch e insere na branch destino do servidor.
* **Pull**: Pega os commits de uma branch do servidor e coloca na branch do repositório interno.
* **Merge**: Junção de branches.

## Github

O **controle de versão** é o tipo de sistema que nos ajuda com o versionamento, o **Git** é a tecnologia que implementa esse conceito de versionamento com seus próprios comandos. O que falta agora?

Um lugar para armazenar os repositórios.

O **[Github](https://github.com/)** é essa plataforma, que hoje foi comprada pela **Microsoft.** Se existe um lugar com muitos repositórios, ainda mais open sources, esse é o lugar.

Crie uma conta, crie repositórios(públicos ou não) e aproveite :).