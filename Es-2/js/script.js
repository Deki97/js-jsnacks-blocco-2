/*
 * Generatore di “nomi cognomi” casuali: prendendo
 * una lista di nomi e una lista di cognomi,
 * Gatsby vuole generare una falsa lista di invitati.
 */

const names = ['Dejan', 'Alberto', 'Michele', 'Maurizio'];
const surnames = ['Nikolic', 'Rossi', 'Bianchi', 'Verdi'];

console.log(names);
console.log(surnames);

for(let i = 0; i < names.length; i++) {
    let thisName = names[Math.floor(Math.random()*names.length)];
    let thisSurname = surnames[Math.floor(Math.random()*surnames.length)];

    console.log(thisName + " " + thisSurname);
}