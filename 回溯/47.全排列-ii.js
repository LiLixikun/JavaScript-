/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (64.28%)
 * Likes:    933
 * Dislikes: 0
 * Total Accepted:    257.7K
 * Total Submissions: 400.9K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let result = [], path = []
  nums.sort()
  function backtracking(n, k, used) {
    if (path.length === k) {
      result.push(Array.from(path))
      return
    }
    for (let i = 0; i < k; i++) {
      if (i > 0 && n[i - 1] === n[i] && !used[i - 1]) continue
      if (!used[i]) {
        path.push(n[i])
        used[i] = true
        backtracking(n, k, used)
        path.pop()
        used[i] = false
      }
    }
  }
  backtracking(nums, nums.length, [])
  return result
};
// @lc code=end

