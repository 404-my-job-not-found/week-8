// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 3
// Explanation: The longest increasing subsequence is [0,1,2,3], therefore the length is 4.

// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
// Explanation: The longest increasing subsequence is [7], therefore the length is 1.

// Constraints:
// 1 <= nums.length <= 2500
// -10^4 <= nums[i] <= 10^4

// 각 위치에서 끝나는 최장 증가 부분 수열을 저장 하기 위해 최소 1개의 길이를 가지는 배열을 생성했습니다.
// i는 현재 위치를 의미하고, j는 모든 이전 위치를 의미합니다.
// 예시를 보자면
// ```
// [10,9,2,5,3,7,101,18] 에서 i = 3 일 때 nums[i] = 5이고,
// i = 3 (현재 위치, nums[3] = 5)
// ├── j = 0: nums[0] = 10, 5 < 10 → 증가 수열 X
// ├── j = 1: nums[1] = 9,  5 < 9  → 증가 수열 X
// └── j = 2: nums[2] = 2,  5 > 2  → 증가 수열 O
//     → dp[3] = max(1, dp[2] + 1) = max(1, 1 + 1) = 2
// ```
// 이런 식으로 모든 위치에서 최장 증가 부분 수열을 찾아 최대 길이를 반환하는 로직입니다.
// 이제 이 최대 길이들 중 가장 큰수를 반환 하면 됩니다.

function lengthOfLIS(nums: number[]): number {
  const dp: number[] = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
