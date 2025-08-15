/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 첫번쨰 시도
// var coinChange = function (coins, amount) {
//   let result = 0;
//   let sum = 0;
//   if (amount === 0) return result;

//   while (true) {
//     const max = Math.max(...coins);

//     for (let i = 0; i < coins.length; i++) {
//       if (sum + max < amount && coins[i] === max) {
//         sum += max;
//         result++;
//         break;
//       }

//       if (sum + coins[i] === amount) {
//         result++;
//         return result;
//       }

//       if (sum + coins[i] > amount) {
//         result = -1;
//         return result;
//       }
//     }
//   }
// };

var coinChange = function (coins, amount) {
  let dp = Array.from({ length: amount + 1 }, () => Infinity);
  dp[0] = 0;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0
console.log(coinChange([1, 2147483647], 2)); // 2
