var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

setInterval(()=> {
    var currentTime = new Date();

    hour.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);