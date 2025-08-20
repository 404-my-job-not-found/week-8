// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:
// ```
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// ```

// Example 2:
// ```
// Input: coins = [2], amount = 3
// Output: -1
// ```

// Example 3:
// ```
// Input: coins = [1], amount = 0
// Output: 0
// ```

// Constraints:
// `1 <= coins.length <= 12`
// `1 <= coins[i] <= 2^31 - 1`
// `0 <= amount <= 10^4

// 동전 각각의 갯수는 무제한일 때 최소 동전 갯수를 찾는 문제입니다
// dp 문제이기에 dp 방식으로 풀었고, dp 배열은 amount+1 크기로 ,value는 Infinity로 초기화 했습니다
// 이유는 0원부터 amount원까지 모든 금액을 고려했고, 최소 동전 갯수를 만들어야 되기 때문에 Math.min을 사용 해 추후 값을 비교 할 수 있도록 했습니다

// 0원은 아무동전도 사용하지 않아도 만들 수 있기 때문에 dp[0]을 0으로 초기화 했습니다.
// 각 dp 배열은 0 ~ i 까지 최소 동전 갯수를 저장하면서 풀어 나가는 방식으로 로직을 짜봤습니다

// 계산 과정을 예시로 보면
// ```
// coins = [1,2,5], amount = 11

// i = 1 일 때
// j = 0 (1원): 1 >= 1 → dp[1] = min(∞, dp[0] + 1) = min(∞, 0 + 1) = 1
// j = 1 (2원): 1 >= 2 → 조건문 실행 안됨
// j = 2 (5원): 1 >= 5 → 조건문 실행 안됨
// 결과: dp = [0, 1, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞]

// dp[1] = 1 (1원)

// i = 2 일 때
// j = 0 (1원 동전): 2 >= 1 → dp[2] = min(∞, dp[1] + 1) = min(∞, 1 + 1) = 2
// j = 1 (2원 동전): 2 >= 2 → dp[2] = min(2, dp[0] + 1) = min(2, 0 + 1) = 1
// j = 2 (5원 동전): 2 >= 5 → 조건문 실행 안됨
// 결과: dp = [0, 1, 1, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞]

// dp[2] = 1 (1원 + 1원)

// i = 3 일 때

// j = 0 (1원 동전): 3 >= 1 → dp[3] = min(∞, dp[2] + 1) = min(∞, 1 + 1) = 2
// j = 1 (2원 동전): 3 >= 2 → dp[3] = min(2, dp[1] + 1) = min(2, 1 + 1) = 2
// j = 2 (5원 동전): 3 >= 5 → 조건문 실행 안됨
// 결과: dp = [0, 1, 1, 2, ∞, ∞, ∞, ∞, ∞, ∞, ∞, ∞]

// dp[3] = 2 (1원 + 2원)

// i = 4 일 때

// j = 0 (1원 동전): 4 >= 1 → dp[4] = min(∞, dp[3] + 1) = min(∞, 2 + 1) = 3
// j = 1 (2원 동전): 4 >= 2 → dp[4] = min(3, dp[2] + 1) = min(3, 1 + 1) = 2
// j = 2 (5원 동전): 4 >= 5 → 조건문 실행 안됨
// 결과: dp = [0, 1, 1, 2, 2, ∞, ∞, ∞, ∞, ∞, ∞, ∞]

// dp[4] = 2 (2원 + 2원)

// ... 이렇게 쭉 나가면 dp[11]에서

// i = 11 일 때
// j = 0 (1원 동전): 11 >= 1 → dp[11] = min(∞, dp[10] + 1) = min(∞, 3 + 1) = 4
// j = 1 (2원 동전): 11 >= 2 → dp[11] = min(4, dp[9] + 1) = min(4, 3 + 1) = 4
// j = 2 (5원 동전): 11 >= 5 → dp[11] = min(4, dp[6] + 1) = min(4, 2 + 1) = 3
// 결과: dp = [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3]

// dp[11] = 3 (5원 + 5원 + 1원)

// 원하는 결과값이 나옵니다

// ```

function coinChange(coins: number[], amount: number): number {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11)); // 3
