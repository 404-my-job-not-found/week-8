/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length === 0) return 0;

    // dp[i]는 i번째 인덱스에서 끝나는 최장 증가 부분 수열의 길이
    const dp = new Array(nums.length).fill(1);

    // 각 위치에서 자신보다 앞에 있는 모든 원소들을 확인
    for (let i = 1; i < nums.length; i++) {
        // i보다 앞에 있는 모든 원소들 검사
        for (let j = 0; j < i; j++) {
            // 현재 숫자(nums[i])가 이전 숫자(nums[j])보다 크면
            if (nums[i] > nums[j]) {
                // dp[i]를 (dp[j] + 1)과 비교하여 더 큰 값으로 갱신
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // dp 배열에서 가장 큰 값이 최장 증가 부분 수열의 길이
    return Math.max(...dp);
};
