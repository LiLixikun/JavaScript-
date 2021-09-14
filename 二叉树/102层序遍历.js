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
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(temp);
  }
  return result;
}

// const result = levelOrder(root);

function levelOrder1(root) {
  let res = [],
    index = 0;
  function dfs(root, index) {
    if (!root) return [];
    if (index >= res.length) res[index] = [];
    res[index].push(root.val);
    dfs(root.left, index + 1);
    dfs(root.right, index + 1);
  }
  dfs(root, index);
  console.log(res);
}

levelOrder1(root)
// console.log(result);
