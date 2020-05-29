/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const primes = new Array(n + 1).fill(0);
  primes[0] = 1;
  primes[1] = 1;

  for (let i = 2; i <= n; i += 1) {
    for (let j = 2; j * i <= n; j += 1) {
      primes[i * j] = 1;
    }
  }
  primes.pop();

  return primes.filter((n) => n === 0).length;
};
