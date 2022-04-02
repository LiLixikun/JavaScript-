// 1.手写题：https://bigfrontend.dev/zh/problem/implement-Object.is

// 2.算法题：https://leetcode-cn.com/problems/decode-string/

function ObjectIs(x, y) {
  // Object.is() 和===基于一致，除了以下情况：
  // Object.is(0, -0) // false
  // 0 === -0 // true

  // Object.is(NaN, NaN) // true
  // NaN === NaN // false
  if (x === y) {
    return x !== 0 && 1 / x === 1 / y;
  }
  return x !== x && y !== y;
}

// 输入：s = "3[a]2[bc]"
// 输出："aaabcbc"
function decodeString(s) {
  let strArr = [],
    numArr = [],
    resStr = "",
    num = 0;
  for (const str of str) {
    if (!isNaN(str)) {
      num += str;
    } else if (str === "[") {
      strArr.push(resStr);
      numArr.push(num);
      num = 0;
      resStr = "";
    } else if (str === "]") {
      resStr = strArr.pop() + resStr.repeat(numArr.pop());
    } else {
      resStr += str;
    }
  }
  return resStr
}
