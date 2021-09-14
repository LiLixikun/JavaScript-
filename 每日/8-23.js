// 两两交换链表： 1 -> 2 -> 3 -> 4 -> 5 -> null    2 -> 1 -> 4 -> 3 -> 5 -> null
function swapPairs(head) {
  const newHeader = new ListNode(null, head);
  const cur = newHeader;
  while (cur.next && cur.next.next) {
    const [one, two] = [cur.next, cur.next.next];
    cur.next = two;
    one.next = two.next;
    two.next = one;
    cur = one;
  }
  return newHeader.next;
}
