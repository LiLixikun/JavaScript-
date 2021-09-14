function climbStairs(n) {
  let x = 0,
    y = 0,
    z = 1;
  for (let i = 0; i < n; i++) {
    x = y;
    y = z;
    z = x + y;
  }
  return z
}
climbStairs(3)