//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
function twoSum(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}
