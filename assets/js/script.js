
let countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 30);
countDownDate.setHours(countDownDate.getHours() + 4);
countDownDate.setMinutes(countDownDate.getMinutes() + 29);
countDownDate.setSeconds(countDownDate.getSeconds() + 21);

let countdownFunction = setInterval(function() {

    let now = new Date().getTime();

  
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
    document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
    document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-timer").innerHTML = "EXPIRED";
    }
}, 1000);
