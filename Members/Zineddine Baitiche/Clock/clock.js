let seconds = document.querySelector(".sconds h1");
let munutes = document.querySelector(".minutes h1");
let hours = document.querySelector(".hours h1");

setInterval(function clock() {
    let date = new Date();
    hours.innerHTML= date.getHours().toString().padStart(2, '0');
    munutes.innerText= date.getMinutes().toString().padStart(2, '0');
    seconds.innerHTML=date.getSeconds().toString().padStart(2, '0');
    },1000)