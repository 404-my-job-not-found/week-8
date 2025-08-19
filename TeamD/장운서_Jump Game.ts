function canJump(nums: number[]): boolean {
	let reach = 0
	for (let i = 0; i < nums.length; i++) {
		reach = Math.max(reach, i + nums[i])
		if (reach >= nums.length - 1) return true
	}
	return false
}

canJump([2, 3, 1, 1, 4])
