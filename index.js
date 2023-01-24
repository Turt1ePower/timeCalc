const timeInput = document.querySelector('.js-input-time');
const addButton = document.querySelector('button[data-add]');
const resetButton = document.querySelector('button[data-reset]');
const timeTotal = document.querySelector('.js-time-total');

let inputValue;

let sumHours = 0;
let sumMinutes = 0;

addButton.addEventListener('click', function () {
  inputValue = timeInput.value;

  let hours = Number.parseInt(inputValue.slice(0, 2));
  let minutes = Number.parseInt(inputValue.slice(3, 5));

  sumHours += hours;
  sumMinutes += minutes;

  if (sumMinutes >= 60) {
    sumHours += 1;
    sumMinutes = sumMinutes % 60;
  }

  let resultMinutes;
  let resultHours;

  if (sumHours < 10) {
    resultHours = '0' + sumHours;
  } else {
    resultHours = sumHours;
  }

  if (sumMinutes < 10) {
    resultMinutes = '0' + sumMinutes;
  } else {
    resultMinutes = sumMinutes;
  }

  timeTotal.textContent = `${resultHours}:${resultMinutes}`;

  timeInput.value = '';
  timeInput.focus();
});

resetButton.addEventListener('click', function () {
  timeTotal.textContent = '0';
  sumHours = 0;
  sumMinutes = 0;
});
