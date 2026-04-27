const lista = "Banana, Maçã, Laranja, Uva, Pera";
const frutas = lista.split(", ").map(fruta => fruta.trim());
console.log("lista inicial: ", lista);
console.log("array de frutas: ", frutas);
//Matheus Quirino