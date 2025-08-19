/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, memo = {}) {
    // 접근, DP, topdown
    // m-1, n 까지 도달 가능한 방법의 수 + m, n-1 도달 가능한 방법의 수;
    // uniquePaths(2, 1) = uniquePaths(1,1) + uniquePaths(2,0);

    // 내가 탑다운 방식으로 풀려고 했을 때 부족한 점은 어떤 값을 리턴할 것인가에 대한 판단
    // 메모이제이션 값을 리턴
    // 중복여부를 확인하는 방법

    const key = `${m},${n}`;


    if (key in memo) return memo[key];
    if (m === 1 || n === 1) return 1;

    memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);

    return memo[key];
};