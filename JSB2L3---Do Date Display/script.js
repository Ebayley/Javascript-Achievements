function toonDatum(){
    
    let datum = new Date();
    let day = document.getElementById('day');
    let month = document.getElementById('month');
    let year = document.getElementById('year');
    var maand = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];

    day.innerHTML = "Dag: " + datum.getUTCDate();
    month.innerHTML = "Maand: " + maand[datum.getMonth()];
    year.innerHTML = "Jaar: " + datum.getUTCFullYear();

}

window.addEventListener('DOMContentLoaded', toonDatum);