/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let farthest = 0; // 지금까지 도달 가능한 가장 먼 인덱스

  for (let i = 0; i < nums.length; i++) {
    // 현재 위치가 도달 불가면 곧바로 false
    if (i > farthest) return false;

    // 점프해서 도달 가능한 최댓값 갱신
    farthest = Math.max(farthest, i + nums[i]);

    // 이미 마지막 인덱스 이상 도달 가능하다면 true
    if (farthest >= nums.length - 1) return true;
  }

  return true; // 끝까지 막히지 않았다면 true
};
