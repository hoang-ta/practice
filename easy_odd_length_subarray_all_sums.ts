// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
// function sumOddLengthSubarraysV1(arr: number[]): number {
//   let sum = 0;
//   let step = 0;
//   while (step <= arr.length) {
//     let left = 0;
//     let windowSum = 0;
//     for (let right = 0; right < arr.length; right++) {
//       windowSum += arr[right];
//       if (left + step === right) {
//         sum += windowSum;
//         windowSum -= arr[left];
//         left++;
//       }
//     }
//     step += 2;
//   }
//   return sum;
// }

// O(N) but on  leetcode, runs slower than LMAO
function sumOddLengthSubarrays(arr: number[]): number {
  let total = 0;
  let indexSum = 0;
  let indexSumList = { 0: 0 };
  for (let right = 0; right < arr.length; right++) {
    indexSum += arr[right];
    const pos = right + 1;
    indexSumList[pos] = indexSum;

    // console.log(indexSumList);

    let left: number;
    if (pos % 2 === 0) {
      left = 1;
    } else {
      left = 0;
    }
    while (left <= pos) {
      total += indexSumList[pos] - indexSumList[left];
      left += 2;
    }
  }
  return total;
}
console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
