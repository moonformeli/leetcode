/**
 * https://leetcode.com/problems/valid-anagram/
 * https://leetcode.com/submissions/detail/343481242/
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const arrS = new Array(26).fill(0);
  const arrT = new Array(26).fill(0);

  for (let i = 0; i < s.length; i += 1) {
    arrS[s[i].charCodeAt() - 97] += 1;
    arrT[t[i].charCodeAt() - 97] += 1;
  }

  for (let i = 0; i < arrS.length; i += 1) {
    if (arrS[i] !== arrT[i]) {
      return false;
    }
  }

  return true;
};
