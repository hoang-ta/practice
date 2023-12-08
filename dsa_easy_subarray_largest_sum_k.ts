// https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/
// Easier than leetcode because this is not distinct

function subarraySumFixed(
  nums: number[],
  k: number
): number[] {
  let largest: number = 0;
  let startIndex = 0;
  for (let i = 0; i < k; i++) {
    largest += nums[i];
  }
  let sum = largest;
  for (let right = k; right < nums.length; right++) {
    let left = right - k;
    sum -= nums[left];
    sum += nums[right];
    if (sum <= largest) continue;
    startIndex = left + 1;
    largest = sum;
  }
  return nums.slice(startIndex, startIndex + k);
}

console.log(subarraySumFixed([1, 2, 3, 7, 4, 1], 3));
console.log(subarraySumFixed([1, 5, 4, 2, 9, 9, 9], 3));
