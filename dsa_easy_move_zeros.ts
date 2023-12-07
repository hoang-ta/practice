// https://leetcode.com/problems/move-zeroes/

function moveZeroes(nums: number[]): void {
  let zero_index = 0;
  let non_zero_index = 0;
  let length = nums.length;
  while (zero_index < length && non_zero_index < length) {
    if (nums[zero_index] === 0) {
      non_zero_index = zero_index;
      while (
        nums[non_zero_index] === 0 &&
        non_zero_index < length - 1
      ) {
        non_zero_index++;
        if (nums[non_zero_index] !== 0) {
          nums[zero_index] = nums[non_zero_index];
          nums[non_zero_index] = 0;
          break;
        }
      }
    }
    zero_index++;
  }
}

let nums = [1, 4, 0, 3, 0, 2, 7, 8];
moveZeroes(nums);
console.log(nums);
