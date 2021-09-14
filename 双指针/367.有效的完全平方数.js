/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 *
 * https://leetcode-cn.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (43.95%)
 * Likes:    238
 * Dislikes: 0
 * Total Accepted:    74.2K
 * Total Submissions: 168.9K
 * Testcase Example:  '16'
 *
 * 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
 * 
 * 进阶：不要 使用任何内置的库函数，如  sqrt 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：num = 16
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：num = 14
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num < 0) return false
  if (num <= 1) return num
  let l = 1, r = num >> 1;
  while (l <= r) {
    let mid = l + ((r - l) >> 1), sum = mid * mid;
    if (sum > num) r = mid--
    else if (sum < num) l = mid++
    else return true
  }
  return false
};
// @lc code=end

