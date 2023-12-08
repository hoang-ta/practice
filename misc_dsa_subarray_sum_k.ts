function subarraySumFixed(
  nums: number[],
  k: number
): number[] {
  if (nums.length < 3) {
    return [];
  }
  let maxSum = 0;
  let sum = 0;
  let startIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i + 1 < k) continue;
    if (sum > maxSum) {
      maxSum = sum;
      startIndex = i - k + 1;
    }
    sum -= nums[startIndex];
  }
  return nums.slice(startIndex, startIndex + k);
}

console.log(subarraySumFixed([1, 2, 3, 7, 4, 1], 3));
console.log(subarraySumFixed([1, 5, 4, 2, 9, 9, 9], 3));
