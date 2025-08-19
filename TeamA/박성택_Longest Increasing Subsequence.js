/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 정수 배열의 숫자가 주어지면, 엄격하게 증가하는 가장 긴 수열의 길이를 반환합니다.
    // 뭔말이지?


    // 풀이 1
    // DP
    // 이전에 coin 뭐시기와 비슷하지 않을까?
    // 10까지 가능한 수
    // 9까지 가능한 수
    // 2까지 가능한 수
    // 5까지 가능한 배열 -> 2,5
    // 3까지 가능한 배열 -> 2,5 / 2,3
    // 7까지 가능한 배열 -> 2,5 /  2,3,7 / 2, 5,7 / 3,7 -> 2,3,7 -> 3
    // 101까지 가능한 배열 -> 2,5 ... -> 2,3,7, 101 .. -> 4
    // 18까지 가능한 배열 -> 2,5 ... -> 2,3,7,18 -> 4

    // 이전 값들보다 커봐야 1 크다!


    const n = nums.length;
    const dp = Array(n).fill(1); // dp[i]: nums[i]로 끝나는 LIS 길이, 초기에는 자신만 포함한 배열의 길이
    let maxLength = 1;

    for(let i=1; i<nums.length; i++) {
        for(let j=0; j<i; j++) {
            // dp[i] = Math.max(dp[j], dp)
            if(nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }

            maxLength = Math.max(maxLength, dp[i]);
        }
    }

    return maxLength;
};