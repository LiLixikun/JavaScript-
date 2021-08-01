/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!inorder.length) {
        return null
    }
    const node = preorder.shift()
    const root = new TreeNode(node)
    const index = inorder.indexOf(node)
    root.left = buildTree(preorder,inorder.slice(0,index))
    root.right = buildTree(preorder,inorder.slice(index+1))
    return root
};
// @lc code=end

