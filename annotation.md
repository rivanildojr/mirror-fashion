O navegador por padrão:

- Pode não exibir caracteres acentuados corretamente;
- Não exibe quebras de linha.

Marcações do HTML são chamadas de Tags, elas dão significado ao texto contido entre sua abertura e fechamento.

## Tags:

- A instrução `<!DOCTYPE>` indica a versão HTML deve ser utilizada para renderizar a página;
- A tag `<html>` representa a abertura do documento html;
- A tag `<head>` contém informações sobre nosso documento que são de interesse somente do navegador;
- A tag `<title>` permite especificar o título do nosso documento;
- A tag `<meta>` representa as configurações do documento;
- A tag `<link>` carrega arquivos dentro do HTML.
- A tag `<body>` contém o corpo do documento, que será exibido pelo navegador.

### Títulos

- A tag `<h1>, <h2> ... <h6>` indica que um texto é um título em nossa página, seguindo uma ordem de importância;

### Parágrafos

- A tag `<p>` indica para textos comuns. (parágrafo)

### Marcações de ênfase

- A tag `<strong>` deixa um texto "mais forte", contém semântica.
- A tag `<b>` deixa um texto "mais forte", não contém semântica.
- A tag `<em>` deixa um texto com uma "ênfase acentuada" (itálico), contém semântica.
- A tag `<i>` deixa um texto com uma "ênfase acentuada" (itálico), não contém semântica.
- A tag `<small>` diminui o tamanho do texto, contém semântica.

### Imagens

- A tag `<figure>` define uma imagem.
- A tag `<img>` define uma imagem em uma página, necessita de dois atributos (src e alt)
  - _src_ Obrigatório e indentifica o local da imagem.
  - _alt_ Opcional, textos alternativo para a imagem, importante para os leitores de buscas.
- A tag `<figcaption>` define a legenda para uma imagem.

### Listas

- A tag `ul` define uma lista não-ordenada;
- A tag `ol` define uma lista não-ordenada;
- A tag `li` define um item da lista ordenada e não-ordenada;
- A tag `dl` define uma lista de definição;
- A tag `dl` define um o título da lista de definição;
- A tag `dd` define um a descrição da lista de definição.

### Links

- A tag `a` define um link para. O link pode ser externo, interno (Seção do site) ou mundando de paginá no próprio site.

### Tags Coringas

- A tag `div` sem valor semântco e sem estilo. O Display é block;
- A tag `span` sem valor semântco e sem estilo. O Display é inline-block;

## CSS

### Seletores

#### Seletores de Tags

Aplica os estilos a todas as tags.

- `p { color: red } ou body { font-size:16px }`

#### Seletores de ID

Aplica os estilos ao elemento com o ID.

- `#cabecalho { color: red } ou #secao1 { font-size:16px }`

#### Seletores Hierárquico

Aplica os estilos aos elementos filhos de um pai.

- `#rodape img { width: 94px } ou #secao2 li { font-size:14px }`

#### Seletores de Class

Aplica os estilos aos elementos quem contenha essa classe. (Usar classes facilita reuso de código e flexibilidade).

- `.rodape { width: 94px } ou .secao { color:#fff }`

### Cores Na Web

Existem várias maneiras de definir cores no CSS.

A primeira opção é utilizando o próprio nome da cor. `color: white`

A segunda opção é utilizando o padrão RGB que permite especificar milhões de cores com as cores: Red (R), Green (G) e Azul (B), os valores possuem uma escala de 0 até 255. `color: rgb(255, 255, 0)`

A terceira opção é a notação hexadecimal, começa com o "#" e contém até 6 caracteres, os dois primeiros representa o canal Red, os dois seguintes o canal Green e dois últimos o canal blue.\
 Os algoritimos vão de zero a quinze configurado dessa forma: 0-9 e A-F. `color: #f2eded`\
 Obs: Pode ser simplificado caso a combinação do canal seja igual. `color: #ff5545 -> #f545 ou #ffffff -> #fff`

### Propriedades

#### Tipográfias e Fontes

- `font-family` define a fontes do texto. Recebe valores com ou sem aspas;
  - _Aspas:_ indica a fonte a ser utilizada;
  - _Sem Aspas:_ indica a família da fonte.
- `font-style` define o estilo da fonte;
  - valores: normal, italic e oblique.

#### Alinhamento e decoração

- `text-align` define o alinhamento d texto;
- `line-height` tamanho da altura de cada linha;
- `letter-spacing` tamanho do espaço entre cada letra;
- `word-spacing` tamanho do espaço entre cada palavra;
- `text-indent` tamanho da margem da primeira linha do texto.

#### Imagem de Fundo

- `background-image` permite indicar um arquivo para ser exibido no fundo do elemento;

#### Bordas

- `border-color` detemina a cor da borda
- `border-style` determina o estilo da borda
- `border-width` determina a largura da borda
- `border` Forma resumida das propriedades acima. Segue a sequência: width style color
  - _Exemplo:_ `border: 2px solid blue`

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

###### Falta explicar

- Tags semânticas do HTML5 e sobre a importância da semântica. (Pesquisar mais tags com semântica).
- CSS Reset
- Display - Block, inline e inline-block (Estudar mais).
- Position - Static, Relative, Absolute e Fixed (Estudar mais).
- Form - form, input, button
- Clear e a junção dele com o float
- text-transform e text-decoration
- Cascata e Herança no CSS e o valor inherit
- Vertical-align
- Seletores de Atributos
