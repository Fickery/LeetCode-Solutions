function twoSum(nums, target) {
	let l = 0;
	let r = nums.length - 1
	
	while (l < r) {
		let currNum= nums[l] + nums[r];
		if (currNum > target) {
			r--;
		} else if (currNum < target) {
			l++;
		} else {
		 return [l+1, r+1];
		}
	}
}
