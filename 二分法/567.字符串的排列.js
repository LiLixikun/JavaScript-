/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 *
 * https://leetcode-cn.com/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (43.06%)
 * Likes:    442
 * Dislikes: 0
 * Total Accepted:    114.5K
 * Total Submissions: 265.6K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。
 * 
 * 换句话说，s1 的排列之一是 s2 的 子串 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s1 = "ab" s2 = "eidbaooo"
 * 输出：true
 * 解释：s2 包含 s1 的排列之一 ("ba").
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s1= "ab" s2 = "eidboaoo"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s1.length, s2.length <= 10^4
 * s1 和 s2 仅包含小写字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let needs = new Map(), window = new Map();
  for (const str of s1) {
    needs.has(str) ? needs.set(str, needs.get(str) + 1) : needs.set(str, 1)
  }
  let left, right = 0;
  // 表示窗口中满足 need 条件的字符个数
  let valid = 0
  while (right < s2.length) {
    const str = s2[right]
    right++
    if (needs.has(str)) {
      window.has(str) ? window.set(str, window.get(str) + 1) : window.set(str, 1)
      if (needs.get(str) === window.get(str)) valid++
    }
    // 判断左侧窗口是否要收缩
    while (right - left >= s1.length) {
      if (valid === needs.size) return true
      const d = s2[left]
      left++
      if (needs.has(d)) {
        if (needs.get(d) == window.get(d)) {
          valid--
        }
        window.set(d, window.get(d) - 1)
      }
    }
  }
  return false
};
// @lc code=end

