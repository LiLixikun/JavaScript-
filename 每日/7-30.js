// 判断两个单向链表是否相交
// L1 = 1->2->3->4->5->6->-8
// l2 = 9->-10->11->5->6->8
// 返回true

var getIntersectionNode = function (headA, headB) {
    let l1 = headA, l2 = headB
    while (l1 !== l2) {
        l1 = l1 ? l1.next : headB
        l2 = l2 ? l2.next : headA
    }
    return l1
}

// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
var topKFrequent = function (nums, k) {
    let map = {}
    for (const num of nums) {
        if (map[num]) map[num]++
        else map[num] = 1
    }
    return Object.keys(map).sort((a, b) => map[b] - map[a]).slice(0, k)
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

// 输入："tactcoa"
// 输出：true（排列有"tacocat"、"atcocta"，等等）
function canPermutePalindrome(str) {
    const set = new Set()
    for (const s of str) {
        if (set.has(s)) set.delete(s)
        else set.add(s)
    }
    return set.size <= 1
}
console.log(canPermutePalindrome("tacocat"));

//怎么实现 一个方法 输入arr = [3, 30, 34, 5, 9];
// 9534330
function getMax(nums) {
    nums.sort((a, b) => {
        const aa = (a + "").split('')
        const bb = (b + "").split('')
        let len = Math.min(aa.length, bb.length)
        for (let i = 0; i < len; i++) {
            if (aa[i] < bb[i]) {
                return 1
            } else if (aa[i] > bb[i]) {
                return -1
            }
        }
    })
    console.log(nums.join(""));
}
getMax([3, 30, 34, 5, 9])
