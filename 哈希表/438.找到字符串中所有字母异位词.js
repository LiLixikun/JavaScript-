/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (51.80%)
 * Likes:    747
 * Dislikes: 0
 * Total Accepted:    133.7K
 * Total Submissions: 249.1K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * 
 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "abab", p = "ab"
 * 输出: [0,1,2]
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= s.length, p.length <= 3 * 10^4
 * s 和 p 仅包含小写字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let l1 = s.length
  let l2 = p.length
  let res = []
  if (l1 < l2) {
    return res
  }
  let needs = new Map(); // 记录 p 中的 hash 次数
  for (const s of p) {
    needs.set(s, (needs.get(s) || 0) + 1)
  }
  let windows = new Map();
  let [left, right] = [0, 0] // 定义左右指针
  let count = 0 // 用来标记 needs 中的 key 相同的个数
  while (right < l1) {
    let str = s[right++]
    // 如果 在 windows 中也出现了
    if (needs.get(str)) {
      windows.set(str, (windows.get(str) || 0) + 1)
      if (windows.get(str) === needs.get(str)) {
        count++
      }
    }
    while (right - left >= l2) {
      if (needs.size === count) {
        res.push(left)
      }
      const str = s[left++]
      if (needs.get(str)) {
        // 因为 left 要滑动走了、去掉 left 肯定就不满足相等了
        if (needs.get(str) === windows.get(str)) {
          count--
        }
        windows.set(str, windows.get(str) - 1)
      }
    }
  }
  return res
};

findAnagrams("cbaebabacd","abc")
// @lc code=end

