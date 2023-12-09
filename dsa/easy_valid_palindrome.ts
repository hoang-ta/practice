// https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
  const validString = s
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '');
  let left = 0;
  let right = validString.length - 1;
  while (left < right) {
    if (validString[left] !== validString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
