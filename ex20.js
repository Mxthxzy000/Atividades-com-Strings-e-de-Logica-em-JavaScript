//Matheus Quirino
function palavraMaisLonga(texto) {
  const palavras = texto.split(' ');
  let maiorPalavra = '';
  
  for (const palavra of palavras) {
    if (palavra.length > maiorPalavra.length) {
      maiorPalavra = palavra;
    }
  }
  
  return maiorPalavra;
}

const texto = "O JavaScript é uma linguagem de programação incrível";
console.log(palavraMaisLonga(texto));