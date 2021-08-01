// 二叉树的后序遍历
const root = require("./TreeNode.js");


function verifyPostorder(root) {
    const result = []
    const stack = [root]
    while (stack.length) {
        // 调整出栈顺序
        const node = stack.pop()
        // 后序 左右根  前序 根左右
        // 进行颠倒编程 根右左
        result.unshift(node.val)
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }
    // verify(root, result)
    return result
}

function verify(root, result) {
    if (!root) {
        return
    }
    verify(root.left, result)
    verify(root.right, result)
    result.push(root.val)
}
const result = verifyPostorder(root);
console.log(result);