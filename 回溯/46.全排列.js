/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (78.49%)
 * Likes:    1755
 * Dislikes: 0
 * Total Accepted:    502.7K
 * Total Submissions: 640.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1]
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [], path = []
  function backtracking(n, k, used) {
    if (path.length === k) {
      result.push(Array.from(path))
      return
    }
    for (let i = 0; i < k; i++) {
      if (used[n[i]]) continue
      path.push(n[i])
      used[nums[i]] = true
      backtracking(n, k, used)
      path.pop()
      used[nums[i]] = false
    }
  }
  backtracking(nums, nums.length, [])
  return result
};
// @lc code=end

