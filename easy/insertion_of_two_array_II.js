/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = {};
  const res = [];

  nums1.forEach((n) => (map[n] = ~~map[n] + 1));
  nums2.forEach((n) => {
    if (map[n] > 0) {
      res.push(n);
      map[n] -= 1;
    }
  });
  return res;
};
