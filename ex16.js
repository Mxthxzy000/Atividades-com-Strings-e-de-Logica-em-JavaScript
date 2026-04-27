//Matheus Quirino
function contarPalavras(texto) {
  return texto.trim().split(/\s+/).length;
}

const texto = "Esta é uma frase de exemplo";
console.log("o texto tem", contarPalavras(texto), "palavras");