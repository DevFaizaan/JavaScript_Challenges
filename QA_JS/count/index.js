const count = document.querySelector('#numberCount');
let numDisplay = document.getElementById('numberCount');
let calculator = 0;

const min1 = document.getElementById('min1');
min1.addEventListener('click', function () {
  calculator -= 1;
  numDisplay.innerHTML = calculator;
});

const min5 = document.getElementById('min5');
min5.addEventListener('click', function () {
  calculator -= 5;
  numDisplay.innerHTML = calculator;
});

const reset = document.getElementById('reset');
reset.addEventListener('click', function () {
  calculator = 0;
  numDisplay.innerHTML = calculator;
});

const add1 = document.getElementById('add1');
add1.addEventListener('click', function () {
  calculator += 1;
  numDisplay.innerHTML = calculator;
});

const add5 = document.getElementById('add5');
add5.addEventListener('click', function () {
  calculator += 5;
  numDisplay.innerHTML = calculator;
});
