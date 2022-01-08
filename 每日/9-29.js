function topKFrequent(nums, k) {
  let map = {}
  for (const num of nums) {
    map[num] ? map[num]++ : map[num] = 1
  }
  const res = Object.keys(map).sort((a, b) => map[b] - map[a]).slice(0, k)
  return res
}
topKFrequent([1, 1, 1, 2, 2, 3, 3, 3], 2)