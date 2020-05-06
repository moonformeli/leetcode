/**
 * https://leetcode.com/problems/delete-node-in-a-linked-list/
 * https://leetcode.com/submissions/detail/335149693/
 */

function shift(node) {
  if (!node) {
    return;
  }

  node.val = node.next.val;

  if (!node.next.next) {
    node.next = null;
  }

  shift(node.next);
}

var deleteNode = function (node) {
  shift(node);
};
