/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


let a_names = [];
// Dichiara la funzione qui.
let chara = 'A'
function find_initial_a_names(names) {

    for(let i = 0; i< names.length; i++){

        if(names[i].charAt(0) === chara){
            a_names.push(names[i]);
        }
    } return a_names
}

// Invoca la funzione qui e stampa il risultato in console

console.log(find_initial_a_names(names));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]