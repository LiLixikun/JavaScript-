/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (56.85%)
 * Likes:    1711
 * Dislikes: 0
 * Total Accepted:    477.6K
 * Total Submissions: 840.1K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * 
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true
  // function compareNode(left, right) {
  //   if (!left && right || left && !right) return false
  //   else if (!left && !right) return true
  //   else if (left.val != right.val) return false
  //   return compareNode(left.left, right.right) && compareNode(left.right, right.left)
  // }
  // return compareNode(root.left, root.right)
  let stack = []
  stack.push(root.left, root.right)
  while (stack.length) {
    let rightNode = stack.pop(); // 右子树
    let leftNode = stack.pop(); // 左子树
    if (!leftNode && !rightNode) {
      continue
    }
    if (!leftNode && rightNode || !rightNode && leftNode || leftNode.val !== rightNode.val) {
      return false
    }
    stack.push(leftNode.left)
    stack.push(rightNode.right)
    stack.push(leftNode.right)
    stack.push(rightNode.left)
  }
  return true
};
// @lc code=end

