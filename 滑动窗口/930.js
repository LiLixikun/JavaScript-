// 输入：nums = [1,0,1,0,1], goal = 2
// 输出：4
// 解释：
// 有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]


var numSubarraysWithSum = function (nums, goal) {
  let len = nums.length, res = 0
  for (let i = 0; i < len; i++) {
    let j = i, sum = 0;
    while (j < len) {
      sum += nums[j]
      if (sum === goal) {
        res++
      }
      j++
    }
  }
  console.log(res);
  return res
};

numSubarraysWithSum([1, 0, 1, 0, 1], 2)
numSubarraysWithSum([0, 0, 0, 0, 0], 0)