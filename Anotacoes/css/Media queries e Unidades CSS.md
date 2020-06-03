# Responsivo design e Mobile-First

Design responsivo é uma técnica que faz a página se adptar ao navegadr e dispositivo no qual o contéudo será exibido.

Mobile-first é a tecnica utilizada para começar o desenvolvimento do site em resolução para dispositivos móveis, com o intuito de facilitar o desenvolvimento, escrevendo menos código e evitanto o reset de propriedades.

# Unidades CSS

- px
  - Medida absoluta
  - O píxel do CSS não é realmente um píxel da tela do dispositivo.
- %
  - POrcentagem do espaço que lhe cabe
- em
  - Definida através do font-size do elemento pai
  - o font-size é herdado do filho
- rem
  - Definida através do font-size do elemento raiz (html)
  - Caso não seja definido nenhuma base, o valor do font-size é 16px.
- vh
  - Definida com 1/100 da altura do viewport
- vw
  - Definida com 1/100 da largura do viewport
- vmin e vmax
  - Definidas como 1/100 do valor máximo e mínimo da largura e altura da viewport
  - Se a largura for menor que a altura, o vmin será o valor de 1/100 da largura e o vmax de 1/100 da altura
- ch
  - Definida como sendo a "medida avançada" da largura do caractere zero ("0")
  - Não se aplica para fontes diferentes da categoria monospace.
- ex
  - Definida como "a altura-x da fonte atual ou a metade de 1em".

# Medias Types

Definem para qual tipo de media o css será aplicado.

- all
  - Para todos os dispositivos.
- screen
  - Para monitores ou outros dispositivos com telas coloridas e com resolução adequada.
- handheld
  - Para dispositivos de mão. Normalmente com telas pequenas e banda limitada.
- embossed
  - Para dispositivos que “imprimem” em braille.
- tty
  - Para dispositivos que utilizam uma grade fixa para exibição de caracteres, como por exemplo, teletypes, terminais, dispositivos portáteis com display limitado.
- print
  - Para impressão em papel.
- braille
  - Para dispositivos táteis.
- projection
  - Para apresentações, como PowerPoint.
- tv
  - Para dispositivos como televisores, ou seja, com baixa resolução, quantidade de cores e scroll limitado.
- speech
  - Para sintetizadores de voz.

# Medias Features

Testa uma feature única do dispositivo para ser aplicado o css, segue abaixo algumas dessas media features:

- width
- height
- device-width
- device-height
- orientation
- pixel-density
- aspect-ratio
- prefers-color-scheme
- device-aspect-ratio
- color
- color-index
- monochrome
- resolution
- scan
- grid

# Medias Queries

Aplica-se condições para o uso do css, adicionando maiores poderes que o media types. Uma consulta que testa o meio e as características desse meio.

Pode ser utilizado dentro dos arquivos css com a diretiva: `@media`

# Viewport

Meta tag utilizada para configurar e aplicar os estilos e media queries em dispositivos móveis.

## Operadores lógicos

    - not
    - only
    - and
    - or (através da ",")

# Materiais de Apoio

- [dpw - Unidades CSS](https://desenvolvimentoparaweb.com/css/unidades-css-rem-vh-vw-vmin-vmax-ex-ch/)
- [Alura - Unidades CSS](https://www.alura.com.br/artigos/guia-de-unidades-no-css)
- [MDN - Media Queries](https://developer.mozilla.org/pt-BR/docs/Web/Guide/CSS/CSS_Media_queries)
- [DevMedia - Media Queries](https://www.alura.com.br/artigos/guia-de-unidades-no-css)
- [dpw - Media Queries](https://desenvolvimentoparaweb.com/css/media-queries/)
- [Felipe Fialho - Organizando as Media Queries](https://www.felipefialho.com/blog/otimizando-e-organizando-as-media-queries/)
