// https://leetcode.com/problems/longest-substring-without-repeating-characters/
function lengthOfLongestSubstring(s: string): number {
  let start = 0;
  let longest = 0;
  let indexTracker = {};
  let end = 0;
  while (end < s.length) {
    let appearIndex = indexTracker[s[end]];
    indexTracker[s[end]] = end;
    if (appearIndex !== undefined) {
      while (start <= appearIndex) {
        start++;
      }
    }

    const stringLength = end - start + 1;
    longest =
      longest < stringLength ? stringLength : longest;
    end++;
  }

  return longest;
}
