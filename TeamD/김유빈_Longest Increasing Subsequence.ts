function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;

  const dp = new Array(nums.length).fill(1);

  // i는 현재 인덱스, j는 이전 인덱스
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 현재 숫자가 이전 숫자보다 크면
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}
