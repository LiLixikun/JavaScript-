function FindFirstCommonNode(head1, head2) {
  let h1 = head1, h2 = head2
  while (h1 !== h2) {
    h1 = h1 ? h1.next : h2
    h2 = h2 ? h2.next : h1
  }
  return h1
}