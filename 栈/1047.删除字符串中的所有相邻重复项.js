// 输入："abbaca"
// 输出："ca"
// 解释：
// 例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。

function removeDuplicates(s) {
  const stack = []
  for (const str of s) {
    if (stack.length&&stack[stack.length-1]==str) {
      stack.pop()
    }
    else stack.push(str)
  }
  return stack.join("")
}

console.log(removeDuplicates("abbaca"));