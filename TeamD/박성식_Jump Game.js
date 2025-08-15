/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let lastNum = nums[nums.length - 1];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastNum) {
      lastNum = i;
    }
  }

  return lastNum === 0;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
/**
 *  index num
 *    0    2
 *    1    3
 *    2    1
 *    3    1
 *    4    4
 */
console.log(canJump([3, 2, 1, 0, 4])); // false
/**
 *   index num
 *     0   3
 *     1   2
 *     2   1
 *     3   0
 *     4   4
 */
