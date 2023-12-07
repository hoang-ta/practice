// https://leetcode.com/problems/largest-odd-number-in-string
function largestOddNumber(num: string): string {
  for (let right = num.length - 1; right >= 0; right--) {
    if (Number(num[right]) % 2 !== 0) {
      return num.slice(0, right + 1);
    }
  }
  return '';
}

// console.log('52'[1]);

console.log(largestOddNumber('52'));
console.log(largestOddNumber('4206'));
console.log(largestOddNumber('35427'));
console.log(largestOddNumber('35428'));
