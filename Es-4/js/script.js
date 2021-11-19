/*
 * Crea un array vuoto e chiedi all’utente un numero
 * da inserire nell’array. Continua a chiedere i numeri
 * all’utente e a inserirli nell’array fino a quando
 * a somma degli elementi è minore di 50.
 */


let numbers = [];

let numberSum = 0;

while (numberSum < 50) {
    let userNumber = parseInt( prompt('Inserisci un numero') );

    numberSum+=userNumber;
    numbers.push(userNumber);
    console.log(numbers);
}

console.log(`Il programma è terminato perche ${numberSum} è maggiore di 50`);