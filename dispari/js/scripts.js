//===== Appunti ======
// ` backtick

//===== Code ======
// l'utente sceglie pari o dispari
let userChoice = prompt('Pari o dispari?');
let compChoiche;
// console.log('user choice', userChoice);
// vorrei aggiungere solo 2 scelte magari con button
// per ora controllo se la stringa corrisponde a pari o dispari
if (userChoice == 'pari') {
    userChoice = 'pari';
    compChoiche = 'dispari';
    console.log('hai scelto pari');
    console.log('PC: ', compChoiche);
}
else if (userChoice == 'dispari') {
    userChoice = 'dispari';
    compChoiche = 'pari'
    console.log('hai scelto dispari');
    console.log('PC: ', compChoiche);
}
else {
    alert('scl');
};

// l'utente inserisce un numero da 1 a 5
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5: '));
if (isNaN(userNumber)) {
    console.log('mannaggia a te');
}
else {
    if (userNumber > 5 || userNumber < 1) {
        console.log('mannaggia a te');
    }
    else {
        console.log('il tuo numero è: ', userNumber);
    }
};
// console.log(userNumber);
//Genero un numero per il computer
let compNumber = 0;
compNumber = randomNumber();
console.log('compNumber', compNumber);
//sommo i due numeri
let finalSum = sum(userNumber, compNumber);
console.log('totale:', finalSum);
let finalScore;
//stabilisco se il totale è pari o dispari
if (isEven(finalSum)) {
    console.log('Il risultato è Pari!')
    finalScore = 'pari';
}
else {
    console.log('Il risultato è Dispari!')
    finalScore = 'dispari';
}
//dichiaro il vicitore
if (userChoice == 'pari' && finalScore == 'pari') {
    alert('Hai vinto!');
}
else if (userChoice == 'dispari' && finalScore == 'dispari') {
    alert('Hai vinto!');
}
else {
    alert('Hai perso :( ');
}
//===== Functions =====
//funzione per generare il numero random
function randomNumber() {
    return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
};
//funzione somma
function sum(x, y) {
    const res = x + y;
    return res;
}
//funzione verifi capari o dispari
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }

}