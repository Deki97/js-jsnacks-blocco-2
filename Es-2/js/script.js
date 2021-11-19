/*
 * Generatore di “nomi cognomi” casuali: prendendo
 * una lista di nomi e una lista di cognomi,
 * Gatsby vuole generare una falsa lista di invitati.
 */

const names = ['Alberto', 'Michele', 'Maurizio', 'Federico', 'Andrea', 'Matteo'];
const surnames = ['Rossi', 'Bianchi', 'Verdi', 'Lain', 'De Luigi', 'Scapin'];

// console.log(names);
// console.log(surnames);

for(let i = 0; i < names.length; i++) {
    // console.log(Math.floor(Math.random()*names.length));
    let thisName = names[Math.floor(Math.random() * names.length)];
    let thisSurname = surnames[Math.floor(Math.random() * surnames.length)];

    console.log(thisName + " " + thisSurname);
}