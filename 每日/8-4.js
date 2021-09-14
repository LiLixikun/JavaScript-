// 用链表实现约瑟夫环算法

// 假设有n个人，标号为1到n。
// 从第一个人开始计数，到第k个人则出列，随后从第k+1个人重新计数，到第k再出列....。
// 直至剩下最后一个人。问最后剩下的人的编号？

function Node(val) {
    this.val = val
    this.next = null
}

function run(n, k) {
    let head = new Node(1)
    let root = head
    for (let i = 2; i < n; i++) {
        root.next = new Node(i)
        root = root.next
    }
    root.next = head
    while (root !== root.next) {
        for (let i = 1; i < k; i++) root = root.next
        root.next = root.next.next
    }
    return root.val
}
console.log(run(4, 4));