/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于K的子数组
 *
 * https://leetcode-cn.com/problems/subarray-product-less-than-k/description/
 *
 * algorithms
 * Medium (39.29%)
 * Likes:    269
 * Dislikes: 0
 * Total Accepted:    18.2K
 * Total Submissions: 45.8K
 * Testcase Example:  '[10,5,2,6]\n100'
 *
 * 给定一个正整数数组 nums和整数 k 。
 * 
 * 请找出该数组内乘积小于 k 的连续的子数组的个数。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [10,5,2,6], k = 100
 * 输出: 8
 * 解释: 8个乘积小于100的子数组分别为: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]。
 * 需要注意的是 [10,5,2] 并不是乘积小于100的子数组。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums = [1,2,3], k = 0
 * 输出: 0
 * 
 * 
 * 
 * 提示: 
 * 
 * 
 * 1 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    if (k<=1) return 0
    let sum = 1, count = 0, l = 0
    for (let i = 0; i < nums.length; i++) {
        sum *= nums[i]
        while (sum >= k) {
            sum /= nums[l++]
        }
        count += (i - l + 1)
    }
    return count
};
// @lc code=end

