/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (72.25%)
 * Likes:    651
 * Dislikes: 0
 * Total Accepted:    155.1K
 * Total Submissions: 214.6K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 中序遍历 inorder = [9,3,15,20,7]
 * 后序遍历 postorder = [9,15,7,20,3]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // 中序遍历 左中右
  // 后序遍历 左右中
  function dfs(inorder, postorder) {
    if (!postorder.length) return null
    let val = postorder.pop()
    let root = new TreeNode(val) // 创建根节点
    //  后续遍历的最后一位一定是根节点、而根节点的左边就是左子树、右边就是右子树
    let index = inorder.indexOf(val)
    root.left = dfs(inorder.slice(0, index), postorder.slice(0, index))
    root.right = dfs(inorder.slice(index + 1), postorder.slice(index))
    return root
  }
  return dfs(inorder, postorder)
};
// @lc code=end

