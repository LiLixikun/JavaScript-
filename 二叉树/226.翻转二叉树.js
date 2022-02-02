/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 *
 * https://leetcode-cn.com/problems/invert-binary-tree/description/
 *
 * algorithms
 * Easy (78.76%)
 * Likes:    1007
 * Dislikes: 0
 * Total Accepted:    304.9K
 * Total Submissions: 387.1K
 * Testcase Example:  '[4,2,7,1,3,6,9]'
 *
 * 翻转一棵二叉树。
 * 
 * 示例：
 * 
 * 输入：
 * 
 * ⁠    4
 * ⁠  /   \
 * ⁠ 2     7
 * ⁠/ \   / \
 * 1   3 6   9
 * 
 * 输出：
 * 
 * ⁠    4
 * ⁠  /   \
 * ⁠ 7     2
 * ⁠/ \   / \
 * 9   6 3   1
 * 
 * 备注:
 * 这个问题是受到 Max Howell 的 原问题 启发的 ：
 * 
 * 谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null
  function inverNode(node) {
    [node.left, node.right] = [node.right, node.left]
  }
  // 先进行节点交换
  // root && inverNode(root)
  // invertTree(root.left)
  // invertTree(root.right)
  let stack = [root]
  // 前序层序遍历
  while (stack.length) {
    const node = stack.pop();
    inverNode(node)
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
  // while (stack.length) {
  //   let length = stack.length
  //   for (let i = 0; i < length; i++) {
  //     const node = stack.shift()
  //     inverNode(node)
  //     node.left && stack.push(node.left)
  //     node.right && stack.push(node.right)
  //   }
  // }
  return root
};
// @lc code=end

