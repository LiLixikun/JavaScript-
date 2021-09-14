// 1588
// 输入：arr = [1,4,2,5,3]
// 输出：58
// 解释：所有奇数长度子数组和它们的和为：
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// 我们将所有值求和得到 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

function sumOddLengthSubarrays(arr) {
  let sum = 0,
    len = arr.length - 1;
  for (let i = 0; i <= len; i++) {
    let sum1 = 0,
      count = i + 2,
      index = i;
    while (count <= len) {
      for (index; index <= count; index++) {
        sum1 += arr[index];
      }
      count += 2;
      sum += sum1;
    }
  }
  return arr.reduce((pre, val) => pre + val, sum);
}
console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));

// 输入：nums = [1,2,3,4]
// 输出：[1,3,6,10]
// 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4]

function runningSum(nums) {
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    nums[i] += nums[i - 1];
  }
  return nums
}
console.log(runningSum([1, 2, 3, 4]));
