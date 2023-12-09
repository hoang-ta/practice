// https://leetcode.com/problems/subarray-sum-equals-k/
// O(N^2)
// function subarraySum(nums: number[], k: number): number {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       if (sum === k) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// }

function subarraySum(arr, target) {
  const prefixSums = new Map();
  prefixSums.set(0, 1); // since empty array's sum is 0
  let curSum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];
    const complement = curSum - target;
    if (prefixSums.has(complement)) {
      count += prefixSums.get(complement);
    }
    if (prefixSums.has(curSum)) {
      prefixSums.set(curSum, prefixSums.get(curSum) + 1);
    } else {
      prefixSums.set(curSum, 1);
    }
  }
  return count;
}

console.log(subarraySum([1, 1, 1, 1, 1], 2));
console.log(subarraySum([1, 1, 1, -2, 2], 2));
