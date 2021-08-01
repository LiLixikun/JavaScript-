// 二叉树的前序遍历
const root = require("./TreeNode.js");

function preorderTraversal(root) {
    const result = []
    // preorder(root, result)
    // return result
    const stack = [root]
    while (stack.length) {
        const node = stack.shift()
        result.push(node.val)
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }
    return result
}

function preorder(root, result) {
    if (!root || !root.val) {
        return
    }
    result.push(root.val)
    preorder(root.left, result)
    preorder(root.right, result)
}

const result = preorderTraversal(root);
console.log(result);
