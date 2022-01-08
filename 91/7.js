 function rotateOnce(head, k) {
  if (!head) return head
  let count = 1, prev = head
  while (prev.next) {
    count++
    prev = prev.next
  }
  // 取余
  k = k % count;
  // 尾部接到头部
  // prev.next=head
  // let current = head
  // while (count-k-1) {
  //   current=current.next
  //   count--
  // }
  // let head2 = current.next;
  // current.next=null
  // return head2
  // 双指针
  let fast =head,slow =head
  while (k--) {
    fast=fast.next
  }
  while (fast.next) {
    fast=fast.next
    slow=slow.next
  }
  fast.next =head
  const result = slow.next
  slow.next=null
  return result
}
const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

rotateOnce(head,2)