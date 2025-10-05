'use strict'
const countDate = new Date('Jan 1, 2026 00:00:00').getTime()

// Для читаемости
const MILLISECONDS_PER_SECONDS = 1000;
const SECONDS_PER_MINUTES = 60;
const MINUTES_PER_HOURS = 60;
const HOURS_PER_DAYS = 24;

// Для вычисления
const MS_PER_MINUTE = MILLISECONDS_PER_SECONDS * SECONDS_PER_MINUTES;
const MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOURS;
const MS_PER_DAY = MS_PER_HOUR * HOURS_PER_DAYS;

const timer = setInterval(function() {
    const now = new Date().getTime(); // Time now
    const distanceTime = countDate - now;

    const days  = Math.floor(distanceTime / MS_PER_DAY)
    const hours  = Math.floor((distanceTime % MS_PER_DAY) / MS_PER_HOUR)
    const minutes  = Math.floor((distanceTime % MS_PER_HOUR) / MS_PER_MINUTE)
    const seconds  = Math.floor((distanceTime % MS_PER_MINUTE) / MILLISECONDS_PER_SECONDS)

    const daysEl = document.querySelector('.days').innerText = days;
    const hoursEl = document.querySelector('.hours').innerText = hours;
    const minutesEl = document.querySelector('.minutes').innerText = minutes;
    const secondsEl = document.querySelector('.seconds').innerText = seconds;

    if (daysEl && hoursEl && minuetsEl && secondsEl) {
        daysEl.innerText = days;
        hoursEl.innerText = hours;
        minutesEl.innerText = minutes;
        secondsEl.innerText = seconds;
    }

    if (distanceTime < 0) {
        clearInterval(timer)
        document.querySelector('.timer').innerHTML = 'Время закончилось!'
    }
}, 1000);

