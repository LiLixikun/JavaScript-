// 给两个二叉树，如何确定两个二叉树完全相等
function isSame(root1, root2) {
    return isVail(root1, root2)
}

function isVail(node1, node2) {
    if (!node1 && !node2) {
        return true
    }
    if (!node1 || !node2) {
        return false
    }
    if (node1.val !== node2.val) {
        return false
    }
    return isVail(node1.left, node2.left) && isVail(node1.right, node2.right)
}
const root1 = {
    val: "1",
    left: {
        val: "2",
    },
    right: {
        val: "3",
    }
}
const root2 = {
    val: "1",
    left: {
        val: "2",
    },
    right: {
        val: "3",
    }
}
console.log(isSame(root1, root2));