/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  //dp 배열에 담기는건 1...amout 마다 가능한 최소한의 동전 갯수
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let a = 1; a <= amount; a++) {
    for (let coin of coins) {
      if (a - coin >= 0) {
        dp[a] = Math.min(dp[a], dp[a - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
