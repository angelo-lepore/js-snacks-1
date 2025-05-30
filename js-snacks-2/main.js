/* L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const prima_parola = prompt("Inserire la prima parola:");

const seconda_parola = prompt("Inserire la seconda parola:");

if (prima_parola.length > seconda_parola.length) {
    console.log("La seconda parola è più corta della prima:");
    console.log(seconda_parola, prima_parola);
} else if (prima_parola.length < seconda_parola.length) {
    console.log("La prima parola è più corta della seconda:");
    console.log(prima_parola, seconda_parola);
} else {
    console.log("Le parole hanno la stessa lunghezza");
}