/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let result = 1;
    
    let k = Math.min(m-1, n-1);
    let total = m + n - 2;
    
    for (let i = 0; i < k; i++) {
        result = result * (total - i) / (i + 1);
    }
    
    return Math.round(result);
};