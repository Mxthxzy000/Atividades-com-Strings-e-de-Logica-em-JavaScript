//Matheus Quirino
function extrairDados(texto) {
  const nome = texto.match(/Nome: ([^,]+)/)[1];
  const idade = parseInt(texto.match(/Idade: ([^,]+)/)[1]);
  const cidade = texto.match(/Cidade: ([^,]+)/)[1];
  
  return { nome, idade, cidade };
}

const texto = "Nome: John, Idade: 30, Cidade: São Paulo";
console.log(extrairDados(texto));