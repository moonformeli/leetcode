/**
 * https://leetcode.com/problems/move-zeroes/
 * https://leetcode.com/submissions/detail/335150928/
 */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1));
      i -= 1;
    }
  }
  return nums;
};
