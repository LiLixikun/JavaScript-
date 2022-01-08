
var decodeString = function (s) {
  let numStack = []
  let strStack = []
  let str = "", num = ""
  for (let i = 0; i < s.length; i++) {
    const ss = s[i];
    if (!isNaN(ss)) {
      num += ss
    } else if (ss == "[") {
      numStack.push(Number(num))
      strStack.push(str)
      num = ""
      str = ''
    } else if (ss == "]") {
      str = strStack.pop() + str.repeat(numStack.pop())
    } else {
      str += ss
    }
  }
  return str
};
decodeString("3[a2[c]]")  // "accaccacc"
// "3[a]2[bc]" aaabcbc