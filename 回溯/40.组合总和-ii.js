/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 *
 * https://leetcode-cn.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (61.37%)
 * Likes:    820
 * Dislikes: 0
 * Total Accepted:    237.1K
 * Total Submissions: 386.4K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的每个数字在每个组合中只能使用 一次 。
 * 
 * 注意：解集不能包含重复的组合。 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 输出:
 * [
 * [1,1,6],
 * [1,2,5],
 * [1,7],
 * [2,6]
 * ]
 * 
 * 示例 2:
 * 
 * 
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 输出:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= candidates.length <= 100
 * 1 <= candidates[i] <= 50
 * 1 <= target <= 30
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort()
  let result = [], path = []
  function backtracking(sum, startIndex) {
    if (sum > target) {
      return
    }
    if (sum === target) {
      result.push(Array.from(path))
      return
    }
    let f = -1
    for (let i = startIndex; i < candidates.length; i++) {
      let n = candidates[i]
      if (n > target - sum || n == f) continue
      sum += n
      path.push(n)
      f = n
      backtracking(sum, i + 1)
      sum -= n
      path.pop()
    }
  }
  backtracking(0, 0)
  return result
};
// @lc code=end

