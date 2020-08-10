const init = 2;
const finish = 120;
const primeNumbers = [];

for (i = 2; i <= finish; i++) {
  if (isPrime(i)) {
    primeNumbers.push(i);
  }
}

console.log(primeNumbers);

function isPrime(n) {
  if (n < 2) return false;

  var q = Math.floor(Math.sqrt(n));

  for (var i = 2; i <= q; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return n;
}
