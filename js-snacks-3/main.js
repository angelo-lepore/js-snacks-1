/* Il software deve chiedere per 10 volte all'utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let somma = 0;

for (let i = 0; i < 10; i++) {
  let numero = Number(prompt("Inserisci un numero:"));
  console.log ("Hai inserito:", numero);
  if (!isNaN (numero)) {
      somma += numero;
    } else {
      console.log("Input non valido. Si prega di inserire un numero intero.");
    }
}
console.log("La somma dei 10 numeri è: " + somma);
