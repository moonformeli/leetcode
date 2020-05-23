/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * https://leetcode.com/submissions/detail/343297810/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function makeTree(start, end, nums) {
  if (start > end) {
    return null;
  }

  const node = {};
  const mid = Math.ceil((end + start) / 2);

  node.val = nums[mid];

  node.left = makeTree(start, mid - 1, nums);
  node.right = makeTree(mid + 1, end, nums);
  return node;
}

var sortedArrayToBST = function (nums) {
  return makeTree(0, nums.length - 1, nums);
};
