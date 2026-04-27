//Matheus Quirino
function extrairDominios(texto) {
  const emails = texto.split(' ');
  const dominios = emails.map(email => {
    const partes = email.split('@');
    return partes[1];
  });
  
  return dominios;
}

const texto = "matheus1@gmail.com matheus2@yahoo.com";
console.log(extrairDominios(texto));