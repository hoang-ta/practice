// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
function removeDuplicates(nums: number[]): number {
  let leftIndex = 0;
  let rightIndex = 1;
  while (rightIndex <= nums.length) {
    if (nums[leftIndex] !== nums[rightIndex]) {
      nums[leftIndex + 1] = nums[rightIndex];
      leftIndex++;
    }
    rightIndex++;
  }
  // nums = nums.slice(0, leftIndex);
  //   nums = nums.filter((value) => value !== undefined);
  // console.log('nums: ', nums);
  return leftIndex;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 1]));
console.log(removeDuplicates([1, 1, 1, 2, 3, 3]));
