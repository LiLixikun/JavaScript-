/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 *
 * https://leetcode-cn.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (72.50%)
 * Likes:    973
 * Dislikes: 0
 * Total Accepted:    157.2K
 * Total Submissions: 216.8K
 * Testcase Example:  '"aab"'
 *
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 * 
 * 回文串 是正着读和反着读都一样的字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a"
 * 输出：[["a"]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = [], path = []
  function backtracking(startIndex) {
    if (startIndex >= s.length) {
      result.push(Array.from(path))
      return
    }
    for (let i = startIndex; i < s.length; i++) {
      if (!isPalindrome(s, startIndex, i)) continue;
      path.push(s.substr(startIndex, i - startIndex + 1));
      backtracking(i + 1)
      path.pop()
    }
  }
  function isPalindrome(s, l, r) {
    while (l < r) {
      if (s[l] != s[r]) {
        return false
      }
      l++, r--
    }
    return true
  }
  backtracking(0)
  return result
};
// @lc code=end

