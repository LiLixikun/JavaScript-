// 输入：s = "()[]{}"
// 输出：true
function isValid(s) {
  // const map = {
  //     "(": ")",
  //     "[": "]",
  //     "{": "}",
  //   },
  //   stack = [];
  // for (const str of s) {
  //   if (str in map) {
  //     stack.push(x);
  //     continue;
  //   }
  //   if (map[stack.pop()] !== str) return false;
  // }
  // return stack.length === 0;
  const stack = [];
  for (const str of s) {
    switch (str) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (stack.pop() !== str) return false;
    }
  }
  return stack.length === 0;
}
console.log(isValid("()"))