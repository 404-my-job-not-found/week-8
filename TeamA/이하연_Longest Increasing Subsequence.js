/**
 * @param {number[]} nums
 * @return {number}
 */
// tails[k] = 길이가 (k+1)인 증가 부분수열의 "가능한 최소 끝값"
// 각 숫자 num에 대해 tails에서 num이 들어갈 위치(하한, lower_bound)를 이진탐색:
// 위치가 tails 길이와 같으면 push (수열 길이 증가)
// 아니면 해당 위치 값을 num으로 교체 (끝값을 더 작게 만들어 이후 확장에 유리)
// tails의 길이가 LIS 길이
var lengthOfLIS = function (nums) {
  const tails = [];

  for (const num of nums) {
    // num이 들어갈 "첫 번째 >= num" 위치를 찾는 이진탐색 (lower_bound)
    let l = 0,
      r = tails.length; // [l, r)
    while (l < r) {
      const mid = (l + r) >> 1;
      if (tails[mid] < num) l = mid + 1;
      else r = mid;
    }
    // l은 num이 들어갈 위치
    if (l === tails.length) {
      tails.push(num); // 수열 길이 확장
    } else {
      tails[l] = num; // 더 작은 끝값으로 교체
    }
  }

  return tails.length;
};
