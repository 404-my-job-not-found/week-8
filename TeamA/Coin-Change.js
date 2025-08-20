/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // dp[x] = 금액 x를 만들 수 있는 최소 동전 개수
  // 처음엔 Infinity로 초기화
  const dp = Array(amount + 1).fill(Infinity);

  // 0원을 만드는 방법은 동전 0개
  dp[0] = 0;

  // 각 동전을 하나씩 고려
  for (let coin of coins) {
    // coin 값부터 시작 > x-coin 이 음수가 되지 않도록
    for (let x = coin; x <= amount; x++) {
      /**
       * 점화식: dp[x] = min(dp[x], dp[x - coin] + 1)
       *
       * - dp[x - coin] 은 "x-coin 금액을 만드는 최소 동전 개수"
       * - 거기에 coin 1개를 더하면 x 금액을 만드는 방법
       *
       * 예) coin = 5, x = 11일 때
       *   dp[11] = min(dp[11], dp[6] + 1)
       *   (즉, 6원을 만드는 방법 + 5원 1개 추가)
       */
      dp[x] = Math.min(dp[x], dp[x - coin] + 1);
    }
  }

  // dp[amount] 가 여전히 Infinity 라면 만들 수 없는 경우
  return dp[amount] === Infinity ? -1 : dp[amount];
};
