/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';

let greeting= 'Ciao';

// Dichiara la funzione qui.
function add_greetings(greeting, name) {
    return `${greeting} ${name}`
}

// Invoca la funzione qui e stampa il risultato in console

console.log(add_greetings(greeting,name));


//Risultato atteso se si passa 'Mario': // ciao Mario