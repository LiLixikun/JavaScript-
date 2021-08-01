/*
a、自定义多叉树节点node结构（只需要定义节点结构即可，无需构建树）
b、按照广度优先查找符合要求的节点（没有符合要求的节点返回null），比如查找电话号码为 phone的用户信息，调用如下：
let node = wideTraversal(node,(e)=>e.phone===phone)
*/

const root = {
    phone: 2,
    children: [
        {
            phone: 3
        },
        {
            phone: 4,
            children: [
                {
                    phone: 5
                },
                {
                    phone: 3
                },
            ]
        }
    ]
}
function wideTraversal(root, fn) {
    const stack = [root]
    const res = []
    while (stack.length) {
        let len = stack.length
        while (len--) {
            const node = stack.shift()
            if (fn(node)) {
                res.push(node)
                break;
            }
            if (node.children && node.children.length) {
                res.push(...node.children)
            }
        }
    }
    return res
}
console.log(wideTraversal(root, (e) => e.phone === 3));