// 二叉树的层序遍历
const root = require("./TreeNode.js");

function levelOrder(root) {
    const result = [];
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        let temp = [];
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            temp.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(temp);
    }
    return result
}

const result = levelOrder(root)
console.log(result);
