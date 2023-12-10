// https://leetcode.com/problems/minimum-size-subarray-sum/
function minSubArrayLen(
  target: number,
  nums: number[]
): number {
  let minCount = 0;
  let sum = 0;
  let windowStartIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      minCount =
        minCount === 0
          ? i - windowStartIndex + 1
          : Math.min(minCount, i - windowStartIndex + 1);
      sum -= nums[windowStartIndex];
      windowStartIndex += 1;
    }
  }
  return minCount;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
