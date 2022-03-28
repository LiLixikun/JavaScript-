/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 *
 * https://leetcode-cn.com/problems/increasing-subsequences/description/
 *
 * algorithms
 * Medium (53.86%)
 * Likes:    389
 * Dislikes: 0
 * Total Accepted:    57.5K
 * Total Submissions: 106.8K
 * Testcase Example:  '[4,6,7,7]'
 *
 * 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。
 * 
 * 数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [4,6,7,7]
 * 输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [4,4,3,2,1]
 * 输出：[[4,4]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 15
 * -100 <= nums[i] <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let result = [], path = []
  function backTracking(startIndex) {
    if (path.length > 1) {
      result.push(path.slice())
    }
    let uset = []
    for (let i = startIndex; i < nums.length; i++) {
      if (path.length > 0 && nums[i] < path[path.length - 1] || uset[nums[i]]) {
        continue
      }
      path.push(nums[i])
      uset[nums[i]] = true
      backTracking(i + 1)
      path.pop()
    }
  }
  backTracking(0)
  return result
};
// @lc code=end

