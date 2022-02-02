/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
 *
 * https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/description/
 *
 * algorithms
 * Easy (51.92%)
 * Likes:    402
 * Dislikes: 0
 * Total Accepted:    76.8K
 * Total Submissions: 147.8K
 * Testcase Example:  '[1,null,2,2]'
 *
 * 给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。
 * 
 * 如果树中有不止一个众数，可以按 任意顺序 返回。
 * 
 * 假定 BST 满足如下定义：
 * 
 * 
 * 结点左子树中所含节点的值 小于等于 当前节点的值
 * 结点右子树中所含节点的值 大于等于 当前节点的值
 * 左子树和右子树都是二叉搜索树
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,null,2,2]
 * 输出：[2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点的数目在范围 [1, 10^4] 内
 * -10^5 <= Node.val <= 10^5
 * 
 * 
 * 
 * 
 * 进阶：你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）
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
var findMode = function (root) {
  // let map = new Map()
  // // 中序遍历
  // function dfs(root) {
  //   if (!root) {
  //     return
  //   }
  //   dfs(root.left)
  //   map.set(root.val, (map.get(root.val) || 0) + 1)
  //   dfs(root.right)
  // }
  // dfs(root)
  // let maxCount = 0
  // let resArr = []
  // for (const [key, value] of map) {
  //   if (value === maxCount) {
  //     resArr.push(key)
  //   }
  //   // 大于就重置了
  //   if (value > maxCount) {
  //     resArr = []
  //     maxCount = value
  //     resArr.push(key)
  //   }
  // }
  // return resArr
  let resArr = []
  let count = 0, max = 0, pre = root
  function dfs(root) {
    if (root == null) {
      return
    }
    dfs(root.left)
    if (pre.val == root.val) {
      count++
    } else {
      count = 1
    }
    pre = root
    if (count == max) {
      resArr.push(pre.val)
    }
    if (count > max) {
      max = count
      resArr = []
      resArr.push(pre.val)
    }
    dfs(root.right)
  }
  dfs(root)
  return resArr
};
// @lc code=end

