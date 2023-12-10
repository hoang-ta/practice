function pivotIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let left = 0;
    let right = 0;
    for (let L = i - 1; L >= 0; L--) {
      left += nums[L];
    }
    for (let R = i + 1; R < nums.length; R++) {
      right += nums[R];
    }
    if (left === right) return i;
  }
  return -1;
}
// Sliding window
function pivotIndexV2(nums: number[]): number {
  let rightSum = 0;
  for (let j = nums.length - 1; j > 0; j--) {
    rightSum += nums[j];
  }
  let leftSum = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (right !== 0) {
      leftSum += nums[left];
      left++;
      rightSum -= nums[right];
    }
    if (leftSum === rightSum) {
      return right;
    }
  }
  return -1;
}
// Prefix sum
function pivotIndexV3(nums: number[]): number {
  let sumLefts: number[] = [];
  let sumLeft = 0;
  let sumRights: number[] = [];
  let sumRight = 0;
  for (let i = 0; i < nums.length; i++) {
    sumLefts.push((sumLeft += nums[i]));
    sumRights.push((sumRight += nums[nums.length - 1 - i]));
  }
  for (let left = 0; left < nums.length; left++) {
    const sumL = left - 1 < 0 ? 0 : sumLefts[left - 1];
    const right = nums.length - 1 - left;
    const sumR = sumRights[right] - nums[left];
    if (sumL === sumR) return left;
  }
  return -1;
}

console.log(pivotIndexV3([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndexV3([1, 2, 3]));
// console.log(pivotIndexV3([2, 1, -1]));
