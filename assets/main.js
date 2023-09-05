/*Sfruttiamo le timing functions per fare il conto alla rovescia 
per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 
di domani mattina!*/



//data dell'evento
let eventDate = new Date('09/06/2023 09:30:00');
console.log(eventDate)

//Metto in funzione il countdown 
setInterval (countdown , 1000); 
function countdown() {
    //data odierna
    const now = new Date()
    
    //ricavo i millisecondi da adesso all'evento
    let differtsTime = eventDate - now
    
    //trasformo i millisecondi in secondi, minuti e ore
    let seconds = differtsTime / 1000
    let minuts = seconds / 60
    let hours = minuts /  60

    let hoursCountdown = Math.floor(hours);
    
    let minutsDif = (hours - hoursCountdown) * 60;

    
    let minutsCountdown = Math.floor(minutsDif);
    
    let secondsDif = (minutsDif - minutsCountdown) * 60;
    
    let secondsCountdown = Math.floor(secondsDif);
    
    console.log (
        
        String("0" + hoursCountdown).slice(-2) + ':' + 
        String("0" + minutsCountdown).slice(-2) + ':' + 
        String("0" + secondsCountdown).slice(-2))
}

