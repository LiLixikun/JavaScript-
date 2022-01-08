function solve(root) {
  if (!root) return []
  let stack = [[root,0]]
  let map = new Set();
  map.add(0)
  let res = [root.val]
  while (stack.length) {
    let size = stack.length
    for (let i = 0; i < size; i++) {
      const [val,level] = stack[i];
      if (!map.has(level)) {
        // 右子树
        if (level>0) {
          res.push(val)
        }else{
          res.unshift(val)
        }
        map.add(level)
      }
      // 从二叉树的根节点进行平fen s
      if (val.left) stack.push([val.left,level-1])
      if (val.right) stack.push([val.right,level+1])
    }
  }
  return res
}