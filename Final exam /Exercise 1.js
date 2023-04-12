const $btn = document.getElementById("btn");
const $numA = document.getElementById("numA");
const $numB = document.getElementById("numB");

$btn.onclick = function () {
  let numA = document.getElementById("numA").value;
  let numB = document.getElementById("numB").value;
  if (numA >= numB) alert("Number A must be lower than Number B");
  else document.write(primeSum(numA, numB));
};

function checkPrime(n) {
  if (n == 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function primeSum(x, y) {
  let sum = 0;
  for (let i = y; i >= x; i--) {
    // Check for prime
    let isPrime = checkPrime(i);
    if (isPrime) {
      // Sum the prime number
      sum = sum + i;
    }
  }
  return sum;
}
