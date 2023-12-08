// https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/
// Similar to longest substring without repeating characters
// Only difference is the k
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
function maximumSubarraySum(
  nums: number[],
  k: number
): number {
  let sumCount = 0;
  let count = {};
  let largest = 0;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < nums.length; right++) {
    const curNumber = nums[right];
    const duplicateIndex = count[curNumber];
    count[curNumber] = right;
    sum += curNumber;
    sumCount += 1;
    if (duplicateIndex !== undefined) {
      while (left < duplicateIndex) {
        sum -= nums[left];
        sumCount -= 1;
        left++;
      }
    }
    if (sumCount === k && sum > largest) {
      largest = sum;
      sumCount -= 1;
      sum -= nums[left];
      left++;
    }
  }
  return largest;
}

console.log(maximumSubarraySum([7, 10, 14, 12, 15, 19], 1));
// console.log(maximumSubarraySum([1, 2, 3, 7, 4, 1], 3));
// console.log(
//   maximumSubarraySum([1, 5, 4, 2, 4, 9, 9, 9], 3)
// );
// console.log(
// maximumSubarraySum([1, 5, 4, 2, 4, 9, 9, 9], 3)
// );
// console.log(maximumSubarraySum([1, 1, 1], 3));
// console.log(maximumSubarraySum([1, 5, 4, 7, 7], 3));
// console.log(maximumSubarraySum([9, 9, 9], 3));
// console.log(maximumSubarraySum([2, 9, 9, 9], 3));
// console.log(maximumSubarraySum([9, 2, 9, 9], 3));
