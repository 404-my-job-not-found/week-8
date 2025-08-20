/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // m행 n열 DP 테이블 생성
  const dp = Array.from({ length: m }, () => Array(n).fill(1));

  // (0,0) -> (m-1,n-1) 까지 채우기
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};
