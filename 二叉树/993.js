class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val ? val : 0;
        this.left = left;
        this.right = right;
    }
}
const root = new TreeNode(
    1,
    (left = new TreeNode(2, (left = new TreeNode(4)))),
    (right = new TreeNode(3))
);
function isCousins(root, x, y) {
    let depthx = null,
        depthy = null,
        parentX = null,
        parentY = null;
    function dfs(root, depth, parent) {
        if (!root || !root.val) {
            return;
        }
        if (root.val == x) {
            depthx = depth;
            parentX = parent;
        }
        if (root.val == y) {
            depthy = depth;
            parentY = parent;
        }
        if (depthx !== null && depthy != null) return;
        dfs(root.left, depth + 1, root);
        if (depthx != null && depthy != null) return;
        dfs(root.right, depth + 1, root);
    }
    dfs(root, 0, null);
    return depthx === depthy && parentX !== parentY;
}

isCousins(root, 4, 3);
