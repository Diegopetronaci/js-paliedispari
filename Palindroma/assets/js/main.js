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

//esercizio preso da internet e
// crea un imput
// const string = prompt('Enter a string: ');
//   var parolaUtente = prompt('Enter a string: ')
//
// // evoca la funzione
// // const value = cercaPalindrome(string);
//   var valuta = cercaPalindrome(parolaUtente);
//
// // console.log(palindromo("loging"));
// // console.log(value);
//   console.log(valuta);
//
// function cercaPalindrome(parolaUtente) {
//
//     // cerca la lunghezza di una stringa
//     // const len = string.length;
//     var lunghezza = parolaUtente.length;
//
//     // loop per trovare metà di una stringa
// //     for (let i = 0; i < len / 2; i++) {
// //
// //         // cerca la prima e l ultima lettera
// //         if (string[i] !== string[len - 1 - i]) {
// //             return 'It is not a palindrome';
// //         }
// //     }
// //     return 'It is a palindrome';
// // }
//       for (let i = 0; i < lunghezza / 2; i++) {
//
//           // cerca la prima e l ultima lettera
//           if (parolaUtente[i] !== parolaUtente[lunghezza - 1 - i]) {
//               return 'It is not a palindrome';
//           }
//         }
//         return 'It is a palindrome';
//         }
//
//

//esercizio creato da 0 ma con base di internet:


// crea un imput
var parolaUtente = prompt("inserisci una parola palindroma");

// evoca la funzione
var cerca = cercaPalindrome(parolaUtente);
console.log(cerca);

// crea la funzione
function cercaPalindrome(parolaUtente) {

    // cerca la lunghezza di una stringa
    var lunghezzaStringa = parolaUtente.length

    // loop per trovare metà di una stringa
    for (var i = 0; i < lunghezzaStringa/2 ; i++) {

    // cerca la prima e l ultima lettera
      if (parolaUtente[i] !== parolaUtente[lunghezzaStringa - 1 - i]) {
        return "la parola non è palindroma";
      }
    }
    return "la parola è palindroma";
}
