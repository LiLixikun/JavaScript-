// 129. 求根到叶子节点数字之和
function sumNumbers(root) {
    let sum = 0;
    // function dfs(root, cur) {
    //     if (!root) return
    //     const curSum = cur * 10 + root.val;
    //     if (!root.left || root.right) {
    //         sum += curSum
    //         return
    //     }
    //     dfs(root.left, curSum);
    //     dfs(root.right, curSum)
    // }
    // dfs(root, 0)
    let curLevel = []
    if (root) curLevel.push(root)
    while (curLevel.length) {
        const curArr = []
        for (let i = 0; i < curLevel.length; i++) {
            const node = curLevel[i];
            if (node.left) {
                node.left.val = node.val * 10 + node.left.val
                curArr.push(node.left)
            }
            if (node.right) {
                node.right.val = node.val * 10 + node.right.val
                curArr.push(node.right)
            }
            if (!node.left && !node.right) sum += node.val
        }
        curLevel = curArr;
    }
    return sum;
}