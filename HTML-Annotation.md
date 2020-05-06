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
