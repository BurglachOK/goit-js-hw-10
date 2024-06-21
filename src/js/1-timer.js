import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/**
 * Converts number of milliseconds to unit of time
 * @param {Number} ms
 * @returns
 */

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

// Parameters
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        if (selectedDate <= new Date()) {
            iziToast.error({
                title: 'Error',
                message: 'Please choose a date in the future',
            });
            buttonEl.disabled = true;
        } else {
            userSelectedDate = selectedDate;
            buttonEl.disabled = false;
        }
    },
};

const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('[data-start]');
buttonEl.disabled = true;
let userSelectedDate;

flatpickr(inputEl, options);

/**============================================================= */

inputEl.addEventListener('input', event => {
    userSelectedDate = event.target.value;
});

buttonEl.addEventListener('click', () => {
    const days = document.querySelector('[data-days]');
    const hours = document.querySelector('[data-hours]');
    const minutes = document.querySelector('[data-minutes]');
    const seconds = document.querySelector('[data-seconds]');

    buttonEl.disabled = true;
    inputEl.disabled = true;

    setTimeout(() => {
        clearInterval(intervalId);
        inputEl.disabled = false;
    }, userSelectedDate - Date.now());

    const intervalId = setInterval(() => {
        const currentTime = Date.now();
        const diff = userSelectedDate - currentTime;
        const objTime = convertMs(diff);

        days.textContent = objTime.days.toString().padStart(2, '0');
        hours.textContent = objTime.hours.toString().padStart(2, '0');
        minutes.textContent = objTime.minutes.toString().padStart(2, '0');
        seconds.textContent = objTime.seconds.toString().padStart(2, '0');
    }, 1000);
});