// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

function lengthOfLongestSubstring(s) {
  let l = -1, r = 0, len = s.length, max = 0, map = new Map()
  while (r < len) {
    const str = s[r]
    if (map.has(str)) l = Math.max(l, map.get(l))
    max = Math.max(max, r - l)
    map.set(str, r++)
  }
  console.log(max);
  return max
}
lengthOfLongestSubstring("abcabcbb");
