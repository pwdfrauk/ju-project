
document.addEventListener("DOMContentLoaded", function() {

/* counter Down js  */
    const finaleDate = new Date("April 16, 2021 00:00:00").getTime();

    const timer = () =>{
    const now = new Date().getTime();
    let diff = finaleDate - now;
    if(diff < 0){
        return null;
    }

    let days = Math.floor(diff / (1000*60*60*24));
    let hours = Math.floor(diff % (1000*60*60*24) / (1000*60*60));
    let minutes = Math.floor(diff % (1000*60*60)/ (1000*60));
    let seconds = Math.floor(diff % (1000*60) / 1000);

    days <= 9 ? days = `0${days}` : days;
    hours <= 9 ? hours = `0${hours}` : hours;
    minutes <= 9 ? minutes = `0${minutes}` : minutes;
    seconds <= 9 ? seconds = `0${seconds}` : seconds;   

    document.querySelector('#days').textContent = days + 'D';
    document.querySelector('#hours').textContent = hours + 'H';
    document.querySelector('#minutes').textContent = minutes + 'M';
    document.querySelector('#seconds').textContent = seconds + 'S';
}
timer();
setInterval(timer,1000);

});
