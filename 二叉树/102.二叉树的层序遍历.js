/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (64.21%)
 * Likes:    1032
 * Dislikes: 0
 * Total Accepted:    397.4K
 * Total Submissions: 619.1K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 
 * 
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层序遍历结果：
 * 
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = []
  if (!root) return res
  let stack = [root]
  while (stack.length) {
    let levelVal = []
    let len = stack.length
    for (let i = 0; i < len; i++) {
      const node = stack.shift()
      levelVal.push(node.val)
      node.left && stack.push(node.left)
      node.right && stack.push(node.right)
    }
    res.push(levelVal)
  }

  // let res = [],
  //   index = 0;
  // function dfs(root, index) {
  //   if (!root) return [];
  //   if (index >= res.length) res[index] = [];
  //   res[index].push(root.val);
  //   dfs(root.left, index + 1);
  //   dfs(root.right, index + 1);
  // }
  // dfs(root, index);
  return res
};
// @lc code=end

