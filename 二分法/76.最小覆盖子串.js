/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode-cn.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (42.43%)
 * Likes:    1342
 * Dislikes: 0
 * Total Accepted:    181.2K
 * Total Submissions: 425.5K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * 。
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 和 t 由英文字母组成
 * 
 * 
 * 
 * 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let needs = new Map(), window = new Map();
  for (const str of t) {
    needs.has(str) ? needs.set(str, needs.get(str)+1) : needs.set(str, 1)
  }
  let left = 0, right = 0;
  // 表示窗口中满足 need 条件的字符个数
  let valid = 0
  // 记录最小覆盖子串的起始索引及长度
  let start = 0, len = s.length + 1;
  while (right < s.length) {
    const str = s[right];;
    // 移动窗口
    right++
    if (needs.has(str)) {
      window.has(str) ? window.set(str, window.get(str)+1) : window.set(str, 1)
      if (window.get(str) === needs.get(str)) valid++
    }
    // 判断左窗口是否收缩
    while (valid === needs.size) {
      // 更新 len 长度
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      let d = s[left];
      // 左移窗口
      left++
      // 进行窗口内数据的一系列更新
      if (needs.has(d)) {
        if (window.get(d) == needs.get(d)) {
          valid--;
        }
        window.set(d,window.get(d)-1)
      }
    }
  }
  return len === s.length + 1 ? "" : s.substr(start, len)
};
// @lc code=end

