const priceToKm = 0.21; // Definisco la costante per il prezzo al km
const juniorDiscount = 0.2; // Definisco la costante per lo sconto in base all'età per i minorenni
const seniorDiscount = 0.4; // Definisco la costante per lo sconto in base all'età per gli over 65

let myage = prompt("Quanti anni hai?"); // Chiedo all'utente quanti anni ha
let mykm = prompt("Quanti km devi percorrere?"); // Chiedo all'utente quanti km deve percorrere
let finalPrice; // Dichiaro la variabile per il prezzo finale

if (isNaN(myage) || isNaN(mykm)) { // Controllo che l'input sia un numero
    alert("Input non valido"); // Informo l'utente che l'input non è valido
} 
else {
    let price = mykm * priceToKm; // Calcolo il prezzo totale senza scontistiche
    if (myage < 18){ // Controllo se l'utente è minorenne
        finalPrice = price * (1 - juniorDiscount); // Calcolo il prezzo totale con scontistica
        alert("Hai diritto ad uno sconto del 20%"); // Informo l'utente dello sconto
    } else if (myage > 65){ // Controllo se l'utente è over 65
        finalPrice = price * (1 - seniorDiscount); // Calcolo il prezzo totale con scontistica
        alert("Hai diritto ad uno sconto del 40%"); // Informo l'utente dello sconto
    } else { // Controllo se l'età è compresa tra 18 e 65
        finalPrice = price; // Assegno il prezzo totale senza scontistiche
        alert("Non hai diritto a nessun sconto"); // Informo l'utente dello sconto
    }
}

console.log (`Il costo del biglietto è ${finalPrice.toFixed(2)}€`); // Stampo il prezzo finale
alert(`Il costo del biglietto è ${finalPrice.toFixed(2)}€`); // Stampo il prezzo finale tramite alert