/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m === 1 && n === 1) return 1;
  const visited = new Array(m).fill().map(() => new Array(n).fill(-1));

  const dfs = (r, c) => {
    // 오른쪽, 아래만 가므로 m-1, n-1범위 안에 있으면 됨
    if (r >= m || c >= n) return 0;
    if (r == m - 1 && c == n - 1) return 1;
    if (visited[r][c] !== -1) return visited[r][c];

    visited[r][c] = dfs(r + 1, c) + dfs(r, c + 1);
    return visited[r][c];
  };
  dfs(0, 0);

  return visited[0][0];
};

console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3
