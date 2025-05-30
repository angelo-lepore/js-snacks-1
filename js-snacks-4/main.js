/* Crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero, se è dispary inseriscilo nell'array. */

const my_array = [];

for (let i = 0; i < 6; i++) {
  let numero = Number(prompt("Inserisci un numero:"));
  if (numero % 2 !== 0) {
    my_array.push(numero);
  }
}

console.log(my_array);