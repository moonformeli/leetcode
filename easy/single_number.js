/**
 * https://leetcode.com/problems/single-number/
 * https://leetcode.com/submissions/detail/334654158/
 */

var singleNumber = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};
