---
title: 4 grandes erros que todo desenvolvedor cometeu ou cometerá
description: Tudo bem fazer uma cagadas - é assim que você aprende e cresce. Mas
  tenha certeza de aprender com seus erros
date: 2020-07-02 12:30:27
category: carreira
---
Esse artigo é uma tradução livre de [Four Big Mistakes Every Software Engineer Has Made](https://medium.com/better-programming/four-big-mistakes-every-software-engineer-has-made-b009e7f92b5c) por [Indrek Lasn](https://medium.com/@indreklasn?source=post_page-----b009e7f92b5c----------------------).

- - -

Criar uma aplicação é um tipo de arte. Escrever código permite que expressemos nós mesmos, e como vemos o mundo, assim com outros tipos de arte. Todo engenheiro de software tem seus hábitos. O individualismo tem um preço  - aqui estão alguns erros que vi em alguns colegas, e também cometidos por mim.

### Tentando ser inteligente demais (escrevendo código inteligente demais)

Escrever um código inteligentão chega a ser prazeroso. Você fica com aquela sensação de demonstrar grande inteligência. Eu não culpo ninguém — afinal, quem não quer ser visto como o engenheiro fodão? Todos nós queremos a glória — ser visto como a “elite” dos desenvolvedores. É assim que você acaba caindo no “código muito inteligente”, por tentar demais ser visto assim.

Por exemplo, eu achei esse código Javascript no meu feed do Linkedin. Qual você acha que será o resultado?

```javascript
(function(x, f = () => x) {
    var x;
    var y = x;
    x = 2;
    return [x, y, f()];
})(1)
```

Esse é um excelente exemplo de código “inteligentão” — meu feed do Linkedin.

Ao coçar um pouco a cabeça, pensar, e tentar resolver o que esse código vai cuspir, você perceberá que o resultado será `[2, 1, 1]`.

Se você estava com preguiça para entender o código, relaxa, eu não te culpo. Eu também fiquei assim quando o vi. Eu sabia que esse era o típico código “inteligentão”, e não estava a fim de investigar o código. É esse tipo de código que acaba criando confusão nas equipes. Não faça, por favor, seu colegas terem que interpretar esses enigmas que você chama de código. Seja flexível, gentil e por favor, **escreva códigos claros e concisos para humanos, não para computadores.**

![Novos programadores x Programadores experientes](assets/img/1.jpeg "Novos programadores e depois os programadores experientes")

- - -

“Que código inteligentão!”

Anedoticamente, trate seu código como se a próxima pessoa que fosse mexer nele fosse um serial killer. Você não quer mexer com esse tipo de pessoa, pois se o fizer, ele vai te achar. Seja carinhoso com seu código, e não o deixe virar um código “inteligentão”. O princípio “mantenha simples essa merda”(KISS: Keep It Simple Stupid) é algo fantástico para termos em mente e seguir.

### Não praticar exercícios físicos

Imagina o seguinte: Você poderá ter apenas 1 carro durante toda a sua vida. Que carro você escolheria? Bom…tenho certeza que você faria um puta esforço pra manter esse carro e cuidar nele, né? Afinal, você só terá esse aí, até o resto da sua vida. As trocas de óleo se tornariam mais recorrentes, e verificações de rotina e de pneus seriam de praxe.

Nosso corpo funciona da mesma forma: nós temos apenas 1, até o resto de nossas vidas. Por qual razão você não cuidaria de algo único, e que você terá pro resta da vida? Negligenciar seu bem estar e saúde é um problema pra toda a vida. Em última análise, a decisão é unicamente sua sobre o que fazer com seu corpo e saúde, mas uma decisão sábia seria cuidar bem de algo com tanta importância.

\
Escrever código é uma tarefa que não exige muita coisa do corpo. Se você tiver sorte, terá uma mesa em pé, mas a maioria acaba ficando sentado em suas mesas. Nossos corpos não foram feitos só pra isso — somos caçadores e coletores. Precisamos estar em constante mudança para estarmos bem fisicamente e mentalmente. Não negue algo tão importante. Tente começar devagarzinho, fazendo um passeio 1x ou 2x por semana. Vá desenvolvendo esse progresso, e em alguns meses, tente correr ao invés de caminhar. Visita uma academia, pratique jiu-jitsu, crossfit, o que você preferir. Apenas continue!

## Não documentar o suficiente

Os gregos pensaram que escrever as coisas que sabiam nas rochas era um grande erro. Quão errado eles estavam? Os seres humanos subiram ao topo da cadeia alimentar graças à capacidade de transferir conhecimento e trabalhar juntos como um grupo. Uma única pessoa, sozinha na natureza, está fadada a morrer, mas um grupo com certeza conseguirá sair dali. É por isso que temos esse sentimento e vontade de pertencimento, e por isso que é tão bom fazer parte de uma “tribo” — nossas chances de sobreviver aumentam drasticamente.

Crie uma página de Wiki para seu projeto e documento TUDO. Cada projeto tem suas peculiaridades, então garanta que você conseguirá comunicar isso de forma clara na documentação. Se o seu projeto faz acesso ao banco de dados, escreva como configurá-lo. Você ficará feliz e verá a diferença quando um novo colega entrar no seu time, e você encaminhá-lo para a Wiki e ele conseguir entender o projeto.

## Desistir logo no começo

Todo mundo acaba desistindo cedo demais — afinal de contas, é muito mais fácil desistir do que trabalhar em algo que é considerado impossível pelos padrões de muitas pessoas. Você consegue imaginar-se vivendo na época medieval, e tentar explicar o conceito de eletricidade pra alguém? Toda casa tem acesso a elétrons e correntes elétricas. Você sem dúvida seria considerado um louco pela maioria das pessoas, no entanto, essa é nossa realidade. Nós conseguimos alcançar coisas que já foram impossíveis de serem realizadas, e não foi desistindo que isso foi feito.

> *Estou convencido de que cerca da metade do que separa os empreendedores bem-sucedidos dos não-bem-sucedidos é pura perseverança.*
>
> *— Steve Jobs*

Engenharia de software é algo complicado, tipo, bem complicado. Algumas vezes é muito fácil você jogar tudo pro alto e dizer, “Blz. Pra mim já deu!”. Eu não sou exceção; Já desisti de projetos que gostaria de ter concluído. Eu aprendi com esses erros, e eles me fizeram um engenheiro e pessoa mais forte.

Na próxima que você tiver uma tarefa bem complicado, sente, pense, e tente quebrar o problema em problemas menores. A Estação Internacional Espacial(ISS) — indiscutivelmente uma das coisas mais complicadas já criadas — não foi construída em 1 ou 2 dias. De fato essa estação foi construído em módulos. Atualmente ela ainda é aprimorada, tendo novos módulos anexadas a ela.