/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * https://leetcode.com/submissions/detail/334636800/
 */

function search(depth, node) {
  if (!node) {
    return depth - 1;
  }

  return Math.max(search(depth + 1, node.left), search(depth + 1, node.right));
}

var maxDepth = function (root) {
  return search(1, root);
};
