//Matheus Quirino
const texto = "Hoje é um dia Triste";
const palavra = texto.substring(14, 20);
const substituição = "Feliz";
console.log(`String original: "${texto}"`);
console.log(`Palavra extraída: "${palavra}"`);
console.log(`String substituída: "${texto.replace(palavra, substituição)}"`);