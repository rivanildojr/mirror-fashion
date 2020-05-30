# Seletores e Especificidade CSS

## Seletores

### Seletores de Tags

Aplica os estilos a todas as tags.

- `p { color: red } ou body { font-size:16px }`

### Seletores de ID

Aplica os estilos ao elemento com o ID.

- `#cabecalho { color: red } ou #secao1 { font-size:16px }`

### Seletores Hierárquico

Aplica os estilos aos elementos filhos de um pai.

- `#rodape img { width: 94px } ou #secao2 li { font-size:14px }`

### Seletores de Class

Aplica os estilos aos elementos que contenha essa classe. (Usar classes facilita reuso de código e flexibilidade).

- `.rodape { width: 94px } ou .secao { color:#fff }`

### Seletores de Atributo

Aplica os estilos aos elementos que contenha a presença ou valor de um atributo para selecioná - lo.

- `input[value] {color: #fff}` -> Aplica a todos os elementos da tag input que tem o _atributo_ "value".
- `div[class|="menu"] {color: #000}` -> Aplica a todos os elementos da tag div que tem a _class_ começando com _menu_ seguinda de hífen e qualquer outra palavra.
- `div[class~="menu"] {color: #fff}` -> Aplica a todos os elementos da tag _div_ que conter a class com a palavra menu.
- `input[name^="menu"] {color: #000}` -> Aplica a todos os elementos da tag input que tem a _name_ iniciando em "menu".
- `input[name$="menu"] {color: #fff}` -> Aplica a todos os elementos da tag input que tem a _name_ terminando em "menu".
- `input[name*="menu"] {color: #000}` -> Aplica a todos os elementos da tag input que tem a _name_ contendo "menu" em qualquer posição.

Obs: Os seletores de atributo têm o mesmo valor de especifidade dos seletores de classe

### Seletores de irmãos

Aplica os estilos aos elementos irmãos precedidos pela o elemento a direto do sinal _~_.

- `h2 ~ p {color: #fff}` -> Aplica a todos os elementos da tag p que que foram precedidos por algum h2 e são irmãos.
- `section ~ div {width: 300px}` -> Aplica a todos os elementos da tag div que foram precedidos por algum section e são irmãos.

### Seletores de irmãos adjacente /_ terminar _/

Aplica os estilos aos elementos irmãos precedidos pela o elemento a direto do sinal _~_.

- `h2 + p {color: #fff}` -> Aplica a todos os elementos da tag p que que foram precedidos por algum h2 e são irmãos.
- `.main + h2 {font-size: 18px}` -> Aplica a todos os elementos da tag div que foram precedidos por algum section e são irmãos.

### Seletores de filho direto /_ terminar _/

Aplica os estilos aos elementos irmãos precedidos pela o elemento a direto do sinal _~_.

- `h2 + p {color: #fff}` -> Aplica a todos os elementos da tag p que que foram precedidos por algum h2 e são irmãos.
- `.main + h2 {font-size: 18px}` -> Aplica a todos os elementos da tag div que foram precedidos por algum section e são irmãos.

## Pseudo Classes

### :not()

- ...

### :first-child

- ...

### :last-child

- ...

### :nth-child

- ...

## Pseudo Classes de Estado

### :hover

- ...

### :link

- ...

### :visited

- ...

### :active

- ...

## Pseudo Elementos

### ::first-letter

- ...

### ::first-line

- ...

### ::before

- ...

### ::after

- ...

## Especificidade de seletores CSS

- Diante de várias formas de seleção no css, as vezes podemos nos deparar com situações em que não consiguimos aplicar um determinado estilo em um componente e muitas vezes esse problema tem relação direta com a precedência da escolha de seleção utilizada e uma já utilizada.
- Para calcular essa especifidade e evitar esses problemas utilizaremos a seguinte formula: (a, b, c, d).
  - Elemento, pseudo elemento: d = 1 -> (0,0,0,1)
  - Classe, pseudo classe, atributo: c = 1 -> (0,0,1,0)
  - Id: b = 1 -> (0,1,0,0)
  - Estilo inline: a = 1 -> (1,0,0,0)

Obs:

- A pseudo-classe de negação :not não é considerada uma pseudo-classe no cálculo de especificação
- Quando a regra !important é utilizada na declaração do estilo substitui qualquer outra declaração feita no CSS, onde quer que esteja na lista de declaração

## Reset CSS

- É uma técnica utilizada que consiste em manter o padrão dos estilos em todos os browser. Existem vários resets famosos no mercado que se encaixam em determinadas situações, mas sempre com o mesmo objetivo: _padronizar a estilização nos navegadores_.

## Materias de Apoio

- Seletores

  - [MDN - Seletores](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Getting_Started/Seletores)
  - [CSS Tricks - Como trabalha os Seletores](https://css-tricks.com/how-css-selectors-work/)
  - [CSS Tricks - Seletores](https://css-tricks.com/almanac/selectors/)
  - [TutsPlus - Seletores](https://code.tutsplus.com/pt/tutorials/the-30-css-selectors-you-must-memorize--net-16048)
  - [Willian Justen - Seletores](https://willianjusten.com.br/alguns-seletores-css-importantes-para-aprender/)
  - [Aylton Inacio - Seletores](https://ayltoninacio.com.br/blog/como-usar-os-seletores-css-um-guia-completo)
  - [Flukeout - Seletores (Jogo)](https://flukeout.github.io/)

- Especificidade CSS

  - [Emanuel G. - Especifidade CSS](https://medium.com/emanuelg-blog/entendendo-a-preced%C3%AAncia-de-estilo-em-css-especificidade-heran%C3%A7a-e-efeito-cascata-a437c4929173)
  - [MDN - Especifidade CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Specificity)

- CSS Reset

  - [CSS Reset](https://cssreset.com/)
  - [Devmedia - CSS Reset](https://www.devmedia.com.br/como-utilizar-a-tecnica-css-reset/26797)
  - [Willian Oliveira - CSS Reset](https://woliveiras.com.br/posts/css-reset-de-varias-maneiras/)
