function coinChange(coins: number[], amount: number): number {
    //amount+1은 불가능 상태를 표시한다.
    const dp = Array(amount + 1).fill(amount + 1);
    //0원 만드는데 동전 필요없다.
    dp[0] = 0;

    for (const c of coins) {
        for (let x = c; x <= amount; x++) {
            //x원 = (x - c)원을 만드는 방법 + 동전 1개(c)
            //최소값을 구한다.
          dp[x] = Math.min(dp[x], dp[x - c] + 1);
        }
      }
    
      return dp[amount] > amount ? -1 : dp[amount];

};