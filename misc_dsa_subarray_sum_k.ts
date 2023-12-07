function subarraySumFixed(
  nums: number[],
  k: number
): number[] {
  if (nums.length < 3) {
    return [];
  }
  let maxSum = 0;
  let sum = 0;
  let resultStartIndex = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    sum += nums[i];
    if (i + 1 < k) continue;
    if (sum > maxSum) {
      maxSum = sum;
      resultStartIndex = i - 2;
    }
    sum -= nums[i - 2];
  }
  return nums.slice(resultStartIndex, resultStartIndex + 3);
}

console.log(subarraySumFixed([1, 2, 3, 7, 4, 1], 3));
