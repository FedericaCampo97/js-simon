/*Sfruttiamo le timing functions per fare il conto alla rovescia 
per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 
di domani mattina!*/

let interval;

//Imposto la data di scadenza
const correctionDay = new Date('06/09/2023');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;



correctionDay = new Date(correctionDay.getTime() -24 * hour * minute * second);



