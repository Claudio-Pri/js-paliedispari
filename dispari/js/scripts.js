//===== Appunti ======
// ` backtick

//===== Code ======
// l'utente sceglie pari o dispari
let userChoice = prompt('Pari o dispari?');
// console.log('user choice', userChoice);
// vorrei aggiungere solo 2 scelte magari con button
// per ora controllo se la stringa corrisponde a pari o dispari
if (userChoice == 'pari') {
    userChoice = 'pari';
    console.log('hai scelto pari')
}
else if (userChoice == 'dispari') {
    userChoice = 'dispari';
    console.log('hai scelto dispari');
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

//===== Functions =====
//funzione per generare il numero random
function randomNumber() {
    return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
};

