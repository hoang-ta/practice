// https://leetcode.com/problems/palindrome-number/
// Don't convert to string
function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let reverse = 0;
  let temp = x;
  while (temp > 0) {
    const remainder = temp % 10;
    console.log(temp, remainder);
    reverse = reverse * 10 + remainder;
    temp = Math.floor(temp / 10);
  }
  return reverse === x;
}

// console.log(isPalindrome(1001));
// console.log(isPalindrome(321123));
// console.log(isPalindrome(1000021));
console.log(isPalindrome(1200021));
