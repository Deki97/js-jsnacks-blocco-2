// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.

const userNumber = parseInt( prompt('inserisci un numero:') );

if(userNumber % 2 === 0) {
    console.log(userNumber);
} else {
    console.log(userNumber + 1);
}