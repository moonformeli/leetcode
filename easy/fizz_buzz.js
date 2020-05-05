/**
 * https://leetcode.com/problems/fizz-buzz/
 * https://leetcode.com/submissions/detail/334824069/
 */

var fizzBuzz = function (n) {
  const res = ['1'];
  for (let i = 2; i <= n; i += 1) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        res.push('FizzBuzz');
      } else {
        res.push('Fizz');
      }
    } else if (i % 5 === 0) {
      res.push('Buzz');
    } else {
      res.push(`${i}`);
    }
  }
  return res;
};
