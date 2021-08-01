/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    let stack = []
    if(!root){
        return root
    }
    stack = [root]
    const res = []
    while (stack.length) {
        const current = stack
        stack = []
        const arr = []
        while (current.length) {
            const node = current.shift()
            arr.push(node.val)
            if(node.left){
                stack.push(node.left)
            }
            if(node.right){
                stack.push(node.right)
            }
        }
        res.push(arr)
    }
    return res
};
// @lc code=end

