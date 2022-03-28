// 给定一个整数数组如下： [21, 11, 45, 56, 9, 66, 77, 89, 78, 68, 100, 120, 111]，
// 请找出数组中比左边元素都大同时比右边元素都小的元素，返回其索引值，如果没有则返回-1。 要求时间复杂度和空间复杂度都为O(N)。

function findPeak(array) {
  if (array.length < 1) return -1
  if (array.length === 1) return 0
  let max = [array[0]]
  let min = [array[array.length - 1]]
  array.forEach(num => {
    if (num > max[max.length - 1]) {
      max.push(num)
    }
  })
  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] < min[0]) {
      min.unshift(array[i])
    }
  }
  // 按题意不考虑左右边界
  // 移除左边界
  max.shift()
  // 移除右边界
  min.pop()
  const common = max.filter(i => min.includes(i))
  if (common.length < 1) return -1
  return common
}
const result = findPeak([21, 11, 45, 56, 9, 66, 77, 89, 78, 68, 100, 120, 111])
console.log(result);