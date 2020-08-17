const init = 2;
const finish = 120;
const primeNumbers = [];

function isPrime(n) {
  if (n < 2) return false;

  var sqrtNumber = Math.floor(Math.sqrt(n));

  for (var i = 2; i <= sqrtNumber; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return n;
}

function checkPrimeInterval(init, finish) {
  for (i = init; i <= finish; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  console.log(primeNumbers);
}

checkPrimeInterval(init, finish);
