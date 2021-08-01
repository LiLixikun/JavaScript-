
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = (val ? val : 0)
        this.left = left
        this.right = right
    }
}

var findDuplicateSubtrees = function (root) {
    const map = new Map()
    const res = []
    function collect(node) {
        if (!node) {
            return "#"
        }
        const key = node.val + "," + collect(node.left) + collect(node.right)
        if (map.has(key)) {
            map.set(key, map.get(key) + 1)
        } else {
            map.set(key,1)
        }
        if (map.get(key) == 2) {
            res.push(node)
        }
        return key
    }
    collect(root)
    return res
};
const root = new TreeNode(1,
    left = new TreeNode(2, let = new TreeNode(4)),
    right = new TreeNode(3, left = new TreeNode(2, left = new TreeNode(4)), right = new TreeNode(4))
)

findDuplicateSubtrees(root)