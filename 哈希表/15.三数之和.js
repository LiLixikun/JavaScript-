/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (33.57%)
 * Likes:    4142
 * Dislikes: 0
 * Total Accepted:    747.5K
 * Total Submissions: 2.2M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^5 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let arr = []
  let len = nums.length
  if (len < 3) return []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break;
    // 处理 连续2个相等
    if (i > 0 && nums[i - 1] == nums[i]) continue
    let left = i + 1, r = len - 1
    while (left < r) {
      const sum = nums[i] + nums[left] + nums[r]
      if (sum > 0) r--
      else if (sum < 0) left++
      else {
        arr.push(nums[i], nums[left], nums[r])
      }
      while (l < r && nums[l] == nums[++l]);
      while (l < r && nums[r] == nums[--r]);
    }
  }
  return arr
}
// @lc code=end

