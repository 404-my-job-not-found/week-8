/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// DP
// dp[x] = 금액 x를 만드는 데 필요한 최소 동전 수 (불가능하면 Infinity)
// 점화식: dp[x] = min( dp[x], dp[x - c] + 1 ) for c in coins if x - c >= 0
var coinChange = function (coins, amount) {
  const INF = Number.POSITIVE_INFINITY;
  const dp = new Array(amount + 1).fill(INF);
  dp[0] = 0;

  for (let x = 1; x <= amount; x++) {
    for (const c of coins) {
      if (x - c >= 0 && dp[x - c] !== INF) {
        dp[x] = Math.min(dp[x], dp[x - c] + 1);
      }
    }
  }
  return dp[amount] === INF ? -1 : dp[amount];
};
