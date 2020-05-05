/**
 * https://leetcode.com/problems/reverse-string/
 * https://leetcode.com/submissions/detail/334241452/
 */
var reverseString = function (s) {
  for (let i = 0, temp; i < s.length / 2; i += 1) {
    temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
  return s;
};
