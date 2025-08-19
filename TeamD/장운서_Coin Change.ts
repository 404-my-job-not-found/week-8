function coinChange(coins: number[], amount: number): number {
	if (amount === 0) return 0

	const dp = new Array(amount + 1).fill(Infinity)
	dp[0] = 0

	for (let i = 1; i <= amount; i++) {
		// 1원부터 amount 까지
		for (let coin of coins) {
			// 가능한 모든 동전 확인
			if (i - coin >= 0 && dp[i - coin] !== Infinity) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1)
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount]
}

coinChange([1, 2, 5], 11)
