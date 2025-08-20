var coinChange = function (coins, amount, memo = {}) {
  if (amount < 0) return -1;
  if (amount === 0) return 0;

  if (memo[amount]) return memo[amount];

  let minCoins = Infinity;
  for (const coin of coins) {
    let result = coinChange(coins, amount - coin, memo);
    if (result !== -1) {
      minCoins = Math.min(minCoins, result + 1);
    }
  }

  memo[amount] = minCoins === Infinity ? -1 : minCoins;
  return memo[amount];
};
