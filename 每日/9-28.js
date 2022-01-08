var pathSum = function (root, targetSum) {
  let count = 0
  function dfs(root, sum, flag) {
    if (!root) return
    sum += root.val
    if (sum == targetSum) count++
    dfs(root.left, sum, flag)
    dfs(root.right, sum, flag)
    if (flag) return
    dfs(root.left, 0, false)
    dfs(root.right, 0, false)
  }
  dfs(root, 0, false)
  return count
};