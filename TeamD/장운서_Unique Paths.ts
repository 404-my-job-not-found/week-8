function uniquePaths(m: number, n: number): number {
	// 1) 베이스 : 첫 행은 모두 1
	const dp = new Array(n).fill(1)
	console.log(dp)

	// 2) 두 번째 행부터 갱신
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			// 핵심 점화식: 위(dp[j]) + 왼(dp[j-1])
			dp[j] = dp[j] + dp[j - 1]
		}
	}

	console.log(dp)
	// 3) dp[n-1]가 (m-1,n-1)까지 경로 수
	return dp[n - 1] // <- 아이디어 확인용
}

uniquePaths(3, 7)
