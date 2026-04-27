//Matheus Quirino
function primeiraLetraMaiuscula(texto) {
  return texto.split(' ')
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(' ');
}

const texto = "olá mundo";
console.log(primeiraLetraMaiuscula(texto));