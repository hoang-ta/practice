function subarraySumLongest(
  nums: number[],
  target: number
): number {
  let longest = 0;
  let windowSum = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];
    while (windowSum > target) {
      windowSum -= nums[left];
      left++;
    }
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

console.log(subarraySumLongest([1, 6, 3, 1, 2, 4, 5], 10));
