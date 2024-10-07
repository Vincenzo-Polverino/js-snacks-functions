/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

let initials= []

// Dichiara la funzione qui.
function find_initials(names){

    for(let i= 0; i< names.length; i++){
        initials.push(names[i][0])
    }
    return initials
}

// Invoca la funzione qui e stampa il risultato in console

console.log(find_initials(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]