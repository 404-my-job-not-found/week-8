// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:

// Input: m = 3, n = 7
// Output: 28

// Example 2:

// Input: m = 3, n = 2
// Output: 3

// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// Constraints:

// 1 <= m, n <= 100

// 좌표 문제는 그림을 그려가면서 푸는게 좋은것 같습니다.
// 우선 m*n 크기의 배열을 만들어 보고 작은 수의 예시를 그려가면서 패턴을 찾아봤습니다.
// 2 * 2 의 경우
// 좌표
// [0,0] [0,1]
// [1,0] [1,1]

// 경우의 수
// [0] → [1]
//  ↓     ↓
// [1] → [?] ← 1(위쪽) + 1(왼쪽) = 2

// 경로 수 : 2
// [0] → [1]
//  ↓     ↓
// [1] → [2]

// 3 * 2 의 경우
// 좌표
// [0,0] [0,1] [0,2]
// [1,0] [1,1] [1,2]

// 경우의 수
// [0] → [1] → [1]
//  ↓     ↓     ↓
// [1] → [?] → [?] ← 1(위쪽) + 1(왼쪽) = 2

// [0] → [1] → [1]
//  ↓     ↓     ↓
// [1] → [2] → [?] ← 1(위쪽) + 2(왼쪽) = 3

// 경로 수 : 3
// [0] → [1] → [1]
//  ↓     ↓     ↓
// [1] → [2] → [3]

// 3 * 3 의 경우
// [0,0] [0,1] [0,2]
// [1,0] [1,1] [1,2]
// [2,0] [2,1] [2,2]

// 경우의 수
// [0] → [1] → [1]
//  ↓     ↓     ↓
// [1] → [?] → [?]
//  ↓     ↓     ↓
// [1] → [?] → [?] ← 1(위쪽) + 2(왼쪽) = 3

// [0] → [1] → [1]
//  ↓     ↓     ↓
// [1] → [2] → [?] ← 2(위쪽) + 1(왼쪽) = 3
//  ↓     ↓     ↓
// [1] → [?] → [?] ← 2(위쪽) + 2(왼쪽) = 4

// [0] → [1] → [1]
//  ↓     ↓     ↓
// [1] → [2] → [3]
//  ↓     ↓     ↓
// [1] → [3] → [?] ← 3(위쪽) + 3(왼쪽) = 6

// 경로 수 : 6
// [0] → [1] → [1]
//  ↓     ↓     ↓
// [1] → [2] → [3]
//  ↓     ↓     ↓
// [1] → [3] → [6]

//... 결국 이러한 패턴으로 경우의 수가 나오게 됩니다.

// 이 패턴을 함수에 적용 시키게 되면 첫 번째 행 열을 1로 초기화 하고 i,j 인덱스를 1부터 시작하여 위쪽과 왼쪽의 값을 더하면 됩니다.
// function uniquePaths(m: number, n: number) {
//   const dp: number[][] = Array.from({ length: m }, (_, i) =>
//     Array.from({ length: n }, (_, j) => (i === 0 || j === 0 ? 1 : 0))
//   );

//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//     }
//   }
//   return dp[m - 1][n - 1];
// }

// 근데 굳이 2차원 배열을 만들어서 풀지 않고 1차원 배열로도 풀 수 있을 것 같아 풀어봤습니다.
// 2차원으로 4*4를 그려봤을 때
// [ [ 1, 1, 1, 1 ],
// [ 1, 2, 3, 4 ],
// [ 1, 3, 6, 10 ],
// [ 1, 4, 10, 20 ] ]
// 이런 2차원 배열이 나오게 되는데 결국 마지막 배열 값이 정답이 되기 때문에
// 1차원 배열로 나열하여 풀게되면 아래처럼 정답이 나오게 됩니다.

// 초기: [1, 1, 1, 1] ← 0행 (첫 번째 행은 모두 1)
// 1행: [1, 2, 3, 4] ← dp[1]=1+1=2, dp[2]=1+2=3, dp[3]=1+3=4
// 2행: [1, 3, 6, 10] ← dp[1]=2+1=3, dp[2]=3+3=6, dp[3]=4+6=10
// 3행: [1, 4, 10, 20] ← dp[1]=3+1=4, dp[2]=6+4=10, dp[3]=10+10=20

function uniquePaths(m: number, n: number) {
  const dp = Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1];
    }
  }

  return dp[n - 1];
}

console.log(uniquePaths(4, 4));
