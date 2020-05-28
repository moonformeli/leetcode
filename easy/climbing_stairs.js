/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const fib = [0, 1, 2, 3];

  for (let i = 4; i <= n; i += 1) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }
  return fib[n];
};
