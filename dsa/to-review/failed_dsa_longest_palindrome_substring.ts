//https://leetcode.com/problems/longest-palindromic-substring/
// N^3
function longestPalindrome(s: string): string {
  let result = '';
  for (let start = 0; start < s.length; start++) {
    let subString = '';
    for (let end = start; end < s.length; end++) {
      subString += s[end];
      const isPalindrome = checkPalindrome(subString);
      if (!isPalindrome) continue;
      if (subString.length > result.length) {
        result = subString;
      }
    }
  }
  return result;
}

function checkPalindrome(s: string) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

//Solution: https://www.youtube.com/watch?v=XYQecbcd6_c
function longestPalindromeV2(s: string): string {
  if (!s.length) return '';
  let [start, end] = [0, 0];
  for (let i = 0; i < s.length; i++) {
    // odd case
    {
      const { left, right } = checkPalindromeV2({
        s,
        left: i,
        right: i,
      });
      if (end - start < right - left) {
        [start, end] = [left, right];
      }
    }
    {
      // even case
      const { left, right } = checkPalindromeV2({
        s,
        left: i,
        right: i + 1,
      });
      if (end - start < right - left) {
        [start, end] = [left, right];
      }
    }
  }
  return s.slice(start, end + 1);
}

function checkPalindromeV2({
  s,
  left,
  right,
}: {
  s: string;
  left: number;
  right: number;
}) {
  let [start, end] = [0, 0];
  while (left >= 0) {
    if (s[left] !== s[right]) {
      break;
    }
    [start, end] = [left, right];
    left--;
    right++;
  }
  return { left: start, right: end };
}

// console.log(longestPalindrome('a')); // a
// console.log(longestPalindrome('ab')); // 'a'
// console.log(longestPalindrome('abba')); // 'abba'
// console.log(longestPalindrome('bbaa')); // 'bb'
// console.log(longestPalindrome('aacabdkacaa'));
// console.log(longestPalindrome('bacabab'));
// console.log(longestPalindromeV2('xaabacxcabaaxcabaax'));
// console.log(longestPalindromeV2('cbbd'));
