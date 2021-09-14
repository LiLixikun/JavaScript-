// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

var maxSubArray = function (nums) {
  let max = nums[0],
    pre = 0;
  nums.forEach((num) => {
    pre = Math.max(pre + num, num);
    max = Math.max(pre, max);
  });
  return max;
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// maxSubArray([5, 4, -1, 7, 8]);
// maxSubArray([1]);
