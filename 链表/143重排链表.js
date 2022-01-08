var reorderList = function (head) {
  let cur = head
  let stack = []
  while (cur) {
    const next = cur.next
    cur.next = null
    stack.push(cur)
    cur = next
  }
  while (stack.length) {
    cur = stack.shift()
    let next = stack.pop()
    if (next) {
      cur.next = next
      next.next =stack.length? stack[0]:null
    }else{
      cur = cur.next
    }
  }
  return head
};

let node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4
      }
    }
  }
}

reorderList(node)