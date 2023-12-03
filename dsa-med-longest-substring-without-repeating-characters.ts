// https://leetcode.com/problems/longest-substring-without-repeating-characters/
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  let start = 0;
  let longest = 1;
  let charIndexList = { [s[start]]: 0 };
  let end = 1;
  while (end < s.length) {
    const appearIndex = charIndexList[s[end]];
    if (charIndexList[s[end]] === undefined) {
      charIndexList[s[end]] = end;
      end++;
    } else {
      const stringLength = end - start;
      longest =
        longest < stringLength ? stringLength : longest;
      start = appearIndex + 1;
      end = start + 1;
      charIndexList = {
        [s[start]]: start,
      };
    }
  }
  const stringLength = end - start;
  longest = longest < stringLength ? stringLength : longest;
  return longest;
}

console.log(lengthOfLongestSubstring('aab'));
console.log(lengthOfLongestSubstring('aaaa'));
console.log(lengthOfLongestSubstring('abcbcad'));
console.log(lengthOfLongestSubstring('abcabcbb'));
