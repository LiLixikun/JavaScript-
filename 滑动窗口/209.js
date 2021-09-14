// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
// 输入：target = 4, nums = [1,4,4]
// 输出：1

var minSubArrayLen = function (target, nums) {
  let l = 0, r = 0, len = nums.length, min = len + 1, sum = 0
  while (r < len) {
    sum += nums[r++]
    while (sum >= target) {
      sum -= nums[l++]
      min = Math.min(min, r - l + 1)
    }
  }
  return min > len ? 0 : min
};
minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
minSubArrayLen(4, [1, 4, 4]);
