/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 *
 * https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/description/
 *
 * algorithms
 * Medium (64.44%)
 * Likes:    148
 * Dislikes: 0
 * Total Accepted:    38.1K
 * Total Submissions: 59.2K
 * Testcase Example:  '[1,3,2,5,3,null,9]'
 *
 * 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。
 * 
 * 
 * 
 * 示例1：
 * 
 * 
 * 输入: root = [1,3,2,5,3,null,9]
 * 输出: [1,3,9]
 * 解释:
 * ⁠         1
 * ⁠        / \
 * ⁠       3   2
 * ⁠      / \   \  
 * ⁠     5   3   9 
 * 
 * 
 * 示例2：
 * 
 * 
 * 输入: root = [1,2,3]
 * 输出: [1,3]
 * 解释:
 * ⁠         1
 * ⁠        / \
 * ⁠       2   3
 * 
 * 
 * 示例3：
 * 
 * 
 * 输入: root = [1]
 * 输出: [1]
 * 
 * 
 * 示例4：
 * 
 * 
 * 输入: root = [1,null,2]
 * 输出: [1,2]
 * 解释:      
 * 1 
 * \
 * 2     
 * 
 * 
 * 示例5：
 * 
 * 
 * 输入: root = []
 * 输出: []
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 二叉树的节点个数的范围是 [0,10^4]
 * -2^31 
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
 * @return {number[]}
 */
var largestValues = function (root) {
  let res = []
  if (!root) return res
  let stack = [root]
  while (stack.length) {
    let length = stack.length
    let max = stack[0].val
    for (let i = 0; i < length; i++) {
      const node = stack.shift();
      max = (node.val > max ? node.val : max)
      node.left && stack.push(node.left)
      node.right && stack.push(node.right)
    }
    res.push(max)
  }
  return res
};
// @lc code=end

