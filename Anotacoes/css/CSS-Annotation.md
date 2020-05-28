# CSS

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

### :not() /_ terminar _/

- ...

### :first-child /_ terminar _/

- ...

### :last-child /_ terminar _/

- ...

### :nth-child /_ terminar _/

- ...

## Pseudo Classes de Estado

### :hover /_ terminar _/

- ...

### :link /_ terminar _/

- ...

### :visited /_ terminar _/

- ...

### :active /_ terminar _/

- ...

## Pseudo Elementos

### ::first-letter /_ terminar _/

- ...

### ::first-line /_ terminar _/

- ...

### ::before /_ terminar _/

- ...

### ::after /_ terminar _/

- ...

## Cores Na Web

Existem várias maneiras de definir cores no CSS.

A primeira opção é utilizando o próprio nome da cor. `color: white`

A segunda opção é utilizando o padrão RGB que permite especificar milhões de cores com as cores: Red (R), Green (G) e Azul (B), os valores possuem uma escala de 0 até 255. `color: rgb(255, 255, 0)`

A terceira opção é a notação hexadecimal, começa com o "#" e contém até 6 caracteres, os dois primeiros representa o canal Red, os dois seguintes o canal Green e dois últimos o canal blue.\
 Os algoritimos vão de zero a quinze configurado dessa forma: 0-9 e A-F. `color: #f2eded`\
 Obs: Pode ser simplificado caso a combinação do canal seja igual. `color: #ff5545 -> #f545 ou #ffffff -> #fff`

## Especificidade de seletores CSS /_ terminar _/

- ...

## Propriedades

### Tipográfias e Fontes

- `font-family` define a fontes do texto. Recebe valores com ou sem aspas;
  - _Aspas:_ indica a fonte a ser utilizada;
  - _Sem Aspas:_ indica a família da fonte.
- `font-style` define o estilo da fonte;
  - valores: normal, italic e oblique.

### Alinhamento e decoração

- `text-align` define o alinhamento d texto;
- `line-height` tamanho da altura de cada linha;
- `letter-spacing` tamanho do espaço entre cada letra;
- `word-spacing` tamanho do espaço entre cada palavra;
- `text-indent` tamanho da margem da primeira linha do texto.

### Imagem de Fundo

- `background-image` permite indicar um arquivo para ser exibido no fundo do elemento;

### Bordas

- `border-color` detemina a cor da borda
- `border-style` determina o estilo da borda
- `border-width` determina a largura da borda
- `border` Forma resumida das propriedades acima. Segue a sequência: width style color

  - _Exemplo:_ `border: 2px solid blue`

  ### Bordas Arredondadas

  - `border-radius` detemina o tamanho do raio de arredondamento das bordas
  - _Exemplo 01:_ `border-radius: 3px` Todas as bordas arredondadas com um raio de _15px_;
  - _Exemplo 02:_ `border-radius: 3px 5px` borda superior esquerda e inferior direita com _3px_, borda superior direita e inferior esquerda com _5px_;
  - _Exemplo 03:_ `border-radius: 3px 5px 10px` borda superior esquerda com _3px_, borda superior direita e inferior esquerda com _5px_, borda inferior direita com _10px_;
  - _Exemplo 04:_ `border-radius: 3px 5px 10px 15px` borda superior esquerda com _3px_, borda superior direita com _5px_, borda inferior direita com _10px_, borda inferior esquerda com _15px_;

### Listas

- `list-style-type` estiliza o formato padrão das listas

### Espaçamento

O `padding` aplica o espaçamento interno no elemento. (respiro externo)

- `padding-top` aplica o espaçamento acima;
- `padding-right` aplica o espaçamento do lado direito;
- `padding-bottom` aplica o espaçamento abaixo;
- `padding-left` aplica o espaçamento do lado esquerdo.
  Obs: o `padding` pode ser aplicado das seguintes forma:
- `padding: top/right/bottom/left`;
- `padding: top/bottom right/left`;
- `padding: top right/left bottom`;
- `padding: top right bottom left`.

### Margem

A `margin` aplica o espaçamento externo do elemento.
Todos as formas que foi explicada no padding servem para a margin.
Obs: ao atribuir o valor `auto` na `margin` o navegador será o responsável por aplicar o espaçamento.

- _Exemplo:_ `margin: 0 auto`.

### Dimensões

- `height` aplica o valor da altura do elemento;
- `width` aplica o valor da largura do elemento;

### Alinhamento

- `float` Retira o elemento do fluxo vertical do documento. (Colocando em outro contexto).

### Sombra /_ terminar _/

- ...

  #### Sombra em textos

  - ...

  #### Sombra em outros elementos

  - ...

### Gradientes /_ terminar _/

- ...

### Transições /_ terminar _/

- ...

### Transformações /_ terminar _/

- ...
