/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 *
 * https://leetcode-cn.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (52.60%)
 * Likes:    681
 * Dislikes: 0
 * Total Accepted:    269.4K
 * Total Submissions: 512.2K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点
 * 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 * 
 * 叶子节点 是指没有子节点的节点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,3], targetSum = 5
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1,2], targetSum = 0
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点的数目在范围 [0, 5000] 内
 * -1000 
 * -1000 
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false
  }
  // // 叶子节点就是没有 左右的
  // if (root.left == null && root.right == null) {
  //   return root.val == targetSum
  // }
  // // 前序遍历、用 和 去剪去根的值、让去子节点的值进行对比
  // return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
  let stack = [root]
  let sum = [targetSum]
  while (stack.length) {
    let node = stack.shift();
    let curVal = sum.shift() - node.val
    console.log("node", node.val);
    if (node.left == null && node.right == null && curVal == 0) {
      return true
    }
    if (node.left) {
      stack.push(node.left)
      sum.push(curVal)
    }
    if (node.right) {
      stack.push(node.right)
      sum.push(curVal)
    }
  }
  return false
};
// @lc code=end

