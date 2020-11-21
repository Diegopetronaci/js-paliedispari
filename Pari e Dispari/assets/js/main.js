// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.





// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pariDispari = prompt("scrivi 'pari' o 'dispari'");
console.log(pariDispari);

var numeroUtente = Number(prompt("scegli un numero da 1 a 5"));
console.log(numeroUtente);

// crea una funzione

function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var generaNumero = generaNumeroRandom(1, 5);
console.log(generaNumero);
  // genera un numero random da 1 a 5 per il pc (for o while)

  // funzione per sommare i due numeri
function sommatore(num1, num2) {
  return somma = num1 + num2;
}

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function controlloNumero(number) {
  if(number % 2 === 0){
    return true;
  }
}

var somma = sommatore(numeroUtente, generaNumero)
console.log(somma);

//controlloNumero(somma)
if (controlloNumero(somma)) {
  console.log("pari");
} else {
  console.log("dispari");
}

// Dichiariamo chi ha vinto.
if (pariDispari == controlloNumero(somma)) {
  alert("YOU WIN !!!!");
} else {
  alert("YOU LOSE !!!!");
}
