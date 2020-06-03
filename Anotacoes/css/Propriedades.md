## Propriedades

### Tipográfias e Fontes

- `font-family` define a fontes do texto. Recebe valores com ou sem aspas;
  - _Aspas:_ indica a fonte a ser utilizada;
  - _Sem Aspas:_ indica a família da fonte.
- `font-style` define o estilo da fonte;
  - valores: normal, italic e oblique.

### Alinhamento e decoração de textos

- `text-align` define o alinhamento d texto;
- `line-height` tamanho da altura de cada linha;
- `letter-spacing` tamanho do espaço entre cada letra;
- `word-spacing` tamanho do espaço entre cada palavra;
- `text-indent` tamanho da margem da primeira linha do texto.
- `text-transform` capitaliza o texto de um elemento.
- `text-decoration` define a formatação do texto em: underline, overline, line-through ou blink. Seu segundo parâmetro é a cor (opcional).
- `vertical-align` define o alinhamento vertical de um elemento inline ou caixa table-cell.

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

### Sombra

#### Sombra em textos

- `text-shadow` Aplica a sombra nos textos
- _Exemplo:_ `text-shadow: deslocamento-x deslocamento-y blur zoom cor`
- _Exemplo:_ `text-shadow: 1px 1px 2px 1px white`

#### Sombra em outros elementos

- `box-shadow` Aplica a sombra nos elementos
- _Exemplo:_ `box-shadow: deslocamento-x deslocamento-y blur zoom cor`
- _Exemplo:_ `box-shadow: 1px 1px 2px 1px white`

### Gradientes

- `linear-gradient`
- `radial-gradient`

### Transições

A propriedade `transition` permite definir a transição entre dois estados de um elemento.

Sintaxe: `transition: transition-property transition-duration transition-timing-function transition-delay`

### Transformações

A propriedade `transform` permite modificar o espaço coordenado do modelo de formatação.

Sintaxe: `transform: função`

Principais funções:

- matrix
- translate
- scale
- rotate
- skew
- perpective

A maioria delas tem variações para o eixo X, Y, Z e para o formato 3D.
