// 在有序数组中找到指定元素最后一次出现的位置
function findLastIndex(nums, target) {
  let l = 0, r = nums.length - 1
  while (l < r) {
    const mid = l + ((r - l) >> 1)
    if (target < nums[mid]) {
      r = mid // 有可能 r 就是那个元素
    } else {
      l = mid + 1
    }
  }
  return r - 1
}
let index = findLastIndex([1, 2, 3, 3, 3, 4, 5], 3)
console.log(index);