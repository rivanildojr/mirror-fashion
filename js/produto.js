const inputTamanho = document.querySelector("[name=tamanho]");
const outputTamanho = document.querySelector("[name=valortamanho]");

function mostrarTamanho() {
  outputTamanho.value = inputTamanho.value;
  outputTamanho.textContent = event.target.value;
}

inputTamanho.oninput = mostrarTamanho;
inputTamanho.onchange = mostrarTamanho;
