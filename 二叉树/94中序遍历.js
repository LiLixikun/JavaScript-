// 二叉树的中序遍历
const root = require("./TreeNode.js");

function inorderTraversal(root) {
    // 递归
    // const result = []
    // inorder(root,result)
    // return result

    // 迭代
    const stack = []
    const result = []
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left
        }
        root = stack.pop()
        result.push(root.val);
        root = root.right
    }
    console.log(result);
}
function inorder(root, result) {
    if (!root) {
        return
    }
    inorder(root.left, result)
    result.push(root.val)
    inorder(root.right, result)
}

const result = inorderTraversal(root)
console.log(result);