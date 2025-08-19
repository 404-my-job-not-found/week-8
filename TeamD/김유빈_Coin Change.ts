function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0;

  if (coins.length === 0) return -1;

  const dp = new Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  // i는 현재 금액, coin은 동전의 종류
  for (let i = 1; i <= amount; i++) {
    // 각 동전으로 현재 금액을 만들 수 있는지 확인
    for (const coin of coins) {
      // 현재 금액에서 동전의 값을 뺀 금액이 0 이상인 경우
      if (i - coin >= 0) {
        // 현재 금액을 만들기 위한 최소 동전 개수 업데이트
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  // dp[amount]가 Infinity인 경우, 해당 금액을 만들 수 없는 경우
  return dp[amount] === Infinity ? -1 : dp[amount];
}
