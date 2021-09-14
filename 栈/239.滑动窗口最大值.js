// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

function maxSlidingWindow(nums, k) {
  const arr = [];
  for (let i = 0; i <= nums.length - k; i++) {
    let max = -Infinity;
    for (let j = i; j < k + i; j++) {
      max = Math.max(max, nums[j]);
    }
    arr.push(max);
  }
  return arr;
}
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
