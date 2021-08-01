function flatten(root) {
    if (!root) {
        return root
    }
    let pre = null
    const stack = [root]
    while (stack.length) {
        const node  = stack.shift()
        if (pre) {
            pre.left=null
            pre.right = node
        }
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
        pre=node
    }
}