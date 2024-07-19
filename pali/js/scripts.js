console.log('js collegato');

//===== Appunti ======
// ` backtick

//===== Code ======

// chiedo l'input all'utente
const string = prompt('Inserisci una parola: ');

// richiamo la funzione
const value = checkPalindrome(string);
console.log(value);

//===== Functions =====
function checkPalindrome(string) {
    //quanto è lunga la stringa?
    const myLenght = string.length;
    // scorro metà della stringa
    for (let i = 0; i < myLenght / 2; i++) {

        // posizione i    //sottraggo i dal valolre lenght per selezionare il carattere simmetrico a i
        // se il carattere in posizione i è diverso dal suo speculare, la parola non è palindroma
        if (string[i] !== string[myLenght - 1 - i]) {
            return "Non è un palindromo";
        }
    }
    // non c'è altra possibilità quindi non uso else, se i caratteri simmetrici sono uguali la parola è palindroma
    return "E' un palindromo";
}