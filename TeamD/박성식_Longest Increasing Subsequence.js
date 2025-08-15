/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = Array.from({ length: nums.length }).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // [2,3,7,101], 결과: 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 결과: 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 결과: 1
