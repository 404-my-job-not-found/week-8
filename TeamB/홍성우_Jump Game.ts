export function canJump(nums: number[]): boolean {
  let farthest = 0;

  for (let i = 0; i <= farthest && i < nums.length; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (farthest >= nums.length - 1) return true;
  }
  return false;
}
