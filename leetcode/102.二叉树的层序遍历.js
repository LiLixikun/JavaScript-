/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
    if (!root) {
        return []
    }
    const stack = [root]
    const res = []
    while (stack.length) {
        const arr = []
        let len = stack.length
        while (len) {
            const node = stack.shift()
            arr.push(node.val)
            if (node.left) {
                stack.push(node.left)
            }
            if (node.right) {
                stack.push(node.right)
            }
            len--
        }
        res.push(arr)
    }
    return res
};
// @lc code=end

