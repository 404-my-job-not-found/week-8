function lengthOfLIS(nums: number[]): number {

    if (nums.length === 0) return 0;

    const dp = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
          
            if (nums[j] < nums[i]) {
                // 현재까지의 최대 길이, 새로 만든 길이 중 더 큰 값
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    // 전체 dp 배열 중 최댓값이 답이다
    return Math.max(...dp);
}
// nums = [10,9,2,5,3,7,101,18] => [2,3,7,101]
