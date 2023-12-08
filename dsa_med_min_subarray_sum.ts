// https://leetcode.com/problems/minimum-size-subarray-sum/
function minSubArrayLen(
  target: number,
  nums: number[]
): number {
  let count = 1;
  let minCount = 0;
  let sum = nums[0];
  if (sum >= target) return 1;
  let windowStartIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    count += 1;
    while (sum >= target && windowStartIndex <= i) {
      minCount =
        minCount === 0 ? count : Math.min(minCount, count);
      sum -= nums[windowStartIndex];
      windowStartIndex += 1;
      count -= 1;
    }
  }
  return minCount;
}
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
