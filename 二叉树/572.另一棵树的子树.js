/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
 *
 * https://leetcode-cn.com/problems/subtree-of-another-tree/description/
 *
 * algorithms
 * Easy (47.43%)
 * Likes:    629
 * Dislikes: 0
 * Total Accepted:    97.9K
 * Total Submissions: 206.4K
 * Testcase Example:  '[3,4,5,1,2]\n[4,1,2]'
 *
 * 
 * 
 * 给你两棵二叉树 root 和 subRoot 。检验 root 中是否包含和 subRoot 具有相同结构和节点值的子树。如果存在，返回 true
 * ；否则，返回 false 。
 * 
 * 二叉树 tree 的一棵子树包括 tree 的某个节点和这个节点的所有后代节点。tree 也可以看做它自身的一棵子树。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [3,4,5,1,2], subRoot = [4,1,2]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * root 树上的节点数量范围是 [1, 2000]
 * subRoot 树上的节点数量范围是 [1, 1000]
 * -10^4 
 * -10^4 
 * 
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root) return false
  let stack = [root]
  let curNode = null
  // 先找到和 subRoot 头节点匹配的节点
  while (stack.length) {
    const node1 = stack.pop();
    if (node1.val == subRoot.val) {
      curNode = node1
      break
    }
    node1.right && stack.push(node1.right)
    node1.left && stack.push(node1.left)
  }
  if (curNode == null) return false
  // 再判断两颗树是否相同
  function dfs(p, q) {
    if (!p && !q) {
      return true
    }
    else if (!p || !q || p.val !== q.val) return false
    return dfs(p.left, q.left) && dfs(p.right, q.right)
  }
  return dfs(curNode, subRoot)
};
// @lc code=end

