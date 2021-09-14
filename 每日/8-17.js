// 最大子序列和
function maxProduct(nums) {
    let max = min = ans = nums.shft()
    for (const n of nums) {
        const _max = max, _min = min
        max = Math.max(n, Math.max(_max * n, _min * n))
        min = Math.max(n, Math.min(_max * n, _min * n))
        max = Math.max(max, ans)
    }
    return ans
}