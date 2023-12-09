// https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
  return [];
}

function twoSumV2(
  nums: number[],
  target: number
): number[] {
  const index = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const complementIndex = index[complement];
    if (complementIndex !== undefined) {
      return [i, complementIndex];
    }
    index[nums[i]] = i;
  }
  return [];
}

console.log(twoSumV2([2, 7, 11, 15], 9));
