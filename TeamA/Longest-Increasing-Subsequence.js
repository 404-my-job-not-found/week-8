var lengthOfLIS = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;

  // dp[i] = nums[i]를 끝으로 하는 LIS 길이
  const dp = Array(n).fill(1);
  // 최소 길이는 자기 자신 하나니까 초기값 = 1

  let maxLen = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // nums[j] < nums[i] 이면 nums[i] 뒤에 붙일 수 있음
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }

  return maxLen;
};
