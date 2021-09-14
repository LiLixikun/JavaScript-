// 算法：如何判断单向链表是个回文

function isHuiWen(root) {
    const array = []
    while (root) {
        array.push(root.val)
        root=root.next
    }
    for (let i = 0,j=array.length; i < j; i++,j--) {
        if (array[i]!==array[j]) return false
    }
    return true
}

// 前 K 个高频元素 
// 定一个非空的整数数组，返回其中出现频率前 k 高的元素。
// nums = [1,1,1,2,2,3], k = 2 【1，2】
function topKFrequent(nums, k) {
    const map = {};
    for (const num of nums) {
        if (map[num]) map[num]++
        else map[num] = 1
    }
    const keys = Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, k).map(item => item[0]);
    return keys
}
topKFrequent([1, 1, 1, 2, 2, 3], 2)