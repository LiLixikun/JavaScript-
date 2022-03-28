/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 *
 * https://leetcode-cn.com/problems/combination-sum-iii/description/
 *
 * algorithms
 * Medium (73.43%)
 * Likes:    418
 * Dislikes: 0
 * Total Accepted:    121K
 * Total Submissions: 164.7K
 * Testcase Example:  '3\n7'
 *
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 
 * 说明：
 * 
 * 
 * 所有数字都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: k = 3, n = 7
 * 输出: [[1,2,4]]
 * 
 * 
 * 示例 2:
 * 
 * 输入: k = 3, n = 9
 * 输出: [[1,2,6], [1,3,5], [2,3,4]]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let reslut = [], path = []
  function backtracking(sum, k, startIndex) {
    // 如果累加的值大于目标、直接返回
    if (sum > n) {
      return
    }
    if (path.length === k) {
      if (sum === n) {
        reslut.push([...path])
        return
      }
    }
    for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
      sum += i
      path.push(i)
      backtracking(sum, k, i + 1)
      // 别忘了处理过程 和 回溯过程是一一对应的，处理有加，回溯就要有减！
      sum -= i; // 回溯
      path.pop() // 回溯
    }
  }
  backtracking(0, k, 1)
  return reslut
};
// @lc code=end

