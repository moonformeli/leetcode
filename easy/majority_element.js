/**
 * https://leetcode.com/problems/majority-element/
 * https://leetcode.com/submissions/detail/335158428/
 */
var majorityElement = function (nums) {
  const map = new Map();
  let majority = [0, 0];
  for (let i = 0; i < nums.length; i += 1) {
    if (map.get(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }

    if (majority[1] < map.get(nums[i])) {
      majority[0] = nums[i];
      majority[1] = map.get(nums[i]);
    }
  }

  return majority[0];
};
