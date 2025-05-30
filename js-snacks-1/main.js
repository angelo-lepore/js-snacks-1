/* L'utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const primo_numero = Number(prompt("Inserire il primo numero:"));

const secondo_numero = Number(prompt("Inserire il secondo numero:"));

if (primo_numero > secondo_numero) {
    console.log("Il numero maggiore è:", primo_numero);
} else if (secondo_numero > primo_numero) {
    console.log("Il numero maggiore è:", secondo_numero);
} else {
    console.log("I due numeri sono uguali:", primo_numero);
}