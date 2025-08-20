function coinChange(coins: number[], amount: number): number {
  const INF = Number.MAX_SAFE_INTEGER;
  const dp = new Array(amount + 1).fill(INF);

  dp[0] = 0;

  for (let a = 1; a <= amount; a++) {
    for (const c of coins) {
      if (a - c >= 0 && dp[a - c] !== INF) {
        dp[a] = Math.min(dp[a], dp[a - c] + 1);
      }
    }
  }

  return dp[amount] === INF ? -1 : dp[amount];
}
