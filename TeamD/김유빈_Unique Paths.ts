function uniquePaths(m: number, n: number): number {
  if (m === 1 || n === 1) return 1;

  const dp = Array.from({ length: m }, () => new Array(n).fill(0));

  // i를 0부터 m-1까지, j를 0부터 n-1까지 순회
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  // 이중 for문을 사용하여 dp 배열 채우기
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // 마지막 위치의 값 반환
  return dp[m - 1][n - 1];
}
