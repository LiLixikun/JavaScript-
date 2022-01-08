// 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function sortedListToBST(head) {
  function bfs(head) {
    if (head == null) return null
    if (head.next == null) return new TreeNode(head.val)
    let fast = head;
    let slow = head;
    let prev = null; // 记录 mid 前面的一个
    while (fast && fast.next) {
      prev = slow
      fast = fast.next.next
      slow = slow.next
    }
    // 断开
    prev.next = null
    const node = new TreeNode(slow.val)
    node.left = bfs(head)
    node.right = bfs(slow.next)
    return node
  }
  return bfs(head)
}
// [-10, -3, 0, 5, 9]
const node = {
  val: -10,
  next: {
    val: -3,
    next: {
      val: 0,
      next: {
        val: 5,
        next: {
          val: 9
        }
      }
    }
  }
}
sortedListToBST(node)