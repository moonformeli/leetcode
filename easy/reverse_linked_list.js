/**
 * https://leetcode.com/problems/reverse-linked-list/
 * https://leetcode.com/submissions/detail/334837383/
 */

function search(values, node) {
  if (!node) {
    return;
  }

  values.push(node.val);
  search(values, node.next);
  node.val = values.shift();
  return;
}

var reverseList = function (head) {
  search([], head);
  return head;
};
