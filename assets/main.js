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
//trasformo i millisecondi in secondi, minuti e ore
//stampo in console il risultato ogni secondo

