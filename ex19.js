//Matheus Quirino
function reverterPalavras(texto) {
  return texto.split(' ').reverse().join(' ');
}

const texto = "JavaScript é divertido";
console.log(reverterPalavras(texto));