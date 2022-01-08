

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let sign = '+', n = 0, c, stack = [];
  for (let i = 0; i <= s.length; i++) {
    c = s.charAt(i)
    if (c === " ") continue;
    if (c >= "0" && c <= "9") {
      n = n * 10 + parseInt(c);
      continue
    }
    if (sign == "+") {
      stack.push(n)
    }else if (sign == "-") {
      stack.push(-n)
    } else if (sign == "*") {
      stack.push(stack.pop() * n)
    } else if (sign == "/") {
      stack.push(parseInt(stack.pop() / n))
    }
    // 进行重置
    sign = c
    n = 0
  }
  const sum = stack.reduce((prev, sum) => prev + sum, 0)
  console.log(sum);
  return sum
};
calculate("3+2*2")
// calculate("3-5 / 2")