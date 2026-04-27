//Matheus Quirino
function substituirVogais(texto) {
  return texto.replace(/[aeiouAEIOU]/g, '*');
}

const texto = "JavaScript";
console.log(substituirVogais(texto));