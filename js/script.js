const priceToKm = 0.21; // Definisco la costante per il prezzo al km
const juniorDiscount = 0.2; // Definisco la costante per lo sconto in base all'età per i minorenni
const seniorDiscount = 0.4; // Definisco la costante per lo sconto in base all'età per gli over 65

let myage = prompt("Quanti anni hai?"); // Chiedo all'utente quanti anni ha
let mykm = prompt("Quanti km devi percorrere?"); // Chiedo all'utente quanti km deve percorrere

if (myage < 18) { // Se l'età è minore di 18
    let finalPrice = (mykm * (priceToKm * (1 - juniorDiscount))); // Calcolo il prezzo totale con scontistica
    console.log (`Il costo del biglietto è ${finalPrice.toFixed(2)}€`); // Stampo il prezzo finale
    alert("Hai diritto ad uno sconto del 20%"); // Informo l'utente dello sconto
    alert(`Il costo del biglietto è ${finalPrice.toFixed(2)}€`); // Stampo il prezzo finale tramite alert
}
else if (myage > 65) { // Se l'età è maggiore di 65
    let finalPrice = (mykm * (priceToKm * (1 - seniorDiscount))); // Calcolo il prezzo totale con scontistica
    console.log (`Il costo del biglietto è ${finalPrice.toFixed(2)}€`); // Stampo il prezzo finale
    alert("Hai diritto ad uno sconto del 40%"); // Informo l'utente dello sconto
    alert(`Il costo del biglietto è ${finalPrice.toFixed(2)}€`); // Stampo il prezzo finale tramite alert
}
else { // Se l'età è compresa tra 18 e 65
    let finalPrice = mykm * priceToKm; // Calcolo il prezzo totale senza scontistiche
    console.log (`Il costo del biglietto è ${finalPrice.toFixed(2)}€`); // Stampo il prezzo finale
    alert("Non hai diritto a nessun sconto"); // Informo l'utente dello sconto
    alert(`Il costo del biglietto è ${finalPrice.toFixed(2)}€`); // Stampo il prezzo finale tramite alert
}