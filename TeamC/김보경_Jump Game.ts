
function canJump(nums: number[]): boolean {
    //도달 가능한 idx
    let maxIdx=0;
   for(let i=0; i<nums.length; i++){
    if(i>maxIdx) return false;
    //i 지금 내 위치 
    // nums[i] 현재 내 점프력
    // i + nums[i] 현재 위치에서 새로 갈 수 있는 범위
    maxIdx = Math.max(maxIdx,i+nums[i])
   }
   return true;

};

canJump([3,2,1,0,4])