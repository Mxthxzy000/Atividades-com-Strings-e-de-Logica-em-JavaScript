//Matheus Quirino
function frequenciaCaracteres(texto) {
  const frequencia = {};
  
  for (const caractere of texto) {
    if (frequencia[caractere]) {
      frequencia[caractere]++;
    } else {
      frequencia[caractere] = 1;
    }
  }
  
  return frequencia;
}

const texto = "jogador de khazix é tudo lixo";
console.log(frequenciaCaracteres(texto));