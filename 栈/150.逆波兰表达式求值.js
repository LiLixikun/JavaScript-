// 输入：tokens = ["2","1","+","3","*"]
// 输出：9
// 解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9

function calc(arr) {
  const elems = [];
  let item = null;
  while ((item = arr.shift())) {
    if (!isNaN(+item)) {
      elems.push(+item);
    } else {
      const num1 = elems.pop(),
        num2 = elems.pop();
      let sum = 0;
      switch (item) {
        case "+":
          sum = num1 + num2;
          break;
        case "-":
          sum = num2 - num1;
          break;
        case "*":
          sum = num2 * num1;
          break;
        case "/":
          sum = parseInt(num2 / num1);
          break;
        default:
          break;
      }
      elems.push(sum);
    }
  }
  return elems.pop();
}
console.log(calc(["2", "1", "+", "3", "*"]));
console.log(calc(["4", "13", "5", "/", "+"]));
console.log(
  calc(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
