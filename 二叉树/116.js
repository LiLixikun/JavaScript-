class TreeNode {
  constructor(val, left = null, right = null, next = null) {
    this.val = val ? val : 0;
    this.left = left;
    this.right = right;
    this.next = next;
  }
}
var connect = function (root) {
  if (root == null) {
    return root;
  }
  let stack = [root];
  while (stack.length) {
    const len = stack.length;
    for (let i = 0; i < len; i++) {
      const node = stack.shift();
      if (i < len - 1) {
        node.next = stack[0];
      }
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
  }
  return root;
};

const root = new TreeNode(
  1,
  (left = new TreeNode(2, (left = new TreeNode(4)), (right = new TreeNode(5)))),
  (right = new TreeNode(3, (left = new TreeNode(6)), (right = new TreeNode(7))))
);
console.log(connect(root));
