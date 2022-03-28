function fib(n) {
  if (n < 2) {
    return n
  }
  let a = 0, b = 1, c = 0
  for (let i = 1; i < n; i++) {
    c = a + b
    a = b
    b = c
  }
  return c
}

console.log(fib(7));