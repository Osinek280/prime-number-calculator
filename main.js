const input = document.getElementById('number-input')
const lessNum = document.querySelector('.less-number .answer-number');
const greaterNum = document.querySelector('.greater-number .answer-number');

input.addEventListener('keyup', function (e) {
  if(e.key === "Enter") this.blur()
})

input.addEventListener("blur", function() {
  let x = parseInt(this.value.trim())
  let y = x

  while(!isPrimeNumber(x)) {
    x++;

    if(isPrimeNumber(x)) {
      greaterNum.textContent = x;
    }
  }

  while(!isPrimeNumber(y)) {
    y--;

    if(isPrimeNumber(y)) {
      lessNum.textContent = y;
    }
  }
})

function isPrimeNumber(num) {
  if(num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}