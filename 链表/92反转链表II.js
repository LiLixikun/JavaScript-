// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1,4,3,2,5]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var reverseBetween = function (head, left, right) {
  const dummyNode = new ListNode(-1, head);
  let pre = dummyNode;
  for (let i = 0; i < left-1; i++, right--) {
    pre = pre.next;
  }
  let leftNode = pre.next;
  let rightNode = pre;
  for (let i = 0; i < right; i++) {
    rightNode = rightNode.next;
  }
  // 标记末尾
  let cur = rightNode.next;
  // 断开
  pre.next = null;
  rightNode.next = null;
  // 执行反转
  reverseLinkedList(leftNode);
  // 再连接
  pre.next = rightNode;
  leftNode.next = cur;
  return dummyNode.next;
};

function reverseLinkedList(head) {
  const cur = head,
    pre = null;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
}
