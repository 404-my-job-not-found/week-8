/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 그리디
// 오른쪽에서 왼쪽으로 스캔 -> 도달 가능한 가장 왼쪽 지점을 갱신
// goodPos: 현재까지 끝까지 도달 가능한 것으로 판정된 가장 왼쪽 인덱스
// i에서 점프 길이 nums[i]가 goodPos - i 이상이면 i도 goodPos
// 마지막에 goodPos가 0이면 시작점에서 끝까지 도달 가능
var canJump = function (nums) {
  // 종착점(마지막 인덱스)을 현재 도달 가능한 가장 왼쪽 지점으로 둠
  let goodPos = nums.length - 1;

  // 왼쪽으로 이동하면서 goodPos 갱신
  for (let i = nums.length - 2; i >= 0; i--) {
    // i에서 goodPos까지 한 번에 도달 가능하면, goodPos를 i로 만듦
    if (i + nums[i] >= goodPos) {
      goodPos = i;
    }
  }

  // 시작점(0)까지 당겨졌다면 성공
  return goodPos === 0;
};
