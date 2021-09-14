// （*） => true
var checkValidString = function (s) {
  // let leftStack = [],
  //   startStack = [];
  // for (let i = 0; i < s.length; i++) {
  //   const str = s[i];
  //   if (str === "(") leftStack.push(i);
  //   else if (str === "*") startStack.push(i);
  //   else {
  //     // 遇到 ) 优先匹配 ( 、然后再是 *
  //     if (leftStack.length) leftStack.pop();
  //     else if (startStack.length) startStack.pop();
  //     else {
  //       return false;
  //     }
  //   }
  // }

  // // 左栈和 * 栈都有剩余、看 * 是否在 ( 的右边
  // while (leftStack.length && startStack.length) {
  //   const leftIndex = leftStack.pop,
  //     startIndex = startStack.pop();
  //   if (leftIndex > startIndex) {
  //     return false;
  //   }
  // }
  // return leftStack.length === 0;
  const leftStack = [];
  const asteriskStack = [];
  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    if (str === "(") leftStack.push(i);
    else if (str === "*") asteriskStack.push(i);
    else {
      if (leftStack.length) leftStack.pop();
      else if (asteriskStack.length) asteriskStack.pop();
      else {
        return false;
      }
    }
  }
  while (leftStack.length && asteriskStack.length) {
    const leftIndex = leftStack.pop();
    const asteriskIndex = asteriskStack.pop();
    if (leftIndex > asteriskIndex) {
      return false;
    }
  }
  return leftStack.length === 0;
};
console.log(checkValidString("()"));
console.log(checkValidString("(*)"));
console.log(checkValidString("(*))"));
console.log(
  checkValidString(
    "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"
  )
);
