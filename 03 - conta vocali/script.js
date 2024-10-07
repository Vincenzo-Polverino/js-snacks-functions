/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

const vocals = ['a', 'e', 'i', 'o', 'u']

let word_vocals = []


// Dichiara la funzione qui.

function find_vocals(word) {
    for (let i = 0; i < word.length; i++) {
        if (vocals.includes(word[i]))
            word_vocals.push(word[i]);

    }
    return word_vocals
}


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)