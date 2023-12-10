// https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/
// function isCovered(
//   ranges: number[][],
//   left: number,
//   right: number
// ): boolean {
//   if (!ranges.length) return false;
//   const checkRange = {};
//   for (let i = left; i <= right; i++) {
//     checkRange[i] = false;
//   }
//   for (const range of ranges) {
//     let start = range[0];
//     let end = range[1];
//     for (let i = start; i <= end; i++) {
//       if (checkRange[i] !== undefined) checkRange[i] = true;
//     }
//   }
//   const values = Object.values(checkRange);
//   for (const value of values) {
//     if (value === false) return false;
//   }
//   return true;
// }

// V2
function isCovered(
  ranges: number[][],
  left: number,
  right: number
): boolean {
  const rangeNumbers = {};
  for (const range of ranges) {
    for (let i = range[0]; i <= range[1]; i++) {
      rangeNumbers[i] = true;
    }
  }
  for (let i = left; i <= right; i++) {
    if (!rangeNumbers[i]) return false;
  }
  return true;
}

// console.log(
//   isCovered(
//     [
//       [1, 2],
//       [3, 4],
//       [5, 6],
//     ],
//     2,
//     5
//   )
// );
// console.log(
//   isCovered(
//     [
//       [1, 10],
//       [10, 20],
//     ],
//     21,
//     21
//   )
// );
// console.log(isCovered([[1, 1]], 1, 50));
// console.log(
//   isCovered(
//     [
//       [37, 49],
//       [5, 17],
//       [8, 32],
//     ],
//     29,
//     49
//   )
// );
// console.log(
//   isCovered(
//     [
//       [37, 49],
//       [5, 17],
//       [8, 32],
//       [33, 36],
//     ],
//     29,
//     49
//   )
// );

console.log(
  isCovered(
    [
      [2, 2],
      [3, 3],
      [1, 1],
    ],
    1,
    3
  )
);
