// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val ? val : 0;
      this.left = left;
      this.right = right;
  }
}
var buildTree = function(preorder, inorder) {
  function build(preorder) {
    if (!preorder) return null
    const node = preorder.shift();
    let root = new TreeNode(node.val);
    const mid = inorder.indexOf(node);
    root.left = build(inorder.slice(0,mid))
    root.right = build(inorder.slice(0,mid))
    return root
  }
  return build(preorder)
}