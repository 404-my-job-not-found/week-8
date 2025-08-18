/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let max = 0;
    let numsLength = nums.length;

    for (let i = 0; i < numsLength; i++) {
        if (i > max) {
            return false;
        }

        max = Math.max(max, i + nums[i]);

        if (max >= numsLength - 1) {
            return true;
        }
    }
    return false;
};

console.log(canJump([3, 2, 1, 0, 4]));
