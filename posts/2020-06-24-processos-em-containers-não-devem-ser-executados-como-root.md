---
title: Processos em containers não devem ser executados como root
date: 2020-06-23 09:24:12
category: devops
---
Esse artigo é uma tradução livre de[Processes In Containers Should Not Run As Root](https://medium.com/@mccode/processes-in-containers-should-not-run-as-root-2feae3f0df3b)por[Marc Campbell](https://medium.com/@mccode?source=post_header_lockup).

## tldr;

Um processo dentro de um container não deve rodar com privilégios de root, assuma isso como verdade.

Ao invés disse, crie um usuário em seu`Dockerfile`com um conhecido`UID`e`GID`, e execute seu processo usando esse usuário. Imagens construídas sobre esse padrão são mais fáceis de serem executadas de forma segura por limitar o acesso a determinados recursos.

## Overview

Sistemas bem arquitetados aderem ao[princípio do menor privilégio](https://en.wikipedia.org/wiki/Principle_of_least_privilege). Esse princípio diz que um aplicativo deve ter acesso apenas aos recursos necessários para executar a função necessária. Isso é muito importante quando desejamos fazer um sistema seguro. Seja malicioso ou por causa de erros, um processo pode ter consequências inesperadas em tempo de execução. Um dos melhores modos de se proteger contra qualquer acesso inesperado é conceder o mínimo privilégio para que um processo seja executado.

A maior dos processos containerizados são serviços de aplicações, sendo assim, elas não precisa de acesso como`root`. Enquanto o[Docker precisa ser executado como root](https://docs.docker.com/engine/security/security/#docker-daemon-attack-surface), os containers em si, não. Imagens Docker bem escritas, seguras e reutilizáveis ​​não devem ser executadas como root e devem fornecer um método previsível e fácil para limitar o acesso.

## Por que isso é importante?

Lembre-se que um processo em execução em um container não é diferente de outro processo em execução no Linux, exceto que ele tem um pequeno pedaço de metadata informando que ele está sendo executado em um container.

Os containers são tão seguros quanto sua máquina host, portanto, qualquer coisa executada em um container deve ser tratada com a mesma consideração que qualquer coisa executada no próprio host.

Assim como você não faria (ou não deveria) executar qualquer coisa como root em seu servidor, você não deveria executar nada como root em um container em seu servidor. Executar binários que foram criados em outro lugar requer confiança, e o mesmo é verdadeiro para binários em containers.

Se um processo dentro de um container for executada como root por default, é possível mudar o`uid`e`gid`quando o container for iniciado. Sendo o criador da imagem, você deve usar como padrão um usuário diferente e facilitar a limitação de acesso para ele. Criando um usuário em seu`Dockerfile`, você está tornando não apenas ele seguro por padrão, mas também mais fácil de continuar seguro.

O exemplo abaixo mostrará o risco de executar um container como`root`. Vamos criar um arquivo no diretório`/root`, impedindo qualquer um diferente do`root`vê-lo:

```
marc@srv:~$ sudo -s
root@srv:~# cd /root
root@srv:~# echo "top secret stuff" >> ./secrets.txt 
root@srv:~# chmod 0600 secrets.txt
root@srv:/root# ls -l
total 4
-rw------- 1 root root 17 Sep 26 20:29 secrets.txt
root@srv:/root# exit
exit
marc@srv:~$ cat /root/secrets.txt
cat: /root/secrets.txt: Permission denied
```

Agora eu tenho um arquivo`/root/secrets.txt`que só o`root`consegue ver. Estou logado como um usuário normal(não root). Vamos criar uma imagem Docker a partir desse Dockerfile:

```dockerfile
FROM debian:stretch
CMD ["cat", "/tmp/secrets.txt"]
```

E finalmente, vamos executar esse`Dockerfile`, montando um volume a partir do`/root/secrets.txt`que não possa ler o arquivo`/tmp/secrets.txt`dentro do container.

```
marc@srv:~$ docker run -v /root/secrets.txt:/tmp/secrets.txt <img>
top secret stuff
```

Mesmo sendo`marc`, o container está rodando como`root`e, portanto, tem acesso a tudo que o`root`tem acesso neste servidor. Isso não é o ideal; A execução de containers dessa maneira significa que todos os containers que você acessa do Docker Hub podem ter acesso total a tudo em seu servidor (dependendo de como você o executa).

## Recomendação

A recomendação é criar um usuário com um`uid`conhecido no`Dockerfile`e rodar a aplicação usando esse usuário. O começo do`Dockerfile`deve seguir o seguinte padrão:

```dockerfile
FROM <base image>
RUN groupadd -g 999 appuser && \
    useradd -r -u 999 -g appuser appuser
USER appuser
... <rest of Dockerfile> ...

```

Usando esse padrão é fácil executar um container no contexto do usuário/grupo com o mínimo de privilégios necessários.

Por exemplo, adicionarei isso ao meu`Dockerfile`de cima, e o executarei novamente. Meu arquivo ficou assim:

```dockerfile
FROM debian:stretch
RUN groupadd -g 999 appuser && \
    useradd -r -u 999 -g appuser appuser
USER appuser
CMD ["cat", "/tmp/secrets.txt"]
```

Executando esse container com o mesmo comando de antes:

```
marc@srv:~$ docker run -v /root/secrets.txt:/tmp/secrets.txt <img>
cat: /tmp/secrets.txt: Permission denied
```

Agora, o comportamento padrão do container é que ele não terá privilégios de`root`no host.

## Reusando outras imagens

Imagens Docker são incríveis por serem reutilizáveis, mas quando o`FROM`de uma imagem é executado através de um usuário normal, seu container herdará esse usuário. Se você precisar criar sua própria imagem ou executar operações como`root`tenha certeza que`USER root`esteja próximo do topo de seu`Dockerfile`. Então`FROM appuser`para torná-lo utilizável.

## Executando outros containers como usuários normais (non-root)

Imagens Docker são feitas para serem portáteis, e é normal obter outras imagens do Docker Hub. Algumas delas (imagens oficiais) seguirão as melhores práticas e serão executadas como usuários normais (non-root), mas muitas imagens não fazem isso. Muitas simplesmente executam as coisas como`root`e deixam pra você descobrir como executar as coisas com segurança. Existem opções que permitirão você rodar uma imagem de forma segura que não foi criada por você.

### Criando outra imagem

Primeiro, uma opção é criar outra imagem usando a imagem original com a camada`FROM`. Então você poderá criar um usuário, e copiar o`ENTRYPOINT`origin e diretrizes do`CMD`para sua própria imagem. Isso resultará em uma nova imgem que seguirá as boas práticas citadas aqui, garantindo que sua execução ocorra de forma segura. O que pode incomodar nesse ponto é que você precisará rebuildar sua imagem quando a imagem base for atualizada. Você terá que configurar um processo para fazer esse rebuild quando a imagem base for rebuildada.

### Especificando um uid quando iniciando um container

Finalmente você pode criar um usuário no host e passar o`uid`pro Docker quando o container for iniciado. Por exemplo, revisitando o exemplo do`Dockerfile`:

```dockerfile
FROM debian:stretch
CMD ["cat", "/tmp/secrets.txt"]
```

Eu consigo executar esse container com ou sem o parâmetro user_id e ver os diferentes resultados(o user_id 1001 representa minha conta atual nesse servidor):

```
$ docker run --user 1001 -v /root/secrets.txt:/tmp/secrets.txt <img>
cat: /tmp/secrets.txt: Permission denied

$ docker run -v /root/secrets.txt:/tmp/secrets.txt <img>
top secret stuff
```

Isso funciona e é a mesma coisa que criar um usuário no`Dockerfile`, mas requer que o usuário opte por executar o container com segurança. Especificar um usuário normal (non-root) no`Dockerfile`fará com que o container seja executado com segurança por padrão.

## Para leitura futura

[Understanding how uid and gid work in Docker containers](https://medium.com/@mccode/understanding-how-uid-and-gid-work-in-docker-containers-c37a01d01cf)

[Official reference to the Docker Run command (Docker)](https://docs.docker.com/engine/reference/commandline/run/)

[Docker Security](https://docs.docker.com/engine/security/security/)

— -

Se você está usando Docker para lançar uma aplicação SaaS, você deveria verificar[www.replicated.com](http://www.replicated.com/)para poder lançar uma versão corporativa e instalável do seu produto.