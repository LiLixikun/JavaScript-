/**
 * 输入：s = "3[a2[c]]"
   输出："accaccacc"
 */

/**
* 输入：s = "2[abc]3[cd]ef"
  输出："abcabccdcdcdef"
*/

function decodeString(str) {
  const numStack = [];
  const strStack = []
  let res = ''
  let num = 0
  for (const s of str) {
    if (!isNaN(s)) {
      num+=s
    }
    else if (s == "[") {
      strStack.push(res)
      numStack.push(num)
      res = ''
      num=0
    } else if (s == "]") {
      res = strStack.pop() + res.repeat(numStack.pop())
    }
    else {
      res += s
    }
  }
  console.log(res);
}
decodeString("3[a2[c]]")
decodeString("3[a]2[bc]")
decodeString("2[abc]3[cd]ef")
decodeString("100[leetcode]")