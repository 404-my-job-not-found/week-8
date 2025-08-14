// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// example 1:
// ```
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// ```

// example 2:

// ```
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
// ```

// 첫 번째 시도
// 제가 이해한 문제는 어느 인덱스에서 점프를 하든 마지막 인덱스까지 도달할 수 있는지 여부를 판단하는 문제입니다.
// 그래서 첫 번째 인덱스에서 점프를 하고 그 다음 인덱스에서 점프를 하고 그 다음 인덱스에서 점프를 하고 이런 식으로 점프를 하면서 마지막 인덱스까지 닿는가 여부를 확인했는데,
// step은 나아 갈 거리 즉 현재 위치이고 next는 다음 위치를 의미합니다.
// 그래서 결국 next 값이 마지막 인덱스와 같으면 true를 반환하고 아니면 false를 반환하는 식으로 구현했습니다.
// 예시
// i = 0
// [2,3,1,1,4]
//  ^   ^
// step next

// i = 1
// [2,3,1,1,4]
//    ^     ^
// step    next

// result = true
// 예시만 봤을 때는 이게 정답일 줄 알았는데 아니였습니다..

// function canJump(nums: number[]): any {
//   let step = 0;
//   let next = 0;
//   let max = nums.length - 1;

//   if (nums.length === 1) return true;
//   if (nums[0] === 0) return false;

//   for (let i = 0; i < nums.length; i++) {
//     step = nums[i];
//     next = nums[i + step];

//     if (next === max) return true;
//   }

//   return false;
// }

// 두 번째 시도
// max는 최대 도달 가능 한 위치고 cur은 현재 위치입니다.
// 현재 위치가 최대 도달 가능 한 위치보다 크면 도달 불가능하기 땨문에 false를 뱉고,
// 최대 도달 가능 한 위치는 계속해서 갱신해주면서, 마지막 인덱스에 도달하면 true를 뱉습니다.

function canJump(nums: number[]): boolean {
  let maxIndex = 0;

  for (let curIndex = 0; curIndex < nums.length; curIndex++) {
    if (curIndex > maxIndex) {
      return false;
    }

    maxIndex = Math.max(maxIndex, curIndex + nums[curIndex]);

    if (maxIndex >= nums.length - 1) {
      return true;
    }
  }

  return false;
}

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // true
