/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    // 그리디..?

    // 현재 상태에서 도달할 수 있는 가장 먼 거리

    let max = 0;

    for(let i=0; i<nums.length; i++) {
        // 현재 위치(i)가 지금까지 도달할 수 있는 가장 먼 거리(max)를 넘으면 안됨
        if(i > max) return false;

        // i + nums[i] = 현재 위치에서 점프 가능한 최대 거리
        max = Math.max(max, i + nums[i]);

        // 끝까지 도달 할 수 있다면 true
        if(max >= nums.length -1) return true;
    }

    return true;

};