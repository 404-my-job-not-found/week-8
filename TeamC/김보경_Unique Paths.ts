function uniquePaths(m: number, n: number): number {
   
    const dp = Array(m).fill(null).map(() => Array(n).fill(0));
  // 첫 번째 행과 열은 모두 1로 초기화한다.
  for (let i = 0; i < m; i++) dp[i][0] = 1;
  for (let j = 0; j < n; j++) dp[0][j] = 1;
  
  // 각 칸은 위쪽과 왼쪽 칸의 합이다.
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }
  
  return dp[m-1][n-1];

}