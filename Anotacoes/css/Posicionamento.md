# Propriedades de posicionamento dos elementos com CSS

## Display

### Inline

    - Permite que os elementos fiquem um ao lado do outro;
    - Os elementos não aceitam width e height, o tamanho do elemento é definido pelo contéudo que ele contém;
    - Ganha o comportamento de uma palavra

### Block

    - Permite que os elementos fiquem um a baixo do outro (Ocupa a linha inteira);
    - Os elementos aceitam width e height;

### Inline Block

    - Permite que os elementos fiquem um ao lado do outro;
    - Os elementos não aceitam width e height, o tamanho do elemento é definido pelo contéudo que ele contém;
    - Os elementos aceitam width e height;

## Position

- Junto com a propriedade position, podemos utilizar as seguintes propriedades: top, right, bottom e left.

### Static

    - Valor padrão;
    - Não atende as propriedades: top, right, bottom e left.

### Relative

    - Atende as propriedades: top, right, bottom e left;
    - A posição do elemento é relativa ao pai que contenha um position diferente do padrão, caso não tenha nenhum, será o browser;
    - Cria um novo contexto, mas não libera o espaço no contexto do browser;
    - O tamanho do seu elemento pai leva em conta o tamanho do elemento relative, porém sem levar em conta seu posicionamento.

### Absolute

    - Cria um novo contexto para o elemento, e o mesmo fica a frente do contexto do browser e libera seu espaço;
    - A posição do elemento é relativa ao pai que contenha um position diferente do padrão, caso não tenha nenhum, será o browser;
    - Atende as propriedades: top, right, bottom e left;
    - Seu tamanho não conta para calcular o tamanho do elemento pai

### Fixed

    - O elemento fica fixo no local definido;
    - Cria um novo contexto para o elemento, e o mesmo fica a frente do contexto do browser e libera seu espaço;
    - A posição do elemento é relativa a porção visível do browser;
    - Atende as propriedades: top, right, bottom e left;
    - O que define o tamanho do elemento é p contéudo, caso não possui widht e height disponível;
    - Seu tamanho não conta para calcular o tamanho do elemento pai

### Sticky

- É possicionado baseado no scroll;
- Atende as propriedades: top, right, bottom e left;
- Meio termo entre o relative e o fixed.

## Float

    - Cria um novo contexto para o elemento, e o mesmo fica a frente do contexto do browser;
    - Valores: left e right;

## Overflow Hidden

    - A propriedade overflow com o valor hidden, tem o poder de esconder qualquer elemento filho que ultrapasse o tamanho do seu pai, mas quando o pai não tem largura ou altura definida, ele se preocupa em levar em consideração a altura e largura dos filhos, ainda que estes estejam no novo contexto.

## Clear

    - A propriedade é utilizada para limpar o contexto, caso possua algum elemento flutuando;
    - Valores: left, right e both.

## Materias de Apoio

- [CollabCode](https://medium.com/collabcode/pare-de-chutar-e-aprenda-as-propriedades-css-de-posicionamento-603154655121)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [CSS Tricks](https://css-tricks.com/almanac/properties/p/position/)
