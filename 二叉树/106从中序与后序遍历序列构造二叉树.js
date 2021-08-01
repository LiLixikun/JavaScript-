/**
 * 中序遍历 inorder = [9,3,15,20,7]
   后序遍历 postorder = [9,15,7,20,3]
   返回
    3
   / \
  9  20
    /  \
   15   7
 */
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val ? val : 0;
        this.left = left;
        this.right = right;
    }
}
function buildTree(inorder, postorder) {
   
    let build=(inorder)=> {
        if (!inorder.length) {
            return null
        }
        const node = postorder.pop();
        const mid = inorder.indexOf(node)
        const root = new TreeNode(node)
        root.right = build(inorder.slice(mid + 1))
        root.left = build(inorder.slice(0, mid))
        return root
    }
    return build(inorder)
}
console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));