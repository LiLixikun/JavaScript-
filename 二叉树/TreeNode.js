
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = (val ? val : 0)
        this.left = left
        this.right = right
    }
}
const root = new TreeNode(
    1,
    (left = new TreeNode(2,(left = new TreeNode("2 - 1")),(right = new TreeNode("2 - 2")))),
    (right = new TreeNode(3,(left = new TreeNode("3 - 1")),(right = new TreeNode("3 - 2"))))
);

module.exports = root