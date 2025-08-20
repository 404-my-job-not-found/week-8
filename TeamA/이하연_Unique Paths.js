/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// DP
// 격자에서 (i,j)에 오는 경로 수는 위(dp[j]) + 왼쪽(dp[j-1])
// 행을 위에서 아래로, 열을 왼쪽에서 오른쪽으로 진행하며 1차원 dp 갱신

var uniquePaths = function (m, n) {
  // dp[j] = 현재 행에서 열 j까지의 경로 수
  const dp = new Array(n).fill(1); // 첫 행은 모두 1

  for (let i = 1; i < m; i++) {
    // 두 번째 행부터
    for (let j = 1; j < n; j++) {
      // 두 번째 열부터
      dp[j] = dp[j] + dp[j - 1]; // 위(dp[j]) + 왼(dp[j-1])
    }
  }
  return dp[n - 1];
};
