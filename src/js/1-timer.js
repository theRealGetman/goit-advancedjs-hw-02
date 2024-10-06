import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateTimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
const days = document.querySelectorAll('[data-days]');
const hours = document.querySelectorAll('[data-hours]');
const minutes = document.querySelectorAll('[data-minutes]');
const seconds = document.querySelectorAll('[data-seconds]');

var toast = document.querySelector('.iziToast');

// Select date
let selectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = selectedDates[0];
    if (date < new Date()) {
      iziToast.error({
        message: 'Please choose a date in the future',
      });
      startBtn.disabled = true;
    } else {
      selectedDate = date;
      startBtn.disabled = false;
    }
    console.log(selectedDate);
  },
};

flatpickr(dateTimePicker, options);

// Start timer
startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  dateTimePicker.disabled = true;

  const timeId = setInterval(() => {
    const deltaTime = selectedDate - new Date();
    const time = convertMs(deltaTime);
    days[0].textContent = addLeadingZero(time.days);
    hours[0].textContent = addLeadingZero(time.hours);
    minutes[0].textContent = addLeadingZero(time.minutes);
    seconds[0].textContent = addLeadingZero(time.seconds);
    if (deltaTime <= 1000) {
      clearInterval(timeId);
      dateTimePicker.disabled = false;
    }
  }, 1000);
});

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

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
