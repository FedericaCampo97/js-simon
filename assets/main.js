/*Sfruttiamo le timing functions per fare il conto alla rovescia 
per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 
di domani mattina!*/


//data odierna
const now = new Date()
console.log(now)
//data dell'evento
let eventDate = new Date('09/06/2023 09:30:00');
console.log(eventDate)
//ricavo i millisecondi da adesso all'evento
let differtsTime = eventDate - now
console.log(differtsTime)
//trasformo i millisecondi in secondi, minuti e ore
let seconds = differtsTime / 1000
let minuts = seconds / 60
let hours = minuts /  60

let hoursCountdown = Math.floor(hours);
console.log(hoursCountdown);
let minutsDif = (hours - hoursCountdown) * 60;
console.log(minutsDif);
let minutsCountdown = Math.floor(minutsDif);
console.log(minutsCountdown);
let secondsDif = (minutsDif - minutsCountdown) * 60;
console.log(secondsDif);
let secondsCountdown = Math.floor(secondsDif);
console.log(minutsCountdown)

console.log (hoursCountdown + ':' + minutsCountdown + ':' + secondsCountdown)

//Metto in funzione il countdown 
setInterval (countdown , 1000); 
function countdown() {
    
}

