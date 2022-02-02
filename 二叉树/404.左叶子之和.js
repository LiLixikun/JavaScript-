/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 *
 * https://leetcode-cn.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (58.35%)
 * Likes:    346
 * Dislikes: 0
 * Total Accepted:    99.8K
 * Total Submissions: 171K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 计算给定二叉树的所有左叶子之和。
 * 
 * 示例：
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 * 
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0
  if (!root) return sum
  // let stack = [root]
  // while (stack.length) {
  //   const node = stack.shift();
  //   // 子叶子 为 left、right 都为 null、然后通过父节点去判断是左
  //   if (node.left && node.left.left == null && node.left.right == null) {
  //     sum += node.left.val
  //   }
  //   node.left && stack.push(node.left)
  //   node.right && stack.push(node.right)
  // }
  function dfs(root) {
    if (!root) return 0
    let leftSum = dfs(root.left)
    let rightSum = dfs(root.right)
    let curVal = 0
    if (root.left && root.left.left == null && root.left.right == null) {
      curVal = root.left.val
    }
    sum = leftSum + rightSum + curVal
    return sum
  }
  dfs(root)
  return sum
};
// @lc code=end

