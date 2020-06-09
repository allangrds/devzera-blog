---
title: Protegendo sua vida virtual
description: Dicas básicas de como fazê-lo
date: 2019-06-01 12:25:32
category: outros
---
## Dia a dia

### Não grave senhas em qualquer lugar

Não grave suas senhas por mensagens de email, em arquivos de texto, ou post-it colado no monitor. Só facilita que sua conta seja acessada caso exista alguma invasão em algum serviço.

### Veja se seus dados foram vazados(leak)

Você pode não mudar sua senha com periodicidade, então pelo menos tente entrar de vez em quando [aqui,](http://haveibeenpwned.com/)para ver se alguma das contas vinculadas ao seu email foi vazada. As que aparecem na lista, já corra pra bolar uma nova senha.

### Mude suas senhas de forma periódica

Se você mudar suas senhas de forma periódica, e sem demorar muito, poderá ficar menos preocupado com os leaks, já que você terá atualizada a senha dos seus serviços. Isso torna-se ainda mais importante se você é daqueles que usa a mesma senha para X serviços.

Tem um serviço muito legal que te ajuda com isso. O [Lastpass](https://www.lastpass.com/pt) provê um ambiente seguro para você armazenar suas senhas.

### Está em lugar aberto e com muitas pessoas? Cuidado com o que faz

Você está no metrô, aquela galera sinistra indo pro serviço, e bate aquela vontade de ver o extrato do seu banco. Espera! Você realmente vai digitar seus dados bancários e senha na frente de todo mundo? Você não tem olho dos lados e atrás da cabeça, alguém pode ver.

### Engenharia social

Engenharia social é nada mais que uma iniciativa que visa influenciar atitudes e comportamentos sociais. Quando falamos disso em segurança, falamos de qualquer modo que alguém possa usar pra te enganar pra conseguir alguma coisa sua.

Vamos pensar em alguém que deseja receber um produto que você está vendendo no Mercado Livre. Alguém faz um pergunta sobre ela, e pouco tempo depois você recebe um email supostamente do Mercado Livre, dizendo que uma pessoa X comprou sem produto, e que você deve enviá-lo a um endereço, e que você receberá seu pagamento em até X dias. Fique sempre atento com a origem do email, com layout — se estiver muito diferente do padrão usado — e verifique juntamente a empresa ou pessoa se aquele email é realmente válido.

### Wi-FI público gratuito? Cuidado!

Lembra daquele Wi-Fi gratuito na praia ou no Starbucks? Então, eles são inseguros. Alguém pode fazer algo ruim, seja por meio de dispositivos que “copiam” as redes que seu dispositivo reconhece — isso faz com que seu dispositivo entenda a rede criada por ele com a correta, fazendo com que você seja conectado a ela, desse modo, dando a ele controle total sobre a rede -, ou acessando a rede e executando scripts para chegar até o seu dispositivo.

### Site sem HTTPS é complicado…

Você já deve ter navegado em algum site e recebeu alguma das mensagens abaixo:

![Sua conexão não é segura](assets/img/1_silt7dzr1xjue0ifd7ky0g.jpeg "Sua conexão não é segura")

**O que isso está indicando?**

Quando você navega pela internet através de seu browser, você está fazendo isso através do protocolo **HTTP**. Pense em um protocolo como um meio de transportar informações. Cada um tem sua peculiaridade. O HTTP é o protocolo usado para navegar pela web, mas ele não possui criptografia, portanto quando você solicita algo ao site que você acessa, as informações são trafegadas na rede sem proteção nenhuma. Se alguém interceptar seu pedido, poderá ver tudo que você solicitou.

Agora vamos a outro protocolo: o **HTTPS**. Ele é o **HTTP**com um plus: criptografia. Para consegui-lo, você precisa de um certificado **SSL** ou **TLS**. Esses caras garantem que sua solicitação será criptografada.

Lembra que te mostrei as imagens? Elas indicam que o certificado expirou ou foi mal configurado. Quer um exemplo, só ver o site da **Receita Federal**, e clicar naquela cadeado no topo do seu navegador.

http://idg.receita.fazenda.gov.br/

Isso é de suma importância quando você está fazendo coisas que possuem informações sensíveis. Quer um exemplo? Imagina um Facebook sem HTTPS, e seu login e senha trafegando de forma livre e solta, pra todo mundo ver pela rede. Com ele e o certificado válido, isso não acontece.

Portanto, fique esperto com sites onde o certificado não existe, ou está inválido.

### Senhas fortes no padrão passphrases

Usar senhas como “g@QYFJ1LZpP1” não é uma coisa nova, mas um fenômeno recente é a utilização de passphrases, que nada mais é que senhas baseadas em frases — diferente do que temos hoje, que são senhas baseadas em palavras. De uma senha ”g@QYFJ1LZpP1" você tem algo como “i_l00v3_g0t_s2”. Desse modo, você cria uma senha mais difícil de ser quebrada, porém mais fácil de ser lembrada.

### Não use a mesma senha pra tudo

Acho que esse é o campeão da lista. Você provavelmente tem só 1 email, e ainda por cima usa uma ou duas senhas? Tome cuidado, pois como isso é bem comum, se alguma conta sua vazar, é bem provável que alguém tente atacá-lo em diversos serviços usando essa senha.

## Dicas técnicas

### Cookies

Um cookie é um arquivo armazenado referente ao seu usuário do computador, para permitir que o site que você está acessando te reconheça ao mudar entre as páginas.

Isso é útil, pois com eles os sites podem gravar suas preferências em formato de texto. Assim, logo que você voltar ao site o navegador buscará o cookie desse site e devolverá as informações gravadas pelo site sobre você.

Ele pode tornar-se um vilão a partir do momento que ele é mal implementado, e o site poderia salvar seu login e senha de forma não segura, deixando o cookie com informações expostas. Isso torna-se um prato cheio para alguém mal intencionado que possa conseguir acesso aos cookies do seu navegador.

O bom é não salvar informações de acesso em sites que você não confia tanto, e se estiver querendo ir além, apague seus cookies após finalizar a navegação.

### Criptografe seu computador INTEIRO

Criptografia é um sistema de algoritmos que codificam os dados do usuário para que somente o destinatário possa lê-los.

E por qual motivo estou falando disso? Vamos imaginar que seu trabalho foi roubado, e todos os notebooks já eram. Você pode ter uma senha, e das boas, mas nada impede de alguém plugar o HD do notebook em um case — caixa para transformar seu HD em uma HD externo — e obter acesso a todos os arquivos do computador.

Se você já deixa quase tudo, ou tudo na nuvem, provavelmente ficou menos nervoso.

Mas calma que isso tem solução.

Existem softwares que permitem fazer a criptografia completa do disco rígido(FDE —Full Disk Encryption), tornando seu conteúdo inacessível para esse tipo de pilantra. Mas é importante saber, que feito isso, é IMPORTANTÍSSIMO que você coloque uma senha segura e que vá se lembrar depois.

Segue abaixo links para ajudar no processo em seu sistema operacional:

**Windows**

* [Tecmundo](https://www.tecmundo.com.br/tutorial/43778-como-usar-criptografia-de-dados-para-proteger-pastas-e-arquivos.htm);
* [How to Geek;](https://www.howtogeek.com/234826/how-to-enable-full-disk-encryption-on-windows-10/)

**Linux(LUKS)**

* [Cyberciti](https://www.cyberciti.biz/hardware/howto-linux-hard-disk-encryption-with-luks-cryptsetup-command/);
* [Linux Config.](https://linuxconfig.org/basic-guide-to-encrypting-linux-partitions-with-luks)

**MacOS**

* [Suporte da Apple](https://support.apple.com/en-us/HT204837);
* \[Suporte da Apple[2].](https://support.apple.com/kb/ph25553?locale=pt_BR)

### Criptografe seu celular

É amigo, seu celular também está vulnerável. Segue abaixo links para fazer o processo:

**Android**

Essa função está disponível a partir da versão 4.4, e já vem configurada a partir da versão 5.0 na maior parte das marcas.

* [How to Geek;](https://www.howtogeek.com/141953/how-to-encrypt-your-android-phone-and-why-you-might-want-to/)

**iOS**

* [SSD EFF ORG](https://ssd.eff.org/en/module/how-encrypt-your-iphone)

### VPN

Lembra ano passado quando bloquearam o WhatsApp em todo o país? O que aconteceu após isso? Muita gente baixando apps de VPNs gratuitas para conseguir usar o Whats. O que é uma VPN? Por que ter feito isso é perigoso?

**VPN**, ou **Rede Virtual Privada** é uma rede cuja função é ligar N computadores, via internet, protegendo suas informações, devido a criptografia dos dados trafegados.

Com uma rede desse tipo você pode acessar conteúdo não disponível no seu país, já que trafegando por essa rede privada, os sites entenderão que sua origem é a do computador que você está se conectando — quando se usa um serviço de VPN, é possível escolher o país de origem para se conectar.

Ou seja, mesmo que você more no Brasil e use a Internet da sua casa, a VPN fará com que os sites pensem que você está nos Estados Unidos, por exemplo, por conta do seu endereço de IP.

Esse é o uso doméstico, mas seu uso e popularidade está no mundo corporativo, onde as empresas precisam ligar suas filiais em uma mesma rede, e com uma troca de dados seguro, precisando assim de uma VPN. Outro caso é o home office, onde através da VPN a empresa consegue fornecer acesso aos serviços da rede ao colaborador de forma segura.

Sobre as VPNs gratuitas. Existe almoço gratuito? Uma forma dessas empresas ganharem alguma coisa, é roubando os dados dos usuários. A VPN impede que o provedor rastreie quem a utiliza, mas ela mesma faz isso, coletando os dados trafegados por vocês. E esse não é o pior dos males, você ainda pode sofrer com:

* Roubo de banda;
* Introdução de códigos maliciosos;
* Redirecionamento para sites estranhos;

https://www.techtudo.com.br/noticias/2018/03/vpn-gratis-ilimitada-entenda-os-perigos.ghtml

Se estiver interessado, tem um serviço muito bom que recomendo:

[PIA VPN —](https://bra.privateinternetaccess.com/)<https://bra.privateinternetaccess.com/>

### Two Factory Authentication

Percebemos que apenas acessar sites e aplicações com a senha não é o bastante. Sabendo disso, hoje existe o fator de dupla autenticação. Ele é aquele check a mais para garantir que é você mesmo que está fazendo aquela ação — pense nisso como o token que você usaa ao efetuar alguma movimentação bancária.

**Como funciona?**

Você ativa a funcionalidade no serviço que você utiliza — Gmail, Facebook, Mercado Livre e etc — , recebe um QR Code/Código, faz a leitura dele através de um programa para gerenciamento dessas chaves, e ele registra aquele serviço, lhe devolvendo uma sequência de números, então para acessar o serviço, você só precisará digitar os números apresentados.

Isso é muito bom para deixar um segundo escudo na proteção de suas contas. Mesmo que alguém, por algum motivo saiba sua senha, ele estará barrado por não ter essa sequência — que muda a cada X tempo.

[Authy —](https://authy.com/)<https://authy.com/>

### Senha na BIOS

Ativar o boot do pendrive? Desativar o Secureboot? Mudar a prioridade de boot? Essas são só algumas das coisas que é possível fazer tendo acesso a BIOS de um computador.

Colocar uma senha na BIOS é possível, e fazendo isso você impedirá que pessoas não autorizadas acessem seu computador, modifiquem configurações de seu computador ou obtenham acesso privilegiado do root através de um usuário comum.

### Secureboot

“Secure Boot Configuration é um novo recurso da Unified Extensible Firmware Interface (UEFI) no BIOS 8 que ajuda o computador a resistir a ataques e a infecções por malware. Quando o seu computador foi fabricado, a UEFI criou uma lista de chaves que identificam hardware, firmware e código de carregamento de sistema operacional confiáveis. Também foi criada uma lista de chaves que identificam malware conhecido.

Quando Secure Boot é ativado, o computador bloqueia ameaças em potencial antes que elas possam atacar ou infectar o computador. Por exemplo, a opção Secure Boot pode impedir que seu computador inicie CDs ou DVDs ilegalmente copiados que poderiam danificar o computador. Secure Boot não bloqueia discos de recuperação ou discos de Windows válidos.” — por[HP](https://support.hp.com/br-pt/document/c03681807)

### Extensões de navegadores

* HTTPS Everywhere;
* Ublock Origin;
* Decentraleyes;
* Ghostery.

## Referências

### HTTPS

http://www.techtudo.com.br/noticias/noticia/2014/02/o-que-e-https-e-como-ele-pode-proteger-sua-navegacao-na-internet.html

https://www.brasilwebhost.com.br/blog/o-protocolo-https-o-que-e-e-como-funciona/

### Passphrases

https://untroubled.org/pwgen/ppgen.cgi

https://randompassphrasegenerator.com/

http://www.useapassphrase.com/