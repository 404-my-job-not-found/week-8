/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  let best = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > best) return false;
    best = Math.max(best, i + nums[i]);
  }
  return true;
};
