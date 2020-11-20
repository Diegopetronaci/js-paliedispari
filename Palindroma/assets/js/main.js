// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// var word = []
//
// function istPalindrom (char, word) {
//     var i1 = 0;
//     console.log(i1);
//     var i2 = word.length - 1;
//     console.log(i2);
//     while (i2 > i1) {
//         if (word[i1] != word[i2]) {
//             return false;
//         }
//         ++i1;
//         --i2;
//     }
//     return true;
// }


// Chiedere all’utente di inserire una parola
// var parolaUtente = prompt("scrivi una parola palindroma");
// console.log(parolaUtente);
//
// console.log(palindromo("loging"));
//
// // Creare una funzione per capire se la parola inserita è palindroma
//
// function palindromo(parolaPalindroma){
//
//   // console.log(parolaPalindroma);
//   // //ritrno il contrario di parola
//   // return parolaPalindroma == parolaPalindroma.split('').reverse().join('');
//
// }

function cercaPalindrome(str) {

    // cerca la lunghezza di una stringa
    const len = string.length;

    // loop per trovare metà di una stringa
    for (let i = 0; i < len / 2; i++) {

        // cerca la prima e l ultima lettera
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// crea un imput
const string = prompt('Enter a string: ');

// chiama la funzione
const value = cercaPalindrome(string);

console.log(value);
