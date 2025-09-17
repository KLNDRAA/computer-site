'use strict'
const countDate = new Date('Jan 1, 2026 00:00:00').getTime()

const timer = setInterval(function() {
    const now = new Date().getTime(); // Time now
    const distanceTime = countDate - now;

    const days  = Math.floor(distanceTime / (1000 * 60 * 60 * 24))
    const hours  = Math.floor((distanceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes  = Math.floor((distanceTime % (1000 * 60 * 60)) / (1000 * 60))
    const seconds  = Math.floor((distanceTime % (1000 * 60)) / 1000)

    document.querySelector('.days').innerText = days;
    document.querySelector('.hours').innerText = hours;
    document.querySelector('.minutes').innerText = minutes;
    document.querySelector('.seconds').innerText = seconds;

    if (distanceTime < 0) {
        clearInterval(timer)
        document.querySelector('.timer').innerHTML = 'Время закончилось!'
    }
}, 1000);
