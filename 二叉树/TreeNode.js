
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = (val ? val : 0)
        this.left = left
        this.right = right
    }
}
const root = new TreeNode(
    3,
    (left = new TreeNode(4, (left = new TreeNode(1)), (right = new TreeNode(2)))),
    (right = new TreeNode(5, null, (right = new TreeNode("3-2", left = null, right = new TreeNode(4)))))
);
let root1 = new TreeNode(4, (left = new TreeNode(1)), (right = new TreeNode(2)));
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
        if (!p || !q) {
            return true
        }
        else if (!p || !q || p.val !== q.val) return false
        return dfs(p.left, q.left) && dfs(p.right, q.right)
    }
    return dfs(curNode, subRoot)
};
isSubtree(root,root1)
module.exports = root